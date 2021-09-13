const dragableList = document.getElementById('dragable-list');
const checkBtn = document.getElementById('check');

const richestMen=[
    'Russia',
    'Canada',
    'China',
    'United States',
    'Brazil',
    'Australia ',
    'India',
    'Argentina',
    'Kazakhstan',
    'Algeria'
];

const listItems=[];
let dragStartIndex;

createList();

function createList() {
    [...richestMen]
    .map(a =>({ value: a, sort:Math.random() }))
    .sort((a,b)=> a.sort - b.sort)
    .map(a => a.value)
    .forEach((person,index)=>{
        const listItem = document.createElement('li');


        listItem.setAttribute('data-index',index);

        listItem.innerHTML = `
        <span class="number">${index +1}</span>
        <div class="dragable" draggable="true">
        <p class="person">${person}</p>
        <i class="fas fa-grip-lines"></i>
    </div>
        `;

        listItems.push(listItem);
        dragableList.appendChild(listItem);
    });

    addEventListeners();
}

function dragStart() {
    dragStartIndex = +this.closest('li').getAttribute('data-index');
}

function dragEnter() {
    this.classList.add('over');
}

function dragLeave() {
    this.classList.remove('over');
}

function dragOver(e) {
    e.preventDefault();
}

function dragDrop() {
    const dragEndIndex = +this.getAttribute('data-index');

    swapItems(dragStartIndex,dragEndIndex);
    this.classList.remove('over');
}

function swapItems(fromIndex,toIndex) {
    const itemOne = listItems[fromIndex].querySelector('.dragable');
    const itemTwo = listItems[toIndex].querySelector('.dragable');

    listItems[fromIndex].appendChild(itemTwo);
    listItems[toIndex].appendChild(itemOne);
};

function checkOrder() {
    listItems.forEach((listItem, index)=>{
        const personName = listItem.querySelector('.dragable').innerText.trim();
        
        if(personName !== richestMen[index]){
            listItem.classList.add('wrong');
        }
        else{
            listItem.classList.remove('wrong');
            listItem.classList.add('right');

        }
    })
}




function addEventListeners() {
    const draggables = document.querySelectorAll('.dragable');
    const dragListItems = document.querySelectorAll('.dragable-list li');

    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', dragStart)
    });

    dragListItems.forEach(item =>{
        item.addEventListener('dragenter', dragEnter);
        item.addEventListener('dragleave', dragLeave);
        item.addEventListener('dragover', dragOver);
        item.addEventListener('drop', dragDrop);
    });
}

checkBtn.addEventListener('click', checkOrder);