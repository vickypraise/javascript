document.getElementById("state").style.display=none
document.getElementById("province").style.display=none
document.getElementById("local area").style.display=none
document.getElementById("local area").style.display=none
document.getElementById("territories").style.display=none
function showorhide(){
  var country=document.getElementById("country").value
  if(country=="state"){
    document.getElementById("state").style.display="block"
    document.getElementById("city").style.display="none"
  } else if("country==america"){
    document.getElementById("cities").style.display="block"
    document.getElementById("state").style.display="none"
  }
}

