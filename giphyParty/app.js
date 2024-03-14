async function getData(userInput) {
    try {
        const response = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=YjDVS3UFbu54KfaRHYy9lHOnGwlu9imK&q=${userInput}&limit=1`); // store value in response, not promise
        console.log(response.data.data[0].images)
        addGiphy(response.data.data[0].images.fixed_height.url); // adds gif
    } catch (e) {
        alert('some error message')
    } 
}

function addGiphy(source) { // add gif to page
    const newGIF = document.createElement('img');
    newGIF.src = source;
    console.log('made it');
    document.getElementById('giphyContainer').append(newGIF); // appends gif to page
}

// initiates gif generation when form is submitted
document.querySelector('#form').addEventListener("submit", function(e) {
    e.preventDefault();
    getData(document.querySelector('#input').value);
})

// removes all gifs from page
document.querySelector('#remove').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('giphyContainer').innerHTML = '';
})

