<template>
    <div class="card-group">
        <!-- Por cada uno de los inst en instrumentos data... los vindeo con el componente instrumentoItem -->
        <!-- A través de la directiva v-bind:instrumentoParam="inst" 
        le paso cada instrumemnto. Ojo, instrumentoParam está en el props de Instrumento-Item, se tiene que llamar igual -->
        <div
          v-for="inst in instrumentosData"
          :key="inst.id"
          style="margin:15px"
        >
          <instrumento-item v-bind:instrumentoParam="inst"></instrumento-item>
        </div>
    </div>
</template> 


<script>
// @ is an alias to /src
import InstrumentoItemVue from '@/components/InstrumentoItem.vue';

export default {
  name: "HomeView",
  components: {
    //Usaré este componente (lo importé arriba), ojo el nombre que le pongo
    "instrumento-item": InstrumentoItemVue
  },
  mounted() {
    //1. Cuando se inicia/crea la aplicación, llamo directamente al método getInstrumentos
    this.getInstrumentos();
  }, 
  data() {
    return {
      //3. El método getInstrumentos me asignó a esta variable todos los instrumentos para usarla en el template
      instrumentosData: []
    };
  },
  methods: {
    //2. Este método busca todos los instrumentos y los asigna a la variable instrumentosData
    async getInstrumentos() {
      const res = await fetch(
        "http://localhost:3001/api/instrumentos/"
      );
      const resJson = await res.json();
      console.log(resJson);
      this.instrumentosData = resJson;
    }
  }
};
</script>
