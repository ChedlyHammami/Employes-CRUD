<template>
  <div class="ListEmploye">
    <Title msg="List Des Employes"/>
    <Employes v-bind:employes="employes._embedded.employes" v-on:del-employe="deleteEmploye"/> 
    <br>
    <br>
  </div>
</template>

<script>
// @ is an alias to /src
import Title from '@/components/Title.vue'
import Employes from '@/views/Employes.vue'
import axios from 'axios'
export default {
  name: 'ListEmploye',
  components: {
    Title,
    Employes
  },
  data(){
    return {
      employes: []
    }
  },
  methods:{
    deleteEmploye(idEmploye){
      axios.delete('http://localhost:8080/employes/rest/'+idEmploye)
      .then(this.employes = this.employes.filter(employe => employe.idEmploye !== idEmploye ))
      .catch(err => console.log(err));
    }
  },
  
  created(){
          axios.get('http://localhost:8080/employes/rest')
          .then(res => this.employes = res.data)
          .catch(err => console.log(err));
        }
 
  }

</script>
<style scoped>
  
</style>