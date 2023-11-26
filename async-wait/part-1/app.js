let favNumber = 5; 
let baseURL = "http://numbersapi.com"; 

async function favNumRequest() {
    let data = await $.getJSON(`${baseURL}/${favNumber}?json`);
    console.log(data); 
}
favNumRequest(); 

const favNumbers = [7, 11, 22]; 
async function multNumRequest(){
    let data = await $.getJSON(`${baseURL}/${favNumbers}?json`); 
    console.log(data); 
}
multNumRequest(); 

async function factsFromFavNum() {
    let facts = await Promise.all(
        Array.from({ length: 4 }, () => $.getJSON(`${baseURL}/${favNumber}?json`))
        );
  facts.forEach(data => {
    $('body').append(`<p>${data.text}</p>`);
  });
}
factsFromFavNum(); 