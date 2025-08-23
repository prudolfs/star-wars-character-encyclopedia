export type PageInfo = {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string;
  endCursor: string;
}

export type Person = {
  id: string;
  name: string;
  height: string;
  mass: string;
  hairColor: string;
  skinColor: string;
  eyeColor: string;
  birthYear: string;
  gender: string;
  homeworld: Planet;
  filmConnection: {
    films: Film[];
    totalCount: number;
    pageInfo: PageInfo;
  };
  species: Species[];
  vehicleConnection: {
    vehicles: Vehicle[];
    totalCount: number;
    pageInfo: PageInfo;
  };
  starshipConnection: {
    starships: Starship[];
    totalCount: number;
    pageInfo: PageInfo;
  };
  created: string;
  edited: string;
}

export type Film = {
  id: string;
  title: string;
  episodeId: number;
  openingCrawl: string;
  director: string;
  producers: string[];
  releaseDate: string;
  characterConnection: {
    characters: Person[];
    totalCount: number;
    pageInfo: PageInfo;
  };
  planetConnection: {
    planets: Planet[];
    totalCount: number;
    pageInfo: PageInfo;
  };
  starshipConnection: {
    starships: Starship[];
    totalCount: number;
    pageInfo: PageInfo;
  };
  vehicleConnection: {
    vehicles: Vehicle[];
    totalCount: number;
    pageInfo: PageInfo;
  };
  speciesConnection: {
    species: Species[];
    totalCount: number;
    pageInfo: PageInfo;
  };
  created: string;
  edited: string;
}

export type Planet = {
  id: string;
  name: string;
  rotationPeriod: number;
  orbitalPeriod: number;
  diameter: number;
  climate: string;
  gravity: string;
  terrain: string;
  surfaceWater: number;
  population: number;
  residentConnection: {
    residents: Person[];
    totalCount: number;
    pageInfo: PageInfo;
  };
  filmConnection: {
    films: Film[];
    totalCount: number;
    pageInfo: PageInfo;
  };
  created: string;
  edited: string;
}

export type Species = {
  id: string;
  name: string;
  classification: string;
  designation: string;
  averageHeight: number;
  skinColors: string[];
  hairColors: string[];
  eyeColors: string[];
  averageLifespan: number;
  homeworld: Planet;
  language: string;
  personConnection: {
    people: Person[];
    totalCount: number;
    pageInfo: PageInfo;
  };
  filmConnection: {
    films: Film[];
    totalCount: number;
    pageInfo: PageInfo;
  };
  created: string;
  edited: string;
}

export type Vehicle = {
  id: string;
  name: string;
  model: string;
  manufacturer: string;
  costInCredits: number;
  length: number;
  maxAtmospheringSpeed: number;
  crew: string;
  passengers: string;
  cargoCapacity: number;
  consumables: string;
  vehicleClass: string;
  pilotConnection: {
    pilots: Person[];
    totalCount: number;
    pageInfo: PageInfo;
  };
  filmConnection: {
    films: Film[];
    totalCount: number;
    pageInfo: PageInfo;
  };
  created: string;
  edited: string;
}

export type Starship = {
  id: string;
  name: string;
  model: string;
  manufacturer: string;
  costInCredits: number;
  length: number;
  maxAtmospheringSpeed: number;
  crew: string;
  passengers: string;
  cargoCapacity: number;
  consumables: string;
  hyperdriveRating: number;
  MGLT: number;
  starshipClass: string;
  pilotConnection: {
    pilots: Person[];
    totalCount: number;
    pageInfo: PageInfo;
  };
  filmConnection: {
    films: Film[];
    totalCount: number;
    pageInfo: PageInfo;
  };
  created: string;
  edited: string;
}

// Query Response Types
export type AllPeopleResponse = {
  allPeople: {
    people: Person[];
    totalCount: number;
    pageInfo: PageInfo;
  };
}

export type PersonResponse = {
  person: Person;
}

export type AllFilmsResponse = {
  allFilms: {
    films: Film[];
    totalCount: number;
    pageInfo: PageInfo;
  };
}

export type FilmResponse = {
  film: Film;
}

export type AllPlanetsResponse = {
  allPlanets: {
    planets: Planet[];
    totalCount: number;
    pageInfo: PageInfo;
  };
}

export type PlanetResponse = {
  planet: Planet;
}

export type AllSpeciesResponse = {
  allSpecies: {
    species: Species[];
    totalCount: number;
    pageInfo: PageInfo;
  };
}

export type SpeciesResponse = {
  species: Species;
}

export type AllVehiclesResponse = {
  allVehicles: {
    vehicles: Vehicle[];
    totalCount: number;
    pageInfo: PageInfo;
  };
}

export type VehicleResponse = {
  vehicle: Vehicle;
}

export type AllStarshipsResponse = {
  allStarships: {
    starships: Starship[];
    totalCount: number;
    pageInfo: PageInfo;
  };
}

export type StarshipResponse = {
  starship: Starship;
}

// Simplified types for basic usage (if you don't need all the connections)
export type PersonBasic = {
  id: string;
  name: string;
  birthYear: string;
  height: string;
  mass: string;
  gender: string;
  hairColor: string;
  skinColor: string;
  eyeColor: string;
}

export type FilmBasic = {
  id: string;
  title: string;
  episodeId: number;
  director: string;
  releaseDate: string;
}

export type PlanetBasic = {
  id: string;
  name: string;
  climate: string;
  terrain: string;
  population: number;
}

// Query Variables
export type PaginationVariables = {
  first?: number;
  after?: string;
  last?: number;
  before?: string;
}

export type PersonVariables = {
  id?: string;
  personId?: string;
}

export type FilmVariables = {
  id?: string;
  filmId?: string;
}

export type PlanetVariables = {
  id?: string;
  planetId?: string;
}