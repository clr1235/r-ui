import {createApp} from 'vue'
import App from './App.vue'
import {RIcon} from '@r-ui/components/icon'
import '@r-ui/theme-chalk/src/index.scss'
const app = createApp(App)
app.use(RIcon)
console.log('app==>', app)
app.mount("#app")