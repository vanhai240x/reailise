const ratio = (multiplier = 1) => {
    const baseSize = 0.6944444444 // 10px on 1440px
    return (baseSize * multiplier)
}

export default ratio