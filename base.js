const picturesGallery = document.querySelector('.pictures');
const pictures = picturesGallery.querySelectorAll('section');
const thumbnailsContainters = document.querySelector('.thumbnails');
const pucturesCount = pictures.length;
const slideWidth = 540;

const highlightThumbnail = () => {
    thumnailsContainers
        .querySelectorAll('section.hilighted')
        .forEach (el => el.classList.remove('highlighted'));
    const index = Math.floor(picturesGallery.scrollLeft / slideWidth);
    thumbnailsContainters
        .querySelector('div[data-id="${index}"]')
        .classList.add('highlighted');
};

const scrollToElement = el => {
    const index = parsInt(el.dataset.id,10);
    picturesGallery.scrollTo(index * slideWidth, 0);
};

thumbnailsContainters.innerHTML += [...pictures]
    .map((pictures, i) => '<section data-id="${i}"></section>')
    .join('');


thumbnailsContainters.querySelectorAll('div').forEach(el => {
    el.addEventListener('click', () => scrollToElement(el));
})