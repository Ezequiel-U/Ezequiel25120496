const container = document.getElementById("pokemon-container");

const pokemons = [
    { nombre: "pikachu", tipo: "Eléctrico ⚡" },
    { nombre: "charmander", tipo: "Fuego 🔥" },
    { nombre: "squirtle", tipo: "Agua 💧" },
    { nombre: "bulbasaur", tipo: "Planta 🌱" }
];

pokemons.forEach(pokemon => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.nombre}`)
        .then(response => response.json())
        .then(data => {
            const card = document.createElement("div");
            card.className = "col-md-3 mb-4";

            card.innerHTML = `
                <div class="card text-center h-100">
                    <img src="${data.sprites.front_default}" class="card-img-top p-3">
                    <div class="card-body">
                        <h5 class="card-title">${data.name.toUpperCase()}</h5>
                        <p class="card-text">Tipo: ${pokemon.tipo}</p>
                    </div>
                </div>
            `;

            container.appendChild(card);
        });
});
