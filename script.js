
// addEventListener
// Math.random()
// fetch() 
// swapi.dev
//     .then()
//     .then()
// queryselectors

const name = document.getElementById("name");
const eyecolor = document.getElementById("eyecolor");
const birthyear = document.getElementById("birthyear");
const button = document.querySelector(".getRandomCharacter");

button.addEventListener('click', (e) => {
    e.preventDefault()
    name.innerHTML = '<em>Loading...</em>'
    eyecolor.innerHTML = '<em>Loading...</em>'
    birthyear.innerHTML = '<em>Loading...</em>'
    
    const randomNumber = Math.ceil(Math.random() * 83)
fetch(`https://swapi.dev/api/people/${randomNumber}/`)
    .then(response => response.json())
    .then(character => {
        name.innerHTML = character['name'];
        eyecolor.innerHTML = character['eye_color'];
        birthyear.innerHTML = character['birth_year'];
})

    })