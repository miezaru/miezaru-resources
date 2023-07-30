// Sticky navigation
const navMakesSticky = document.querySelector('.nav-makes-sticky')
const navEl = document.querySelector('.page-nav')

const obs = new IntersectionObserver(
    function (entries) {
        const ent = entries[0]
        if (!ent.isIntersecting) {
            navEl.classList.add('sticky-nav')
        }
        if (ent.isIntersecting) {
            navEl.classList.remove('sticky-nav')
        }
    },
    {
        root: null, // observe inside of viewport
        threshold: 0, // as soon as 0% section on a viewport
        rootMargin: '-90px',
    }
)
obs.observe(navMakesSticky)

// details
const details = document.querySelectorAll('.details')
const detailsLinks = document.querySelectorAll('.details-link')
const summaryEl = document.querySelector('summary')

for (let i = 0; i < detailsLinks.length; i++) {
    detailsLinks[i].addEventListener('click', function (el) {
        const parentDetails = el.target.parentElement.parentElement
        details.forEach((el) => el.removeAttribute('open'))

        if (!parentDetails.open) {
            parentDetails.setAttribute('open', '')
        }
    })
}
