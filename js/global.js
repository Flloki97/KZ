var contactForm = document.querySelector("#contact-form");
var submitBtn = document.getElementById('submit');
var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var subjectInput = document.getElementById('subject');

const publicKey = "8awtboEqiYo-Bx217";
const serviceID = "service_p5igaha";
const templateID = "template_msu2h2j";

emailjs.init(publicKey);
contactForm.addEventListener("submit", e => {
  e.preventDefault
  submitBtn.innerText = "Just a Moment...";

  const inputFields = {
    name: nameInput.value,
    email: emailInput.value,
    message: subjectInput.value
  }

  emailjs.send(serviceID, templateID, inputFields)
    .then(() => {
      submitBtn.innerText = "Message Sent Successfully";
      nameInput.value = "";
      emailInput.value = "";
      subjectInput.value = "";
    }, (error) => {
      console.log(error);
      submitBtn.innerText = "Something went wrong";
    })

})



// function sendEmail() {
//   Email.send({
//     Host : "smtp.elasticemail.com",
//     Username : "fbryma7@gmail.com",
//     Password : "D800BED456FDAF052FB9F6F840526D5A24D8",
//     To : 'florentbryma7@gmail.com',
//     From : document.getElementById("email").value,
//     Subject : "New Contact Form Enquiry",
//     Body : "And this is the body"
//   }).then(
//   message => alert(message)
//   );
// }



// var btn = document.getElementById('btn');
// btn.addEventListener('click', function(e) {
//     e.preventDefault()
//     var name = document.getElementById('name').value;
//     var email = document.getElementById('email').value;
//     var subject = document.getElementById('subject').value;
//     var message = document.getElementById('message').value;
//     var body = 'name: ' + name + '<br/> email: ' + email  + '<br/> subject: ' + subject  + '<br/> message: ' + message;

//     Email.send({
//         SecureToken : "58aa2e5b-4c73-4a77-a428-acfea04beccd",
//         To : 'fbryma7@gmail.com',
//         From : "florentbryma7@gmail.com",
//         Subject : "contact message",
//         Body : body
//     }).then(
//       message => alert(message)
//     );

// })


// function validateForm() {
//   var name = document.forms["contactForm"]["name"].value;
//   var email = document.forms["contactForm"]["email"].value;
//   var message = document.forms["contactForm"]["message"].value;
//   var error = "";

//   if (name == "") {
//       error += "Please enter your name.\n";
//   }

//   if (email == "") {
//       error += "Please enter your email address.\n";
//   } else if (!validateEmail(email)) {
//       error += "Please enter a valid email address.\n";
//   }

//   if (message == "") {
//       error += "Please enter a message.\n";
//   }

//   if (error != "") {
//       alert(error);
//       return false;
//   }
// }

// function validateEmail(email) {
//   var re = /\S+@\S+\.\S+/;
//   return re.test(email);
// }