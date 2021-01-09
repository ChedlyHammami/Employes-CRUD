<template>
    <div class="employe-item" style="display:block;"> 
        <h5><p>Last Name: {{employe.nomEmploye}}</p></h5><br>
        <h5><p>First Name: {{employe.prenomEmploye}}</p></h5><br>
        <h5><p>Birth Date: {{employe.dateNaissance}}</p></h5>
        <button class="btn btn-primary" v-on:click="isVisible = !isVisible">Update</button> 
        &nbsp;&nbsp;&nbsp;
        <button v-on:click="isV = !isV" class="btn btn-danger">Delete</button>
        <div v-show="isVisible" class="form-custom">
            <div class="form-update">
                <button class="del" v-on:click="isVisible = !isVisible">x</button><br>
                <form @submit="updateEmploye">
                    <div class="form-group"><br>
                        <label for="exampleInputEmail1" >Last Name</label>
                        <input type="text" class="form-control" id="nomEmploye" v-model="nomEmploye" required>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">First Name</label>
                        <input type="text" class="form-control" id="prenomEmploye" v-model="prenomEmploye" required>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Birth Date</label>
                        <input type="date" class="form-control" id="dateNaissance" v-model="dateNaissance" required>
                    </div>
                    <button type=submit class="btn btn-primary">Update</button>&nbsp;&nbsp;&nbsp;<button type="reset" class="btn btn-danger"  v-on:click="isVisible = !isVisible">Cancel</button><br><br>
                    
                </form>
            </div>
        </div>
        <div v-show="isV" class="form-custom">
            <div class="form-update2">
            <button id="del1" class="btn btn-primary" v-on:click="isV = !isV">x</button><br>
            <h1>Are you sure you want to delete <nav>{{employe.nomEmploye}} {{employe.prenomEmploye}} ?</nav> </h1><br><br>
                <form ><button @click="$emit('del-employe',employe.idEmploye)" class="btn btn-danger" id="b" v-on:click="isV = !isV" style="margin-bottom:10px;">Delete</button></form>
                <button class="btn btn-primary" id="b" v-on:click="isV = !isV">Cancel</button>
            
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name:"EmployeItem",
    props:["employe"],
    data(){
            return {
                isVisible:false,
                isV:false
            }
    },
    methods:{
        updateEmploye(e){
          e.preventDefault();
          const updateEmp = {
              idEmp: this.employe.idEmploye,
              nomEmploye: this.nomEmploye,
              prenomEmploye: this.prenomEmploye,
              dateNaissance: this.dateNaissance
          }
          this.$emit('update-employe', updateEmp);
        }
    }
}
</script>

<style scoped>
    nav{
        color:red;
    }
    .employe-item{
        background: #f4f4f4;
        box-shadow: 5px 5px 8px 5px #d8d8d8;
        border-bottom: 1px #ccc dotted;
        border: 2px solid #e7e7e7; 
        border-radius: 4px;
        padding: .5rem;
    }
    .form-custom{
        display: grid;
        grid-template-columns: 1fr;
        justify-content: center;
        align-items: center;
        position: fixed;
        width:100%;
        height:100vh;
        top:0;
        left:0;
        background-color:rgba(0, 0, 0, 0.705);
    }
    .form-update{
        border-radius: 5px;
        padding-top:25px;
        padding-bottom:25px;
        margin:auto;
        background-color:rgb(223, 223, 223);
        width:50%;
    }
    .form-update2{
        display:inline-block;
        border-radius: 5px;
        padding-top:25px;
        padding-bottom:25px;
        margin:auto;
        background-color:rgb(223, 223, 223);
        width:50%;
    }
    #b{
        width:80%;
    }
    
    .form-update input{
        margin:auto;
        width:90%;
    }
    .del{
        background: #161616;
        color: rgb(255, 255, 255);
        margin-right:20px;
        border: none;
        padding: 5px 10px;
        border-radius: 50%;
        cursor:pointer;
        float:right;
    }
    #del1{
        color: rgb(255, 255, 255);
        margin-right:20px;
        border: none;
        padding: 5px 10px;
        border-radius: 50%;
        cursor:pointer;
        float:right;
    }
   
    
</style>