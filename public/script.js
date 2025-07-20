//Navigation ------------------------------------------------------------//
const searchLink = document.getElementById('searchLink');
const listenLink = document.getElementById('listenLink');
const searchContainer = document.querySelector('.search-container');
const mainContainer = document.querySelector('.main-container');
const playerContainer = document.querySelector('.player-container');
const queueContainer = document.querySelector('.queue-container');

searchLink.addEventListener('click', navigateToSearch);
listenLink.addEventListener('click', navigateToPlayer);

function navigateToSearch(){
    searchContainer.style.display = 'flex';
    mainContainer.style.display = 'flex';
    playerContainer.style.display = 'none';
    queueContainer.style.display = 'none';
    searchLink.classList.add('selected');
    listenLink.classList.remove('selected');
}

function navigateToPlayer(){
    searchContainer.style.display = 'none';
    mainContainer.style.display = 'none';
    playerContainer.style.display = 'flex';
    queueContainer.style.display = 'flex';
    searchLink.classList.remove('selected');
    listenLink.classList.add('selected');
}