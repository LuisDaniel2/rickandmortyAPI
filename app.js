// traer el input de entrada 

const txtCharacter = document.getElementById('txt-character');

// traer contenedor de las cartas

const containerCards = document.getElementById('containerCards');

// traer la URL1

const URL1 = "https://rickandmortyapi.com/api/character"

// segunda URL2

const URL2 = "https://rickandmortyapi.com/api/character/?name="

// obtener API

const getApi = async (URL) => {
  const response = await fetch(URL);
  const data = await response.json();

  return data.results;
}

// crear la funcion encargada para crear las cards

const createCards = ( character ) => {
  const card = document.createElement('div');
  card.classList.add('card-character');
  
  const imgCard = document.createElement('img');
  imgCard.src = character.image;
  imgCard.alt = character.name;

  const containerDescription = document.createElement('div');
  containerDescription.classList.add('description-card')

  const nameCharacter = document.createElement('h2');
  nameCharacter.textContent = character.name;

  const genderCharacter = document.createElement('p');
  genderCharacter.textContent = "Gender: " + character.gender;

  const statusCharacter = document.createElement('p');
  statusCharacter.textContent = "Status: " + character.status;

  const speciesCharacter = document.createElement('p');
  speciesCharacter.textContent = "Species: " + character.species;

  // elaboracion y poner hijos en sus respectivos lugares

  containerDescription.appendChild (nameCharacter);
  containerDescription.appendChild (genderCharacter);
  containerDescription.appendChild (statusCharacter);
  containerDescription.appendChild (speciesCharacter);



  card.appendChild (imgCard);
  card.appendChild (containerDescription);

  containerCards.appendChild (card);


}

// funcion de traer los personajes

const generateAllCharacters = async () => {
  const data = await getApi(URL1);
  data.map ( character => createCards(character));
}

const getCharacterByName = async (event) => {
  containerCards.innerHTML = "";
  const data = await getApi (URL2 + event.target.value);
  data.map ( character => createCards (character));
}


window.addEventListener('DOMContentLoaded', generateAllCharacters);
txtCharacter.addEventListener('keyup', getCharacterByName);











