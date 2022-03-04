

function valid_mail(){
var mail= document.myForm.mail.value;
var pass= document.myForm.pass.value;
var len= pass.length;
    if (mail == null || mail== ""){
        alert("enter correct email");
        return false;
    }else{
        if(len < 6){
            alert("enter correct password");
            return false;
        }
    }
}

