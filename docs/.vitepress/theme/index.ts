import DefaultTheme from 'vitepress/theme'
import '@theojs/lumen/theme'
import './style.css'

import BlogList from './BlogList.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('BlogList', BlogList)
  }
}