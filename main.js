function add_bid(){
    var allbids = JSON.parse(localStorage.getItem('bids')) || [];
    var airline = document.getElementById("airline").value;
    var flight = document.getElementById("flightno").value;
    var amount = document.getElementById("deptime").value;
    var timestamp = Math.floor(Date.now() / 1000);
    var route  = document.getElementById("route").value;
    var aircraft = document.getElementById("aircraft").value;
    var reg = document.getElementById("reg").value;
    var dep = document.getElementById("depicao").value;
    var arr = document.getElementById("arricao").value;
    var randomId = Math.floor(Math.random() * 1000000000); 
    var etf = document.getElementById("eft").value

    var bid = {
        airline: airline,
        flight: flight,
        amount: amount,
        timestamp: timestamp,
        route: route,
        aircraft: aircraft,
        reg: reg,
        dep: dep,
        arr: arr,
        etf: etf,
        id: randomId
    };

    alert("Bid added successfully!");

    allbids.push(bid);
    localStorage.setItem('bids', JSON.stringify(allbids));
}