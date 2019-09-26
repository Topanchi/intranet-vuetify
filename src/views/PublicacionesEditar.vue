<template>
    <div class="container">
        <h1>Editar artículo</h1>
        <div class="card-body"> 
            <form @submit.prevent="editarPublicaciones(publicacione)">
                <div class="input-group mb-2 mr-sm-2">
                    <div class="input-group-prepend">
                        <div class="input-group-text">
                            Autor
                        </div>
                    </div>
                    <input type="text" v-model="$v.publicacione.autor.$model" class="form-control">
                </div>

                <div class="input-group mb-2 mr-sm-2">
                    <div class="input-group-prepend">
                        <div class="input-group-text">
                            Título
                        </div>
                    </div>
                    <input type="text" v-model="$v.publicacione.titulo.$model" class="form-control">
                </div>

                <div class="input-group mb-2 mr-sm-2">
                    <div class="input-group-prepend">
                        <div class="input-group-text">
                            Revista
                        </div>
                    </div>
                    <input type="text" v-model="$v.publicacione.revista.$model" class="form-control">
                </div>

                <div class="input-group mb-2 mr-sm-2">
                    <div class="input-group-prepend">
                        <div class="input-group-text">
                            Año
                        </div>
                    </div>
                    <input type="text" v-model="$v.publicacione.ano.$model" class="form-control">
                </div> 

                <div class="input-group mb-2 mr-sm-2">
                    <div class="input-group-prepend">
                        <div class="input-group-text">
                            Volumen
                        </div>
                    </div>
                    <input type="text" v-model="$v.publicacione.vol.$model" class="form-control">
                </div> 

                <div class="input-group mb-2 mr-sm-2">
                    <div class="input-group-prepend">
                        <div class="input-group-text">
                            Páginas
                        </div>
                    </div>
                    <input type="text" v-model="$v.publicacione.paginas.$model" class="form-control">
                </div>             

                <div class="input-group mb-2 mr-sm-2">
                    <div class="input-group-prepend">
                        <div class="input-group-text">
                            Categoría
                        </div>
                    </div>
                    <input type="text" v-model="$v.publicacione.categoria.$model" class="form-control">
                </div>

                <div class="input-group mb-2 mr-sm-2">
                    <div class="input-group-prepend">
                        <div class="input-group-text">
                            Corresponding
                        </div>
                    </div>
                    <input type="text" v-model="$v.publicacione.corresponding.$model" class="form-control">
                </div>

                <div class="input-group mb-2 mr-sm-2">
                    <div class="input-group-prepend">
                        <div class="input-group-text">
                            Estado
                        </div>
                    </div>
                    <input type="text" v-model="$v.publicacione.estado.$model" class="form-control">
                </div>

                <div class="input-group mb-2 mr-sm-2">
                    <div class="input-group-prepend">
                        <div class="input-group-text">
                            ISBN
                        </div>
                    </div>
                    <input type="text" v-model="$v.publicacione.isbn.$model" class="form-control">
                </div>
                <div class="input-group mb-2 mr-sm-2">
                    <div class="input-group-prepend">
                        <div class="input-group-text">
                            Impact
                        </div>
                    </div>
                    <input type="text" v-model="$v.publicacione.impact.$model" class="form-control">
                </div>
                <div class="input-group mb-2 mr-sm-2">
                    <div class="input-group-prepend">
                        <div class="input-group-text">
                            Doi
                        </div>
                    </div>
                    <input type="text" v-model="$v.publicacione.doi.$model" class="form-control">
                </div>

                <div class="input-group mb-2 mr-sm-2">
                    <div class="input-group-prepend">
                        <div class="input-group-text">
                            Link
                        </div>
                    </div>
                    <input type="text" v-model="$v.publicacione.link.$model" class="form-control">
                </div>

                <button type="submit" class="btn btn-primary md-2" >Editar</button>
            </form>
        </div>    
    </div>    
</template>

<script>
import {mapActions, mapState} from 'vuex'
import { required, minLength } from 'vuelidate/lib/validators';
export default {
    name: 'PublicacionesEditar',
    data(){
        return{
            id: this.$route.params.id
        }
    },
    methods: {
        ...mapActions(['getPublicacione', 'editarPublicaciones'])
    },
    created() {
        this.getPublicacione(this.id)
    },
    computed: {
        ...mapState(['publicacione'])
    },
    validations:{
        publicacione:{
            autor:{required},
            titulo:{required},
            ano:{required},
            revista: {required},
            estado: {required},
            vol: {required},
            paginas: {required},
            categoria: {required},
            corresponding: {required},
            doi: {required},
            isbn: {required},
            impact: {required},
            link: {required}
        }
    }

}
</script>