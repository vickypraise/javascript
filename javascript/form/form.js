function register (){
    var fullname=document.getElementById("fullname").value
    var number=document.getElementById("number").value
    var email=document.getElementById("email").value
    var confirmemail=document.getElementById("confirmemail").value

   if(fullname==""||number==""||email==""||confirmemail==""){
      document.getElementById("message").innerHTML="All inputs are required";
    }else if ((!fullname.match(/^[A-Za-z]+$/)) ||fullname.length>20){
      document.getElementById("message").innerHTML="please enter a valid fullname";
    } else if (email !== confirmemail){
      document.getElementById("message").innerHTML="ensure your email matches";
    }else if ((!email.match(/\S+@\S+\.\S+/)) ||email.length>50){
      document.getElementById("message").innerHTML="please enter a valid email";
    }else if(phone.match(/^\d{13}$/)){
      document.getElementById("message").innerHTML="please input your number";
    }else{
      document.getElementById("message").innerHTML="you have sucessfully completed your registeration";
   }
}   
