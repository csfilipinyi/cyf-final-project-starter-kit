import React, { useState, useEffect } from 'react';

const useMediaQuery = () => {
	const [state, setState] = useState(null);
	const [isMobile, setIsMobile] = useState(false);
	const [isTablet, setIsTablet] = useState(false);

	let mobile = window.matchMedia('(max-width: 375px)');
	let tablet = window.matchMedia('(max-width: 680px)');
	let screen =window.innerWidth;

	useEffect(() => {
		function handleResize() {
			mobile.matches ? setIsMobile(true) : setIsMobile(false);
			tablet.matches ? setIsTablet(true) : setIsTablet(false);
		}
		mobile.onchange = handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, [screen]);

	useEffect(() => {
		setState({ 'isMobile': isMobile, 'isTablet': isTablet });
	}, [isMobile, isTablet]);
	return state;
};

export default useMediaQuery;
