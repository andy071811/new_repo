let navButtons = document.querySelector('a');

const hoverOver = () => {
    navButtons.target.style.backgroundColor = 'white';
    navButtons.target.style.color = 'white';
};

navButtons.addEventListener('mouseover', hoverOver)