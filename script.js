const select = document.querySelector('.filter__select')
const testimonialsItem = document.querySelectorAll('.testimonials__item')
const filterLinks = document.querySelectorAll('.filter__link')
const filterDoctors = document.querySelector('.filter__doctors')
const filterButtons = document.querySelector('.filter__buttons')
const filterBtn = document.querySelectorAll('.filter__btn')

const hideTestimonials = () => {
  testimonialsItem.forEach(item => {
    item.classList.remove('open')
  })
}

const showTestimonials = () => {
  testimonialsItem.forEach(item => {
    item.classList.add('open')
  })
}

const hideChildren = childrens => {
  childrens.forEach(children => children.classList.add('hide'))
}

const showChildren = childrens => {
  childrens.forEach(children => children.classList.remove('hide'))
}

const showDoctors = item => {
  filterButtons.classList.add('close')
  filterDoctors.classList.add('open')
  filterLinks.forEach(link => {
    let spec = link.dataset.spec
    if (item.classList.contains(spec)) {
      link.classList.add('selected')
    }

    link.addEventListener('click', (e) => {
      let doctorSurname = link.getAttribute('href').split('#')[1]

      const childrens = [...item.children]
      childrens.forEach(el => {
        if (el.id === doctorSurname) {
          hideChildren(childrens)
          el.classList.remove('hide')
          el.classList.add('active')
        }
      })
    })
  })
}


const hideDoctors = () => {
  filterButtons.classList.remove('close')
  filterDoctors.classList.remove('open')
}

const chooseDoctor = () => {
  showTestimonials()
  select.addEventListener('change', function() {
    
    let value = this.value

    testimonialsItem.forEach(item => {
      const childrens = [...item.children]

      if (item.classList.contains(value)) {

        filterLinks.forEach(link => {
          link.classList.remove('selected')
        })
        showDoctors(item)
        hideTestimonials()
        item.classList.add('open')

      } else if (value === 'all') {
        hideDoctors()
        showTestimonials()
        showChildren(childrens)
      }
    })

  })

}


const showOtherTestimonials = () => {

  testimonialsItem.forEach(item => {
    
    filterBtn.forEach(btn => {
      let value = btn.dataset.value
      btn.addEventListener('click', () => {
        if (item.classList.contains(value)) {
          hideTestimonials()
          item.classList.add('open')
        }
      })
    })

  })
}


chooseDoctor()
showOtherTestimonials()
