document.addEventListener('DOMContentLoaded', () => {

  const form = document.querySelector('#new-item-form');

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const species = event.target.species.value;
    const continent = event.target.continent.value;

    const formInput = document.querySelector('#animal-list');

    const animalItem = document.createElement('p')

    animalItem.textContent = `Name: ${name}, Species: ${species}, Continent: ${continent}`;

    animalItem.classList.add("animal-item");

    formInput.appendChild(animalItem);

    form.reset();
  });

  const animalList = document.querySelector('#animal-list');

  const button = document.querySelector('#btn');
  button.addEventListener("click", () => {
    while (animalList.firstChild) {
      animalList.removeChild(animalList.firstChild);
    }
  });


})
