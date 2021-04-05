import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);
import login_store from '../components/login/login_store';
import axios from 'axios';
export default new vuex.Store({
    state:{
        baseURL : 'http://localhost:3000',
        productType:'type1'
    },
    getters:{
        axios(state){
            axios.defaults.baseURL = state.baseURL;
            return axios;
        } 
    },
    mutations:{
        setBaseURL(state){//这里的state对应着上面这个state
                    
            //你还可以在这里执行其他的操作改变state
        },
    },
    actions:{
       
    },
    modules: {
        login: login_store
    }
})