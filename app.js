function submitData() {

    let username = document.getElementById("username").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let message = document.getElementById("message").value

    document.getElementById("username").style.border = "1px solid #959696"
    document.getElementById("email").style.border = "1px solid #959696"
    document.getElementById("phone").style.border = "1px solid #959696"
    document.getElementById("message").style.border = "1px solid #959696"



    document.getElementById("error-user").innerHTML = ""
    document.getElementById("error-email").innerHTML = ""
    document.getElementById("error-phone").innerHTML = ""
    document.getElementById("error-message").innerHTML = ""

    let isvalid = true


    if (username === "") {
        document.getElementById("error-user").innerHTML = "This is Field required"
        document.getElementById("username").style.border = "1px solid red"
        isvalid = false
    }

    if (email === "") {
        document.getElementById("error-email").innerHTML = "This is required"
        document.getElementById("email").style.border = "1px solid red"
        isvalid = false
    }


    if (phone === "") {
        document.getElementById("error-phone").innerHTML = "This is required"
        document.getElementById("phone").style.border = "1px solid red"
        isvalid = false
    }

    if (message === "") {
        document.getElementById("error-message").innerHTML = "This is required"
        document.getElementById("message").style.border = "1px solid red"
        isvalid = false
    }

    if (isvalid) {

        Swal.fire({
            title: "Form has been Submitted Successfully!",
            icon: "success",
            draggable: true
        });

        console.log(username);
        console.log(email);
        console.log(phone);
        console.log(message);

        document.getElementById("username").value = ""
        document.getElementById("email").value = ""
        document.getElementById("phone").value = ""
        document.getElementById("message").value = ""

    }

}