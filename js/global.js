function emailSend() {
    var userName = document.getElementById('name').value;
    var userLastName = document.getElementById('lastname').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var messageBody = "Name " + userName +
    "<br/> Last Name " + userLastName +
	"<br/> Email " + email +
	"<br/> Message " + message;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "fbryma7@gmail.com",
        Password : "01D0DE58DD3380C9A9DD383D1A820813B8B4",
        To : 'florentbryma7@gmail.com',
        From : "fbryma7@gmail.com",
        Subject : "This is the subject",
        Body : messageBody
    }).then(
        message => {
            if(message === 'OK'){
                console.log("Secussful", "You clicked the button!", "success");
            }
            else{
                console.log("Error", "You clicked the button!", "error");
            }
        }
    );
}