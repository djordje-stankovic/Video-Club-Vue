<template>

  <div class="row userLogin">
    <form  >
        <h2 >Sing Up</h2>
        <div class="row input">
            <input v-model="user.username" autoComplete="off" type="text" id="userName"  name="userName" placeholder="User Name" required/>                            
            <label htmlFor="userName" >User Name</label>
        </div>
        <div class="row input">
            <input v-model="user.email" autoComplete="off" type="text" id="email"  name="email" placeholder="Emai" required/>                               
            <label htmlFor="email" >Email address:</label>
        </div>
        <div class="row">
            <input v-model="user.password" autoComplete="off" type="text"  name="password" id="password"  placeholder="Password" required/>
            <label htmlFor="pas" >Password:</label>
        </div>
        <button v-on:click.prevent="handleSubmit">Submit</button>                        
    </form>
    
</div>
  
</template>

<script>
export default {
    methods : {
        handleSubmit(){
            console.log(this.user)
            this.$http.post("user", this.user).then(response => {
                return response.json();
                
            }).then(data => {
                if(data){
                    let mail ={
                        to: data.email,
                        subject : "Certificate of account",
                        html : "Here you can activate your acc",
                        path : "http://localhost:8080/activation/" + data.id,
                    }
                    console.log(mail)
                    this.$http.post("mail", mail).then(response => {
                return response.json()})
                }
                console.log(data)
                }
               
            )
        }
    },
    data(){
        return{
            user :{
                username : "",
                email : "",
                password : ""
            }
        }
    }

}
</script>
<style scoped>
 
</style>
