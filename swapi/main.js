/* This is not working, I gave up on trying to get it to work */

let residentsButton = document.querySelector("button")

const baseURL = `https://swapi.dev/api/planets/1`

const planetsCallback = (/* {???: ????} */) => displayPlanets(planets)
const errCallback = err => console.log(err)

const getAllPlanets = () => axios.get(baseURL).then(planetsCallback).catch(errCallback)

let buttonResponse = () => {}



function displayPlanets(arr) {}

residentsButton.addEventListener("click", buttonResponse)

getAllPlanets()

console.log(axios.get(baseURL).then())