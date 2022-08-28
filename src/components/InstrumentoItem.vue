<template>
  <div>
    <div class="card mb-2" style="max-width: 20rem; min-width: 20rem;">
      <img :src="urlImage" class="card-img-top" style="max-height: 200px" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{ instrumentoParam.instrumento }}</h5>
        <p class="card-text">$ {{ instrumentoParam.precio }}</p>
        <p class="card-text"> {{ costoEnvio }}</p>
        <a :href="'/detalle/' + instrumentoParam.id" style="width: 100%;" class="btn btn-primary">Detalle</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      urlImage: String,
      costoEnvio: String
    };
  },
  //Lo que recibo cuando vindeo la información cuando este componente es llamado
  // y uso después en el template
  props: ["instrumentoParam"],
  mounted() {
    if(String(this.instrumentoParam.imagen).indexOf("http") >= 0){
      this.urlImage = this.instrumentoParam.imagen;
    }else{
      this.urlImage = '/assets/images/' + this.instrumentoParam.imagen;
    }
    if(this.instrumentoParam.costoEnvio == "G"){
      this.costoEnvio = "Envío gratis a todo el país";
    }
    else{
      this.costoEnvio = "Costo de envío: $ " + this.instrumentoParam.costoEnvio;
    }
  }
};
</script>

