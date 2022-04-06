<template>
  <h1>Buscar pokemon {{pokemonId}}</h1>

  <form @submit.prevent="onSubmit">
      <input type="number" 
      v-model="pokemonId"
       placeholder="Numero del pokemon" 
       ref="txtSearch"/>      
  </form>
  <br>
  <span> Presiona para buscar</span>
</template>

<script>
import {ref, onActivated} from 'vue'
import {useRouter} from 'vue-router'
export default {

setup(){

    const router = useRouter();
    const pokemonId= ref(1)

    const txtSearch = ref()

     onActivated(()=>{
         txtSearch.value.select()
     })

     
    return {
        txtSearch,
        pokemonId,
        onSubmit:()=>{            
            router.push({name:'pokemon-id',params:{id:pokemonId.value}})

            
        }
    }
}
}
</script>

<style>

</style>
