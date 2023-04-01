import { useEffect, useState } from 'react'

function useWindowSize() {
	const [isDesktop, setIsDesktop] = useState(true)
	const [isLogoShort, setIsLogoShort] = useState(false)
	useEffect(() => {
		function handleResize() {
			window.innerWidth >= 768 ? setIsDesktop(true) : setIsDesktop(false)

			window.innerWidth >= 768 && window.innerWidth <= 1023
				? setIsLogoShort(true)
				: setIsLogoShort(false)
		}
		window.addEventListener('resize', handleResize)
		handleResize()
		return () => window.removeEventListener('resize', handleResize)
	}, [])
	return { isDesktop, isLogoShort }
}

export default useWindowSize
