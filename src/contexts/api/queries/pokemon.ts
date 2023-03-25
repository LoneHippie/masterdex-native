import { Pokemon } from '~app_interfaces/Pokemon';
import { filters, queryOptions, pokeapiNamespace, pokeapiQuery } from '../utils';

const pokemon_v2 = `
        name
        id
        height
        weight
        abilities: pokemon_v2_pokemonabilities {
            ability: pokemon_v2_ability {
                name
                effects: pokemon_v2_abilityeffecttexts(where: {language_id: {_eq: 9}}) {
                    shortEffect: short_effect
                }
            }
        }
        stats: pokemon_v2_pokemonstats {
            baseStat: base_stat
            statId: stat_id
        }
        types: pokemon_v2_pokemontypes {
            type: pokemon_v2_type {
                name
                id
            }
        }
        specs: pokemon_v2_pokemonspecy {
            color: pokemon_v2_pokemoncolor {
                name
            }
            genId: generation_id
        }
    `;

export function getAllPokemon() {
   const query = `
        query {
            ${pokeapiNamespace}: pokemon_v2_pokemon(where: ${filters.standardVariantsOnly}) {
                ${pokemon_v2}
            }
        }
    `;

   return pokeapiQuery<Pokemon[]>(queryOptions(query));
}

export function getPokemonByName(search: string) {
   const searchQuery = `
        query {
            ${pokeapiNamespace}: pokemon_v2_pokemon(where: {name: {_eq: ${search}}, _and: ${filters.standardVariantsOnly}}) {
                ${pokemon_v2}
            }
        }
    `;

   return pokeapiQuery<Pokemon[]>(queryOptions(searchQuery));
}

export function getPokemonByGen(gen: number) {
   const genQuery = `
        query {
            ${pokeapiNamespace}: pokemon_v2_pokemon(where: {pokemon_v2_pokemonspecy: {pokemon_v2_generation: {id: {_eq: ${gen}}}}, _and: ${filters.standardVariantsOnly}}) {
                ${pokemon_v2}
            }
        }
    `;

   return pokeapiQuery<Pokemon[]>(queryOptions(genQuery));
}

export function getPokemonByType(type: string) {
   const typeQuery = `
        query {
            ${pokeapiNamespace}: pokemon_v2_pokemon(where: {pokemon_v2_pokemontypes: {pokemon_v2_type: {name: {_eq: ${type}}}}, _and: ${filters.standardVariantsOnly}}) {
                ${pokemon_v2}
            }
        }
    `;

   return pokeapiQuery<Pokemon[]>(queryOptions(typeQuery));
}
