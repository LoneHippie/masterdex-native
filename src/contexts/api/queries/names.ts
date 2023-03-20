import { Name } from '~app_interfaces/Name';
import { filters, queryOptions, pokeapiQuery, pokeapiNamespace } from '../utils';

export function getPokemonNames() {
   const namesQuery = `
        query {
            ${pokeapiNamespace}: pokemon_v2_pokemon(where: ${filters.standardVariantsOnly}) {
                name
            }
        }
    `;

   return pokeapiQuery<Name[]>(queryOptions(namesQuery));
}
