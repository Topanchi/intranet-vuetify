<template>
    <div class="container">
        <h1>Agregar seminario</h1>
        <div class="card-body">
            <form @submit.prevent="agregarSeminario({expositor:expositor,
                                                    procedencia:procedencia,
                                                    tema:tema,
                                                    ano:ano,
                                                    fecha:fecha})">
                <b-row>
                    <div class="input-group mb-2 mr-sm-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                Expositor
                            </div>
                        </div>
                        <input type="text" class="form-control" v-model="$v.expositor.$model">
                    </div>

                    <div class="input-group mb-2 mr-sm-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                Prcedencia
                            </div>
                        </div>
                        <input type="text" class="form-control" v-model="$v.procedencia.$model">
                    </div>

                    <div class="input-group mb-2 mr-sm-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                Tema
                            </div>
                        </div>
                        <input type="text" class="form-control" v-model="$v.tema.$model">
                    </div>

                    <div class="input-group mb-2 mr-sm-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                Fecha
                            </div>
                        </div>
                        <input type="text" class="form-control" v-model="$v.fecha.$model">
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
    name: 'SeminariosAgregar',
    data(){
        return{
            expositor:'', 
            tema:'', 
            procedencia:'',
            ano:'', 
            fecha:''
            
        }
    },
    methods: {
        ...mapActions(['agregarSeminario'])
    },
    validations:{
        expositor:{required}, 
        procedencia:{required}, 
        tema:{required}, 
        fecha:{required}, 
        ano:{required}
    },
    computed: {
        ...mapState(['carga'])
    }    
}
</script>