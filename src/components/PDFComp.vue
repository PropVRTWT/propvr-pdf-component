<script setup lang="ts">
import { ref,onMounted } from 'vue'
const DFLip_container = ref();
const props = defineProps<{ url: string }>()
var options = {hard:'cover', pageMode: window.DFLIP.PAGE_MODE.SINGLE,webgl:false,height: 500, duration: 800,hideControls: "share,download,pageMode,startPage,endPage,sound"};

onMounted(()=>{
  DFLip_container.value.innerHTML = '';
  $("#df_manual_book").flipBook(props.url, options);
})
</script>

<template>
    <div ref="DFLip_container" id="df_manual_book">
	  </div>
</template>
