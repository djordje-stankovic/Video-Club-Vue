<template>
<div class="container-fluid oneBigDiv">
  <div class="row col-12" >
        <div class="row col -6" style="marginLeft : 1rem; height: 27rem; width : 20rem;">
          <NewListOfMovie @pasId="pasId($event)" :selectedUser="selectedUser" :id="userId" :refreshAvailableDisks="refreshAvailableDisks"  @publishCd="publishCd($event)"/> 
        </div>
        <div class="row col -6" style="marginLeft : 1rem; height: 27rem; width : 20rem;"> 
              <ListOfUser @pasIdOfUser="pasIdOfUser($event)"/>
        </div>
  </div>
  <hr>
  <div class="row col-12" >
    <div class="row col -6" style="marginLeft : 1rem; height: 27rem; width : 20rem;">  
      <MovieDetails :id="selectedMoviId"/>
               
    </div>
    <div class="row col -6" style=" height: 27rem; width : 20rem;">
       <UserDetailForAdmin :userId="userId"  @pasSelectedUser="pasSelectedUser($event)" :forseRerendering="forseRerendering"  @trackDisks="trackDisks" />  
    </div>
  </div>

</div>
  
</template>

<script>

import MovieDetails from './MovieDetals';
import ListOfUser from './ListOfUsers';
import NewListOfMovie from './NewListOfMovie';
import UserDetailForAdmin from "./../userComponent/UserDetailsForAdmin";

export default {
 components :{
        MovieDetails,
        ListOfUser,
        NewListOfMovie,
        UserDetailForAdmin,
    },
 

    data () {
    return {
     value : "UserLogin",
     selectedMoviId :1,
     userId : 1,
     selectedUser : '',
     forseRerendering : false,
     refreshAvailableDisks : false 
    }
  },
  methods : {
       //Comunication 
       pasId(id) {
                this.selectedMoviId = id;
                
            },
      pasIdOfUser(userId){
        this.userId = userId; 
      },
      pasSelectedUser(username){
        this.selectedUser = username;
       
      },
    swichRender(){
      if(this.forseRerendering === false ){
        this.forseRerendering = true;
      }else {
        this.forseRerendering = false;
      }
     
    },
     trackDisks(){
      
      if(this.refreshAvailableDisks === false ){
        this.refreshAvailableDisks = true;
      }else {
        this.refreshAvailableDisks = false;
      }
     },

      publishCd(){
        let cd = {
          "movieId" : this.selectedMoviId,
          "userId" : this.userId
        }       
            this.$http.post("disk" , cd).then(response => {
                return response.json();         
            }).then(data => {  
              this.swichRender();
            })
        
      }
  },
    computed: { 
        
    } 
}
</script>
<style scoped>

 /* container{
     display: flex;
     flex-direction: column;
     justify-content:start;
     
 }
 .item{
     width: 50%;
     height: 50%;
      display: flex;
     flex-direction: column;
 } */
 
</style>
