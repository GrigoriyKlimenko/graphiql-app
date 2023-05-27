const DATA = [
  {
    name: 'All films',
    body: `query AllFilms {allFilms {__cArEt totalCount}}`,
  },
  {
    name: 'Film',
    body: `query Film($filmId: ID) {film(filmID: $filmId) {characterConnection{totalCount} created director edited episodeID id openingCrawl planetConnection{totalCount} producers releaseDate speciesConnection{totalCount} starshipConnection{totalCount} title vehicleConnection{totalCount}}}`,
    variables: `{"filmId": null}`,
  },
  {
    name: 'All people',
    body: `query AllPeople {allPeople {__cArEt totalCount}}`,
  },
  {
    name: 'Person',
    body: `query Person($personId: ID) {person(personID: $personId) {birthYear created edited eyeColor filmConnection{totalCount} gender hairColor height homeworld{name} id mass name skinColor species{name} starshipConnection{totalCount} vehicleConnection{totalCount}}}`,
    variables: `{"personId": null}`,
  },
  {
    name: 'All planets',
    body: `query AllPlanets {allPlanets {__cArEt totalCount}}`,
  },
  {
    name: 'Planet',
    body: `query Planet($planetId: ID) {planet(planetID: $planetId)  {climates created diameter edited filmConnection{totalCount} gravity id name orbitalPeriod population residentConnection{totalCount} rotationPeriod surfaceWater terrains}}`,
    variables: `{"planetId": null}`,
  },
  {
    name: 'All species',
    body: `query AllSpecies {allSpecies {__cArEt totalCount}}`,
  },
  {
    name: 'Species',
    body: `query Species($speciesId: ID) {species(speciesID: $speciesId)  {averageHeight averageLifespan classification created designation edited eyeColors filmConnection{totalCount} hairColors homeworld{name} id language name personConnection{totalCount} skinColors}}`,
    variables: `{"speciesId": null}`,
  },
  {
    name: 'All starships',
    body: `query AllStarships {allStarships {__cArEt totalCount}}`,
  },
  {
    name: 'Starship',
    body: `query Starships($starshipId: ID) {starship(starshipID: $starshipId) {MGLT cargoCapacity consumables costInCredits created crew edited filmConnection{totalCount} hyperdriveRating id length manufacturers maxAtmospheringSpeed model name passengers pilotConnection{totalCount} starshipClass}}`,
    variables: `{"starshipId": null}`,
  },
  {
    name: 'All vehicles',
    body: `query AllVehicles {allVehicles {__cArEt totalCount}}`,
  },
  {
    name: 'Vehicle',
    body: `query Vehicle($vehicleId: ID) {vehicle(vehicleID: $vehicleId) {cargoCapacity consumables costInCredits created crew edited filmConnection{totalCount} id length manufacturers maxAtmospheringSpeed model name passengers pilotConnection{totalCount} vehicleClass}}`,
    variables: `{"vehicleId": null}`,
  },
];

export default DATA;
