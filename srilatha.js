document.getElementById("studentname").innerText="srilatha";
function changeName(){
    let newName=prompt("Enter your name");
    if(newName!==null && newName.trim()!= ""){
        document.getElementById("studentname").innerText=newName;
    }

    


}
let myBtn=document.getElementById("myBtn");
let res=document.getElementById("res");
myBtn.addEventListener("click",function(){
    res.innerHTML="<ol><li>HTML</li><li>CSS</li><li>JavaScript</li><li>BootStrap</li><li>Python</li><li>SQL</li></ol>";
})
