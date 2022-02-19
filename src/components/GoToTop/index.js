import { useState } from "react"
import { ChevronUp } from "react-bootstrap-icons"

import "./style.scss"

const ScrollButton = () => {
    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop
        if (scrolled > 300) {
            setVisible(true)
        } else if (scrolled <= 300) {
            setVisible(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    window.addEventListener('scroll', toggleVisible)

    return (
        <ChevronUp 
            className='go-to-top'
            onClick={scrollToTop}
            style={{ display: visible ? 'inline' : 'none' }}
        />
    )
}

export default ScrollButton