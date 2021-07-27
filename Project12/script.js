// get dom elements:
const word = document.getElementById('word');
const userWord = document.getElementById('user-word');
const timeElement = document.getElementById('time');
const scoreElement = document.getElementById('score');
const settingBtn = document.getElementById('setting-btn');
const settingContainer = document.getElementById('settings');
const formContainer = document.getElementById('form');
const difficultyDropdown = document.getElementById('difficulty');
const gameoverContainer = document.getElementById('gameover');


let words = [
    'well-groomed','damage','condition','plausible','disgusting','steady','instruct','authority','precious','tasteless','hop','wealth','suck','interest','absorbing','spill','day','beds','fireman','arithmetic','airplane','paltry','useful','numberless','infamous','mom','wretched','roomy','preach','announce','spiky','trite','fade','awesome','flat','twig','hard-to-find','green','search','recognise','argue','grandiose','connection','whine','fierce','jail','madly','pan','snail','rain','base','savory','bit','wait','private','earn','weather','lush','blind','female','amusing','charming','uneven','suffer','lame','various','army','needle','yard','scarf','zany','act','spy','fry','loaf','prickly','jazzy','treatment','concerned','glorious','hallowed','accept','arch','enter','hydrant','peace','flame','plot','spark','strong','label','nimble','general','transport','wrathful','tall','incompetent','grease','grieving','groovy','cruel','settle','peck','faithful','escape','rose','science','color','psychedelic','scream','symptomatic','pipe','two','cross','occur','paste','size','long-term','lucky','absorbed','known','sour','hapless','art','brush','hot','scatter','knot','sincere','modern','superficial','tiresome','distinct','tease','cheer','exist','ladybug','ship','cheap','ratty','leather','bridge','voice','wrong','pushy','cloistered','company','slope','safe','remind','moor','middle','wholesale','unbecoming','confuse','shocking','sweater','porter','grip','special','use','pause','duck','bounce','fat','tray','mass','squealing','scintillating','uttermost','waves','pop','pale','greet','disarm','premium','perform','nine','twist','invite','deadpan','reach','box','well-to-do','afterthought','vessel','moan','happen','military','gusty','handsomely','furniture','inject','lazy','reproduce','cobweb','fix','replace','name','aspiring','doubt','town','poor','cub','anxious','excited','distribution','sugar','muddle','committee','afford','flimsy','married','tap','scrawny','flesh','terrible','steel','crib','valuable','quick','stove','boring','bucket','ultra','sore','hang','ball','innocent','boiling','mean','stretch','glue','decision','bird','contain','deafening','steep','stitch','dirty','lewd','friendly','adjoining','interrupt','straight','thin','ambiguous','peel','grandmother','meddle','fine','cough','adhesive','mist','yellow','friend','industry','stay','majestic','crowd','quince','diligent','fuel','cycle','gullible','prepare','zesty','rabbit','squalid','trip','trees','didactic','fair','fuzzy','massive','therapeutic','ink','dinner','quickest','elated','system','birth','hover','unaccountable','hope','roasted','reply','sloppy','little','bed','whistle','skate','burn','shallow','seemly','hook','beam','adjustment','spell','marry','grotesque','dazzling','five','ruthless','odd','introduce','jagged','push','itchy','elfin','correct','wall','scribble','thumb','plants','smart','blot','point','shrug','divergent','giddy','unite','gold','curvy','writer','shelf','caring','dangerous','pine','colour','insect','hand','hall','collar','certain','silky','educated','bubble','wren','calendar','fetch','canvas','inquisitive','ugly','mysterious','joke','coast','offbeat','laugh','decisive','stupid','elastic','jump','educate','unhealthy','striped','merciful','mess up','route','expand','gun','structure','vanish','tax','fold','soak','overjoyed','tasty','rat','angle','somber','light','prevent','obedient','eggs','error','overflow','want','snatch','visitor','bell','guess','chin','round','mint','old-fashioned','mountainous','dysfunctional','irritating','unruly','grateful','battle','dull','slim','pour','pleasure','natural','unused','cactus','whirl','scared','repeat','erratic','laborer','texture','food','connect','truculent','pancake','bolt','hospitable','deliver','receipt','chicken','sparkling','territory','gamy','wide','regret','depend','tree','meat','dolls','gainful','taste','love','handy','axiomatic','encouraging','amused','wound','paper','impress','overt','drunk','toothsome','shelter','yam','separate','limping','ignorant','ambitious','evanescent','apathetic','spoon','copper','mindless','turkey','frantic','deserted','yell','avoid','expert','volleyball','tow','reign','ethereal','skin','pointless','button','plough','brake','marked','mere','oatmeal','thrill','gaudy','flow','voyage','shock','water','milk','behave','cause','defiant','adamant','crayon','impossible','outrageous','mine','stamp','observation','zonked','drain','tug','fog','quill','delicate','veil','share','knowledgeable','mourn','yarn','purpose','cushion','fretful','creepy','excellent','probable','unit','book','quiver','mix','impulse','bruise','knowing','wood','important','line','smooth','repair','alluring','request','quicksand','magnificent','vest','sign','depressed','lopsided','shoe','spicy','horrible','worthless','haircut','hanging','mouth','yawn','frame','vase','acceptable','even','towering','trot','black','nervous','answer','measure','post','rock','voiceless','approval','holistic','foot','business','sudden','obsequious','humor','sulky','psychotic','calculate','decide','spare','scissors','chickens','clean','cry','blade','receptive','heady','knife','need','tick','fruit','iron','tip','snore','vague','waggish','gray','scale','cuddly','rough','frightened','shoes','screeching','miss','whole','cattle','fancy','bent','well-made','sort','cool','nest','wrestle','royal','retire','rail','drink','handsome','coherent','crawl','basketball','punch','wax','jumbled','compare','trucks','expect','own','wheel','common','team','spotty','nail','table','stare','cheat','baseball','acoustics','page','conscious','order','grate','selective','nonstop','periodic','boil','invention','appliance','shut','celery','torpid','fairies','self','satisfying','six','relation','hole','edge','visit','pin','show','clover','protect','automatic','lock','loose','orange','lumpy','carriage','ghost','ubiquitous','intend','design','pigs','temporary','happy','root','obey','disapprove','perfect','chemical','print','trail','mountain','belief','potato','sprout','thing','fire','befitting','pizzas','underwear','selfish','physical','difficult','cat','exchange','berry','husky','rural','mixed','mundane','faint','office','amusement','ragged','illegal','repulsive','noxious','discussion','guarded','lovely','aback','suggest','star','reject','baby','thought','keen','pail','living','airport','faulty','pretty','morning','spurious','embarrass','sedate','substantial','polish','loving','examine','solid','brother','clear','hurt','cows','awful','snobbish','homeless','vulgar','bad','insurance','object','aberrant','lacking','rabid','offer','reward','used','pricey','creature','tie','far','nebulous','cure','fasten','cautious','boot','ordinary','kindhearted','scientific','wild','heartbreaking','anger','blink','dinosaurs','current','complete','puffy','ground','purring','film','silent','mind','release','heap','sail','high-pitched','earth','yoke','melodic','changeable','crabby','wiry','carpenter','bare','stereotyped','scary','adorable','kindly','ashamed','volcano','inexpensive','watery','homely','vacation','literate','onerous','try','harsh','nifty','pig','wipe','gifted','childlike','grape','possess','trains','snow','damaged','finicky','war','flood','miscreant','reminiscent','bleach','passenger','amuck','eatable','beneficial','lunch','paint','political','envious','suppose','festive','punish','wash','letters','station','charge','mend','capricious','rake','race','appreciate','heavy','drown','full','complex','tight','home','car','salty','tidy','wandering','list','ripe','abandoned','youthful','knee','glossy','joyous','sink','graceful','flap','smoggy','salt','tenuous','advice','mate','hug','land','thoughtless','rabbits','servant','spiders','half','loutish','brainy','addicted','lying','roll','raspy','quaint','shrill','river','whisper','chop','price','slip','rampant','ray','dress','breakable','fantastic','wonderful','second','thirsty','compete','woman','machine','icky','memory','public','elbow','amount','rightful','surround','fall','rare','overrated','heal','concentrate','queue','unknown','unwritten','careful','knowledge','animal','telephone','sound','plate','cats','able','attend','marble','lighten','robin','clip','bone','dry','reading','mushy','unadvised','parched','toy','shade','obnoxious','abrasive','notebook','agreement','perpetual','needless','alive','remarkable','risk','fallacious','sheep','hate','like','womanly','smoke','super','wise','oil','prick','partner','debt','cute','pray','sweet','hideous','chew','alike','powder','part','tawdry','dynamic','tightfisted','stream','entertaining','flight','concern','null','tame','bat','fax','tearful','bizarre','plastic','big','rapid','steam','person','fixed','approve','carve','winter','abortive','eight','guarantee','bee','branch','rustic','heat','boat','reflect','standing','please','easy','stew','deranged','dapper','foamy','agreeable','abject','obeisant','scent','trick','tacit','snake','abiding','night','linen','temper','include','cream','bells','zealous','splendid','irate','fabulous','wacky','behavior','manage','umbrella','dramatic','burst','key','cultured','flagrant','tank','ahead','vast','agree','cumbersome'
];

