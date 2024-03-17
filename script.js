
const words = ["Dhruvik Savaliya","Web Developer"];

let cursor = gsap.to("#cursor",
{
  opacity:0,
  ease: "power2.inOut",
  repeat: -1
})

let masterTl = gsap.timeline({repeat:-1});

words.forEach(word => {
  let tl = gsap.timeline({repeat:1,yoyo:true,repeatDelay:1})
  tl.to("#text",{duration:1,text:word})
  masterTl.add(tl)
})

gsap.from("#header",{
  y:-80,
  opacity:0,
  delay:0.5
})
gsap.from("#hleft, #hcenter a, #hright ",{
  y:-80,
  opacity:0,
  duration:0.6,
  stagger:0.3
})
gsap.from("#content, #cleft h4, #cleft h1 , #cleft p,#mailsend , #cright img",{
  y:-100,
  opacity:0,
  duration:1,
  stagger:0.3
})
gsap.from(".aboutheading h1,.aboutheading h2",{
  y:100,
  opacity:0,
  duration:0.7,
  stagger:0.3,
  scrollTrigger:{
    trigger:".page2 .aboutheading",
    scroller:"body",
    // markers:true,
    start:"top 60%",
    end:"top 90%"
  }
})
gsap.from(".box",{
  y:100,
  opacity:0,
  duration:0.7,
  stagger:0.3,
  scrollTrigger:{
    trigger:".page2 .box",
    scroller:"body",
    start:"top 50%",
    end:"top 90%"
  }
})
gsap.from(".childboxleft h2,.childboxright h2",{
  y:100,
  opacity:0,
  duration:0.7,
  stagger:0.1,
  scrollTrigger:{
    trigger:".page2 .box",
    scroller:"body",
    start:"top 50%",
    end:"top 90%"
  }
})
gsap.from(".box1",{
  y:100,
  opacity:0,
  duration:0.7,
  stagger:0.3,
  scrollTrigger:{
    trigger:".page2 .box",
    scroller:"body",
    start:"top 50%",
    end:"top 90%"
  }
})
gsap.from("#myskils h1,#myskils h2",{
  y:100,
  opacity:0,
  duration:0.7,
  stagger:0.3,
  scrollTrigger:{
    trigger:"#page3 #myskils",
    scroller:"body",
    // markers:true,
    start:"top 60%",
    end:"top 90%"
  }
})
gsap.from("#content-skill",{
  y:100,
  opacity:0,
  duration:0.7,
  stagger:0.3,
  scrollTrigger:{
    trigger:"#page3 #content-skill",
    scroller:"body",
    start:"top 50%",
    end:"top 90%"
  }
})
gsap.from(".circles .circle",{
  y:100,
  opacity:0,
  duration:0.5,
  stagger:0.1,
  scrollTrigger:{
    trigger:"#page3 #content-skill",
    scroller:"body",
    start:"top 50%",
    end:"top 95%"
  }
})
gsap.from("#portfolio h1,#portfolio h2",{
  y:100,
  opacity:0,
  duration:0.7,
  stagger:0.3,
  scrollTrigger:{
    trigger:"#page4 #portfolio",
    scroller:"body",
    start:"top 60%",
    end:"top 90%"
  }
})
gsap.from(".projects,.projects #project",{
  y:100,
  opacity:0,
  duration:0.5,
  stagger:0.2,
  scrollTrigger:{
    trigger:"#page4 .projects",
    scroller:"body",
    start:"top 50%",
    end:"top 95%"
  }
})
gsap.from("#headcontact h1,#headcontact h2",{
  y:100,
  opacity:0,
  duration:0.7,
  stagger:0.3,
  scrollTrigger:{
    trigger:"#page5 #headcontact",
    scroller:"body",
    start:"top 60%",
    end:"top 90%"
  }
})
gsap.from("#inner, #upper",{
  x:-200,
  opacity:0,
  duration:0.7,
  stagger:0.3,
  scrollTrigger:{
    trigger:"#page5 #inner",
    scroller:"body",
    start:"top 50%",
    end:"top 90%"
  }
})
gsap.from("#icontenttop h2,#icontenttop p, #icontentcenter input,#icontentcenter textarea,#icontentcenter button",{
  y:-100,
  opacity:0,
  duration:0.7,
  stagger:0.1,
  scrollTrigger:{
    trigger:"#page5 #inner",
    scroller:"body",
    start:"top 50%",
    end:"top 90%"
  }
})
gsap.from("#ucontents i,#ucontents p,#upperfollow i",{
  y:-100,
  opacity:0,
  duration:0.7,
  stagger:0.1,
  scrollTrigger:{
    trigger:"#page5 #inner",
    scroller:"body",
    start:"top 50%",
    end:"top 90%"
  }
})
gsap.from("#sidebtn",{
  x:-200,
  opacity:0,
  duration:0.7,
  stagger:0.3,
  scrollTrigger:{
    trigger:"#page5 #inner",
    scroller:"body",
    start:"top 50%",
    end:"top 90%"
  }
})

