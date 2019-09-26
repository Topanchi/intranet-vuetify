<template>
    <div class="container">
        <h1>Seminarios</h1>

        <router-link :to="{name: 'agregarSeminario'}">
          <button class="btn btn-success btn-sm btn-block">Agregar</button>
        </router-link>

        <div v-if="carga" class="text-center mt-5">
            <h3>Cargando contenido...</h3>
            <pulse-loader :loading="carga"></pulse-loader>
        </div>

        <div class="card-body" v-if="!carga">
            <table class="table table-sm table-striped table-bordered table-responsive-lg">
                <thead>
                <tr>
                    <th>Tema</th>
                    <th>Expositor</th>
                    <th>Procedencia</th>
                    <th>Fecha</th>
                    <th>Año</th>
                    <th>Acción</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="item in arrayFiltrado3" :key="item.id">
                    <td>{{ item.tema }}</td>
                    <td>{{ item.expositor }}</td>
                    <td>{{ item.procedencia }}</td>
                    <td>{{ item.fecha }}</td>
                    <td>{{ item.ano }}</td>
                    <td>
                        <span class="pointer" @click="eliminarSeminarios(item.id)">
                            <i class="trash-alt"></i><font-awesome-icon icon="trash-alt" />
                        </span> |
                        <router-link :to="{name: 'editarSeminarios', params:{id: item.id}}">
                            <span class="pointer">
                            <i class="edit"></i><font-awesome-icon icon="edit" />
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
    name: 'Seminarios',
    data() {
      return {
        fields: ['Tema', 'Expositor', 'Procedencia', 'Fecha', 'Año'],  
        texto: ''
      }
  },
  computed:{
    ...mapState(['usuario','seminarios', 'carga']),
    ...mapGetters(['arrayFiltrado3'])
  },
  methods:{
    ...mapActions(['getSeminarios', 'eliminarSeminarios', 'buscador'])
  },
  created() {
    this.getSeminarios()
  },
  components:{
    PulseLoader
  }  
}
</script>