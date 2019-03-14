import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({

    actions:{
        getQuestions({commit}) {
            axios.get('http://loopieserver.azurewebsites.net/allquestions');
        }

    },
});