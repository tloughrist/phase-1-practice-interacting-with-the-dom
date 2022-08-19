const pauseBtn = document.querySelector('#pause');
const plusBtn = document.querySelector('#plus');
const minusBtn = document.querySelector('#minus');
const likeBtn = document.querySelector('#heart');
const submitBtn = document.querySelector('#submit');
const restartBtn = document.createElement('button');
const counter = document.querySelector('#counter');
const likeList = document.querySelector('ul');
const commentList = document.createElement('ul');

//Timer, pause, unpause functionality
pauseBtn.classList.add('depressed');

const timer = setInterval( () => {
    if(pauseBtn.classList.contains('depressed')) {
        counter.textContent++;
    }
}, 1000);

pauseBtn.addEventListener('click', () => {
    if(pauseBtn.classList.contains('depressed')) {
        pauseBtn.classList.remove('depressed');
        pauseBtn.textContent = 'resume';
        plusBtn.disabled = true;
        minusBtn.disabled = true;
        likeBtn.disabled = true;
        submitBtn.disabled = true;
        restartBtn.disabled = true;
    } else {
        pauseBtn.classList.add('depressed');
        pauseBtn.textContent = 'pause';
        plusBtn.disabled = false;
        minusBtn.disabled = false;
        likeBtn.disabled = false;
        submitBtn.disabled = false;
        restartBtn.disabled = false;
    }
});

//Timer, increment +/- functionality
plusBtn.addEventListener('click', () => counter.textContent++);
minusBtn.addEventListener('click', () => counter.textContent--);

//Like counter functionality
likeBtn.addEventListener('click', () => {
    let testItem = document.getElementById(`count${counter.textContent}`);
    if(testItem === null) {
        let listItem = document.createElement('li');
        listItem.id = `count${counter.textContent}`;
        listItem.dataset.count = '2';
        listItem.textContent = `${counter.textContent} has been liked 1 time`;
        likeList.appendChild(listItem);
    } else if(testItem !== null) {
        testItem.textContent = `${counter.textContent} has been liked ${testItem.dataset.count++} times`;
    }
});

//Restart Button functionality
restartBtn.id = 'restart';
restartBtn.textContent = ' restart ';
pauseBtn.after(restartBtn);
pauseBtn.after(' ');

restartBtn.addEventListener('click', () => counter.textContent = '0');

//Comment functionality
commentList.id = 'comment-list';
document.querySelector('#list').appendChild(commentList);

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let commentListItem = document.createElement('li');
    commentListItem.textContent = document.querySelector('#comment-input').value;
    commentList.appendChild(commentListItem);
})
