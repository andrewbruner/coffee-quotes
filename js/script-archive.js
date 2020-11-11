let intervalTimer;

let currentQuoteIndex = null;

const quotes = [
    {
        quote: `I'd rather take coffee than compliments just now.`,
        source: 'Louisa May Alcott',
    },
    {
        quote: `Coffee is a beverage that puts one to sleep when not drank.`,
        source: 'Alphonse Allais',
    },
    {
        quote: `Without my morning coffee, I'm just like a dried-up piece of goat.`,
        source: 'J.S. Bach',
    },
    {
        quote: `It is inhumane, in my opinion, to force people who have a genuine medical need for coffee to wait in line behind people who apparently view it as some kind of recreational activity.`,
        source: 'Dave Barry',
    },
    {
        quote: `I would rather suffer with coffee than be senseless.`,
        source: 'Napoleon Bonaparte',
    },
    {
        quote: `As long as there was coffee in the world, how bad could things be?`,
        source: 'Cassandra Clare',
    },
    {
        quote: `I have measured out my life with coffee spoons.`,
        source: 'T.S. Eliot',
    },
    {
        quote: `It's amazing how the world begins to change through the eyes of a cup of coffee.`,
        source: 'Donna A. Favors',
    },
    {
        quote: `I never laugh until I've had my coffee.`,
        source: 'Clark Gable',
    },
    {
        quote: `Caffeine and sugar, the two basic food groups.`,
        source: 'Laurell K. Hamilton',
    },
    {
        quote: `Coffee first. Schemes later.`,
        source: 'Leanna Renee Hieber',
    },
    {
        quote: `Why, yes, I could start my day without coffee. But I like being able to remember things like how to say words and put on pants.`,
        source: 'Nanea Hoffman',
    },
    {
        quote: `Way too much coffee. But if it weren't for the coffee, I'd have no identifiable personality whatsoever.`,
        source: 'David Letterman',
    },
    {
        quote: `But even a bad cup of coffee is better than no coffee at all.`,
        source: 'David Lynch',
    },
    {
        quote: `The powers of a man's mind are directly proportional to the quantity of coffee he drinks.`,
        source: 'Sir James MacKintosh',
    },
    {
        quote: `Coffee connects us in so many ways – to each other, to our senses, and to the earth that supports the coffee trees.`,
        source: 'Rohan Marley',
    },
    {
        quote: `Behind every successful woman is a substantial amount of coffee.`,
        source: 'Stephanie Piro',
    },
    {
        quote: `I never drink coffee at lunch. I find it keeps me awake for the afternoon.`,
        source: 'Ronald Reagan',
    },
    {
        quote: `What goes best with a cup of coffee? Another cup.`,
        source: 'Henry Rollins',
    },
    {
        quote: `I believe humans get a lot done, not because we're smart, but because we have thumbs so we can make coffee.`,
        source: 'Flash Rosenberg',
    },
    {
        quote: `We want to do a lot of stuff; we're not in great shape. We didn't get a good night's sleep. We're a little depressed. Coffee solves all these problems in one delightful little cup.`,
        source: 'Jerry Seinfeld',
    },
    {
        quote: `No matter what historians claimed, BC really stood for 'Before Coffee.'`,
        source: 'Cherise Sinclair',
    },
    {
        quote: `Black as the devil, hot as hell, pure as an angel, sweet as love.`,
        source: 'Charles Maurice de Talleyrand',
    },
    {
        quote: `I like my coffee like I like myself: strong, sweet, and too hot for you.`,
        source: 'Jac Vanek',
    },
];


const getRandomQuote = () => {
    let randomNumber = null;
    while (randomNumber == null || randomNumber == currentQuoteIndex) {
        randomNumber = Math.floor(Math.random() * quotes.length);
    }
    currentQuoteIndex = randomNumber;
    return quotes[randomNumber];
};

const printQuote = () => {
    clearInterval(intervalTimer);
    
    const randomQuote = getRandomQuote();
    
    let html = `<p class="quote">${randomQuote.quote}</p>
<p class="source">${randomQuote.source}</p>`;
    
    document.querySelector('#quote-box').innerHTML = html;
    
    intervalTimer = window.setInterval(printQuote, 20000);
};

intervalTimer = window.setInterval(printQuote, 20000);

window.addEventListener('DOMContentLoaded', printQuote);

document.querySelector('#load-quote').addEventListener("click", printQuote);