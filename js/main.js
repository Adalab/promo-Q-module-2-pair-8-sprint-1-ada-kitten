'use strict'

const jsNew = document.querySelector('.js-new-form'); 
jsNew.classList.remove("collapsed");
const plus = document.querySelector('.fa-plus-circle');
const addButton = document.querySelector('.js-btn-add');
const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const inputRace = document.querySelector('.js-input-race');
const labelMesageError = document.querySelector('.js-label-error');
const descripSearch = document.querySelector('.js_in_search_desc')
const breedSearch = document.querySelector('.js-input-breed');
const searchButton = document.querySelector('.js-search-button');
const labelSearch = document.querySelector('.js-label-error-search');
const buttonCancelForm = document.querySelector('.js-btn-cancel');
const input = document.querySelector('.input');


function renderKitten(inputPhoto, inputDesc, inputName, inputRace) {
    let valuePhoto = inputPhoto.value;
    let valueDesc = inputDesc.value;
    let valueName = inputName.value;
    let valueRace = inputRace.value;
    
const KittenAdd = `<li class="card">
<article>
<img class ="card_img" src="${valuePhoto}" alt="gatito"/>
<h3 class="card_title">${valueName}</h3>
<h4 class="card_race">${valueRace}</h4>
<p class="card_description">${valueDesc}</p>
</article>
</li>`; 
jsList.innerHTML += KittenAdd;
}





plus.addEventListener("click", (event) => {
    jsNew.classList.toggle("collapsed");
    
});

addButton.addEventListener("click", (event) => {
    event.preventDefault()
    const valueDesc = inputDesc.value;
    const valuePhoto = inputPhoto.value;
    const valueName = inputName.value;

if (valueDesc === '' || valuePhoto === '' || valueName === '') {
    labelMesageError.innerHTML = "<p>Completa los campos obligatorios</p>";
}
else {renderKitten (inputPhoto, inputDesc, inputName, inputRace);

}

});


/* buttonCancelForm.addEventListener("click", (event) => {
    event.preventDefault();
    if (valueName === '') {
        valueName.innerHTML = '';
    }
});

 */
/* $(".any-button").click(function() {

    $("form")[0].reset();

});
 */


searchButton.addEventListener("click", (event) => {
    event.preventDefault()
    const valueDescrip = descripSearch.value;
    const valueSearch = breedSearch.value;
   
if (valueDescrip === '' || valueSearch === '') {
    labelSearch.innerHTML = "<p>Completa los campos obligatorios</p>";
}
})


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
<p class="card_description">${pTextOne}</p>
</article>
</li>`; 

const kittenTwo = `<li class="card"> 
<article>
<img class="card_img" src="${photoCatTwo}" alt="gatito"/>
<h3 class="card_title">${nameCatTwo}</h3>
<h4 class="card_race">${breedCatTwo}</h4>
<p class="card_description">${pTextTwo}</p>
</article>
</li>`; 


const kittenThree = `<li class="card"> 
<article>
<img class="card_img" src="${photoCatThree}" alt="gatito"/>
<h3 class="card_title">${nameCatThree}</h3>
<h4 class="card_race">${breedCatThree}</h4>
<p class="card_description">${pTextThree}</p>
</article>
</li>`; 

jsList.innerHTML = kittenOne + kittenTwo + kittenThree;

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


