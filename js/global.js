function openMenu() {
    var mobileMenu = document.getElementById("ham-menu").classList.toggle('opened');
    var smallMenu = document.getElementById("ham-menu");
    var styleLineTop = document.getElementById("top-line").style;
    var styleLineBottom = document.getElementById("bottom-line").style;
    var dropMenu = document.getElementById("menu-links-container");

    if(smallMenu.classList.contains('opened')) {
       styleLineTop.webkitTransform ='rotate(45deg) translate(0px, 0px)';
       styleLineBottom.webkitTransform ='rotate(315deg) translate(7px, -7px)';
      //  dropMenu.style.display = "flex";
      // dropMenu.setAttribute("style", "height: 80vh ");
      dropMenu.classList.toggle("hidden");
    } else {
       styleLineTop.webkitTransform ='rotate(0deg) translate(0px, 0px)';
       styleLineBottom.webkitTransform ='rotate(0deg) translate(0px, 0px)';
      //  dropMenu.setAttribute("style", "height: 0vh");
      //  dropMenu.style.display = "none";
      dropMenu.classList.toggle("hidden");
    } 
  }

  
function sendMail() {
  // Get form input values
  var name = document.getElementById("name").value;
  var lastname = document.getElementById("lastname").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Clear previous error messages
  document.getElementById("name-error").textContent = "";
  document.getElementById("lastname-error").textContent = "";
  document.getElementById("email-error").textContent = "";
  document.getElementById("message-error").textContent = "";

  // Check if any of the fields are empty
  var isValid = true;
  if (name.trim() === "") {
    document.getElementById("name-error").textContent = "Name is required";
    isValid = false;
  }
  if (lastname.trim() === "") {
    document.getElementById("lastname-error").textContent = "Last Name is required";
    isValid = false;
  }
  if (email.trim() === "") {
    document.getElementById("email-error").textContent = "Email is required";
    isValid = false;
  }
  if (message.trim() === "") {
    document.getElementById("message-error").textContent = "Message is required";
    isValid = false;
  }

  // Check if the form is valid
  if (!isValid) {
    return false; // Stop the function execution if any field is empty
  }

   var params = {
    name: name,
    lastname: lastname,
    email: email,
    message: message,
  };

  const serviceID = "service_8s68ocw";
  const templateID = "template_uk6xyyl";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      // Reset form fields and display success message
      document.getElementById("name").value = "";
      document.getElementById("lastname").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      document.getElementById("formcontact").style.display = "none";
      document.getElementById("successmessage").style.display = "block";
    })
    .catch((err) => console.log(err));
}

window.addEventListener('load', function () {
  // Hide the loading animation
  document.querySelector('.loading-screen').style.display = 'none';

  // Display the content
  document.querySelector('.content').style.display = 'block';
});










