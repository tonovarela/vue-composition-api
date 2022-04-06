<template>
  <h1>Counter view</h1>
  <h3>{{contador}}</h3>

  <button @click="incrementar">+1</button>
<button  @click="decrementar">-1</button>
</template>

<script>

import useCounter from '@/composables/useCounter';

export default {
    name:'Counter',    
    setup(){
     const { counter:contador,
             increase:incrementar,
             decrease:decrementar}  = useCounter(10)
     return {
         contador,
         incrementar,
         decrementar
     }
    }

}
</script>

<style>

</style>