<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand href="#">Employes</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item><router-link to="/">List Of Employes</router-link></b-nav-item>
                <b-nav-item><router-link to="/addEmploye">Add Employe</router-link></b-nav-item>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

a{
    color:rgb(17, 17, 27);
    transition: 0.3s;
}
a:hover{
    text-decoration: none;
    color:rgb(111, 111, 170);
}

</style>
