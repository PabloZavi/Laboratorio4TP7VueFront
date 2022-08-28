<template>
  <div>
    <div class="container">
      <div class="row align-items-start">
        <div class="col">
          <img style="max-height:400px" :src="urlImage"/></div>
        <div class="col">
          <div class="row align-items-start">
            <div class="col"><h1>{{ instrumentoEncontrado.instrumento }}</h1></div>
          </div>
          <div class="row align-items-start">
            <div class="col"><h2>$ {{ instrumentoEncontrado.precio }}</h2></div>
          </div>
          <div class="row align-items-start">
            <div class="col"><h2>Marca: {{ instrumentoEncontrado.marca }}</h2></div>
          </div>
          <div class="row align-items-start">
            <div class="col"><h2>Modelo: {{ instrumentoEncontrado.modelo }}</h2></div>
          </div>
          <div class="row align-items-start">
            <div class="col">
              <h2 v-if="(instrumentoEncontrado.costoEnvio==='G')">Envío gratis a todo el país</h2>
              <h2 v-if="(instrumentoEncontrado.costoEnvio!='G')">Costo de envío: $ {{ instrumentoEncontrado.costoEnvio }}</h2>
            </div>
          </div>
          <!-- <div class="row align-items-start">
            <div class="col"><b>Ingredientes:</b></div>
          </div>
          <div class="row align-items-start">
            <div class="col"><li
                v-for="(ingrediente, index) in instrumentoEncontrado.ingredientes"
                :key="index"
              >
                {{ ingrediente.nombre }} {{ ingrediente.cantidad }} {{ ingrediente.unidadMedida }}
              </li>
            </div>
          </div> -->
          <div class="row align-items-start">
            <div class="col"><a href="/productos" class="btn btn-success">VOLVER</a></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetalleInstrumento",
  components: {},
  mounted() {
    this.getInstrumentoXId();

    
  },
  updated(){
    if(String(this.instrumentoEncontrado.imagen).indexOf("http") >= 0){
      this.urlImage = this.instrumentoEncontrado.imagen;
    }else{
      this.urlImage = '/assets/images/' + this.instrumentoEncontrado.imagen;
    }
    
  },
  data() {
    return {
        urlImage: String,
        instrumentoEncontrado: [],
        costoEnvio: String
    };
  },
  methods: {
    async getInstrumentoXId() {
      const parametroId = this.$route.params.id;
      const res = await fetch(
        "http://localhost:3001/api/instrumentos/" + parametroId
      );
      const resJson = await res.json();
      this.instrumentoEncontrado = resJson;
      console.log(this.instrumentoEncontrado);
    }
  }
};
</script>
