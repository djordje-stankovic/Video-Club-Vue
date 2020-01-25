<template>
<div id="div1" style="height: 430px;position:relative;">
    <div class="row">
        <label style="marginLeft: 2rem" for="search">Title</label>
        <input v-model="search" style="marginLeft: 2rem" class="search" type="text" name="search" autocomplete="off">
        <button style="marginLeft: 2rem" type="button" class="btn btn-outline-dark" v-on:click="searchMovies" >Search</button>
        <button v-if="this.search !== ''" style="marginLeft: 2rem" type="button" class="btn btn-outline-dark" v-on:click="refreshMovies" >clear</button>
        <p style="marginLeft: 7rem">User : {{this.selectedUser}}</p>
        <button style="marginLeft: 2rem" type="button" class="btn btn-outline-dark" v-on:click="publish" >Give Cd</button>
        
            </div>
    <div id="div2" style="max-height:100%;overflow:auto">
        <div id="div3" style="height:1500px; width : 55rem;">

            <table class="table">
  <thead>
    <tr style="position: fixed: top:0;">
      
       <th scope="col">Id</th>
      <th scope="col">Title</th>
      <th scope="col">Budget</th>
      <th scope="col">Runtime</th>
      <th scope="col">Available</th>
    </tr>
  </thead>
  <tbody style="height :300px; overflow-y auto ">
    <tr  :class="{'selected': selected === movie.id}" v-for="movie in ListOfMovie"  :key="movie.id" @click="pasId(movie.id)">
      <th scope="row">{{movie.id}}</th>
      <td>{{movie.title}}</td>
      <td>{{movie.budget}}</td>
      <td>{{movie.runtime}}</td>
      <td>{{getSomting (movie.id)}}</td>
    </tr>
  </tbody>
</table>
        </div>
    </div>
    
</div>
</template>

<script>
    import Movie from './MovieComponent';

export default{
    props:['selectedUser', 'id', "refreshAvailableDisks"],
       computed: {
           
         
    }, 
    watch: {
    refreshAvailableDisks: function () {  
      this.gerFreeDisks();
        this.fetchData();
      }
  },
     created() {
         this.gerFreeDisks();
         this.fetchData();
            },
    components :{
        Movie
    },
     
    methods:{
        getSomting(id){
            let num = this.getNumberOfAvailable(id)
               return num;
           },
           getNumberOfAvailable(idOfMovie){
               var newArray = this.availableDisks.filter(function (el) {
                    return el.movieId == idOfMovie;
               
                
            });
      
                    return newArray.length
           },
        refreshMovies(){
            this.search = '';
            this.fetchData();
        },
        searchMovies : function(){
            if(this.search !== '') {
                let query = {
                "serch" : this.search
            }
            this.$http.post("search", query).then(response => {
                return response.json();
                
            }).then(data => {
                const resultArray = [];
                for(let key in data){
                    resultArray.push(data[key]);
                }
                this.ListOfMovie = data;
            })
            }else {
                this.fetchData();
            }
            
        },
         pasId(id) {
                this.$emit('pasId', id);
                this.selected = id;
            },
        publish(){
            this.$emit('publishCd')
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
        },
        gerFreeDisks(){
            this.$http.get("getFree").then(response => {
                return response.json();
                
            }).then(data => {
                const disks = [];
                for(let key in data){
                    disks.push(data[key]);
                }
                this.availableDisks = disks;
            
            })
        }
      
    },
      
    data : function(){
        return{
    selected : 1,
    ListOfMovie :[],
    search : '',
    num : 1,
    availableDisks : [],
        }
    }
}
</script>
<style lang="scss" scoped>
.search{
    border: 0;
    border-block-end: 1px solid black;
    
}
.selected{
    background : gray
}
</style>