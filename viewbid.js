var icr;
var allBids = JSON.parse(localStorage.getItem('bids')) || [];

document.getElementById("bid-container").innerHTML = allBids.map((bid, index) => {
    return `
        <div class="bid">
            <div class="flight-info"><span id="identifier">${icr}</span><span class="flight-no flight time">${bid.flight}</span></div>
            <div class="bid-amount"><span class="title ">Departure: </span><span class="time">${bid.amount}</span></div>
            <button class="btn btn-primary hahah" id="${bid.id}">Full Info</button>
        </div>
    `;
}).join('');

// Add click event listener to all buttons

var buttons = document.querySelectorAll('.hahah');
buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        var bid = allBids.find(function(bid) {
            return bid.id == button.id;
        });
        
        document.getElementById("full-bid").innerHTML = `
            <div class="fullbid">
                <div class="bid-airline"><span class="title">Airline: </span>${bid.airline}</div>   
                <div class="bid-flight"><span class="title ">Flight No.: </span><span class="time">${bid.flight}</span></div>
                <div class="bid-amount"><span class="title ">Departure: </span><span class="time">${bid.amount}</span></div>
                <div class="bid-amount"><span class="title ">Route: </span><span class="time">${bid.route}</span></div>
                <div class="bid-amount"><span class="title ">Aircraft: </span><span class="time">${bid.aircraft}</span></div>
                <div class="bid-amount"><span class="title ">Registration: </span><span class="time">${bid.reg}</span></div>
                <div class="bid-amount"><span class="title">Estimated Flight Time: </span><span class="time">${bid.eft}</span></div>
                <div class="bid-amount"><span class="title ">Departure ICAO: </span><span class="time">${bid.dep}</span></div>
                <div class="bid-amount"><span class="title ">Arrival ICAO: </span><span class="time">${bid.arr}</span></div>
            </div>
        `;


    });
});


function veiwFullBid(e) {
    var bidId = e;
    console.log(bidId);
}

/*
<div class="bid-route"><span class="title">Route: </span>${bid.route}</div>
            <div class="bid-aircraft"><span class="title">Aircraft Type: </span>${bid.aircraft}</div>
            <div class="bid-reg"><span class="title">Registration: </span>${bid.reg}</div>
            <div class="bid-dep"><span class="title">Departure ICAO:</span>${bid.dep}</div>
            <div class="bid-arr"><span class="title">Arrival ICAO: </span>${bid.arr}</div>
*/

//adding flight icr
if(airline === "Saudia"){
    icr = "SVA";
}

else{
    //do nothing
}