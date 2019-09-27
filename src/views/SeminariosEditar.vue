<template>
    <div class="container">
        <h1>Editar seminario</h1>
        <div class="card-body">
            <form @submit.prevent="editarSeminarios(seminario)">
                <div class="input-group mb-2 mr-sm-2">
                    <div class="input-group-prepend">
                        <div class="input-group-text">
                            Tema
                        </div>
                    </div>
                    <input type="text" v-model="$v.seminario.tema.$model" class="form-control">
                </div>
                <div class="input-group mb-2 mr-sm-2">
                    <div class="input-group-prepend">
                        <div class="input-group-text">
                            Expositor
                        </div>
                    </div>
                    <input type="text" v-model="$v.seminario.expositor.$model" class="form-control">
                </div>
                <div class="input-group mb-2 mr-sm-2">
                    <div class="input-group-prepend">
                        <div class="input-group-text">
                            Procedencia
                        </div>
                    </div>
                    <input type="text" v-model="$v.seminario.procedencia.$model" class="form-control">
                </div>
                <div class="input-group mb-2 mr-sm-2">
                    <div class="input-group-prepend">
                        <div class="input-group-text">
                            Fecha
                        </div>
                    </div>
                    <input type="text" v-model="$v.seminario.fecha.$model" class="form-control">
                </div>
                <div class="input-group mb-2 mr-sm-2">
                    <div class="input-group-prepend">
                        <div class="input-group-text">
                            Fecha
                        </div>
                    </div>
                    <input type="date" v-model="$v.seminario.fecha.$model" class="form-control">
                </div>
                
                <div class="input-group mb-2 mr-sm-2">
                    <div class="input-group-prepend">
                        <div class="input-group-text">
                            Año
                        </div>
                    </div>
                    <input type="text" v-model="$v.seminario.ano.$model" class="form-control">
                </div>

                <button type="submit" class="btn btn-primary md-2" >Editar</button>
            </form>
            <small class="text-danger d-block" v-if="!$v.seminario.tema.required">Campo requerido</small>
        </div>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import { required, minLength } from 'vuelidate/lib/validators';
export default {
    name: 'SeminariosEditar',
    data() {
        return {
            id: this.$route.params.id
        }
    },
    methods: {
        ...mapActions(['getSeminario', 'editarSeminarios'])
        },
        created() {
            this.getSeminario(this.id)
        },
        computed: {
            ...mapState(['seminario'])
        },
        validations:{
            seminario:{
                tema:{required},
                expositor:{required},
                fecha:{required},
                procedencia: {required},
                ano: {required}
            }
        }
}
</script>