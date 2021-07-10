function runAnimations() {
    animateSeeMore()
}

function animateSeeMore() {
    anime(
        {
            targets: '.seeMoreContainer',
            translateY: 20,
            loop: true,
            easing: 'linear'
        }
    )
}