gsap.from("#sidebtn a",{
  y:-100,
  opacity:0,
  duration:0.7,
  stagger:0.1,
  scrollTrigger:{
    trigger:"#page5 #inner",
    scroller:"body",
    start:"top 50%",
    end:"top 90%"
  }
})




const circleSelection = document.querySelector(".circles");
const circles = document.querySelectorAll(".circle");
const progressCircles = document.querySelectorAll(".progress");
const progressText = document.querySelectorAll(".circle h1");

let bol = false;

// Add on Scroll event listener 

window.addEventListener("scroll",function scroll(){
  // run when the scroll offset is 600px and run only once
  if(pageYOffset>circleSelection.offsetTop + 1000  && bol == false){
    // Select all circle
    for(let i = 0;i<circles.length;i++){
      // get the radius of the circle
      let radius = progressCircles[i].r.baseVal.value;

      // get the circumference of the circle
      let circumference = radius*2*Math.PI;

      // set stroke dasharray to the circumference
      progressCircles[i].style.strokeDasharray = circumference;

      // set stroke dash offset between a scale from 0 to 100
      function setProgress(percent){
        progressCircles[i].style.strokeDashoffset = circumference - (percent/100)*circumference;

      }

      // get data attribute value 
      const progress = circles[i].dataset.prog;

      // add progress text dinamically
      progressText[i].innerHTML = progress+ "%";

      // call function
      setProgress(progress)

      // bol value
      bol = true;
    }
  }
});


// navbar

const humburger = document.querySelector("#hamburger");
const toggleButton = document.querySelector("#hamburger");
const dropDownMenu = document.querySelector(".dropdownmenu");

humburger.onclick = function(){
  dropDownMenu.classList.toggle('open')
  const isOpen = dropDownMenu.classList.contains('open')

  toggleButton.classList = isOpen ?"ri-close-line" : "ri-align-justify"
}

// links in contact page

var insta = document.querySelector("#instagram");
insta.onclick = function(){
  open("https://www.instagram.com/mr_savaliya_2412?igsh=OGQ5ZDc2ODk2ZA==")
}

var facebook = document.querySelector("#facebook");
facebook.onclick = function(){
  open("https://www.facebook.com/profile.php?id=100080691679248&mibextid=ZbWKwL")
}

var linkdin = document.querySelector("#linkdin");
linkdin.onclick = function(){
  open("https://www.linkedin.com/in/dhruvik-savaliya-0520642b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app")
}

var whatapp = document.querySelector("#whatsapp");
whatsapp.onclick = function(){
  open("https://wa.me/qr/BFG5DJY4YQRPK1")
}

// buttons

var page1btn = document.querySelector("#subscribe");
page1btn.onclick = function(){
  alert("You are subscribed. Thank you ! ")
}

var page5btn = document.querySelector("#send");
page5btn.onclick = function(){
  alert(" Thank you for contact me. I'll contact you soon")
}

