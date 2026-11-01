
let myBtn=document.getElementById("myBtn");
let resultId=document.getElementById("resultId");
let expenses=[];
myBtn.addEventListener("click",function(){
   let expensesId=document.getElementById("expensesId").value;
   let amountId=document.getElementById("amountId").value;
   let categoryId=document.getElementById("categoryId").value;
  
   let expense={
      name:expensesId,
      amount:amountId,
      category:categoryId,

   }

   expenses.push(expense);
   document.getElementById("expensesId").value = "";
    document.getElementById("amountId").value = "";
    document.getElementById("categoryId").value = "";
   console.log(expenses);
   let expensesList = document.getElementById("expensesList");
   expensesList.innerHTML=" ";
   expenses.forEach(function(item){
      console.log(item.name);
      expensesList.innerHTML+=`<p>${item.name} - ${item.amount} - ${item.category}`;

   });

   let totalExpenses = expenses.reduce(function(total, item) {
      return total + parseFloat(item.amount);
   },0);
   document.getElementById("totalExpenses").innerText = totalExpenses;

   let expenseCount = expenses.length;
   document.getElementById("expenseCount").innerText = expenseCount;

});
