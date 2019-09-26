<template>
    <div class="container">
        <h1>Agregar invitado</h1>
        <div class="card-body">
            <form @submit.prevent="agregarInvitado({nombre:nombre,
                                            institucion:institucion,
                                            llegada:llegada,
                                            salida:salida,
                                            ano:ano})">
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
                                Institución
                            </div>
                        </div>
                        <input type="text" class="form-control" v-model="$v.institucion.$model">
                    </div>
                    <div class="input-group mb-2 mr-sm-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                Llegada
                            </div>
                        </div>
                        <input type="text" class="form-control" v-model="$v.llegada.$model">
                    </div>
                    <div class="input-group mb-2 mr-sm-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                Salida
                            </div>
                        </div>
                        <input type="text" class="form-control" v-model="$v.salida.$model">
                    </div>
                    <div class="input-group mb-2 mr-sm-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                Año
                            </div>
                        </div>
                        <input type="text" class="form-control" v-model="$v.ano.$model">
                    </div>
                </b-row>
                <button type="submit" class="btn btn-primary mb-2">Agregar</button>
            </form>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { required, minLength } from 'vuelidate/lib/validators';
export default {
    name: 'InvitadosAgregar',
    data() {
        return {
            nombre:'',
            institucion:'',
            llegada:'',
            salida:'',
            ano:''
        }
    },
    methods: {
        ...mapActions(['agregarInvitado'])
    },
    validations:{
        nombre:{required}, 
        institucion:{required}, 
        llegada:{required}, 
        salida:{required}, 
        ano:{required}
    },
    computed: {
        ...mapState(['carga'])
    }  
}
</script>