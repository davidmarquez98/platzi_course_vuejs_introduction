import { createApp } from "vue/dist/vue.esm-bundler.js"
import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp({
    data(){
        return{
            textOne:"Hola v-on",
            textTwo:"Hola v-bind",
            textThree:"Hola v-model"
        }
    },
    methods:{
        inputOne(e){
            this.textOne = e.target.value;          
        },
        inputTwo(e){
            this.textTwo = e.target.value;          
        }
    },
    template: '<div>{{textOne}}</div> <input type="text" @input="inputOne"> <div>{{textTwo}}</div> <input type="text" @input="inputTwo" :value="textTwo"> <div>{{textThree}}</div> <input type="text" v-model="textThree">'
})

app.use(router);

app.mount('#app');
