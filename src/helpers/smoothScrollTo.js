const smoothScrollTo = (target, offset = 0, targetInPx = null) => {
    const targetTop = targetInPx !== null ? targetInPx : target.offsetTop + offset

    // ie and edge fix
    if (window.document.documentMode || /Edge/.test(navigator.userAgent)) {
        window.scroll(0, targetTop)
        return;
    }

    window.scroll({
        top: targetTop,
        left: 0,
        behavior: 'smooth'
    });
}

export default smoothScrollTo