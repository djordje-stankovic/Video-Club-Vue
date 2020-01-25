<template>
<div id="div1" style="height: 430px;position:relative;">
    <div id="div2" style="max-height:100%;overflow:auto">
        <div id="div3" style="height:1200px; width : 55rem;">

            <table class="table">
  <thead>
    <tr>
      
       <th scope="col">Id</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
      <th scope="col">Is Active</th>
    </tr>
  </thead>
  <tbody>
    <tr :class="{'selected': selected === user.id}" v-for="user in ListOfUsers"  :key="user.id" @click="pasIdOfUser(user.id)">
      <th scope="row">{{user.id}}</th>
      <td>{{user.username}}</td>
      <td>{{user.email}}</td>
      <td>{{user.active? "Yes" : "No"}}</td>
    </tr>
  </tbody>
</table>
        </div>
    </div>
</div>
</template>

<script >


export default{
 
    //  props : ['curentZanr'],
       computed: {
         
    }, 
    created() {
         this.fetchData();
            },
    methods:{
        pasIdOfUser(userId){
        this.$emit('pasIdOfUser', userId)
      
         this.selected = userId;
        },
        fetchData(){
            this.$http.get("users").then(response => {
                return response.json();
                
            }).then(data => {
                const resultArray = [];
                for(let key in data){
                    resultArray.push(data[key]);
                }
                this.ListOfUsers = data;
               
            })
        }
      
    },
   

  
    
    data : function(){
        return{
    ListOfUsers :[],
    selected : 1
        }
    }
}
</script>

<style scoped>
.selected{
    background : gray
}
</style>