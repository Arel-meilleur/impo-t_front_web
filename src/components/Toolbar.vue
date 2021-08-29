<template>
  
  <v-card
    color="grey lighten-2"
    flat
    tile
    
  >
    <v-toolbar dense> 

      <v-toolbar-title>GesImpôts</v-toolbar-title>
      

      <v-spacer></v-spacer>

      <div >
          <router-link
        style="text-decoration: none;"
        v-for="item in items"
        :key="item.title"
        :to = "item.to"
        >
                <v-btn text v-if="item.show" >{{item.title}} </v-btn>
            </router-link>
        </div>
    </v-toolbar>
  </v-card>
</template>

<script>

export default {
  data(){
        return {
          login : null,
            items: [
              
                {title : 'Presentation', to:'/' ,show:true},
                {title : 'Documentation', to:'/documentation',show:true},
                {title : 'Service client', to:'/client_service',show:false},
                {title : 'Gérer ses impôts', to:'/impots', show:false},
                {title : 'Gérer contribuables', to:'/contribuable'},
                {title : 'Gérer admiistrations', to:'/administration'},  
                {title : 'Se connecter', to:'/contribuable/login', show:true},
                {title : 'Logout', to:'/logout'},
            ]

        }
    },

    created(){

      
    },
    mounted(){
      let mLogin = localStorage.getItem("login")
      if(mLogin == null){
        let item;
        for (item in this.items ){
          item.show = true;
        }
      }
    }
}
</script>


<style lang="sass">
  .v-input.expanding-search
    .v-input__slot
      &:before, &:after
        border-color: transparent !important
    
    max-width:400px

</style>