import {httpGetMethod} from './utils/data-fetcher.js'
import {displayData} from './views/display.js'

var API_KEY = "3OSINQY6SLPERUTJ";



document.querySelector('form.frm-symbol').addEventListener('submit',function(){
    var symbol = document.querySelector("input#symbol").value;
    const result = httpGetMethod(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`);
    let display = document.querySelector("section.display");
    result.then(data=> displayData(display,data));

    
    event.preventDefault()
})


