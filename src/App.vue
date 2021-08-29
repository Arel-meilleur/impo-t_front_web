<template>
   <div>
     <template v-if="currentRouteName">
       <v-main>
         <home></home>
        <!-- <router-view></router-view> -->
      </v-main>
     </template>
     <template v-else>
       <v-main>
         <toolbar/>
        <router-view></router-view>
        <app-footer/>
       </v-main>
       
     </template>
        
    </div>

</template>

<script>
import Toolbar from './components/Toolbar.vue';
import AppFooter from './components/AppFooter.vue'
import Home from './views/admin/Home.vue';

export default {
  components: { Toolbar, AppFooter, Home },
  name: 'App',

  data: () => ({
    //
  }),
  computed : {
    // J'ai créer cette méthode pour charger a vue admin au cas ou la route est admin 
    currentRouteName(){
      // if(this.$route.name === "Home"){
      //   return true;
      // }else {
      //   return false;
      // }
      return this.$route.name;
      
    }
  }
};
</script>
