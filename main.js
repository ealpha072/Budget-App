///DOM ELEMENTS
    //inputs
    const budget = document.querySelector("#budget-amount")
    const expName = document.querySelector(".exp-name")
    const expAmt =document.querySelector(".exp-amt")
    //buttons
    const submitButton = document.querySelector(".submit-amt");
    const expButton = document.querySelector(".submit-exp");
    //headings
    const budgetHead = document.querySelector(".budget-head")
    const expHead = document.querySelector(".exp-head")
    const balHead = document.querySelector(".bal-head")

//global variables
let expensesArr = [];

//EVENT LISTENERS
submitButton.addEventListener('click',(e)=>{
    e.preventDefault();
    displayBudget();
    

})

expButton.addEventListener('click',(e)=>{
    e.preventDefault();
    displayExpenseBalance();
    expenses();
    console.log()
})

//functions
function displayBudget(){
    let userBudget = budget.value;
    budgetHead.innerHTML = userBudget;
}

function displayExpenseBalance(){
    let userExpAmt = expAmt.value;
        userBudget = budgetHead.innerHTML;

    expHead.innerHTML = userExpAmt;
    balHead.innerHTML = userBudget-userExpAmt;
}

function expenses(){
    let userExpAmt = expAmt.value;
    let userExpName = expName.value;
    expensesArr.push({"name":userExpName,"amount":userExpAmt})
    console.log(expensesArr);
}


function displayExpenses(){
    let table =``
}
