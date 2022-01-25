import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index.js'
import store from './store'
import loadImage from './plugins/loadImage'
// index.js 라는 파일은 그냥 폴더 명만 써줘도 알아서 index.js를 찾아서 import해준다. 

createApp(App)
  .use(router)
  .use(store)
  .use(loadImage) //$loadImage
  .mount('#app')

  