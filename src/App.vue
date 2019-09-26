<template>
  <v-app>
    
    <v-app-bar app absolute dark target="nav-collapse">
      <v-toolbar-title class="headline text-uppercase">
        <span>SGD - </span>
        <span class="font-weight-light">INTRANET</span>
      </v-toolbar-title>

      <v-toolbar-items>
        <v-btn :to="{name: 'publicaciones'}" v-if="existeUsuario" exact class="mx-3">Publicaciones</v-btn>
        <v-btn :to="{name: 'docencia'}" v-if="existeUsuario" exact>Docencia</v-btn>
        <v-btn :to="{name: 'seminarios'}" v-if="existeUsuario" exact class="mx-3">Seminarios</v-btn>
        <v-btn :to="{name: 'invitados'}" v-if="existeUsuario" exact>Invitados</v-btn>
      </v-toolbar-items>
      
      <v-spacer></v-spacer>

      <v-btn :to="{name: 'inicio'}" v-if="existeUsuario" exact>
        <span class="mx-2">Inicio</span>
        <v-icon>home</v-icon>
      </v-btn>
      <v-btn :to="{name: 'registro'}" v-if="!existeUsuario">
        <span class="mx-2">Registro</span>
      </v-btn>
      <v-btn :to="{name: 'ingreso'}" v-if="!existeUsuario" class="mx-2">
        <span class="mx-2">Ingresar</span>
      </v-btn>
      <v-btn @click="cerrarSesion" v-if="existeUsuario" class="mx-2">
        <span class="mr-2">Cerrar Sesión</span>
        <v-icon>open_in_new</v-icon>
      </v-btn>
    </v-app-bar>
<!--
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-container>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-navbar-brand href="#">SGD-Ingemat</b-navbar-brand>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item :to="{name: 'inicio'}" v-if="existeUsuario" class="mx-2" exact>Inicio</b-nav-item>
            <b-nav-item :to="{name: 'publicaciones'}" v-if="existeUsuario" class="mx-2" exact>Publicaciones</b-nav-item>
            <b-nav-item :to="{name: 'docencia'}" v-if="existeUsuario" class="mx-2" exact>Docencia</b-nav-item>
            <b-nav-item :to="{name: 'seminarios'}" v-if="existeUsuario" class="mx-2" exact>Seminarios</b-nav-item>
            <b-nav-item :to="{name: 'registro'}" v-if="!existeUsuario" class="mx-2">Registro</b-nav-item>
            <b-nav-item :to="{name: 'ingreso'}" v-if="!existeUsuario" class="mx-2">Ingresar</b-nav-item>
            <b-nav-item @click="cerrarSesion" v-if="existeUsuario" class="mx-2">Cerrar sesión</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>  
-->
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  name: 'App',
  data: () => ({
    //
  }),
  methods: {
    ...mapActions(['cerrarSesion'])
  },
  computed: {
    ...mapGetters(['existeUsuario'])
  },
};
</script>
