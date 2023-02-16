function red(){
    document.getElementById("header").innerHTML="red"
    document.getElementById("header").Style.color="red"
}
function green(){
    document.getElementById("header").innerHTML="green"
    document.getElementById("header").Style.color="green"
}
function blue(){
    document.getElementById("header").innerHTML="blue"
    document.getElementById("header").style.color="blue"
}
function add(a,b){
    var sum =a+b
    document.getElementById("answer").innerHTML=sum
}



var password="1234"
var confirmpassword=1234  
document.write(password===confirmpassword)
document.write(password==confirmpassword)
var email="joe@gmail.com"
var confirmemail="joe@gmail.com "
document.write(email==confirmemail.trim())
document.write(email===confirmemail)
var y=13
document.write(!(y>10))
var y=13
document.write(!(y>10)&&!(2<4)||!(10>=10))
