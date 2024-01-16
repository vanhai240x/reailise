import React, { useRef, useEffect, useContext, useState } from 'react'
import Splitting from 'splitting'
import { ContextLoader } from '../context';

const SplitText = ({ children, splitBy = 'lines', hasMask = false, forceExecutionBeforeLoadingEnd = false }) => {

    const [isLoading] = useContext(ContextLoader)

    const refText = useRef(null);

    const [maskedChildren, setMaskedChildren] = useState(null)

    useEffect(() => {
        if (isLoading === true && forceExecutionBeforeLoadingEnd === false) return
        const results = Splitting({ target: refText.current, by: splitBy })
        if (splitBy === 'lines') {
            if (hasMask === true) {
                let globalWordIndex = 0
                const linesEl = results[0].lines.map((line, lineIndex) => {
                    const lineWords = line.map((word, wordIndex) => {
                        // Fix for weird bug where "amp;" is added behind & somewhere in this code.
                        const wordContent = word.innerHTML.replace('&amp;', '&')
                        let wordEl = [React.createElement('span', {
                            className: `SplitText__LineWord ${`word-${globalWordIndex}`}`,
                            key: `word-${wordIndex}`
                        }, wordContent)]
                        if (wordIndex < line.length - 1) {
                            wordEl.push(React.createElement('span', {
                                className: 'whitespace',
                                key: `whitespace-${wordIndex}`
                            }, ' '))
                        }
                        globalWordIndex += 1
                        return wordEl
                    })
                    const lineEl = React.createElement('div', {
                        className: 'SplitText__LineMask',
                        key: `line-${lineIndex}`
                    }, lineWords)
                    return lineEl
                })
                const maskedChildrenEl = React.createElement('div', { className: 'SplitText' }, linesEl)
                setMaskedChildren(maskedChildrenEl)
            } else {
                results[0].lines.forEach((line, lineIndex) => {
                    line.forEach(word => {
                        word.classList.add(`line-${lineIndex}`)
                    })
                })
            }
        }
        else if (splitBy === 'words') {
            results[0].words.forEach((word, wordIndex) => {
                word.classList.add(`word-${wordIndex}`)
            })
        }
        else if (splitBy === 'chars') {
            results[0].chars.forEach((char, charIndex) => {
                char.classList.add(`char-${charIndex}`)
            })
        }
    }, [isLoading])

    return (
        <div ref={refText}>
            {maskedChildren || children}
        </div>
    )
}

export default SplitText;