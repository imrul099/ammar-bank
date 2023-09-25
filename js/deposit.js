document.getElementById('btn-deposit').addEventListener('click', function(){
    const userDeposit = document.getElementById('user-deposit');
    const newDepositAmountString = userDeposit.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString); 

    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    
    depositTotalElement.innerText = currentDepositTotal;

    // get balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // calculate the current tatal balance 
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;


     userDeposit.value = '';
});