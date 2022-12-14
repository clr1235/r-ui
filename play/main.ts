import {createApp} from 'vue'
import App from './App.vue'
import {RIcon} from '@r-ui/components/icon'
const app = createApp(App)
app.use(RIcon)
console.log('app==>', app)
app.mount("#app")