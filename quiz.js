let myBtn=document.getElementById("myBtn");
let res=document.getElementById("res");
let q1res=document.getElementById("q1res");
let q2res=document.getElementById("q2res");
let q3res=document.getElementById("q3res");
let q4res=document.getElementById("q4res");
let q5res=document.getElementById("q5res");
let q6res=document.getElementById("q6res");
let q7res=document.getElementById("q7res");
let q8res=document.getElementById("q8res");
let q9res=document.getElementById("q9res");
let q10res=document.getElementById("q10res");
 let correctAnswers = ["b", "a", "b", "a", "a", "a", "a", "a", "a", "a"];


myBtn.addEventListener("click", function() {
    let score = 0;
     for (let i = 0; i < correctAnswers.length; i++) {

        let ans = document.querySelector(`input[name="q${i + 1}"]:checked`);

        if (ans === null) {
            alert(`Please select an answer for question ${i + 1}`);
            return;
        }

        if (ans.value === correctAnswers[i]) {
            score=score+2;
            document.getElementById(`q${i + 1}res`).textContent = "correct answer";
            document.getElementById(`q${i + 1}res`).style.color = "green";
        }
        else{
            document.getElementById(`q${i + 1}res`).textContent = "wrong answer";
            document.getElementById(`q${i + 1}res`).style.color = "red";
        }
    }

    res.textContent = `Your score is ${score}`;
    
   
    

});






