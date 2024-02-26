//Основна інфа
const voteContainer = document.getElementById('vote-container');
const emojis = ['💕', '😁', '😢', '👍', '😂']; //Які емоджі будуть
let votes = [0, 0, 0, 0, 0]; //Базові голоси

//Функція, яка обробляє по клікам
function updateVotes() {

    voteContainer.innerHTML = '';

    for (let i = 0; i < emojis.length; i++) {

        const emoji = document.createElement('span');
        emoji.textContent = emojis[i];

        //Цей код додає подію click до елемента emoji
        emoji.addEventListener('click', () => {
            votes[i]++;
            updateVotes();
        });

        voteContainer.appendChild(emoji);

        //Зберігання та внесення нового вмісту
        const voteCount = document.createElement('span');
        voteCount.textContent = votes[i];
        voteContainer.appendChild(voteCount);
    }
}

updateVotes();silverkiller472