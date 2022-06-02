import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

import VueRouter from 'vue-router';
import HomeComponent from './components/home.vue';
import MenuComponent from './components/menu.vue';
Vue.use(VueRouter);
const routes = [{
        name: 'Home',
        path: '/',
        component: HomeComponent

    },
    {
        name: 'Menu',
        path: '/menu/:id',
        component: MenuComponent
    },

]

const router = new VueRouter({
    routes
})

Vue.config.productionTip = false

new Vue({
    router: router,
    vuetify,
    render: h => h(App)
}).$mount('#app')