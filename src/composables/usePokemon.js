import axios from 'axios'
import {ref} from 'vue'
const usePokemon =(ID=1)=>{

  const pokemon = ref()
  const isLoading = ref(false)
  const errorMessage = ref()

  const searchPokemon = async(pokemonID)=>{
      if (!pokemonID) return;
       isLoading.value =true;
       pokemon.value=null;
      
      try {          
          const {data}= await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`)          
          pokemon.value=data;
          errorMessage.value=null;
          
      } catch (error) {
          errorMessage.value="No se puede cargar ese pokemon"          
      }
       
  }
  searchPokemon(ID)

  return {
      pokemon,
      isLoading,
      errorMessage,
      searchPokemon
  }

}

export default usePokemon;