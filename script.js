function totalFirstClassTicketPrice(isIncreased) {
    const firstClassTicketInput = document.getElementById("firstClassTicketInput");
    const firstClassTicketInputNumber = parseInt(firstClassTicketInput.value);
    // const newFirstClassTicket = firstClassTicketInputNumber + 1;
    let newFirstClassTicket = firstClassTicketInputNumber;
    if (isIncreased === true) {
        newFirstClassTicket = firstClassTicketInputNumber + 1;
    } else if (isIncreased === false && newFirstClassTicket > 0) {
        newFirstClassTicket = firstClassTicketInputNumber - 1;
    }
    firstClassTicketInput.value = newFirstClassTicket;
    const firstClassTicketPrice = newFirstClassTicket * 150;
    document.getElementById("firstClassTicketPrice").innerText = '$' + firstClassTicketPrice
    getTotalPrice()
}

function totalEconomyTicketPrice(isIncreased) {
    const economyTicketInput = document.getElementById("economyTicketInput");
    const economyTicketInputNumber = parseInt(economyTicketInput.value);
    // const newEconomyTicketInputNumber = economyTicketInputNumber + 1;
    let newEconomyTicketInputNumber = economyTicketInputNumber;

    if (isIncreased === true) {
        newEconomyTicketInputNumber = economyTicketInputNumber + 1;
    } else if (isIncreased === false && newEconomyTicketInputNumber > 0) {
        newEconomyTicketInputNumber = economyTicketInputNumber - 1;
    }
    economyTicketInput.value = newEconomyTicketInputNumber;
    const economyTicketPrice = newEconomyTicketInputNumber * 100;
    document.getElementById("economyTicketPrice").innerText = '$' + economyTicketPrice
    getTotalPrice()
}

function getTotalPrice() {
    const firstClassTicketInput = document.getElementById("firstClassTicketInput");
    const firstClassTicketInputNumber = parseInt(firstClassTicketInput.value);
    const economyTicketInput = document.getElementById("economyTicketInput");
    const economyTicketInputNumber = parseInt(economyTicketInput.value);
    const subtotal = firstClassTicketInputNumber * 150 + economyTicketInputNumber * 100;
    console.log(subtotal)
    document.getElementById("subtotal").innerText = subtotal;
    const vat = subtotal * 0.1;
    document.getElementById("vat").innerText = vat;
    const total = subtotal + vat;
    document.getElementById("total").innerText = total
}












// document.getElementById("plusBtn").addEventListener("click", function () {
//     const firstClassTicketInput = document.getElementById("firstClassTicketInput");
//     const firstClassTicketInputNumber = parseInt(firstClassTicketInput.value);
//     const newFirstClassTicket = firstClassTicketInputNumber + 1;
//     firstClassTicketInput.value = newFirstClassTicket;

//     const firstClassTicketPrice = newFirstClassTicket * 150;
//     document.getElementById("firstClassTicketPrice").innerText = '$' + firstClassTicketPrice
// })

// document.getElementById("mainusBtn").addEventListener("click", function () {
//     const firstClassTicketInput = document.getElementById("firstClassTicketInput");
//     const firstClassTicketInputNumber = parseInt(firstClassTicketInput.value);
//     const newFirstClassTicketInputNumber = firstClassTicketInputNumber - 1;
//     firstClassTicketInput.value = newFirstClassTicketInputNumber;

//     const firstClassTicketPrice = newFirstClassTicketInputNumber * 150;
//     document.getElementById("firstClassTicketPrice").innerText = '$' + firstClassTicketPrice
// })


// document.getElementById("economyPlusBtn").addEventListener("click", function () {
//     const economyTicketInput = document.getElementById("economyTicketInput");
//     const economyTicketInputNumber = parseInt(economyTicketInput.value);
//     const newEconomyTicketInputNumber = economyTicketInputNumber + 1;
//     economyTicketInput.value = newEconomyTicketInputNumber;
//     const economyTicketPrice = newEconomyTicketInputNumber * 100;
//     document.getElementById("economyTicketPrice").innerText = '$' + economyTicketPrice

// })

// document.getElementById("economyMainusBtn").addEventListener("click", function () {
//     const economyTicketInput = document.getElementById("economyTicketInput");
//     const economyTicketInputNumber = parseInt(economyTicketInput.value);
//     const newEconomyTicketInputNumber = economyTicketInputNumber - 1;
//     economyTicketInput.value = newEconomyTicketInputNumber;
//     const economyTicketPrice = newEconomyTicketInputNumber * 100;
//     document.getElementById("economyTicketPrice").innerText = '$' + economyTicketPrice
// })