'use strict'



const searchImages = async(text) => {
    const key = '27608985-0d87b3a9fa48e4bd5f42be25d';
    const url = `https://pixabay.com/api/?key=${key}&q=${text}`;
    const response = await fetch(url);
    return response.json();
}

const loadGallery = async (text) => {
    const imagesInfo = await searchImages(text);
    console.log(imagesInfo);
}

const handleKeypress = ({key, target}) => {
    if (key === 'Enter') {
        loadGallery(target.value);
    }
}

document.querySelector('#search-input').addEventListener('keypress', handleKeypress);