import DefaultTheme from 'vitepress/theme'

import mediumZoom from 'medium-zoom';
import { onMounted, watch, nextTick } from 'vue';
import { useRoute } from 'vitepress';
import '@theojs/lumen/pic'


import './style/index.css'
import './style/var.css'

export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {},
    setup() {
      const route = useRoute();
      const initZoom = () => {
        // mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }); // 默认
        mediumZoom(".main img", { background: "var(--vp-c-bg)" }); // 不显式添加{data-zoomable}的情况下为所有图像启用此功能
      };
      onMounted(() => {
        initZoom(); 
      }); 
      watch(  
        () => route.path,
        () => nextTick(() => initZoom())
      );
    },
}