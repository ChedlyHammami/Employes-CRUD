<template>
    <div>
        <div v-bind:key="employe.idEmploye" v-for="employe in employes">
            <EmployeItem v-bind:employe="employe" v-on:update-employe="update"  v-on:del-employe="$emit('del-employe',employe.idEmploye)" />
        </div>
    </div>
</template>

<script>

import EmployeItem from './EmployeItem.vue';
//import axios from 'axios';
export default{
        name: "Employes",
        components:{
            EmployeItem
        },
        props:["employes"],
        methods:{
            update(updateEmp){
                console.log(updateEmp.idEmp);
                let nom = updateEmp.nomEmploye;
                let prenom = updateEmp.prenomEmploye;
                let date = updateEmp.dateNaissance;
                console.log(nom)
                console.log(prenom)
                console.log(date)
                // axios.put('http://localhost:8080/employes/rest/'+updateEmp.idEmp,{
                //     updateEmp
                // }).then(alert("success"))
                // .catch(err => console.log(err));
                fetch('http://localhost:8080/employes/rest/'+updateEmp.idEmp, {
                method: 'put',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    nomEmploye:nom,
                    prenomEmploye:prenom,
                    dateNaissance:date
                 })
            }).then(res => res.json()).then(res => console.log(res));
            }
        }
        
    }
    
</script>

<style scoped>
    div{
        margin: auto;
        margin-top:1.1em;
        display:grid;
        grid-template-columns: auto auto auto;
        grid-column-gap:10px;
        grid-auto-rows: auto;
        grid-gap: 1rem;
    }
    .form-custom{
        background-color:black;
    }
  
    @media(max-width:1090px){
        div{
        display:block;
        margin-top:2em;
        width:90%
        }
    }
</style>