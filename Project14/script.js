// get all dom elements;
const main = document.getElementById('main');
const btnToggle = document.getElementById('btn-toggle');
const customText = document.getElementById('custom-text');
const close = document.getElementById('close');
const voicesDropdown = document.getElementById('voices');
const textArea = document.getElementById('custom');
const readBtn = document.getElementById('readBtn');


const data = [
    {
        image:'./img/angry.png',
        text: "I'm Angry"
    },
    {
        image:'./img/drink.jpg',
        text: "I'm thirsty"
    },
    {
        image:'./img/food.jpg',
        text: "I'm hungry"
    },
    {
        image:'./img/happy.jpg',
        text: "I'm happy"
    },
    {
        image:'./img/home.jpg',
        text: "I'm at Home"
    },
    {
        image:'./img/hurt.jpg',
        text: "I'm hurt"
    },
    {
        image:'./img/pa2.jpg',
        text: "I'm phantom Assasian"
    },
    {
        image:'./img/antimage.jpg',
        text: "I'm Antimage"
    }
]

function createUiElements(imageObj) {
    const {image , text} = imageObj;
    const div = document.createElement('div');
    div.classList.add('box');
    div.innerHTML=  `
    <img src="${image}" alt="${text}">
    <p class="text-info">${text}</p>
    `
    div.addEventListener('click',()=>{
        setText(text);
        speakText(text);
    })
    main.appendChild(div);
}

const message = new SpeechSynthesisUtterance;
function setText(text) {
    message.text = text;
}

function speakText() {
    speechSynthesis.speak(message);
}

const speech = window.speechSynthesis;

// Function to fetch voices from Web Speech API
function fetchVoices() {
    if(speech.onvoiceschanged !== undefined) {
        speech.onvoiceschanged = () => renderVoices();
    }
};

function renderVoices() {
	const voices = speech.getVoices(); // now should have an array of all voices
    // Get voices from speech synthesis get voices method
    voicesArray = voices;
    // Render voices in the dropdown
    voicesArray.forEach((voice) => {
        console.log(voice);
        let option = document.createElement('option');
        option.textContent = `${voice.name} ${voice.lang}`;
        if ( voice.default ) {
            option.textContent += '(DEFAULT VOICE)';
        }
        option.setAttribute('data-lang', voice.lang);
        option.setAttribute('data-name', voice.name);
        voicesDropdown.appendChild(option);
    })
};

// Fetch voices on initial page load
fetchVoices();


data.forEach(createUiElements);


// Event listners:
btnToggle.addEventListener('click',()=>{
    customText.classList.toggle('show');
})

close.addEventListener('click',()=>{
    customText.classList.remove('show');
})

speechSynthesis.addEventListener('voiceschanged', fetchVoices);

readBtn.addEventListener('click',()=>{
    setText(customText.value);
    speakText();
})