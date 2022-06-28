'use strict'

const jsNew = document.querySelector('.js-new-form'); 
jsNew.classList.remove("collapsed");
const plus = document.querySelector('.fa-plus-circle');

plus.addEventListener("click", (event) => {
    jsNew.classList.add("collapsed");
    
});

plus.addEventListener("click", (events) => {
    jsNew.classList.remove ("collapsed");
    
});

const jsList = document.querySelector('.js-list');

const nameCatOne = 'Anastacio';
const photoCatOne = 'https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg';
const pTextOne = 'sociable, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!';
const breedCatOne = 'British Shorthair'; 

const nameCatTwo = 'Fiona';
const photoCatTwo = 'https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg';
const pTextTwo = 'alegre, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!';
const breedCatTwo = 'British Shorthair'; 

const nameCatThree = 'Cielo';
const photoCatThree = 'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg';
const pTextThree = 'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!';
const breedCatThree = 'British Shorthair'; 



const kittenOne = `<li class="card"> 
<article>
<img class="card_img" src="${photoCatOne}" alt="gatito"/>
<h3 class="card_title">${nameCatOne}</h3>
<h4 class="card_race">${breedCatOne}</h4>
<p class="card_description">${pTextOne}/p>
</article>
</li>`; 

const kittenTwo = `<li class="card"> 
<article>
<img class="card_img" src="${photoCatTwo}" alt="gatito"/>
<h3 class="card_title">${nameCatTwo}</h3>
<h4 class="card_race">${breedCatTwo}</h4>
<p class="card_description">${pTextTwo}/p>
</article>
</li>`; 


const kittenThree = `<li class="card"> 
<article>
<img class="card_img" src="${photoCatThree}" alt="gatito"/>
<h3 class="card_title">${nameCatThree}</h3>
<h4 class="card_race">${breedCatThree}</h4>
<p class="card_description">${pTextThree}/p>
</article>
</li>`; 

// jsList.innerHTML = kittenOne + kittenTwo + kittenThree;

const input_search_desc = document.querySelector('.js_in_search_desc');
const descrSearchText = input_search_desc.value;

if( pTextOne.includes("sociable") ) {
    jsList.innerHTML += kittenOne;
}

if( pTextTwo.includes("sociable") ) {
    jsList.innerHTML += kittenTwo;
}

if( pTextThree.includes("sociable") ) {
    jsList.innerHTML += kittenThree;
}

