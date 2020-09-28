import gsap from 'gsap';

export const showNavigation = (navigation) => {
    const nav = navigation.current;

    const openNavigation = gsap.timeline();
    openNavigation.to(nav, {
        x: 0,
        duration: .2,
        ease: "circ.inOut",
    })
    openNavigation.addLabel('navigaton open')
    openNavigation.to(nav, {
        duration: .2,
        ease: "circ.inOut",
        boxShadow: "15px 0 15px "
    }, 'navigaton open')
    openNavigation.to('.navigationItems', {
        duration: .2,
        x: 0,
        ease: "back.out(1.8)",
        opacity: 1,
        stagger: .14,
        // stagger: { 
        //     each: 0.2,
        //     ease: "back.out(1.4)",
        // }
    }, 'navigaton open')
}

export const hideNavigation = (navigation) => {
    const nav = navigation.current;

    const openNavigation = gsap.timeline();
    openNavigation.to(nav, {
        duration: .2,
        boxShadow: "5px 0 5px ",
    })
    openNavigation.to(nav, {
        x: '-100%',
        duration: .15,
        ease: "circ.inOut"
    })
    openNavigation.to('.navigationItems', {
        duration: .3,
        ease: "circ.inOut",
        x: -50,
        opacity: 0,
        stagger: 0.1
    })
}