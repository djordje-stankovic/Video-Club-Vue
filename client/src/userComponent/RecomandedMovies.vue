<template>
<div  class="myClass">
  <h5>Movies Recommendation</h5>
   <div class="bor">      
       <p class="tex">Title : {{ForRecomandation[0].title}}</p>
       <hr>
       <p class="tex">Runtime : {{ForRecomandation[0].runtime}}</p>
       <hr>

       <p class="tex">Genre : {{ForRecomandation[0].genres}}</p>
       <h1 v-if="this.MoviFromBase.length !== 0 ">{{MoviFromBase.title}}</h1>
       <h1 v-else></h1>
   </div>
</div>
  
</template>

<script>
export default {
watch: {
    userId: function () {  
      this.fetchUserMovie();
      },
      forseRerendering : function(){
          this.fetchUserMovie();
      }
    
  },

    props : [ 'userId', 'forseRerendering'],
    created (){
        this.fetchUserMovie();
     

        
    },
   data () {
    return {
    valueOfFavoriteMovieRunTime : 0,
    userMovie : [],
    recomandedMovie : [],
    userFavoriteGanres : [],
    uniqueGanres : [],
    FavoriteGanre : '',
    RunTimeFavorite : 0,
    MoviFromBase : [],
    ForRecomandation : {},
    }
   },
   methods :{
     getRecomandation(){
       var rec = this.MoviFromBase.filter(movie => movie.runtime == this.valueOfFavoriteMovieRunTime);
       this.ForRecomandation = rec;
     },
       fetchUserMovie(){
            this.$http.get("diskUser/" + this.userId ).then(response => {
                return response.json();           
            }).then(data => {
              if(data.lenght === 0){
                this.userMovie = [];
              }else{
                let movieForDisplay = [];
                let movieForLista = [];
                this.userMovie = [];
                for(var movie in data){
                  movieForDisplay.push(data[movie].Movi)
                  let cd = data[movie].id 
                  movieForLista.push(cd);
                }
                this.listaZa = movieForLista;
                this.userMovie = movieForDisplay;
                this.extractGanreForUser();
         
              }               
            })
      },
      extractGanreForUser(){
        this.userFavoriteGanres = [];
        this.uniqueGanres = [];
        for(var movie in this.userMovie){
              let ganre = this.userMovie[movie].genres.split(',');
              for(let oneGanre in ganre){
                  this.userFavoriteGanres.push(ganre[oneGanre]);
              }           
          }
        let unique = [...new Set(this.userFavoriteGanres)];
        this.uniqueGanres = unique;

        this.GetValueForRecomendation();
      },
      GetValueForRecomendation(){
          let unique = this.uniqueGanres;
          let allGanres = this.userFavoriteGanres;
          let Oneganre = '';
          let counter = 0;
          for(let ganre in unique){           
            let count =  allGanres.filter((v) => (v === unique[ganre])).length;
            if(counter < count){
                counter = count;
                Oneganre = unique[ganre];
                }
                else {
                    continue
                }               
            }
        
            this.FavoriteGanre = Oneganre.trim();
            this.getRunTimeOfUserMovies();
            this.getRecomandedMovie();
      },

      getRunTimeOfUserMovies(){
          let runTime = 0;
          for(let movie in this.userMovie){
              runTime += parseInt(this.userMovie[movie].runtime);
          }
          this.RunTimeFavorite = Math.floor( runTime / this.userMovie.length);
          
      },

      getRecomandedMovie(){
          var req = {
            genre : this.FavoriteGanre
          }
          this.$http.post('http://localhost:5000/recomanded',req ).then( function(response)  {
                return response.json();
                
            }).then(data => {
              this.MoviFromBase = data;
              this.findingBasedOnRunTime();
              this.getRecomandation();
          })
      },

      findingBasedOnRunTime(){
        let indexOfFavoriteRunTime = 0;
        let allRunTimes = [];
        for(let runtime in this.MoviFromBase){
          allRunTimes.push(parseInt(this.MoviFromBase[runtime].runtime)); 
        }
        allRunTimes.push(this.RunTimeFavorite);
        allRunTimes.sort(function(a, b){return a - b})
        console.log(allRunTimes)
      for(let i in allRunTimes){
        if(allRunTimes[i] == this.RunTimeFavorite){
          indexOfFavoriteRunTime = i;
        }
      }
      if(indexOfFavoriteRunTime == 0 && allRunTimes.length !== 1){
        this.valueOfFavoriteMovieRunTime = allRunTimes[indexOfFavoriteRunTime + 1];
      }
      
      if(indexOfFavoriteRunTime !== 0 && allRunTimes.length - 1  !=  indexOfFavoriteRunTime  ){
        let favorite = allRunTimes[indexOfFavoriteRunTime];
        let a = allRunTimes[indexOfFavoriteRunTime - 1];
        let b = allRunTimes[++indexOfFavoriteRunTime];
        if(favorite - a < b - favorite){
          this.valueOfFavoriteMovieRunTime = a;
        }else{
          this.valueOfFavoriteMovieRunTime = b;
        }
      }
      else {
        this.valueOfFavoriteMovieRunTime = allRunTimes[indexOfFavoriteRunTime - 1];
      }
      }
      
      
   }
}
</script>

<style>
.myClass{

  border: 1px solid gray
}
.bor{
  border: 0;
  border-top: 2px solid black;
  text-align: start;

}
.tex{
  margin-left: 1rem;
  margin-top: 0.5rem;
  font-size: 20px
}
</style>
