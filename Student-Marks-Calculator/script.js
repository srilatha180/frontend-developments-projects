let form=document.getElementById("myForm");
let totalMarks=0;
let grade;
let pas;

form.addEventListener("submit", function(event){
     event.preventDefault();
     let studentName=document.getElementById("name").value;
     let studentEmail=document.getElementById("mail").value;
     let HTML=Number(document.getElementById("HTML").value);
     let CSS=Number(document.getElementById("CSS").value);
     let javascript=Number(document.getElementById("javascript").value);

     let total=HTML+CSS+javascript;
     totalMarks=total;

     let avg=total/3;
     
     let g;

     if (avg>=90){
          g="A+";
     }
     else if(avg<=90 && avg>=75){
        g="A";

     }
     else if(avg<=75 && avg>=60){
        g="B";
     }
     else{
        g="C";
     }

     grade=g;
     let res;


     if(HTML>=35 && CSS>=35 && javascript>=35){
        res="PASS";
     }
     else{
        res="Fail";

     }
     pas=res;

let resultBody=document.getElementById("resultBody");
resultBody.innerHTML+= `
<tr>
 <td>${studentName}</td>
 
 <td>${HTML}</td>
 <td>${CSS}</td>
 <td>${javascript}</td>
 <td>${total}</td>
 <td>${avg.toFixed(2)}</td>
 <td>${g}</td>
 
<td>
    <span class="badge ${res === "PASS" ? "bg-success" : "bg-danger"}">
        ${res}
    </span>
</td>`

})

let res=document.getElementById("res");
let result=document.getElementById("result");
res.addEventListener("click",function(){
   result.innerHTML=`<h3 class="text-dark">Total marks are:${totalMarks}</h3>`;
});

let grad=document.getElementById("grad");
let gradeId=document.getElementById("gradeId");
grad.addEventListener("click",function(){
   gradeId.textContent=`your secured with:${grade}`;
})
let pass=document.getElementById("pass");
let passId=document.getElementById("passId")
pass.addEventListener("click",function(){
  
   passId.textContent=`your ${pas} the examination`;
})