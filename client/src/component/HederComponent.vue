<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link to="/" tag="a" class="navbar-brand">All movie</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item ">
    <router-link to="/" tag="a" class="navbar-brand">All movie</router-link>
               
      </li>
      <li class="nav-item">
    <router-link to="/movie" tag="a" class="navbar-brand">Movies</router-link>              
      </li>
    </ul>
    <div class="form-inline my-2 my-lg-0">
    <router-link to="/user" tag="a" class="navbar-brand">Log Out</router-link>      
    </div>
  </div>
</nav>
  
</template>

<script>
export default {
    props:['name', 'to']

}
</script>
<style scoped>
 
</style>
