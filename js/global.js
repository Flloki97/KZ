function openMenu() {
    var mobileMenu = document.getElementById("ham-menu").classList.toggle('opened');
    var smallMenu = document.getElementById("ham-menu");
    var styleLineTop = document.getElementById("top-line").style;
    var styleLineBottom = document.getElementById("bottom-line").style;
    var dropMenu = document.getElementById("menu-links-container");
    

    if(smallMenu.classList.contains('opened')) {
       styleLineTop.webkitTransform ='rotate(45deg) translate(0px, 0px)';
       styleLineBottom.webkitTransform ='rotate(315deg) translate(7px, -7px)';
       dropMenu.style.display = "flex";
    } else {
       styleLineTop.webkitTransform ='rotate(0deg) translate(0px, 0px)';
       styleLineBottom.webkitTransform ='rotate(0deg) translate(0px, 0px)';
       dropMenu.style.display = "none";
    } 
  }

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

