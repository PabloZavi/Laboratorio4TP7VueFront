<template>
    <div class="card-group">
        <div v-for="inst in instrumentosData" :key="inst.id" style="margin:15px">
            <instrumento-item v-bind:instrumentoParam="inst"></instrumento-item>
        </div>
    </div>
</template> 


<script lang="ts">
// @ is an alias to /src
import InstrumentoItemVue from '@/components/InstrumentoItem.vue';
import { stringifyQuery, useRoute } from 'vue-router';
import Instrumento from '@/entidades/Instrumento';
import { defineComponent, onMounted, ref } from 'vue';
import router from '@/router';


export default {
    name: "BuscadorView",
    components: {
        "instrumento-item": InstrumentoItemVue
    },
    /* data(){
        return{
            instrumentosEncontrados: [],
            //termino = "",
            //termino = route.params.termino as string
        }
    }, */
    setup() {

        const route = useRoute()
        const instrumentosData = ref<Instrumento[]>([])

        onMounted(async () => {
            const termino: string = route.params.termino as string;
            const res = await fetch(
                "http://localhost:3001/api/instrumentos/buscar/" + termino, {
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

        };
    },


};
</script>
