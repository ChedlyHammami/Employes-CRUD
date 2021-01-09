<template>
  <div>
    <Title msg="Add Employes"/>
    <center><form @submit="addEmploye">
      <div class="form-group"><br>
        <label for="exampleInputEmail1">Last Name</label>
        <input type="text" v-model="nomEmploye" class="form-control" placeholder="Last Name" required>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">First Name</label>
        <input type="text" v-model="prenomEmploye" class="form-control" placeholder="First Name" required>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Birth Date</label>
        <input type="date" class="form-control" v-model="dateNaissance" placeholder="Birth Date" required>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>&nbsp;&nbsp;&nbsp;<button type="reset" class="btn btn-danger">Reset</button><br><br>
    </form></center>
  </div>
</template>
<script>
import Title from '@/components/Title.vue'
export default {
  components:{
    Title
  },
  data(){
        return {
            nomEmploye:'',
            prenomEmploye:'',
            dateNaissance:''
        }
    },
  methods:{
      addEmploye(e){
          e.preventDefault();
          const newEmploye = {
              nomEmploye: this.nomEmploye,
              prenomEmploye: this.prenomEmploye,
              dateNaissance: this.dateNaissance
          }
          this.$emit('add-employe', newEmploye);
        }
    }
}
</script>
<style scoped>
  body{
    margin:auto;
  }
  form{
    border-radius: 5px;
    box-shadow: 5px 5px 8px 5px #d8d8d8;
    margin-top:50px;
    width:80%;
  }
  form input{
    width:90%;
  }
</style>