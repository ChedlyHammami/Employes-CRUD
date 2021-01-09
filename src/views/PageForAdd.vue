<template>
    <div>
      <AddEmploye v-on:add-employe="addEmploye"/><br><br>
    </div>
</template>
<script>
import AddEmploye from './AddEmploye'
import axios from 'axios'
export default {
    components: {
        AddEmploye
    },
    methods: {
    addEmploye(newEmploye){
      const {nomEmploye, prenomEmploye, dateNaissance} = newEmploye;
      axios.post('http://localhost:8080/employes/rest',{
        nomEmploye,
        prenomEmploye,
        dateNaissance
      })
        .then(alert("Adding Data Succesfuly"))
        .catch(err => console.log(err));
      
    }
  }
    
}
</script>
<style scoped>

</style>