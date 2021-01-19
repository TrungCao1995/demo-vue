import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'
import Home from './components/Home'
import Signup from './components/auth/Signup'
import Signin from './components/auth/Signin'

Vue.use(VueRouter)

const routes = [
    {
        path: '/', 
        component: Home
        // beforeEnter (to, from, next) {
        //     if (store.state.idToken) {
        //         next()
        //     }
        //     else {
        //         next('/signin')
        //     }
        // }
    },
    {path: '/signup', component: Signup},
    {path: '/signin', component: Signin},
    {path: '*', redirect: '/'}
]

export default new VueRouter({
    mode: 'history',
    routes
})