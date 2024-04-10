
// gsap.fromTo(".box2", {scale:70,opacity:1,duration:1,border:"none",}, {
//      opacity: 0,
//      scale:0,
//      duration: 1 ,
//      border:"none",
//     });

// gsap.to(".box",{
//     y:40,
//     x:20,
//     repeat:-1,
//     yoyo:true,
//     stagger:1,
// })

// var tl= gsap.timeline();
// tl.to(".box" ,{
//     y:10,
// }).to(".box",{
//     y:200,
//     duration:1,
//     delay:2,
// })
// ================================================
// gsap.to(".box3" ,{
//     scrollTrigger:{
//         trigger:".box3",
//         start:"top 30%",
//         scrub:1,
//         markers:true,
//     },
//     x:1000,
//     y:700,
// })
// gsap.to(".box2" ,{
//     scrollTrigger:{
//         trigger:".box2",
//         start:"top 30%",
//         scrub:1,
//         markers:true,
//     },
//     x:-620,
//     y:720,
// })
// gsap.to(".box1" ,{
//     scrollTrigger:{
//         trigger:".box1",
//         start:"top 30%",
//         scrub:1,
//         markers:true,
//     },
//     x:100,
// })
// ===================================================
// var tl = gsap.timeline({
//     scrollTrigger:{
//        trigger: ".box2",
//        start: "top 20%",
//        end: "120%",
//        scrub: true,
//        markers: true,
// }})
// tl.to(".box2",{
//     x:-620,
//     y:720,
// })
// =====================================================

