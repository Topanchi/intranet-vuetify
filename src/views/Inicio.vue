
<template>
  <div class="container">
    <div class="text-center">
          <h1>Página principal</h1>
    </div>
    <div>
      <div class="mt-3">
        <h3>Indicadores</h3>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Inicio'
}
</script>

<!--

<script>
import { mapActions,mapState, mapGetters } from "vuex";
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
export default {
  name: 'Inicio',
  data() {
    return {
      texto: ''
    }
  },
  computed:{
    ...mapState(['usuario','docencias', 'carga']),
    ...mapGetters(['arrayFiltrado'])
  },
  methods:{
    ...mapActions(['getDocencias', 'eliminarDocencia', 'buscador'])
  },
  created() {
    this.getDocencias()
  },
  components:{
    PulseLoader
  }
}
</script>


-->