// placeholder for selected words
let randomWords;

// initilize score:
let score = 0;

// Initilize time:
let time = 10;

// initilize difficulty:
let difficulty = localStorage.getItem('difficulty') !==null ? localStorage.getItem('difficulty') : 'easy';
// render the value for difficulty in difficulty dropdown
difficultyDropdown.value =  localStorage.getItem('difficulty') !==null ? localStorage.getItem('difficulty') : 'easy';

// when page load autometically focus on user input field:
userWord.focus();

// function to generate a random word from word array:
function generateword() {
    const generateword = words[Math.floor(Math.random() * words.length)];
    return generateword;
}

// function to render new word:
function renderWord() {
    randomWords= generateword();
    word.innerHTML = randomWords;
}

// function to incriment score:
function incrimentscore() {
    score++;
    //update score in dom:
    scoreElement.innerHTML = score;
}

// start timer countdown:
const timeInterval = setInterval(decrimentTimer,1000);

// function to decrement the timer by 1:
function decrimentTimer() {
    time--;
    //render new time in dom
    timeElement.innerHTML = time;
    //check if time reaches 0
    if(time === 0){
        //stop set interval function to decrement timer:
        clearInterval(timeInterval);
        //Display the game over container:
        gameover();
    }
}

// function to display the game over container:
function gameover() {
    gameoverContainer.style.display= "flex";
    // update the content to diplay in gameover container:
    gameoverContainer.innerHTML = `
            <h1>Game Over</h1>
            <h3>Good game! your score is ${score}</h3>
            <button onclick="location.reload()">
        <i class="fas fa-sync-alt fa-2x"></i>
    </button>  
    `
};






// Event Listners:
//1.Listen for input
userWord.addEventListener('input', e=>{
    const userdata = e.target.value;

    if(userdata === randomWords){
        renderWord();
        //incriment score:
        incrimentscore();
        //clear the user input field
        e.target.value = '';
        // check the difficulty settings:
        if(difficulty === 'easy'){
            time+=3;
        }
        else if(difficulty === 'medium'){
            time+= 2;
        }
        else{
            time+=1;
        }
        timeElement.innerHTML = time;
    }
});

//2. Listen for a click on setting button:
settingBtn.addEventListener('click', ()=> settingContainer.classList.toggle('hide'));

//3. Listen for a change in difficulty:
difficultyDropdown.addEventListener('change', e=>{
    difficulty = e.target.value;
    // use local storage to save difficulty options:
    localStorage.setItem('difficulty',difficulty);
    console.log(difficulty);
});

renderWord();