<template>
  <div class="p-5">
    <h1>Coches Component</h1>
    <table class="table table-bordered table-dark">
        <thead>
            <tr>
                <th>Marca + Modelo</th>
                <th>Conductor</th>
                <th>Imagen</th>
                <th></th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="coche in coches" :key="coche" :value="coche.idCoche">
                <td>{{coche.marca}} {{coche.modelo}}</td>
                <td>{{coche.conductor}}</td>
                <td><img :src="coche.imagen"/></td>
                <td>
                    <router-link class="btn btn-warning" :to="'/update/' + coche.idCoche">Actualizar</router-link>
                </td>
                <td>
                    <router-link class="btn btn-danger" :to="'/delete/' + coche.idCoche">Borrar</router-link>
                </td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import CochesService from '../services/CochesService'
const service = new CochesService();
export default {
name:"CochesComponent",
data(){
    return{
        coches:[]
    }
},mounted(){
    service.getCoches().then(result =>{
        this.coches = result
    })
},
}
</script>

<style>
img{
    width: 150px;
    height: 150px;
}
</style>