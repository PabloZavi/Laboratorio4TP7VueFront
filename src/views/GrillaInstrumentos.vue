<template>
    <p style="text-align: left; padding-left: 200px;">
        <a class="btn btn-primary" :href="'/formulario/0'" role="button">Nuevo</a>
    </p>

    <div>
        Buscar entre precios
        <input type="number" v-model="precio1" placeholder="precio1">
        <input type="number" v-model="precio2" placeholder="precio2">

        <!-- <button type="button" @click="getInstrumentosEntrePrecios(precio1, precio2)" class="btn btn-primary mb-3">Buscar</button> -->
        <a class="btn btn-primary" @click="getInstrumentosEntrePrecios(precio1, precio2)">Buscar</a>
    </div>


    <div class="container-fluid">
        <!-- Para que ocupe toda la pantalla, si no sacar el -fluid -->
        <div class="row">
            <div class="col">
                <b>ID</b>
            </div>
            <div class="col">
                <b>Nombre</b>
            </div>
            <div class="col">
                <b>Marca</b>
            </div>
            <div class="col">
                <b>Modelo</b>
            </div>
            <div class="col">
                <b>Precio</b>
            </div>
            <div class="col">
                <b>Costo Envío</b>
            </div>
            <div class="col">
                <b>Cantidad Vendida</b>
            </div>
            <div class="col">
                <b>Modificar</b>
            </div>
            <div class="col">
                <b>Eliminar</b>
            </div>
        </div>
        <div class="row" v-for="instrumento in instrumentosData" :key="instrumento.id" style="padding-top: 5px;">
            <div class="col">
                {{ instrumento.id }}
            </div>
            <div class="col">
                {{ instrumento.instrumento }}
            </div>
            <div class="col">
                {{ instrumento.marca }}
            </div>
            <div class="col">
                {{ instrumento.modelo }}
            </div>
            <div class="col">
                {{ instrumento.precio }}
            </div>
            <div class="col">
                {{ instrumento.costoEnvio }}
            </div>
            <div class="col">
                {{ instrumento.cantidadVendida }}
            </div>
            <div class="col">
                <a class="btn btn-primary" :href="'/formulario/' + instrumento.id" role="button">Modificar</a>
            </div>
            <div class="col">
                <button type="button" @click="deleteInstrumento(instrumento.id)" class="btn btn-danger">Eliminar</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Instrumento from '@/entidades/Instrumento';
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
    name: 'GrillaInstrumentos',
    components: {},
    /*//V2
    mounted() {
      this.getPlatos();
    }, 
    */
    setup() { //setup se encargará de dispararse en la fase de inicialización del componente, al construir el componente, equivalente a created de V2
        const instrumentosData = ref<Instrumento[]>([]) //ref es el equivalente en react de useState, indico que la variable sera reactiva
        //V3
        onMounted(async () => {
            const res = await fetch(
                "http://localhost:3001/api/instrumentos/", {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                mode: 'cors'
            },
            );
            const resJson = await res.json();
            console.log(resJson);
            instrumentosData.value = await resJson;
        });
        return {
            instrumentosData,
            precio1: 0,
            precio2: 0
        };
    },
    methods: {
        /*async getPlatos() {
        const res = await fetch(
          "http://localhost:8081/api/platos", {
          method: 'GET',
          headers: {
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin':'*'
          },
          mode: 'cors'
        });
        const resJson = await res.json();
        console.log(resJson);
        this.platosData = resJson;
      },*/
        deleteInstrumento: async function (idInstrumento: number) {
            let urlServer = 'http://localhost:3001/api/instrumentos/' + idInstrumento;
            console.log(urlServer);
            let result = await fetch(urlServer, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                mode: 'cors'
            });
            window.location.reload();

        },
        async getInstrumentosEntrePrecios(precio1: number, precio2: number) {
            const res = await fetch(
                "http://localhost:3001/api/instrumentos/precios/query?min=" + precio1 + "&max=" + precio2
            );
            const resJson = await res.json();
            this.instrumentosData = resJson;
            this.precio1 = 0;
            this.precio2 = 0;
        }

    }
});
</script>