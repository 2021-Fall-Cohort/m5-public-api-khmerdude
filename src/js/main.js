const searchNameButton = document.getElementById("submit");
const divContainer = document.querySelector(".container")
const Name = document.getElementById("name")
const yodaTranslateButton = document.getElementById("translate");


const appDiv = document.getElementById("app");
const starWarsBaseURL ="https://swapi.dev/api/";
const characterURL ="https://swapi.dev/api/people/";

searchNameButton.addEventListener("click", function(){
  const characterName = document.getElementById("characterName").value;
  const characterSearchURL = `https://swapi.dev/api/people/?search=${characterName}`;
  console.log(characterSearchURL);
  fetch(characterSearchURL).then(response => response.json()).then(data => {
  console.log("fired fetch")
  const {results, response} = data;
  const currentChild=document.getElementById("placeholderInfo");
characterSection.removeChild(characterInfo);
let list = document.createElement("ul");
list.id = "characterInfo";
let item = document.createElement("li");
item.id = "placeholderInfo";
list.appendChild(item);

for(let i =0; i< results.length; i++){
    let item = document.createElement("li");
    item.id = "placeholderInfo";
    item.innerHTML = `
    <div class="characterNameContainer">
    <h3 id="details">${results[i].name}</h3>
    </div>

    <div class="characterDetailsContainer">
    <p id="details"><label>Height: </label>${results[i].height}</p>
    <p id="details"><label>Hair Color: </label>${results[i].hair_color}</p>
    <p id="details"><label>Skin Color: </label>${results[i].skin_color}</p>
    <p id="details"><label>Eye Color: </label>${results[i].eye_color}</p>
    <p id="details"><label>Birth Year: </label>${results[i].birth_year}</p>
    </div>
    `;
    list.appendChild(item);
   
}

characterSection.appendChild(list);



console.log(data)
  });
});


yodaTranslateButton.addEventListener("click", function(){
  const yodaTranslator = document.getElementById("yodaTranslator").value;
  const yodaElement = document.getElementById("yodaSection")
  const yodaTranslatorURL = `https://api.funtranslations.com/translate/yoda.json`;
  newURL = `${yodaTranslatorURL}?text=${yodaTranslator}`
  console.log(yodaTranslatorURL);
  fetch(newURL).then(response => response.json()).then(data => {
  console.log(data)
  yodaElement.innerHTML = data.contents.translated


});
});
