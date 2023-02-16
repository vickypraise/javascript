const btn=document.getElementById("btn")
const content=document.getElementById("content")
const author=document.getElementById("author")

function  getQuotes(){
    axios.get("https:api.quotable.io/random")
.then(retrieve=>console.log(retrieve))
.catch(error=>{console.log(error)})
}