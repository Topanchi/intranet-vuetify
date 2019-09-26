<template>
    <div class="container">
        <h1>Editar invitado</h1>
        <div class="card-body">
            <form @submit.prevent="editarInvitados(invitado)">
                <div class="input-group mb-2 mr-sm-2">
                    <div class="input-group-prepend">
                        <div class="input-group-text">
                            Nombre
                        </div>
                    </div>
                    <input type="text" v-model="$v.invitado.nombre.$model" class="form-control">
                </div>

                <div class="input-group mb-2 mr-sm-2">
                    <div class="input-group-prepend">
                        <div class="input-group-text">
                            Institución
                        </div>
                    </div>
                    <input type="text" v-model="$v.invitado.institucion.$model" class="form-control">
                </div>

                <div class="input-group mb-2 mr-sm-2">
                    <div class="input-group-prepend">
                        <div class="input-group-text">
                            Llegada
                        </div>
                    </div>
                    <input type="text" v-model="$v.invitado.llegada.$model" class="form-control">
                </div>

                <div class="input-group mb-2 mr-sm-2">
                    <div class="input-group-prepend">
                        <div class="input-group-text">
                            Salida
                        </div>
                    </div>
                    <input type="text" v-model="$v.invitado.salida.$model" class="form-control">
                </div>

                <div class="input-group mb-2 mr-sm-2">
                    <div class="input-group-prepend">
                        <div class="input-group-text">
                            Año
                        </div>
                    </div>
                    <input type="text" v-model="$v.invitado.ano.$model" class="form-control">
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
    name: 'InvitadosEditar',
    data() {
        return {
            id: this.$route.params.id
        }
    },
    methods: {
        ...mapActions(['getInvitado', 'editarInvitados'])
        },
        created() {
            this.getInvitado(this.id)
        },
        computed: {
            ...mapState(['invitado'])
        },
        validations:{
            invitado:{
                nombre:{required}, 
                institucion:{required}, 
                llegada:{required}, 
                salida:{required}, 
                ano:{required}
            }
        }
}
</script>