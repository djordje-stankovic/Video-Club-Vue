<template>
<div>
    <p>{{ this.$route.params.id }}</p>
</div>
  
</template>

<script>


export default {
    created() {
  console.log('created');
  console.log(this.$route.params.id);
  this.sendMail();
 
},
    data () {
    return {
     value : "UserLogin"
    }
  },
  methods : {
       sendMail(){
             this.$http.put("user/" + this.$route.params.id).then(response => {
                return response.json();
                
            }).then(data => {
                console.log(data)
                if(confirm('Your acc is activated')){
                    this.$router.push({path: "/user"})  
                }
            })
        }
      },
    computed: { 
        
    } 
}
</script>
<style scoped>
 

</style>
