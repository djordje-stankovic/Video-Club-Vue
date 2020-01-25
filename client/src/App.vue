<template>
<div>
  <!-- <div class="container">
   <button @click="selectedComponent =  'ListOfMovie'"  :curentZanr="'all'" class="item">List Of movie</button>
    <button @click="selectedComponent =  'MovieDetals'" class="item">MovieDetals</button>
  </div>
 <component :is="selectedComponent" >

 </component> -->
 <Heder/>
 <router-view>

 </router-view>
</div>

</template>

<script>
import Movie from './component/MovieComponent';
import Heder from './component/HederComponent'
import ListOfMovie from './component/ListOfMovie'
import MovieDetals from './component/MovieDetals'

export default {
  components : {
    Movie,
    Heder,
    MovieDetals,
    ListOfMovie
  },
  data:function(){
    return{
  
    } 
  
  },
    // methods : {
    //   currentProperties: function(){
    //     if(selectedComponent === "ListOdMovie"){
    //       return {ListOfMovie : "LisOfMovie"}
    //     }
    //   }
    // }
}
</script>

<style lang="scss" >
.body{
margin : 0;
padding:  0;
height: 100%;
}
</style>
