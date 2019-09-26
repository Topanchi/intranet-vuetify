<template>
    <div class="container">
        <h1>Agregar docencia</h1>
        <div class="card-body"> 
            <form @submit.prevent="agregarDocencia({
                    nombre:     $v.nombre.$model, 
                    codigo:     $v.codigo.$model, 
                    docente:    $v.docente.$model, 
                    rexe:       $v.rexe.$model, 
                    horas:      $v.horas.$model, 
                    unidad:     $v.unidad.$model
                    })" >
                <b-row>
                    <div class="input-group mb-2 mr-sm-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                Nombre
                            </div>
                        </div>
                        <input type="text" class="form-control" v-model="$v.nombre.$model">
                    </div>
                    <div class="input-group mb-2 mr-sm-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                Código
                            </div>
                        </div>
                        <input type="text" class="form-control" v-model="$v.codigo.$model">
                    </div>
                    <div class="input-group mb-2 mr-sm-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                Docente
                            </div>
                        </div>
                        <input type="text" class="form-control" v-model="$v.docente.$model">
                    </div>
                    <div class="input-group mb-2 mr-sm-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                Programa
                            </div>
                        </div>
                        <input type="text" class="form-control" v-model="$v.rexe.$model">
                    </div>
                    <div class="input-group mb-2 mr-sm-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                Horas
                            </div>
                        </div>
                        <input type="number" class="form-control" v-model="$v.horas.$model">
                    </div>
                    <div class="input-group mb-2 mr-sm-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                Unidad
                            </div>
                        </div>
                        <input type="text" class="form-control" v-model="$v.unidad.$model">
                    </div>
                </b-row>
                <button type="submit" class="btn btn-primary mb-2" :disabled="carga">Agregar</button>
                <!-- :disabled="$v.$invalid || carga" -->
            </form>
            <!--<small class="text-danger d-block" v-if="!$v.nombre.required">Campo requerido</small>-->
        </div>
    </div>
             <!--
                <b-row>
                    <b-col>
                        <button type="submit" class="btn btn-success" :disabled="$v.$invalid">Ingresar</button>
                    </b-col>
                </b-row>
                -->
</template>


<script>
import { mapActions, mapState } from 'vuex';
import { required, minLength } from 'vuelidate/lib/validators';
export default {
    name: 'DocenciaAgregar',
    data() {
        return {
            nombre: '',
            codigo: '',
            docente: '',
            rexe: '',
            horas: '',
            unidad: ''
        }
    },
    methods: {
        ...mapActions(['agregarDocencia'])
    },
    validations:{
        nombre:{required},
        codigo:{required},
        docente:{required},
        rexe:{required},
        horas:{required},
        unidad:{required}
    },
    computed: {
        ...mapState(['carga'])
    },
}
</script>