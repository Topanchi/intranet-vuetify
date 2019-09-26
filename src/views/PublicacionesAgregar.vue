<template>
    <div class="container">
        <h1>Agregar artículo</h1>
        <div class="card-body"> 
            <form @submit.prevent="agregarPublicaciones({autor:autor,
                                                        titulo:titulo,
                                                        revista:revista,ano:ano,
                                                        vol:vol,
                                                        paginas:paginas,
                                                        categoria:categoria,
                                                        corresponding:corresponding,
                                                        estado:estado,
                                                        isbn:isbn,
                                                        impact:impact,
                                                        doi:doi,
                                                        link:link})" >
                <b-row>
                    <div class="input-group mb-2 mr-sm-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                Autor
                            </div>
                        </div>
                        <input type="text" class="form-control" v-model="$v.autor.$model">
                    </div>
                    <small class="text-danger d-block" v-if="!$v.autor.required">Campo requerido</small>
                    <div class="input-group mb-2 mr-sm-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                Título
                            </div>
                        </div>
                        <input type="text" class="form-control" v-model="$v.titulo.$model">
                    </div>
                    <small class="text-danger d-block" v-if="!$v.titulo.required">Campo requerido</small>
                    <div class="input-group mb-2 mr-sm-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                Revista
                            </div>
                        </div>
                        <input type="text" class="form-control" v-model="$v.revista.$model">
                    </div>
                    <small class="text-danger d-block" v-if="!$v.revista.required">Campo requerido</small>
                    <div class="input-group mb-2 mr-sm-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                Año
                            </div>
                        </div>
                        <input type="number" class="form-control" v-model="$v.ano.$model">
                    </div> 
                    <small class="text-danger d-block" v-if="!$v.ano.required">Campo requerido</small>
                    <div class="input-group mb-2 mr-sm-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                Volumen
                            </div>
                        </div>
                        <input type="text" class="form-control" v-model="$v.vol.$model">
                    </div>            
                    <small class="text-danger d-block" v-if="!$v.vol.required">Campo requerido</small> 
                    <div class="input-group mb-2 mr-sm-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                Páginas
                            </div>
                        </div>
                        <input type="text" class="form-control" v-model="$v.paginas.$model">
                    </div>
                    <small class="text-danger d-block" v-if="!$v.paginas.required">Campo requerido</small>
                    <div class="input-group mb-2 mr-sm-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                Categoría
                            </div>
                        </div>
                        <input type="text" class="form-control" v-model="$v.categoria.$model">
                    </div>
                    <div class="input-group mb-2 mr-sm-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                Corresponding
                            </div>
                        </div>
                        <input type="text" class="form-control" v-model="$v.corresponding.$model">
                    </div>
                    <div class="input-group mb-2 mr-sm-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                Estado
                            </div>
                        </div>
                        <input type="text" class="form-control" v-model="$v.estado.$model">
                    </div>
                    <small class="text-danger d-block" v-if="!$v.estado.required">Campo requerido</small>
                    <div class="input-group mb-2 mr-sm-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                ISBN
                            </div>
                        </div>
                        <input type="text" class="form-control" v-model="$v.isbn.$model">
                    </div>

                    <div class="input-group mb-2 mr-sm-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                Impact
                            </div>
                        </div>
                        <input type="text" class="form-control" v-model="$v.impact.$model">
                    </div>
                 
                    <div class="input-group mb-2 mr-sm-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                Doi
                            </div>
                        </div>
                        <input type="text" class="form-control" v-model="$v.doi.$model">
                    </div>
                    <small class="text-danger d-block" v-if="!$v.doi.required">Campo requerido</small>
                    <div class="input-group mb-2 mr-sm-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                Link
                            </div>
                        </div>
                        <input type="text" class="form-control" v-model="$v.link.$model">
                    </div>
                    <small class="text-danger d-block" v-if="!$v.link.required">Campo requerido</small>
                    <hr>
                </b-row>
                <button type="submit" class="btn btn-primary mb-2">Agregar</button>
                <!-- :disabled="$v.$invalid || carga" -->
            </form>                                            
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { required, minLength } from 'vuelidate/lib/validators';
export default {
    name: 'PublicacionesAgregar',
    data(){
        return{
            autor:'', 
            titulo:'', 
            revista:'',
            ano:'', 
            vol:'',
            paginas:'', 
            categoria:'',
            corresponding:'',
            estado:'',
            isbn:'',
            impact:'',
            doi:'',
            link:''
        }
    },
    methods: {
        ...mapActions(['agregarPublicaciones'])
    },
    validations:{
        autor:{required}, 
        titulo:{required}, 
        ano:{required}, 
        vol:{required}, 
        categoria:{required}, 
        doi:{required},
        link:{required},
        isbn:{required},
        revista:{required},
        estado:{required},
        impact:{required},
        corresponding:{required},
        paginas:{required}
    },
    computed: {
        ...mapState(['carga'])
    }
}
</script>