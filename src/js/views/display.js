function displayData(displayField,data){
    let symbol = data["Global Quote"]["01. symbol"];
    let price = data["Global Quote"]["05. price"];
    let date = data["Global Quote"]["07. latest trading day"];
    let high = data["Global Quote"]["03. high"];
    let low = data["Global Quote"]["04. low"];
    let change = data["Global Quote"]["09. change"];
    displayField.querySelector('.symbol').innerHTML = symbol;
    displayField.querySelector('.price').innerHTML = "$"+price;
    displayField.querySelector('.date').innerHTML = date;
    displayField.querySelector('.high').innerHTML = "$"+high;
    displayField.querySelector('.low').innerHTML = "$"+low;
    displayField.querySelector('.change').innerHTML = change;
    
}

export {displayData}