let numberCount = 0;
let counter = setInterval(() => {
    if(numberCount < 101){
        const number = document.querySelector('.number');
        const barline = document.querySelector('.barline');
        number.textContent = `${numberCount}%`
        barline.style.width = `${numberCount}%`; 
        numberCount++;
    }
    else{
        clearInterval(counter);
        const loading = document.querySelector('.loading');
        loading.classList.add('bhaag');
    }
     //niche jo 40 likha hai uska mtlb 5 seconds hai wahan time barha sakte hein
}, 40)
