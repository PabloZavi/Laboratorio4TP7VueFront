<template>
  <div style="max-width: 75%; padding-left: 25%;">
  <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Nombre</label>
    <input v-model="instrumentoEncontrado.instrumento" type="text" class="form-control" id="exampleFormControlInput1" placeholder="Nombre" required>
  </div>
  <div class="mb-3">
    <label for="exampleFormControlInput2" class="form-label">Rubro</label>
    <input v-model="instrumentoEncontrado.marca" type="text" class="form-control" id="exampleFormControlInput2" placeholder="Rubro" required>
  </div>
  <div class="mb-3">
    <label for="exampleFormControlInput3" class="form-label">Modelo</label>
    <input v-model="instrumentoEncontrado.modelo" type="text" class="form-control" id="exampleFormControlInput3" placeholder="Modelo" required>
  </div>
  <div class="mb-3">
    <label for="exampleFormControlInput4" class="form-label">Imagen</label>
    <input v-model="instrumentoEncontrado.imagen" type="text" class="form-control" id="exampleFormControlInput4" placeholder="Imagen" required>
  </div>
  <div class="mb-3">
    <label for="exampleFormControlInput4" class="form-label">Precio</label>
    <input v-model="instrumentoEncontrado.precio" type="text" class="form-control" id="exampleFormControlInput5" placeholder="Precio" required>
  </div>
  <div class="mb-3">
    <label for="exampleFormControlInput4" class="form-label">Costo Envío</label>
    <input v-model="instrumentoEncontrado.costoEnvio" type="text" class="form-control" id="exampleFormControlInput6" placeholder="Costo Envío" required>
  </div>
  <div class="mb-3">
    <label for="exampleFormControlInput4" class="form-label">Cantidad Vendida</label>
    <input v-model="instrumentoEncontrado.cantidadVendida" type="text" class="form-control" id="exampleFormControlInput7" placeholder="Cantidad Vendida" required>
  </div>
  <div class="mb-3">
    <label for="exampleFormControlInput4" class="form-label">Descripción</label>
    <input v-model="instrumentoEncontrado.descripcion" type="text" class="form-control" id="exampleFormControlInput8" placeholder="Descripción" required>
  </div>
  <div class="col-auto">
    <button type="button" @click="guardar(instrumentoEncontrado)" class="btn btn-primary mb-3">Guardar</button>
  </div>
  </div>
</template>

<script lang="ts">
import Instrumento from '@/entidades/Instrumento';
import router from '@/router';
import { defineComponent, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'FormularioInstrumento',
  components: {},
  /*mounted() {
    this.getPlatoXId();
  }, */
  setup() {
    const route = useRoute()
    const instrumentoEncontrado = ref<Instrumento>(new Instrumento())
    onMounted(async () => {
              const parametroId:string = route.params.idInstrumento as string;
              if(parseInt(parametroId) != 0){
                const res = await fetch(
                  "http://localhost:3001/api/instrumentos/" + parametroId, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                mode: 'cors'
            });
                const resJson = await res.json();
                console.log(resJson);
                instrumentoEncontrado.value = resJson;
              }
            });
    
    return {
      instrumentoEncontrado
    };
  },
  methods:{
     /*async getPlatoXId() {
      const parametroId:string = this.$route.params.id as string;
      if(parseInt(parametroId) != 0){
        const res = await fetch(
          "http://localhost:8081/api/platoxid/" + parametroId
        );
        const resJson = await res.json();
        this.instrumentoEncontrado = resJson;
        console.log(this.instrumentoEncontrado);
      }
    },*/
    async guardar(instrumento:Instrumento) {
        let urlServer = 'http://localhost:3001/api/instrumentos/';
        let method = "POST";
        if(instrumento && instrumento.id > 0){
          urlServer = 'http://localhost:3001/api/instrumentos/' + instrumento.id;
          method = "PUT";
        }
        await fetch(urlServer, {
          "method": method,
          "body": JSON.stringify(instrumento),
          "headers": {
          "Content-Type": 'application/json'
          }
        });
        router.push('/grilla')
      }

    
  }
});
</script>