<template>
<div class="row userLogin">
    <form  >
        <h2 >Login</h2>
        <div class="row input">
            <input v-model="user.username" autoComplete="off" type="text" id="username"  name="username" placeholder="User Name" required/>                               
            <label htmlFor="username" >User Name:</label>
        </div>
        <div class="row">
            <input  v-model="user.password" autoComplete="off" type="text"  name="password" id="password"  placeholder="Password" required/>
            <label htmlFor="pas" >Password:</label>
        </div>
        <button v-on:click.prevent="handleLogin">Login</button>                                
    </form>
</div>
</template>

<script>
export default {
    methods: {
        handleLogin(){
            let userChek = {
                username : this.user.username,
                password : this.user.password
            }
            
              console.log(userChek, "user")
            this.$http.post("http://localhost:5000/login", userChek).then( function(response)  {
                return response.json();
                
            }).then(data => {
                console.log(data)
                if(data.status !== "fail"){
                    this.$router.push({path: "/"})
                }else{
                    alert("Your acc dont exist")
                }
                
                }
               
            )
        
        }
    },
    data(){
        return{
            user :{
                username : "",
                password : ""
            }
        }
    }

}
</script>
<style scoped>
 .userLogin{
     margin-left: 0.1rem;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: aquamarine;
 }
 .input{
   
 }
</style>
