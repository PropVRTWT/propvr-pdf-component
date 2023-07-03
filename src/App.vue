<script setup>
import PDFComp from './components/PDFComp.vue';
</script>

<template>
  <PDFComp url="https://storagecdn.propvr.tech/iRdFhLmW08hOntxWqG2jI5PMSPH2%2FVisionVanessa%2FBrochure%2F1685950301677-VISION%20VANESSA_3-BHK%2BRESORT%20LIFESTYLE.pdf?alt=media" />
</template>

<style scoped>
    #app{
        height: 100%;
        width: 100%;
        position:relative;
    }
    .df-floating .df-ui-controls {
        pointer-events:all !important;
      }
      
            .df-container{
        background: rgba(0, 0, 0, 0.12) !important;
    height: 100% !important;
      }
      
      .hide_button{
        display:none !important;
      }
      
      .hide_pointer{
        pointer-events:none !important;
      }
      canvas{
        position:absolute;
        top:0;
        right:0;
        left:0;
        bottom:0;
        margin:auto;
      }
</style>