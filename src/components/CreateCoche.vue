<template>
  <div class="p-5">
    <h1>Create Coche</h1>
    <form class="form" v-on:submit.prevent = "crearCoche()">
        <label class="form-label">Marca</label>
        <input class="form-control" type="text" v-model="coche.marca"/>
        <label class="form-label">Modelo</label>
        <input class="form-control" type="text" v-model="coche.modelo"/>
        <label class="form-label">Conductor</label>
        <input class="form-control" type="text" v-model="coche.conductor"/>
        <label class="form-label">Imagen</label>
        <input class="form-control" type="text" v-model="coche.imagen"/><br>
        <button class="btn btn-primary">Crear Coche</button>
    </form>
  </div>
</template>

<script>
import CochesService from '../services/CochesService'
const service = new CochesService();
export default {
name:"CreateCoche",
data(){
    return{
        coche:{
        idCoche:0,
        marca:"",
        modelo:"",
        conductor:"",
        imagen:""
    }
    }
},methods:{
    crearCoche(){
        service.postCoche(this.coche).then(() =>{
        this.$router.push("/")
    })
    }
}
}

</script>

<style>

</style>