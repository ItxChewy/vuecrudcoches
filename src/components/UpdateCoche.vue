<template>
  <div class="p-5">
    <h1>Update Coche</h1>
    <form class="form" v-on:submit.prevent = "actualizarCoche()">
        <label class="form-label">Marca</label>
        <input class="form-control" type="text" v-model="coche.marca"/>
        <label class="form-label">Modelo</label>
        <input class="form-control" type="text" v-model="coche.modelo"/>
        <label class="form-label">Conductor</label>
        <input class="form-control" type="text" v-model="coche.conductor"/>
        <label class="form-label">Imagen</label>
        <input class="form-control" type="text" v-model="coche.imagen"/><br>
        <button class="btn btn-primary">Modificar Coche</button>
    </form>
  </div>
</template>

<script>
import CochesService from '../services/CochesService'
const service = new CochesService();
export default {
name:"UpdateCoche",
data(){
  return{
    coche:[]
  }
}, mounted(){
  let id = this.$route.params.id
  service.getCoche(id).then(response =>{
    this.coche = response
  })
},methods:{
  actualizarCoche(){
    service.putCoche(this.coche).then(result =>{
      console.log("actualizado" + result)
      this.$router.push("/")
    })
  }
}
}
</script>

<style>

</style>