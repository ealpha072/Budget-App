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
    budgetHead.textContent = userBudget;
    balHead.textContent = userBudget;
}

function displayExpenseBalance(){
    let amounts =[];
    let totalAmounts;

    expensesArr.forEach(item=>{
        let itemAmt = parseInt(item.amount);
        amounts.push(itemAmt)
        //return amounts  
    })
     console.log(amounts)

    totalAmounts = amounts.reduce(function(a, b) { return a + b; }, 0);
    expHead.textContent = totalAmounts;
    balHead.textContent = budgetHead.textContent-totalAmounts;
    return totalAmounts;
    //console.log(totalAmounts)

}

//pushes expenses to arr
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
            <button class="btn btn-danger delete-exp" onClick = "delete_row(this)"><i class="fa fa-trash"></i>Delete</button>
        </td>`
        
        data.innerHTML = tableContent
        tableBody.appendChild(data);
    })
}


/*function deleteExp(){
    let target = e.target.parentNode.parentNode;
    console.log(target)
    for(var i=0;i<=expensesArr.length;i++){
        if(expensesArr[i].name===target){}
    }
}*/