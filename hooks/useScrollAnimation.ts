import { useEffect } from 'react'

export const useScrollAnimation = () => {
  useEffect(() => {
    const fadeElements = document.querySelectorAll('.fade-in')
    const dividers = document.querySelectorAll('.section-divider')
    const footerDivider = document.querySelector('.footer-divider')
    
    const fadeInOnScroll = () => {
      fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top
        const elementVisible = 150
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('visible')
        }
      })

      // Анимация для разделителей
      dividers.forEach(divider => {
        const dividerTop = divider.getBoundingClientRect().top
        if (dividerTop < window.innerHeight - 100) {
          (divider as HTMLElement).style.transform = 'scaleX(1)'
          ;(divider as HTMLElement).style.opacity = '1'
          ;(divider as HTMLElement).style.transition = 'transform 0.8s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.8s'
        }
      })

      // Анимация для footer-divider
      if (footerDivider) {
        const footerDividerTop = footerDivider.getBoundingClientRect().top
        if (footerDividerTop < window.innerHeight - 100) {
          ;(footerDivider as HTMLElement).style.transform = 'scaleX(1)'
          ;(footerDivider as HTMLElement).style.opacity = '1'
          ;(footerDivider as HTMLElement).style.transition = 'transform 0.8s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.8s'
        }
      }
    }
    
    window.addEventListener('scroll', fadeInOnScroll)
    window.addEventListener('load', fadeInOnScroll)
    
    fadeInOnScroll()
    
    return () => {
      window.removeEventListener('scroll', fadeInOnScroll)
      window.removeEventListener('load', fadeInOnScroll)
    }
  }, [])
}