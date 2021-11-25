$(function(){
    let expensesArray = [{amt:0}], budgetArray = [0]

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
        expensesArray.push({name:name, amt:parseInt(exp)})
        tbody.html('')
        updateTable(expensesArray)
        updateExpense(expensesArray)
        showBalance()
    })
    
    const showBalance = ()=>{
        let balance = budgetArray.reduce((a,b)=>a+b) - expensesArray.map(elem=>elem.amt).reduce((a,b)=>a+b)

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
    
    const updateTable = (array)=>{
        array.forEach(elem=>{
            if(elem.hasOwnProperty('name')){
                let tr = `<tr>
                    <td>${elem.name}</td>
                    <td class="text-danger font-weight-bolder">$${-elem.amt}</td>
                    <td><button class="btn btn-sm btn-danger delete-item">Delete</button></td>
                </tr>`
                tbody.append(tr)
            }
        })

        $('.delete-item').on('click',(e)=>{
            e.preventDefault()
            let target = $(e.target).parents('tr')
            let childElem = target.children('td').html()

            for (let i = 0; i < expensesArray.length; i++) {
                if(expensesArray[i].name === childElem){
                    expensesArray.splice(expensesArray.indexOf(expensesArray[i]), 1)
                }
            }
            $(target).remove()
            updateExpense(expensesArray)
            showBalance()
        })
    }

    const updateExpense = array=>{
        expenseHeader.text('')
        expenseHeader.text('$'+ array.map(elem=>elem.amt).reduce((a,b)=>{return a+b}))
    }

    const updateIncome = array => {
        budgetHeader.text('')
        budgetHeader.text('$'+array.reduce((a,b)=> a+b))
    }
})



