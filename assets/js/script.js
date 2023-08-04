// page navigation start
// function navigation() {
//     const navMakesSticky = document.querySelector('.nav-makes-sticky')
//     const navEl = document.querySelector('.page-nav')
//     if (window.innerWidth > 1100) {
//         // Sticky navigation
//         const obs = new IntersectionObserver(
//             function (entries) {
//                 const ent = entries[0]
//                 if (!ent.isIntersecting) {
//                     navEl.classList.add('sticky-nav')
//                 }
//                 if (ent.isIntersecting) {
//                     navEl.classList.remove('sticky-nav')
//                 }
//             },
//             {
//                 root: null, // observe inside of viewport
//                 threshold: 0, // as soon as 0% section on a viewport
//                 rootMargin: '-90px',
//             }
//         )
//         obs.observe(navMakesSticky)
//     } else if (window.innerWidth <= 1100) {
//         navEl.classList.remove('sticky-nav')
//     }
// }

// window.addEventListener('load', navigation, false)
// window.addEventListener('resize', navigation, false)

// details
const details = document.querySelectorAll('.details')
const detailsLinks = document.querySelectorAll('.details-link')
const summaryEl = document.querySelector('summary')

function togglePageMenu(el) {
    const parentDetails = el.target.parentElement.parentElement
    if (parentDetails.hasAttribute('open')) {
        parentDetails.removeAttribute('open')
        return
    }

    if (!parentDetails.open) {
        details.forEach((el) => el.removeAttribute('open'))
        parentDetails.setAttribute('open', '')
    }
}

for (let i = 0; i < detailsLinks.length; i++) {
    detailsLinks[i].addEventListener('click', togglePageMenu)
}

const mobileNavLinks = document.querySelectorAll('.mob--link')
const checkedNav = document.querySelector('.mobile-content__checkbox')
const summaryLinks = document.querySelectorAll('.summary-link')

for (let i = 0; i < summaryLinks.length; i++) {
    summaryLinks[i].addEventListener('click', function (e) {
        e.preventDefault()
    })
}

console.log(mobileNavLinks)
for (let i = 0; i < mobileNavLinks.length; i++) {
    mobileNavLinks[i].addEventListener('click', function () {
        if (checkedNav.checked) {
            checkedNav.checked = false
        }
    })
}
