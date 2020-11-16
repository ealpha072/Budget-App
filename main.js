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
    //tables
    const tableBody = document.querySelector(".table-body")

//global variables
let expensesArr = [];

//EVENT LISTENERS
submitButton.addEventListener('click',(e)=>{
    e.preventDefault();
    displayBudget();
    

})

expButton.addEventListener('click',(e)=>{
    e.preventDefault();
    
    expenses();
    displayExpenses()
    displayExpenseBalance();
})

//functions
function displayBudget(){
    let userBudget = budget.value;
    budgetHead.innerHTML = userBudget;
}

function displayExpenseBalance(){
    let amounts=[];
    let totalAmounts;
    /*let userExpAmt = expAmt.value;
        userBudget = budgetHead.innerHTML;

    expHead.innerHTML = userExpAmt;
    balHead.innerHTML = userBudget-userExpAmt;*/
    expensesArr.forEach(item=>{
        let itemAmt = parseInt(item.amount);
        amounts.push(itemAmt)
        //return amounts  
    })
     console.log(amounts)

    totalAmounts = amounts.reduce(function(a, b) { return a + b; }, 0)
    console.log(totalAmounts)
}

function expenses(){
    let userExpAmt = expAmt.value;
    let userExpName = expName.value;
    expensesArr.push({"name":userExpName,"amount":userExpAmt})
}


function displayExpenses(){
    tableBody.innerHTML = '';
    expensesArr.forEach(item=>{
        const data = document.createElement("tr");

        let tableContent =`
        <td>${item.name}</td>
        <td>${item.amount}<td>
        <td>
            <a href="" class="btn btn-danger"><i class="fa fa-trash"></i>Delete</a>
            <a href="" class="btn btn-success"><i class="fa fa-pencil"></i>Edit</a>
        </td>`
        
        data.innerHTML = tableContent
        tableBody.appendChild(data)
    })
}
