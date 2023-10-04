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

