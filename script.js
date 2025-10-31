const breakpoint = 1200

function loadSwiperScript(callback) {
  if (!window.Swiper) {
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js'
    script.onload = callback
    document.head.appendChild(script)

    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css'
    document.head.appendChild(link)
  } else {
    callback()
  }
}

function initSwiper(el) {
  const swiper = new Swiper(el, {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: { el: el.querySelector('.swiper-pagination'), clickable: true },
    navigation: {
      nextEl: el.querySelector('.swiper-button-next'),
      prevEl: el.querySelector('.swiper-button-prev'),
    },
  })
  el.swiper = swiper
}

function destroySwiper(el) {
  if (el.swiper) {
    el.swiper.destroy(true, true)
    el.swiper = null
  }
}

function checkWidth() {
  document.querySelectorAll('.swiper').forEach((el) => {
    if (window.innerWidth >= breakpoint) {
      loadSwiperScript(() => {
        if (!el.swiper) initSwiper(el)
      })
    } else {
      if (!el.swiper) destroySwiper(el)
    }
  })
}

window.addEventListener('load', checkWidth)
window.addEventListener('resize', checkWidth)
