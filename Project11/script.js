// Get Dom Elements
const loader = document.getElementById('loader');
const filter = document.getElementById('filter-container');
const newsContaiter = document.getElementById('News-feed-container');

// Global Variables:
let limit = 5;
let page = 1;

async function fetchPost() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`);
    const data = await res.json();
    return data;
};

async function renderPost() {
    const posts = await fetchPost();
    posts.forEach( post => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');

        postDiv.innerHTML =  `
        <div class="post-id" id="post-id">${post.id}</div>
        <div class="post-content" id="post-content">
        <h2 class="post-title">${post.title}</h2>
        <p class="post-body">${post.body}</p>
    </div>        
        `;
        // Render in news feed container
        newsContaiter.appendChild(postDiv);
      
    });

};

// function to render css animation
function ShowLoader() {
    loader.classList.add('show');
    page++;
    renderPost()
    loader.classList.remove('show');

};

function filterContent(e) {
    const filter = e.target.value.toLowerCase();
    const posts = document.querySelectorAll('.post');
   
    posts.forEach( post =>{
        const title = post.querySelector(".post-title").innerText;
        const body = post.querySelector(".post-body").innerText;
        
        if(title.indexOf(filter) >= 0 || body.indexOf(filter) >= 0){
            post.style.display = 'flex';
        }
        else{
            post.style.display = 'none';

        }
    })
};

window.addEventListener('scroll', ()=> {
    const {scrollTop,scrollHeight,clientHeight} = document.documentElement;
    
    if(scrollTop+clientHeight >= scrollHeight-1){
        ShowLoader();
       
    };
    
});//

filter.addEventListener('input',filterContent);

renderPost();

