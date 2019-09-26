<template>
    <div class="container"> 
        <h1>Editar docencia</h1>
       <div class="card-body"> 
            <form @submit.prevent="editarDocencia(docencia)" >
                <div class="input-group mb-2 mr-sm-2">
                    <div class="input-group-prepend">
                        <div class="input-group-text">
                            Nombre
                        </div>
                    </div>
                    <input type="text" v-model="$v.docencia.nombre.$model" class="form-control">
                </div>
                <div class="input-group mb-2 mr-sm-2">
                    <div class="input-group-prepend">
                        <div class="input-group-text">
                            Codigo
                        </div>
                    </div>
                    <input type="text" v-model="$v.docencia.codigo.$model" class="form-control">
                </div>
                <div class="input-group mb-2 mr-sm-2">
                    <div class="input-group-prepend">
                        <div class="input-group-text">
                            Docente
                        </div>
                    </div>
                    <input type="text" v-model="$v.docencia.docente.$model" class="form-control">
                </div>
                <div class="input-group mb-2 mr-sm-2">
                    <div class="input-group-prepend">
                        <div class="input-group-text">
                            Programa
                        </div>
                    </div>
                    <input type="text" v-model="$v.docencia.rexe.$model" class="form-control">
                </div>
                <div class="input-group mb-2 mr-sm-2">
                    <div class="input-group-prepend">
                        <div class="input-group-text">
                            Horas
                        </div>
                    </div>
                    <input type="text" v-model="$v.docencia.horas.$model" class="form-control">
                </div>
                <div class="input-group mb-2 mr-sm-2">
                    <div class="input-group-prepend">
                        <div class="input-group-text">
                            Unidad
                        </div>
                    </div>
                    <input type="text" v-model="$v.docencia.unidad.$model" class="form-control">
                </div>

                <button type="submit" class="btn btn-primary md-2" >Editar</button>
                <!-- :disabled="$v.tarea.$invalid" -->
            </form>
            <small class="text-danger d-block" v-if="!$v.docencia.nombre.required">Campo requerido</small>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapState} from 'vuex'
    import { required, minLength } from 'vuelidate/lib/validators';
    export default {
        name: 'DocenciaEditar',
        data(){
            return{
                id: this.$route.params.id
            }
        },
        methods: {
            ...mapActions(['getDocencia', 'editarDocencia'])
        },
        created() {
            this.getDocencia(this.id)
        },
        computed: {
            ...mapState(['docencia'])
        },
        validations:{
            docencia:{
                nombre:{required},
                codigo:{required},
                rexe:{required},
                unidad: {required},
                horas: {required},
                docente: {required}
            }
        }
    }
</script>