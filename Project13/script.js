// get dom elements:
const addcardBtn = document.getElementById('add-card');
const removecardBtn = document.getElementById('remove-card');
const cardcontainer = document.getElementById('card-container');
const preBtn = document.getElementById('previous-btn');
const currentCardNav = document.getElementById('current-card');
const nextBtn = document.getElementById('next-btn');
const addCardContainer = document.getElementById('add-card-container');
const cancelBtn = document.getElementById('cancel');
const question = document.getElementById('question');
const answer = document.getElementById('answer');
const submit = document.getElementById('submit');

let currentCardId = 0;
let cards = [];

let cardData = getCardData();