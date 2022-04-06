<template>
  <div class="about">
    <h1>{{title}}</h1>
     
    <button @click="changeTitle">Cambiar</button>
  </div>
</template>

<script>
import {
  onActivated,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onDeactivated,
  onErrorCaptured,
  onMounted,
  onRenderTracked,
  onRenderTriggered,
  onUnmounted,
  onUpdated,
  ref
} from "vue";

export default {
  setup() {  

    const title =ref('About')  
    onBeforeMount(() => {
      console.log("BeforeMount");
    });
    onMounted(() => {
      console.log("onMounted");
    });
    onBeforeUpdate(() => {
      console.log("BeforeUpdate");
    });
    onUpdated(() => {
      console.log("Updated");
    });
    onBeforeUnmount(() => {
      console.log("BeforeUnmount");
    });
    onUnmounted(() => {
      console.log("Unmounted");
    });
    onErrorCaptured(() => {
      console.log("ErrorCaptured");
    });
    onRenderTracked(() => {
      console.log("RenderTracked");
    });

    onRenderTriggered(() => {
      console.log("RenderTriggered");
    });
    onActivated(() => {
      console.log("OnActivated");
    });
    onDeactivated(() => {
      console.log("OnDeactivated");
    });
    

    return {
      title,
      changeTitle: ()=>title.value ="New Title"
    }
  },
};
</script>

