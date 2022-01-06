/* When the button is clicked  */
$("#button").click(function(){

    /* These variables receive the inputs ids */
    var firstName = $("#first-name").attr("id");
    var lastName = $("#last-name").attr("id");
    var email = $("#email").attr("id");
    var password = $("#password").attr("id");

    /* This array will receive all of the ids */
    var input = [firstName,lastName,email,password];


    /* Here the forEach loop will pass through each element in the 'input' array */
    input.forEach(element => {
        
        if($(`#${element}`).val() == "") {

            $(`#${element}`).addClass("error");
            $(`#${element}`).attr("placeholder", "");
            $(`input#${element}`).css("border-color", "red");
            $(`input#${element}`).css("padding-bottom", "5%");
            $(`#${element}-div`).addClass("text-error");

            switch(element) {
                case "first-name": 
                    $(`#${element}-div`).text("First name cannot be empty");
                    break;
                case "last-name":
                    $(`#${element}-div`).text("Last name cannot be empty");
                    break;
                case "email":
                    $(`#${element}`).attr("placeholder", "email@example/com");
                    $(`#${element}-div`).text("Looks like this is not an email");
                    break;
                case "password":
                    $(`#${element}-div`).text("Password cannot be empty");
                    break;
                default: 
                    console.log("Failed");
            }
        }
    });
});



