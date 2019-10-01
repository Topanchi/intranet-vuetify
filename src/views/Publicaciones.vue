<template>
  <div class="container">
    <h1>Publicaciones</h1>

    <router-link :to="{name: 'agregarPublicaciones'}">
        <button class="btn btn-success btn-sm btn-block">Agregar</button>
    </router-link>

        <!--
        <form @submit.prevent="buscador(texto)">
            <input type="text" placeholder="Buscar..." class="form-control mt-5" v-model="texto" v-on:keyup="buscador(texto)">
        </form>
        -->
    <div v-if="carga" class="text-center mt-5">
      <h3>Cargando contenido...</h3>
      <pulse-loader :loading="carga"></pulse-loader>
    </div>

    <div class="card-body" v-if="!carga">
      <table class="table table-sm table-striped table-bordered table-responsive-lg">
        <thead>
          <tr>
            <th>Título</th>
            <th>Autor</th>
            <th>Año</th>
            <th>Info</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in arrayFiltrado2" :key="item.id">
            <td>{{ item.titulo }}</td>
            <td>{{ item.autor }}</td>
            <td>{{ item.ano }}</td>
            <td class="text-center">
              <span v-if="item.autor != '' && 
                          item.titulo != '' && item.ano != '' && 
                          item.vol != '' && item.categoria != '' && 
                          item.doi != '' && item.link != '' && 
                          item.isbn != '' && item.revista != '' && 
                          item.estado != '' && item.impact != '' && 
                          item.paginas != ''">
                            <font-awesome-icon icon="check" />
              </span><span v-else></span>
            </td>
            <td>
              <span class="pointer" @click="eliminarPublicaciones(item.id)">
                <i class="trash-alt"></i><font-awesome-icon icon="trash-alt" />
              </span> |
              <router-link :to="{name: 'editarPublicaciones', params:{id: item.id}}">
                <span class="pointer">
                  <i class="edit"></i><font-awesome-icon icon="edit" />
                </span> |
              </router-link>
              <router-link :to="{name: 'verPublicaciones', params:{id: item.id}}">
                <span class="pointer">
                  <i class="eye"></i><font-awesome-icon icon="eye" />
                </span>
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>



<script>
import { mapActions,mapState, mapGetters } from "vuex";
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
export default {
  name: 'Inicio',
  data() {
    return {
      fields: ['Autor', 'Titulo', 'Año', 'Info', 'Acción'],  
      texto: ''
    }
  },
  computed:{
    ...mapState(['usuario','publicaciones', 'carga']),
    ...mapGetters(['arrayFiltrado2'])
  },
  methods:{
    ...mapActions(['getPublicaciones', 'eliminarPublicaciones', 'buscador'])
  },
  created() {
    this.getPublicaciones()
  },
  components:{
    PulseLoader
  }  
}
</script>
