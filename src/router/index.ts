import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: "/detalle/:id",
    name: "DetalleInstrumento",
    component: () => import("../views/DetalleInstrumento.vue")
  },
  {
    path: "/productos",
    name: "Productos",
    component: () => import("../views/Productos.vue")
  },
  {
    path: "/grilla",
    name: "GrillaInstrumentos",
    component: () => import("../views/GrillaInstrumentos.vue")
  },
  {
    path: "/formulario/:idInstrumento",
    name: "FormularioInstrumento",
    component: () => import("../views/FormularioInstrumento.vue")
  },
  {
    path: "/buscar/:termino",
    name: "BuscadorView",
    component: () => import("../views/Buscador.vue")
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/dondeestamos',
    name: 'DondeEstamos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/DondeEstamos.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
