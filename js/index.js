var lastRandomNumber = 0;
var quotesWithAuthor = [

    {
        quote: "“I believe the only way to reform people is to kill 'em.”",
        author: "Carl Panzram"
    },
    {
        quote: "“It strikes me profoundly that the world is more often than not a bad and cruel place.”",
        author: "Bret Easton Ellis, American Psycho"
    },
    {
        quote: "“Try to touch the past. Try to deal with the past. It's not real. It's just a dream.”",
        author: "Ted Bundy"
    },
    {
        quote: "“If you win you need not have to explain...If you lose you should not be there to explain!”",
        author: "Adolf Hitler"
    },
    {
        quote: "“All it comes down to is this: I feel like shit but look great.”",
        author: "Patrick batman"
    },
    {
        quote: "“If I have to have a past then I prefer it to be multiple choice.”",
        author: "Arthur Fleck"
    },
    {
        quote: '"Keep away from trouble and sing to it."',
        author: "Old Egyptian Proverb"
    },
    {
        quote: '"A beautiful thing is never perfect."',
        author: 'Ancient Egyptian Proberb'
    },

];

function generateQuote() {
    var cartona = "";
    var newRandomNumber = Math.floor(Math.random() * (quotesWithAuthor.length));
    if (newRandomNumber != lastRandomNumber) {
        cartona += ` <p id="quote" class="center">${quotesWithAuthor[newRandomNumber].quote}</p>
        <p id="author" class="center fw-bolder">-- ${quotesWithAuthor[newRandomNumber].author}</p>`;

        lastRandomNumber = newRandomNumber;
        document.getElementById("gernatedQuote").innerHTML = cartona;
    } else {
        generateQuote();
    }
}