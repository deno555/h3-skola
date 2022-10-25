import {createRouter, createWebHistory} from 'vue-router'

import LunchRating from '/src/components/lunchRating.vue'
import ChooseSchoolType from '/src/components/chooseSchoolType.vue'
import Login from '/src/components/login.vue'
import Register from '/src/components/register.vue'
import ChooseDepartment from '/src/components/chooseDepartment.vue'
import ChooseSchool from '/src/components/ChooseSchool.vue'
import RateSubject from '/src/components/rateSubject.vue'
import NotFound from '/src/components/notFound.vue'


const routes = [
    {
        path: '/',
        component: ChooseSchoolType
    },
    {
        path: '/skoly',
        component: ChooseSchool
    },
    {
        path: '/rate',
        component: RateSubject
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
    },
    {
        path: '/skoly/obedy',
        component: LunchRating
    },
    {
        path: '/skoly/odbory',
        component: ChooseDepartment
    },
    {
        path: '/:pathMatch(.*)*',
        component: NotFound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})



export default router