<template>
  <div class="p-5">
    <h1>DELETE COCHE</h1>
    <button class="btn btn-lm btn-danger" @click="eliminarCoche">Eliminar Coche</button>
  </div>
</template>

<script>
// Importa SweetAlert2
import Swal from 'sweetalert2';
import CochesService from '../services/CochesService';
const service = new CochesService();

export default {
  name: "DeleteCoche",
  methods: {
    eliminarCoche() {
      let id = this.$route.params.id;
      Swal.fire({
        title: '¿Estás seguro?',
        text: '¡Esta acción no se puede deshacer!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar',
      }).then((result) => {
        if (result.isConfirmed) {

          service.deleteCoche(id).then(() => {
            Swal.fire(
              'Eliminado!',
              'El coche ha sido eliminado.',
              'success'
            ).then(() => {
              this.$router.push("/");
            });
          })
        }
      });
    }
  }
};
</script>

<style>
/* Agrega estilos si es necesario */
</style>
