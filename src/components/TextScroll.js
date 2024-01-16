import React, { useRef, useEffect } from 'react'
import useOnScreen from '../hooks/useOnScreen'
import Splitting from 'splitting'
import clamp from '../helpers/clamp'

const TextScroll = ({ className, children, threshold = 0.75 }) => {

    const containerEl = useRef(null)
    const wordsEls = useRef([])
    const isOnScreen = useOnScreen(containerEl)
    const isAnimEnded = useRef(false)

    useEffect(() => {
        const results = Splitting({ target: containerEl.current, by: 'lines' })
        wordsEls.current = results[0].words
    }, [])

    /**
     * Animations when on screen
     */
    useEffect(() => {
        const wordsLength = wordsEls.current.length
        let rafId = null
        let wh = 0
        let thresholdInPx = 0
        let lastPickedIndex = 0

        const loop = () => {
            // Texts fade in and out
            const containerElRect = containerEl.current.getBoundingClientRect()
            const containerElDistFromThreshold = (containerElRect.top + containerElRect.height) - thresholdInPx
            const animDurationInPx = containerElRect.height
            const progressRatio = 1 - clamp(containerElDistFromThreshold / animDurationInPx, 0, 1)
            const closestIndex = Math.floor(progressRatio * wordsLength) - 1
            if (closestIndex >= 0) {
                // If user scrolls too fast, some index might be skipped.
                // Here we are making sure to loop from the last picked index till
                // the closest index to add the isVisible class to each of them.
                for (let i = lastPickedIndex; i <= closestIndex; i += 1) {
                    wordsEls.current[i].classList.add('isVisible')
                }
                lastPickedIndex = closestIndex
            }

            if (closestIndex < wordsLength - 1) {
                rafId = requestAnimationFrame(loop)
            } else {
                cancelAnimationFrame(rafId)
                isAnimEnded.current = true
            }
        }

        const handleResize = () => {
            wh = window.innerHeight
            thresholdInPx = wh * threshold
        }

        if (isOnScreen === true && isAnimEnded.current === false) {
            window.addEventListener('resize', handleResize)
            handleResize()
            rafId = requestAnimationFrame(loop)
        } else {
            cancelAnimationFrame(rafId)
            window.removeEventListener('resize', handleResize)
        }
        return () => {
            cancelAnimationFrame(rafId)
            window.removeEventListener('resize', handleResize)
        }
    }, [isOnScreen])

    return (
        <div className={`TextScroll ${className}`} ref={containerEl}>
            {children}
        </div>
    )
}

export default TextScroll