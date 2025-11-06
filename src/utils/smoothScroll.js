/**
 * Smooth scroll utility for Vue applications
 * Provides smooth scrolling to page sections with customizable duration and offset
 */

/**
 * Easing function for smooth animation (ease-in-out cubic)
 * @param {number} t - Current time (0-1)
 * @returns {number} - Eased value
 */
function easeInOutCubic (t) {
  return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
}

/**
 * Smoothly scrolls to a target element
 * @param {string|HTMLElement} target - CSS selector string or HTMLElement to scroll to
 * @param {Object} options - Configuration options
 * @param {number} options.duration - Animation duration in milliseconds (default: 1000)
 * @param {number} options.offset - Offset from top in pixels (default: 70 for navbar)
 * @param {Function} options.callback - Optional callback function to execute after scroll completes
 */
export function smoothScrollTo (target, options = {}) {
  const {
    duration = 1000,
    offset = 70,
    callback = null
  } = options

  // Get target element
  let targetElement
  if (typeof target === 'string') {
    targetElement = document.querySelector(target)
  } else if (target instanceof HTMLElement) {
    targetElement = target
  }

  if (!targetElement) {
    console.warn(`Smooth scroll target not found: ${target}`)
    return
  }

  // Calculate scroll position
  const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset
  const startPosition = window.pageYOffset
  const distance = targetPosition - startPosition
  let startTime = null

  // Animation function
  function animation (currentTime) {
    if (startTime === null) startTime = currentTime
    const timeElapsed = currentTime - startTime
    const progress = Math.min(timeElapsed / duration, 1)
    const easing = easeInOutCubic(progress)

    window.scrollTo(0, startPosition + distance * easing)

    if (timeElapsed < duration) {
      requestAnimationFrame(animation)
    } else if (callback) {
      callback()
    }
  }

  requestAnimationFrame(animation)
}

/**
 * Vue directive for smooth scrolling
 * Usage: v-smooth-scroll="'#about'" or v-smooth-scroll="{ target: '#about', duration: 1500 }"
 */
export const vSmoothScroll = {
  mounted (el, binding) {
    el.addEventListener('click', (e) => {
      e.preventDefault()

      let target, options
      if (typeof binding.value === 'string') {
        target = binding.value
        options = {}
      } else {
        target = binding.value.target
        options = binding.value
      }

      smoothScrollTo(target, options)
    })
  }
}

/**
 * Initialize smooth scroll for all elements with a specific class
 * @param {string} className - Class name to attach smooth scroll (default: 'js-scroll-trigger')
 * @param {Object} options - Scroll options to apply
 */
export function initSmoothScroll (className = 'js-scroll-trigger', options = {}) {
  const elements = document.querySelectorAll(`.${className}[href*="#"]:not([href="#"])`)

  elements.forEach(element => {
    element.addEventListener('click', function (e) {
      const href = this.getAttribute('href')
      const target = href.startsWith('#') ? href : href.substring(href.indexOf('#'))

      if (target && target !== '#') {
        e.preventDefault()
        smoothScrollTo(target, options)

        // Close navbar if it's open (for responsive menu)
        const navbarCollapse = document.querySelector('.navbar-collapse')
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
          navbarCollapse.classList.remove('show')
        }
      }
    })
  })
}

export default {
  smoothScrollTo,
  vSmoothScroll,
  initSmoothScroll
}
