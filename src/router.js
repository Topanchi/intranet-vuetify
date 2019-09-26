import Vue from 'vue'
import Router from 'vue-router'
var firebase = require("firebase/app");

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/registro',
      name: 'registro',
      component: () => import(/* webpackChunkName: "registro" */ './views/Registro.vue')
    },
    {
      path: '/',
      name: 'inicio',
      component: () => import(/* webpackChunkName: "inicio" */ './views/Inicio.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/ingreso',
      name: 'ingreso',
      component: () => import(/* webpackChunkName: "ingreso" */ './views/Ingreso.vue')
    },
    {
      path: '/publicaciones',
      name: 'publicaciones',
      component: () => import(/* webpackChunkName: "publicaciones" */ './views/Publicaciones.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/docencia',
      name: 'docencia',
      component: () => import(/* webpackChunkName: "docencia" */ './views/Docencia.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/seminarios',
      name: 'seminarios',
      component: () => import(/* webpackChunkName: "seminarios" */ './views/Seminarios.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/editarPublicaciones/:id',
      name: 'editarPublicaciones',
      component: () => import(/* webpackChunkName: "editarPublicaciones" */ './views/PublicacionesEditar.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/editarDocencia/:id',
      name: 'editarDocencia',
      component: () => import(/* webpackChunkName: "editarDocencia" */ './views/DocenciaEditar.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/editarSeminarios/:id',
      name: 'editarSeminarios',
      component: () => import(/* webpackChunkName: "editarSeminarios" */ './views/SeminariosEditar.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/editarInvitados/:id',
      name: 'editarInvitados',
      component: () => import(/* webpackChunkName: "editarInvitados" */ './views/InvitadosEditar.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/agregarDocencia/',
      name: 'agregarDocencia',
      component: () => import(/* webpackChunkName: "agregarDocencia" */ './views/DocenciaAgregar.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/agregarPublicaciones/',
      name: 'agregarPublicaciones',
      component: () => import(/* webpackChunkName: "agregarPublicaciones" */ './views/PublicacionesAgregar.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/agregarSeminario/',
      name: 'agregarSeminario',
      component: () => import(/* webpackChunkName: "agregarSeminario" */ './views/SeminariosAgregar.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/agregarInvitado/',
      name: 'agregarInvitado',
      component: () => import(/* webpackChunkName: "agregarInvitado" */ './views/InvitadosAgregar.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/invitados',
      name: 'invitados',
      component: () => import(/* webpackChunkName: "invitados" */ './views/Invitados.vue'),
      meta: { requiresAuth: true }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const rutaProtegida = to.matched.some(record => record.meta.requiresAuth);
  const user = firebase.auth().currentUser;

  if(rutaProtegida === true && user === null){
    next({name:'ingreso'})
  }else{
    next()
  }

})

export default router;