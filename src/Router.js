import { createRouter, createWebHistory } from "vue-router";
import CochesComponent from './components/CochesComponent.vue'
import CreateCoche from './components/CreateCoche.vue'
import UpdateCoche from './components/UpdateCoche.vue'
import DeleteCoche from './components/DeleteCoche.vue'

var myRoutes = [
    {
        path: "/", component: CochesComponent
    },
    {
        path: "/create", component: CreateCoche
    }, 
    {
        path: "/update/:id", component: UpdateCoche
    },
    {
        path:"/delete/:id" ,component: DeleteCoche
    }
]

var router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router;