const clamp = (val, min, max) => {
	return val > max ? max : val < min ? min : val;
}

export default clamp