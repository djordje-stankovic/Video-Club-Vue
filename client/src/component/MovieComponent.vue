<template>
  <div class="row col-2">
    <div class="card" style="width: 15rem;">
  <img style="height : 15rem; width: 15rem;" :src="oneMovi.poster_path" >
  <div class="card-body d-flex flex-column">
    <h5 class="card-title">{{oneMovi.title}}</h5>
    <p>{{oneMovi.genres}}</p>
    <router-link tag="a" :key="oneMovi.name" :to="{name : 'movieDetails', params:{id : oneMovi.id}}" class="navbar-brand btn-block text-truncate mt-auto" style=""> Details</router-link>
  </div>
</div>
      
  </div>
</template>

<script>
export default {
  name: 'Movie',
  props : ["oneMovi"],
  
//   data () {
//     return {
//       name : this.props.name,
//       rate : this.props.rate,
//       author : this.props.author
//     }
//   },
  methods :{
    
  }
}
</script>
<style scoped>
 .col-3{
   margin: 1rem 0 0 1rem;;
 }
 #fixedbutton {
    position: fixed;
    bottom: 0px;
    
}
</style>
