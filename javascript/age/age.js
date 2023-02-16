function group(){
    var age=document.getElementById("agegroup").value
    if (age<=17&&age>=1){
        document.getElementById("message").innerHTML="The person is a child"
    }else if(age<=29&&age>=18){
        document.getElementById("message").innerHTML="The person is a teenager"
    }else if(age<=150&&age>=30){
        document.getElementById("message").innerHTML="The person is an adult"
   }else if (age==""){
        document.getElementById("message").innerHTML="input required"
    }else if (age>=0){
            document.getElementById("message").innerHTML="invalid input"
    }else if(age<0){
        document.getElementById("message").innerHTML="Negative input"
    }
}