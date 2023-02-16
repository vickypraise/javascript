function checkadmission(){
    var jambscore= document.getElementById ("jambscore").value
    var cutoff=180
    var max=400
    if (jambscore>=cutoff && jambscore <= 400){
        document.getElementById("message").innerHTML= "congratulations,admission granted" 
    }
    else if (jambscore<cutoff&&jambscore>0){
        document.getElementById("message").innerHTML= "sorry,jambscore is not up to cutoff mark"
    }
    else if(jambscore ==""){
        document.getElementById("message").innerHTML="sorry,jambscore is empty"
    }
    else if(jambscore>max){
        document.getElementById("message").innerHTML="jambscore exceeds 400"
    }else if(jambscore>=0){
        document.getElementById("message").innerHTML="jambscore is zero"
    }else if(jambscore<0)
    document.getElementById("message").innerHTML="jambscore is a negative input"
}