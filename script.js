const submitDiv = document.querySelector('#submitDiv');
const output = document.querySelector('#output');

submitDiv.addEventListener('click', (e)=>
{
    e.preventDefault();
    getApi();
});

function getApi() 
{
    fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=1`)
    .then(res => res.json())
    .then(data =>
    {
        output.innerHTML = '';
        data.cards.forEach(info =>
            {
                output.innerHTML += `
                <p>Value: ${info.value}</p>
                <p>Suit: ${info.suit}</p>
                <div>Image: <img src="${info.image}"></div>
                `;
            });
    })
    .catch(err => console.log(err))
};
