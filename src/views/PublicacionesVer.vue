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
                    <tr>
                        <td>id</td>
                        <td>{{}}</td>
                    </tr>
                    <tr>
                        <td>Autor</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Título</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Revista</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Estado</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Páginas</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Volumen</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Año</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Impact Factor</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>ISBN/ISSN</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Corresponding Author</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Categoría FONDECYT</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>DOI</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Link</td>
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
            id: this.$route.params.id
        }
    },
    methods: {
        //...mapActions(['getPubid'])
        //...mapActions(['getPublicacione'])
    },
    created() {
        //this.getPubid()
        //this.getPublicacione(this.id)
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