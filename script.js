//DOM ELEMENTS

//On submitting budget form, add the amount to divs head, update exp and ball
$(function(){
    let expensesArray = [0], budgetArray = [0]

    /*function Expense(name, amount){
        this.name = name,
        this.amount = amount
    }*/

    let tbody = $('tbody'), expenseHeader = $('#e-amt'), budgetHeader = $('#b-amt'), balanceHeader = $('#bal')

    $('form#budget-form').submit((e)=>{
        e.preventDefault()
        let value = $('#budget-input').val()
        budgetArray.push(parseInt(value))
        updateIncome(budgetArray)
        showBalance()
    })

    $('form#exp-info').submit(e=>{
        e.preventDefault()
        let name = $('#exp-name-input').val()
        let exp = $('#exp-amt-input').val()
        expensesArray.push(parseInt(exp))
        updateTable(name, exp)
        updateExpense(expensesArray)
        showBalance()
    })

    const showBalance = ()=>{
        let balance =  budgetArray.reduce((a,b)=>a+b) - expensesArray.reduce((a,b)=>a+b)

        if(balance < 0){
            balanceHeader.removeClass('text-primary')
            balanceHeader.addClass('text-danger')
            balanceHeader.text('')
            balanceHeader.text('$'+balance)
        }else{
            balanceHeader.removeClass('text-danger')
            balanceHeader.addClass('text-primary')
            balanceHeader.text('')
            balanceHeader.text('$'+balance)
        }
    }
    
    const updateTable = (expenseName, expenseAmount)=>{
        let tr = `<tr>
            <td>${expenseName}</td>
            <td>$${-expenseAmount}</td>
            <td>Delete</td>
        </tr>`
        tbody.append(tr)
    }

    const updateExpense = array=>{
        expenseHeader.text('')
        expenseHeader.text('$'+array.reduce((a,b)=>{return a+b}))
    }

    const updateIncome = array => {
        budgetHeader.text('')
        budgetHeader.text('$'+array.reduce((a,b)=> a+b))
    }
    
})



