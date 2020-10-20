import gsap from 'gsap';

export const showList = (ref) => {
    const showTL = gsap.timeline();

    showTL.to(ref.current, .3, {
        height: 'auto',
        opacity: 1,
        ease: "back.out(1.7)"
    })
}

export const hideList = (ref) => {
    const hideTL = gsap.timeline();

    hideTL.to(ref.current, .1, {
        height: '0',
        // opacity: 0,
    })
}