<template>
    <div class="container">
        <h1>Investigadores invitados</h1> 
        
        <router-link :to="{name: 'agregarInvitado'}">
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
                        <th>Nombre</th>
                        <th>Institución</th>
                        <th>Llegada</th>
                        <th>Retirada</th>
                        <th>Año</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    <tr  v-for="item in arrayFiltrado4" :key="item.id">
                        <td>{{ item.nombre }}</td>
                        <td>{{ item.institucion }}</td>
                        <td>{{ item.llegada }}</td>
                        <td>{{ item.salida }}</td>
                        <td>{{ item.ano }}</td>
                        <td>
                            <span class="pointer" @click="eliminarInvitados(item.id)">
                                <i class="trash-alt"></i><font-awesome-icon icon="trash-alt" />
                            </span> |
                            <router-link :to="{name: 'editarInvitados', params:{id: item.id}}">
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
    name: 'Invitados',
    data() {
        return {
            texto: ''
        }
    },
    computed:{
        ...mapState(['usuario','invitados', 'carga']),
        ...mapGetters(['arrayFiltrado4'])
    },
    methods:{
        ...mapActions(['getInvitados', 'eliminarInvitados', 'buscador'])
    },
    created() {
        this.getInvitados()
    },
    components:{
        PulseLoader
    }  
}
</script>