var icr;
var allBids = JSON.parse(localStorage.getItem('bids')) || [];

document.getElementById("bid-container").innerHTML = allBids.map((bid, index) => {
    return `
        <div class="bid">
            <div class="flight-info">${bid.airline}: <span class="flight-no flight time">${bid.flight}</span></div>
            <div class="bid-amount"><span class="title ">Departure: </span><span class="time">${bid.amount}</span></div>
            <div class="date"><span class="date">Departure Date: <span class="time">${bid.date}</span></div>
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

/**
 * Add remaning time to departure
 * Add flight status in future
 * Add delay status in future
 */