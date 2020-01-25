<template>
     <div v-if="movie !== null" id="div1" style="position:relative;">       
            <div id="div3" style="width : 55rem;">
                  <div  class="container">
                      <div class="item" >
                        <img style="height : 10rem" :src="movie.poster_path" >
                      </div>
                  <div class="item" style="marginLeft : 2rem;">
                    <h5 class="card-title"><b>Name </b>{{movie.title}}</h5>
                    <hr/>
                      <h5 class="card-title">Owervie </h5>
                      <p>{{movie.overview}}</p>
                    <hr/>
                      <p class="card-text">Budget : {{movie.budget}}</p>
                    <hr/>
                      <p class="card-text">Movie rate : {{movie.vote_average}}</p>
                    <hr/>
                       <p class="card-text">Movi is for {{movie.adult? "Adoults" : "Children"}}</p>
                      <hr/>
                  </div>
              </div>
            </div>       
     </div>
</template>

<script>
export default{
  props: ['id'],
     
created() {
 
  this.fetchData();
},
watch: {
    id: function () {     
      this.fetchData()
    }
  },
mounted(){

},   
  
  methods:{
      fetchData(){
            this.$http.get("movie/" + this.id ).then(response => {
                return response.json();
                
            }).then(data => {
              
                this.movie = data;
              
                this.serverResponse = true;
                
                
            })
      }

  },
  computed:{

    
  },
    data : function(){
        return{
            movie : null,
            serverResponse :false,
            forAdoult :true,
            idOfMovie : this.chechId
            
        }
    }
}
</script>

<style scoped>
.container{
  display: flex;
}
.item{

}
</style>