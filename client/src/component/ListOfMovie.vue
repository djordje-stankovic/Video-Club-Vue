<template>
    <div>    
        <div class="container">
            <div class="row col-12">
                <button @click="changeZanr" class="item btn btn-primary">All</button>
                <button @click="changeZanr" class="item btn btn-primary">Comedy</button>
                <button @click="changeZanr" class="item btn btn-primary">Action</button>
                <button @click="changeZanr" class="item btn btn-primary">Mistery</button>
                <button @click="changeZanr" class="item btn btn-primary">Horor</button>
                <input style="display: inline-block" type="text" v-model="filteredMovie">
            </div>
        </div>
        <div class="container-fluid">
        
        <div v-if="this.ListOfMovie.length > 0" class="row col-12" style="marginTop: 2rem; marginLeft : 3rem;">
            <!-- <router-link  v-for="movie in filterMovieList"  :key="movie.name" :to="{name : 'movieDetails', params:{id : movie.idmovie}}"><Movie  :oneMovi="movie" ></Movie></router-link> -->
            <Movie v-for="movie in ListOfMovie"  :key="movie.name" :oneMovi="movie" ></Movie>
        </div>
        <div v-else class="row col-12">
           <h1 style="marginLeft: 30rem"> No movies of {{this.curentZanr}} zanre at the moment!</h1>
        </div>
        </div>
    </div>
</template>

<script>
    import Movie from './MovieComponent';

export default{
 
    props: ['messageson'],
       computed: {
           filterMovieList(value){
               if(this.curentZanr === "All"){
                    return this.ListOfMovie.filter((movie) =>{
                        return movie.name.match(this.filteredMovie);
               })
               }else{
                   return this.ListOfMovie.filter((movie) =>{
                        return movie.name.match(this.filteredMovie) && movie.zanre === this.curentZanr
                        ;
               })
               }
               
           }
    }, 
     created() {
         this.fetchData();
      this.makeList();
            },
    components :{
        Movie
    },
     
    methods:{
          messageSister() {
                this.$emit('brothersaid', 'Mom said do your homework!')
            },
         makeList: function(){
      
        if(this.curentZanr !== 'All'){
            var newList = this.ListOfMovie.filter((movi) =>{
            return movi.zanre === this.curentZanr;
        })
        }else{
            this.ListForRender = this.ListOfMovie;
        }
        if(newList !== undefined){
            this.ListForRender = newList;
        }
       
       
        },
        changeZanr: function(zanre){
          
            this.curentZanr = zanre.target.innerText;
            this.makeList();
        },

        fetchData(){
            this.$http.get("movie").then(response => {
                return response.json();
                
            }).then(data => {
                const resultArray = [];
                for(let key in data){
                    resultArray.push(data[key]);
                }
                this.ListOfMovie = data;
               
            })
        }
      
    },
   

  
    
    data : function(){
        return{
            filteredMovie: '',
    curentZanr : "All",
    selectedComponent : "ListOfMovie",
    ListForRender:[],
    ListOfMovie :[],
  SelectedList : []
        }
    }
}
</script>

<style scoped>

</style>