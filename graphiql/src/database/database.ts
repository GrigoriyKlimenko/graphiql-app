const DATA = [
  {
    name: 'All films',
    body: `query AllFilms {allFilms {__cArEt totalCount}}`,
  },
  {
    name: 'Film',
    body: `query Film {film(filmID: 1) {characterConnection{totalCount} created director edited episodeID id openingCrawl planetConnection{totalCount} producers releaseDate speciesConnection{totalCount} starshipConnection{totalCount} title vehicleConnection{totalCount}}}`,
  },
  {
    name: 'All people',
    body: `query AllPeople {allPeople {__cArEt totalCount}}`,
  },
  {
    name: 'Person',
    body: `query Person {person(personID: 1) {birthYear created edited eyeColor filmConnection{totalCount} gender hairColor height homeworld{name} id mass name skinColor species{name} starshipConnection{totalCount} vehicleConnection{totalCount}}}`,
  },
  {
    name: 'All planets',
    body: `query AllPlanets {allPlanets {__cArEt totalCount}}`,
  },
  {
    name: 'Planet',
    body: `query Planet {planet(planetID: 1) {climates created diameter edited filmConnection{totalCount} gravity id name orbitalPeriod population residentConnection{totalCount} rotationPeriod surfaceWater terrains}}`,
  },
  {
    name: 'All species',
    body: `query AllSpecies {allSpecies {__cArEt totalCount}}`,
  },
  {
    name: 'Species',
    body: `query Species {species(speciesID: 1) {averageHeight averageLifespan classification created designation edited eyeColors filmConnection{totalCount} hairColors homeworld{name} id language name personConnection{totalCount} skinColors}}`,
  },
  {
    name: 'All starships',
    body: `query AllStarships {allStarships {__cArEt totalCount}}`,
  },
  {
    name: 'Starship',
    body: `query Starships {starship(starshipID: 2) {MGLT cargoCapacity consumables costInCredits created crew edited filmConnection{totalCount} hyperdriveRating id length manufacturers maxAtmospheringSpeed model name passengers pilotConnection{totalCount} starshipClass}}`,
  },
  {
    name: 'All vehicles',
    body: `query AllVehicles {allVehicles {__cArEt totalCount}}`,
  },
  {
    name: 'Vehicle',
    body: `query Vehicle {vehicle(vehicleID: 4) {cargoCapacity consumables costInCredits created crew edited filmConnection{totalCount} id length manufacturers maxAtmospheringSpeed model name passengers pilotConnection{totalCount} vehicleClass}}`,
  },
];

export default DATA;
