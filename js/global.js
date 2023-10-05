
function sendMail(){
  var params = {
      name:document.getElementById("name").value ,
      lastname:document.getElementById("lastname").value ,
      email:document.getElementById("email").value ,
      message:document.getElementById("message").value,
  };

  const serviceID = "service_8s68ocw";
  const templateID = "template_uk6xyyl"

  emailjs
      .send(serviceID,templateID,params)
      .then((res) => {
          document.getElementById("name").value = "";
          document.getElementById("lastname").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          document.getElementById("formcontact").style.display = "none";
          document.getElementById("successmessage").style.display = "block";
          // alert("your message sent successfully");
      })
      .catch((err) => console.log(err));
  
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
 
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
 });

 const lenis = new Lenis()

lenis.on('scroll', (e) => {
//   console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)



const lenis2 = new Lenis({
   duration: 1.2,
   easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
});

function raf(time) {
   lenis2.raf(time);
   ScrollTrigger.update();
   requestAnimationFrame(raf);
}

// requestAnimationFrame(raf);

const section_1 = document.getElementById("container");
const col_left = document.querySelector(".col_left");
const timeln = gsap.timeline({paused: true});
