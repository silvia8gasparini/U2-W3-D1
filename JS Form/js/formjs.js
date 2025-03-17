  const petNameInput = document.getElementById("petName");
  const ownerNameInput = document.getElementById("ownerName");
  const speciesInput = document.getElementById("species");
  const breedInput = document.getElementById("breed");
  const petList = document.getElementById("pet-list"); 

  class Pet {
    constructor(_petName, _ownerName, _species, _breed) {
      this.petName = _petName;
      this.ownerName = _ownerName;
      this.species = _species;
      this.breed = _breed;
    }

    static sameOwner(pet1, pet2) {
      return pet1.ownerName === pet2.ownerName;
    }
  }

  const pets = [];

  const form = document.getElementById("user-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); 
    console.log("INVIO DEL FORM");

    const newPet = new Pet(
      petNameInput.value,
      ownerNameInput.value,
      speciesInput.value,
      breedInput.value
    );

    pets.push(newPet);
    console.log("ANIMALE REGISTRATO:", newPet);
    updatePetList();
    form.reset();
  });


  const updatePetList = function () {
    petList.innerHTML = ""; 

    pets.forEach((pet, index) => {
      const li = document.createElement("li");
      li.className =
        "list-group-item d-flex justify-content-between align-items-center";
      li.innerHTML = `
        <div>
          <h4 class="fs-bold">${pet.petName}</h4> - ${pet.species} (${pet.breed}) <br>
          <span class="text-muted">Proprietario: ${pet.ownerName}</span>
        </div>
        <button class="btn btn-danger btn-md">Elimina</button>
      `;

      li.querySelector("button").addEventListener("click", () => {
        pets.splice(index, 1); 
        updatePetList(); 
      });

      petList.appendChild(li); 
    });
  };