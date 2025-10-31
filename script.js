let swipers = []
const swiperElements = document.querySelectorAll('.swiper')
const breakpoint = 1200

function initSwipers() {
  swiperElements.forEach((el, i) => {
    const swiper = new Swiper(el, {
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: el.querySelector('.swiper-pagination'),
        clickable: true,
      },
      navigation: {
        nextEl: el.querySelector('.swiper-button-next'),
        prevEl: el.querySelector('.swiper-button-prev'),
      },
    })
    swipers[i] = swiper
  })
}

function destroySwipers() {
  swipers.forEach((swiper) => swiper?.destroy(true, true))
  swipers = []
}

function checkWidth() {
  if (window.innerWidth >= breakpoint && swipers.length === 0) {
    initSwipers()
  } else if (window.innerWidth < breakpoint && swipers.length > 0) {
    destroySwipers()
  }
}

window.addEventListener('resize', checkWidth)
window.addEventListener('load', checkWidth)
