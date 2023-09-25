document.getElementById('btn-withdraw').addEventListener('click', function(){
    const userDraw = document.getElementById('user-draw');
    const newWithdrawAmountString = userDraw.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    userDraw.value = '';

    if(isNaN(newWithdrawAmount)){
        alert('Please provide a valid number')
        return;
    }


    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawTotalString);

    
    
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);


    if(newWithdrawAmount > previousBalanceTotal){
        alert('Insufficient Balance!!!');
        return;
    }

    const currentWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;
    
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;


})