//DOM ELEMENTS

//On submitting budget form, add the amount to divs head, update exp and ball
$(function(){
    let expensesArray = []

    /*function Expense(name, amount){
        this.name = name,
        this.amount = amount
    }*/

    let tbody = $('tbody')
    let expenseHeader = $('#e-amt')
    let budgetHeader = $('#b-amt')

    $('form#budget-form').submit((e)=>{
        e.preventDefault()
        let value = $('#budget-input').val()
        $('#b-amt').text('')
        $('#b-amt').text(value)
        showBalance()
        $('#exp-name-input').removeAttr('disabled')
        $('#exp-amt-input').removeAttr('disabled')
        $('#add-exp').removeAttr('disabled')
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
        let balance =  budgetHeader.text() - expenseHeader.text()
        $('#bal').text('')
        $('#bal').text(balance)
    }
    
    const updateTable = (expenseName, expenseAmount)=>{
        let tr = `<tr>
            <td>${expenseName}</td>
            <td>${expenseAmount}</td>
            <td>Delete</td>
        </tr>`
        tbody.append(tr)
    }

    const updateExpense = array=>{
        expenseHeader.text('')
        expenseHeader.text(array.reduce((a,b)=>{return a+b}))
    }
    
})



