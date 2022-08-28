<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
            <!-- <a class="navbar-brand" href="#">Navbar</a> -->
            <!-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button> -->
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="/dondeestamos">Donde estamos</a>
                </li>
                <li class="nav-item">
                    <router-link to="/productos" class="nav-link">Productos</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/grilla" class="nav-link">Grilla Instrumentos</router-link>
                </li>
                <!-- <li class="nav-item">
                    <router-link to="/formulario" class="nav-link">Formulario</router-link>
                </li> -->
            </ul>
            <form class="d-flex">
                <input v-model="termino" class="form-control me-2" type="search" placeholder="Search" aria-label="Search" id="busq">
                <!-- <button class="btn btn-outline-success" type="submit">Search</button> -->

                <a class="btn btn-primary" :href="'/buscar/' + termino" role="button">Buscar</a>
                <!-- <button @click="" class="btn btn-outline-success" type="submit">Search</button> -->
                <!-- <div class="col">
                <a class="btn btn-primary" :href="'/formulario/' + instrumento.id" role="button">Modificar</a>
            </div>
            <div class="col">
                <button type="button" @click="deleteInstrumento(instrumento.id)" class="btn btn-danger">Eliminar</button>
            </div> -->
                </form>


            </div>
        </div>
    </nav>
</template>


<script lang="ts">

export default {
  name: "NavBar",
   
  data() {
    return {
      termino: ""
    };
  },
}
</script>