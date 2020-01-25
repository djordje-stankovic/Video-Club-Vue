<template>
      <div  id="div1" style="position:relative;">       
            <div id="div3" style="width : 55rem;">
                  <div  class="container">
                     <div v-if="this.userDisks.length !== 0"  style="marginLeft : 1rem; width : 18rem; ">
                        <p style="display : inline-block; height : 0.5rem;">Id : {{this.id}}</p>
                        <hr>
                        <p>User : {{this.userName}}</p>
                        <hr>

                        <p>Email : {{this.email}}</p>
                        <hr>
                        <RecomandedMovies :userId="userId" :forseRerendering="forseRerendering" />

                      </div>
                       <div v-else>
                          <h1>User dont have movie</h1>  
                        </div>
                      
                        <div style="marginLeft : 1rem; width : 40rem;" v-if="Object.keys(this.movies).length !== 0">
                            <div class="row" v-if="this.diskForReturning !== ''">
                             <button style="marginLeft: 35rem" type="button" class="btn btn-outline-dark" v-on:click="returnMovie" >Return</button>
                          </div>
                          <div v-else></div>
                            <table class="table" >
                              <thead>
                                <tr>                       
                                  <th scope="col">Id</th>
                                  <th scope="col">Title</th>
                                  <th scope="col">Genre</th>
                                  <th scope="col">Runtime</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr :class="{'selected': selected === index}" v-for="(movie, index) in movies" :key="index"  @click="getDiskId(index)">                                 
                                  <td style="">{{movie.id}}</td>
                                  <td>{{movie.title}}</td>
                                  <td>{{movie.genres}}</td>
                                  <td>{{movie.runtime}}</td>
                                  
                                </tr>                                     
                              </tbody>
                            </table> 
                        </div>
                        <div style="marginLeft : 10rem; width : 40rem;" v-else>
                            <h1>User dont have movies</h1>
                        </div>                                
              </div>
            </div>       
     </div>
   

</template>

<script>

import RecomandedMovies from "./RecomandedMovies";

export default {
  components : {
    RecomandedMovies
  },

  props: ['userId','selectedUser','forseRerendering'],
     
created() {

   this.fetchMovieData();
      this.fetchUserData();
},
watch: {
    userId: function () {  
      this.fetchMovieData();
      this.fetchUserData();
      },
      forseRerendering : function(){
      this.fetchMovieData();
      }
  },
data(){
    return{
      userDisks :[],
      userName : "",
      email : "",
      id : "",
      movies : [],
      listaZa : [],
      diskForReturning : '',
      selected : 0,
    }
},
methods : {

  getDiskId(index){
this.diskForReturning = this.listaZa[index];
this.selected = index;
  },
  returnMovie(){
    this.$http.put("returnCd/" + this.diskForReturning ).then(response => {
                return response.json();           
            }).then(data => {
              this.fetchMovieData()
              this.diskForReturning = '';
              this.$emit('trackDisks') 
            })
  },
     fetchMovieData(){
            this.$http.get("diskUser/" + this.userId ).then(response => {
                return response.json();           
            }).then(data => {        
              if(data.lenght === 0){        
                this.movie = [];
                this.userDisks = [];
              }else{
                let movieForDisplay = [];
                let movieForLista = [];
                for(var movie in data){
                  movieForDisplay.push(data[movie].Movi)
                  let cd = data[movie].id 
                  movieForLista.push(cd);
                }
                this.listaZa = movieForLista;
                this.movies = movieForDisplay;

              }               
            })
      },
      fetchUserData(){
            this.$http.get("user/" + this.userId ).then(response => {
                return response.json();
                
            }).then(data => {
                this.userDisks = data;
                this.userName = data.username;
                this.id = data.id;
                this.email = data.email;
                this.pasSelectedUser(data.username) ;
              })
      },
      pasSelectedUser(username) {
                this.$emit('pasSelectedUser', username)
            }
  }
}




</script>
<style  scoped>
.container{
  display: flex;
}
.p{
  display: inline-block;
}
.selected{
    background : gray
}
</style>