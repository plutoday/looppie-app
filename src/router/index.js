import Vue from 'vue';
import Router from 'vue-router';


import HomePage from '@/home/HomePage';
import ExplorePage from '../question/ExplorePage.vue';
import AnswerQuestion from '../answer/AnswerQuestion.vue';
import SubmitQuestion from '../ask/SubmitQuestion.vue';
import ResultPage from '../result/ResultPage.vue';
import MyRecord from '../me/MyRecord.vue';


Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        name:'Home',
        component: HomePage,
    },{
        path: '/question',
        name:'Explore',
        component: ExplorePage,
    },{
        path: '/answer',
        name:'Answer',
        component: AnswerQuestion,
    },{
        path: '/ask',
        name:'Submit',
        component: SubmitQuestion,
    },{
        path: '/result',
        name:'Result',
        component: ResultPage,
    },{
        path: '/me',
        name:'My',
        component: MyRecord,
    }],
});