document.getElementById('deposite-btn').addEventListener('click', function () {
    const depositeAmmount =parseFloat(document.getElementById('deposite-ammount').value);
    let previousDeposite = parseFloat(document.getElementById("total-deposite").innerText);
    let previousbalance = parseFloat(document.getElementById("total-balance").innerText);
    document.getElementById('deposite-ammount').value = '';
    if (isNaN(depositeAmmount)) {
        alert("Please enter valid number");
        return;
    }
    previousDeposite += depositeAmmount;
    previousbalance += depositeAmmount;
    document.getElementById('total-deposite').innerText= previousDeposite;
    document.getElementById("total-balance").innerText = previousbalance;
})

// for widthdraw

document.getElementById('withdraw-btn').addEventListener('click', function () {
    let previousbalance = parseFloat(document.getElementById("total-balance").innerText);
    let previousWithdraw = parseFloat(document.getElementById("total-withdraw").innerText);
    const withdrawAmmount = parseFloat(document.getElementById('withdraw-ammount').value);
    document.getElementById('withdraw-ammount').value = '';
    if (isNaN(withdrawAmmount)) {
        alert("Enter a valid number ,Please");
        return;
    }
    if (withdrawAmmount > previousbalance) {
        alert("Insufficient Balnce");
        return;
    }
    previousbalance -= withdrawAmmount;
    previousWithdraw += withdrawAmmount;
    document.getElementById("total-balance").innerText = previousbalance;
    document.getElementById("total-withdraw").innerText= previousWithdraw
})