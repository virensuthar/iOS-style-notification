const lis = Array.from(document.querySelectorAll('li'));
const li = lis[0];

function getOpacity(i) {
    return (i * 10) / 100;
}

function getHeight(li) {
    return li.getBoundingClientRect().height;
}

function getStackedTop(i) {
    return `${3 * i}px`;
}

lis.forEach((li, i) => {
    li.style['z-index'] = -i;
    li.style.top = getStackedTop(i);
    li.style.opacity = i > 0 ? getOpacity(i) : 1;
});

li.addEventListener('click', function () {
    lis.forEach((li, i) => {
        const isOpen = this.classList.contains('open');
        const height = getHeight(li);
        li.style.top = isOpen ? getStackedTop(i) : `${(height + 5) * i}px`;
        li.style.opacity = isOpen && i > 0 ? getOpacity(i) : 1;
    });
    this.classList.toggle('open');
});