gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  toggleActions:"play none none reverse"
})


gsap.to('.img-container',{
  ease:"ease",
  scale:52,
  scrollTrigger:{
    scrub:1,
    trigger:'.video-section',
    start:"top top",
    end:"bottom",
    pin:true
  }
  
})
/*In the scrollTrigger object of the GSAP code, the start and end properties define the start and end points of the animation based on the position of the trigger element (trigger:'.video-section') relative to the viewport.

start:"top top" sets the start point of the animation to the top of the viewport, meaning that the animation will begin as soon as the top of the trigger element (in this case, an element with a class of "video-section") reaches the top of the viewport.

end:"bottom" sets the end point of the animation to the bottom of the viewport, meaning that the animation will end when the bottom of the trigger element leaves the bottom of the viewport.

Together, these properties define a scroll-trigger that starts the animation as soon as the trigger element enters the viewport from the top, and ends the animation when the trigger element leaves the viewport from the bottom.*/


gsap.to('.right' ,{
  autoAlpha:0,
  x:500,
  duration:1.5,
  scrollTrigger:{
    start:1
  }
})
gsap.to('.left' ,{
  autoAlpha:0,
  x:-500,
  duration:1.5,
  scrollTrigger:{
    start:1   //these txt are positioned absolute and take up 100 vh h&w, so when means 1px scroll krte hi start hoga
  }
})


gsap.to('.txt-bottom',{
  autoAlpha:0,
  letterSpacing:-10,
  duration:2,
  scrollTrigger:{
    start:2
  }
})


const tl = gsap.timeline();

tl.from('.left-side div',{
  y:150,
  opacity:0,
  stagger:{
    amount:.4
  },
  delay:.5
}).from('.right-side',{opacity:0,duration:2},.5)
.to('.wrapper' ,{x:-window.innerWidth})



ScrollTrigger.create({
  animation:tl,
  trigger:'.wrapper',
  start:"top top",
  end:"+=630",
  scrub:1,
  pin:true,
  ease:"ease"
})
/**const tl = gsap.timeline();

tl.to('.left-side div',{
  y:150,
  opacity:0,
  stagger:{
    amount:.4
  },
  delay:.5
}).to('.right-side',{opacity:0,duration:2},.5)
.to('.wrapper' ,{x:-window.innerWidth})
.scrollTrigger({
  trigger:'.wrapper',
  start:"top top",
  end:"+=600",
  scrub:1,
  pin:true,
  ease:"ease"
});
 */



gsap.utils.toArray('.col').forEach(image=>{
  gsap.fromTo(image,{
    opacity:.3,
    x:0
  },{
    opacity:1,
    x:-50,
    scrollTrigger:{
      trigger:image,
      start:"10%",
      stagger:{
        amount:.4
      }
    }
  })
})

const timeline = gsap.timeline();

timeline.from('.title span' ,{
  y:150,
  skewY:7,
  duration:3
}).from('.txt-bottom',{
  letterSpacing:-10,
  opacity:0,
  duration:3
})