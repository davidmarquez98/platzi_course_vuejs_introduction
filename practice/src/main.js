import { createApp } from "vue/dist/vue.esm-bundler.js"
import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp({
    data(){
        return{
            text:"Hola Vue"
        }
    },
    template: '<div>{{text}}</div>'
})

app.use(router);

app.mount('#app');
