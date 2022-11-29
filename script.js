const quote = document.querySelector('q');

// console.log(quote.innerHTML);
const header = document.querySelector('header');

const button = document.querySelector('button');

// let advObj;



const fetchQuote = function(){

    fetch('https://api.adviceslip.com/advice')
    .then(res=>res.json())
    .then(data =>{
        const quoteText = data.slip.advice;
        const num = data.slip.id;

        // header.innerHTML(`ADVICE #${num}`);
        quote.innerHTML = quoteText;
        header.innerHTML = `ADVICE #${num}`;
    });

};


button.addEventListener('click', fetchQuote);