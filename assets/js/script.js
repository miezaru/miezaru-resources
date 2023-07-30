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
        rootMargin: '-80px',
    }
)
obs.observe(navMakesSticky)

// details
const details = document.querySelectorAll('.details')
const detailsLinks = document.querySelectorAll('.details-link')

for (let i = 0; i < detailsLinks.length; i++) {
    detailsLinks[i].addEventListener('click', function () {
        if (!details[i].open) {
            details[i].open = 'true'
        } else {
            details[i].open = 'false'
        }
    })
}

// for (let i = 0; i < details.length; i++) {
//     details[i].addEventListener('click', function () {
//         if (details[i].open) {
//             details[i].open = 'false'
//         }
//         if (!details[i].open) {
//             details[i].open = 'true'
//         }
//     })
// }
