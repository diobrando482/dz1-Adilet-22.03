import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PokemonDetails = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
        const data = await response.json();
        setPokemon(data);
      } catch (error) {
        console.error(error);
      }
    };
    if (id) {
      fetchPokemon();
    }
  }, [id]);

  return pokemon != null ? 
    <div>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Weight: {pokemon.weight}</p>
      <h3>Abilities:</h3>
      <ul>
        {pokemon.abilities.map(ability => (
          <li key={ability.ability.name}>{ability.ability.name}</li>
        ))}
      </ul>
    </div>
  :
  <p>Load...</p>

};

export default PokemonDetails;
