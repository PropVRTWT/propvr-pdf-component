<script setup>
import { ref } from 'vue'
const DFLip_container = ref();
const props = defineProps({ 
  url: String 
})

let ExternalLinks = ['https://cdn.propvr.tech/css/magflip.min.css','https://cdn.propvr.tech/css/themify-icons.min.css'];

const isScriptLoaded = (url) => {
      return Boolean(document.querySelector('script[src="'+url+'"]'));
};

const isLinkLoaded = (url) => {
      return Boolean(document.querySelector('link[href="'+url+'"]'));
};

const loadExternalScript = async (scriptUrl) => {
  return new Promise((resolve)=>{
      if (!isScriptLoaded(scriptUrl)) {
          const script = document.createElement('script');
          script.src = scriptUrl;
          script.defer='';
          script.onload = () => {
              console.log('External script loaded'+scriptUrl);
              resolve()
          };
          script.onerror = () => {
              console.error('Error loading external script');
              resolve()
          };
          document.body.appendChild(script);
      }
      else{
        resolve()
      }
  })
};

const loadExternalLink = async (linkUrl) => {

return new Promise((resolve)=>{

    if (!isLinkLoaded(linkUrl)) {
        const link = document.createElement('link');
        link.href = linkUrl;
        link.rel='stylesheet';
        link.type="text/css";

        link.onload = () => {
            resolve()
            console.log('External script loaded'+linkUrl);
        };
        link.onerror = () => {
            resolve()
            console.error('Error loading external script');
        };
        document.body.appendChild(link);
    }
    else{
        resolve()
    }
})
};


loadExternalScript('https://cdn.propvr.tech/js/jquery-2.1.3.min.js').then(()=>{
    loadExternalScript('https://cdn.propvr.tech/js/magflip.min.js').then(()=>{
      Promise.all([ExternalLinks.map(link=>{loadExternalLink(link)})]).then(()=>{
          var checkScriptloaded = setInterval(()=>{
            if(window.DFLIP){
              var options = {hard:'cover', pageMode: window.DFLIP.PAGE_MODE.SINGLE,webgl:false,height: 500, duration: 800,hideControls: "share,download,pageMode,startPage,endPage,sound"};
              DFLip_container.value.innerHTML = '';
              $("#df_manual_book").flipBook(props.url, options);
              clearInterval(checkScriptloaded)
            }
          },100)
            
        })
    })
})

</script>

<template>
    <div ref="DFLip_container" id="df_manual_book">
	  </div>
</template>

<style scoped>
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