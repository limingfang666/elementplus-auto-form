import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import tForm from "./package/index"
// css需要全局引入或者局部引入
import 'element-plus/dist/index.css';

const app = createApp(App);

app.use(tForm).mount('#app')
