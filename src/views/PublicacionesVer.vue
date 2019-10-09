<template>
    <div class="container">
        <h1>Detalles del artículo</h1>

        <router-link :to="{name: 'publicaciones'}">
            <button class="btn btn-success btn-sm btn-block">Atrás</button>
        </router-link>

        <div v-if="carga" class="text-center mt-5">
            <h3>Cargando contenido...</h3>
            <pulse-loader :loading="carga"></pulse-loader>
        </div>

        <div class="card-body" v-if="!carga">
            <table class='table table-bordered table-responsive-lg table-fixed'>
                <tbody>
                    <tr v-for="item of fields" :key="item.id">
                        <td><strong>{{item}}</strong></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import {mapActions, mapState, mapGetters} from 'vuex'
import { required, minLength } from 'vuelidate/lib/validators';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
export default {
    name: 'PublicacionesVer',
    data(){
        return{
            id: this.$route.params.id,
            fields: ['Autor', 'Titulo', 'Revista', 'Estado', 'Páginas', 'Volumen', 'Año', 'Impact factor', 'ISBN/ISSN', 'Corresponding author', 'Categoría FONDECYT', 'DOI', 'Link']
        }
    },
    methods: {
        ...mapActions(['getPublicacione'])
    },
    created() {
        this.getPublicacione(this.id)
    },
    computed: {
        ...mapState(['publicacione','usuario','carga']),
        ...mapGetters(['especifico'])
    },
    components:{
        PulseLoader
    }  
}
</script>