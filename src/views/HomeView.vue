<template>
  <div class="home">
    <h1>Reactive vs Ref</h1>
    <h2>{{ ironMan }}</h2>
    <h2>{{ hulk }}</h2>

    <button @click="changeIronMan">Cambiar nombre IronMan</button>
    <button @click="changeHulk">Cambiar nombre hulk</button>

    <h3>{{ironManIsAlive}}</h3>
    <h3> {{hulkisAlive}}</h3>

    <button @click="changeStatus">Cambiar Status</button>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
export default {
  name: "HomeView",

  setup() {
    const ironMan = ref({ name: "Tony", age: 50 });
    const hulk = reactive({ name: "Bruce", age: 50 });

    const ironManIsAlive = reactive({vivo:false})
    const hulkisAlive = ref(true)

    const changeStatus = ()=>{
      hulkisAlive.value=!hulkisAlive.value;
      ironManIsAlive.vivo = !ironManIsAlive.vivo
    }

    return {
      ironMan,
      hulk,
      ironManIsAlive,
      hulkisAlive,
      changeStatus,
      changeIronMan: () => {
        ironMan.value.name = "Tony Star";
        ironMan.value.age = 55;
      },
      changeHulk: () => {
        hulk.name = "Bruce Banner";
        hulk.age = 55;
      },
    };
  },
};
</script>
