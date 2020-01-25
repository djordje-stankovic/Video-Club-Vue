<template>
<div class="content">
    <div class="userDisplay">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <button @click="change"  class="btn btn-dark" >Login</button>
            <button @click="change" class="btn btn-dark" >Sing Up</button>
    
            
        </nav>
        
        <component :is="value"></component>
    </div>
    
</div>

  
</template>

<script>
import UserLogin from './UserLogin';
import UserSingUp from './UserSingUp';

export default {
    components :{
        UserLogin,
        UserSingUp
    },
    data () {
    return {
     value : "UserLogin"
    }
  },
  methods : {
      change: function(comp){
            console.log(comp.target.innerText)
            console.log(this.value)
            if( comp.target.innerText === "Login"){
                this.value = "UserLogin"
            }else{
                this.value = "UserSingUp"
            }
        }},
    computed: { 
        
    } 
}
</script>
<style scoped>
 .content{
    height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
 }
  .userDisplay{
      margin-top: 7rem;
    width: 60rem;
  height: 40rem;
    border: solid 1px gray;
  }
  a{
      text-transform: uppercase;
  }
 

</style>
