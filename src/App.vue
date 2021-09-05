<template>
   <div>
     <template v-if="authenticated">
       <v-main>
        <home/>
      </v-main>
     </template>
     <template v-else>
        <!-- <home></home> -->
        <router-view></router-view>
     </template>
        
    </div>

</template>

<script>
import Home from './views/admin/Home.vue';
// import Login from './components/admin/Login.vue';
// import Toolbar from './components/Toolbar.vue';
// import AppFooter from './components/AppFooter.vue'
// import Home from './views/admin/Home.vue';

export default {
  components: {Home    },
  name: 'App',

  data: () => ({
    //
  }),
  computed : {

    authenticated () {
      
      let authenticated = localStorage.getItem("authenticated")
     return authenticated; // Depends on how you authenticate users, cookies, localStorage, etc..
    }
  }
};
</script>
