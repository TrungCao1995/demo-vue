import Home from './components/Home'
import Signup from './components/auth/Signup'
import Signin from './components/auth/Signin'

export const routes = [
    {path: '', component: Home},
    {path: '/signup', component: Signup},
    {path: '/signin', component: Signin},
    {path: '*', redirect: '/'}
]