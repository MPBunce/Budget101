//important elements
const form = document.getElementById('theData')
const ctx = document.getElementById('myChart').getContext('2d');
const lineOne = document.getElementById('lineOne')
const lineTwo = document.getElementById('lineTwo')

//the variables
const yearlyIncome = document.getElementById("YearlyIncome")
const monthlyHousingCost = document.getElementById('housingCost')
const monthlyUtilities = document.getElementById('utilitiesCost')
const monthlyEarningExpense = document.getElementById('earningExpense')
const monthlyDebtPayment = document.getElementById('debtPayments')

var chart = new Chart(ctx, {

    type: 'pie',

    data: {

        labels: [
            'Monthly Housing Cost',
            'Monthly Utilities',
            'Monthly Earning Expense',
            'Monthly Minimum Debt Payment',
            'Monthly Free Income'
        ],

        datasets: [{
            label: 'My First Dataset',
            positon: 'border',
            data: [750, 400, 300, 300, 2466.67],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
              'rgb(255, 78, 86)',
              'rgb(25, 78, 86)'
            ],
            hoverOffset: 2
        }]
    },

});


form.addEventListener('submit', (e) => {
    e.preventDefault()

    //parse ints
    yearlyIncomeFloat = parseFloat(yearlyIncome.value)
    housingCostFloat = parseFloat(monthlyHousingCost.value)
    utilFloat = parseFloat(monthlyUtilities.value)
    earningExpenseFloat = parseFloat(monthlyEarningExpense.value)
    debtPaymentFloat = parseFloat(monthlyDebtPayment.value)

    if( isNaN(yearlyIncomeFloat) || isNaN(housingCostFloat)  || isNaN(utilFloat)  || isNaN(earningExpenseFloat)  || isNaN(debtPaymentFloat) ){
       
        alert('Error please fill in all feilds')
        return
    }

    //do math
    monthlyIncome = yearlyIncomeFloat / 12
    totalMonthlyExpense = housingCostFloat + utilFloat + earningExpenseFloat + debtPaymentFloat
    monthlyPositiveCashFlow = monthlyIncome - totalMonthlyExpense

    chart.data.datasets[0].data[0] = housingCostFloat
    chart.data.datasets[0].data[1] = utilFloat
    chart.data.datasets[0].data[2] = earningExpenseFloat
    chart.data.datasets[0].data[3] = debtPaymentFloat
    chart.data.datasets[0].data[4] = monthlyPositiveCashFlow.toFixed(2)
    chart.update()

    lineOne.innerHTML = "You have "+ monthlyPositiveCashFlow.toFixed(2) +" avaliable for monthly investing, saving, and spending!"

    if(totalMonthlyExpense > 1000){
        lineTwo.innerHTML = "First, build a small emergeny fund, we recommend $"+ totalMonthlyExpense +" to cover 1 month of utlities"
    }else{
        lineTwo.innerHTML = "First, build a small emergeny fund, we recommend a minimum of $1000"
    }
    
})
