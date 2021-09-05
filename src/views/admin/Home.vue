<template>
    <div>
       <v-app id="inspire">
          <v-navigation-drawer 
            v-model="drawer"
            app
          >
          <v-list-item >
            <v-list-item-content>
              <v-list-item-subtitle class="text-md-center text-h6 mb-2 mt-2">
                GesImpôts
              </v-list-item-subtitle>
              <!-- <v-list-item-subtitle class="text-md-center text-h6 mb-2">
                Admin
              </v-list-item-subtitle> -->
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list
            dense
            nav 
          >
            <v-list-item
              v-for="item in items"
              :key="item.title"
              link
              :to="item.to"
              @click="parallaxe()"
            >
            
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title >{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          
        </v-navigation-drawer>
        
        <v-app-bar app >
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
          <!-- <v-toolbar-title>GesImpôts</v-toolbar-title> -->
          <!-- <v-text-field
            dense
            placeholder="Rechercher"
            prepend-inner-icon="mdi-magnify"
            class="expanding-search mt-6 ml-8"
            filled
          ></v-text-field> -->

    <v-spacer></v-spacer>
    <!-- <v-btn icon class="mr-12" @click="$vuetify.theme.dark  =! $vuetify.theme.dark"> mode </v-btn> -->
    <!-- <v-btn icon class="mr-10" @click="$vuetify.theme.dark  =! $vuetify.theme.dark"> <img title="Lite mode" src="../../../public/icons/theme-light-dark.png" alt="lite_mode"></v-btn> -->
    <v-btn icon class="mr-10"> <img title="Lite mode" src="../../../public/icons/belle.png" alt="lite_mode"></v-btn>
    <!-- <v-btn icon class="mr-10">bell</v-btn> -->

      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-avatar class="mr-12">
              <img
                src="https://cdn.vuetifyjs.com/images/john.jpg"
                alt="John"
              >
            </v-avatar>
          </v-btn>
        </template>
        
        <v-list>
          <v-list-item
            to="/admin/profile"
            @click="() => {}"
          >
            <v-icon dark color="indigo" class="mr-2">mdi-account-circle</v-icon>
            <v-icon dark color="indigo" class="mr-2" src="https://cdn.vuetifyjs.com/images/john.jpg"  ></v-icon>
            <v-list-item-title>Profile</v-list-item-title>
          </v-list-item>
        </v-list>
    
        <v-list>
          <v-list-item
            to="/logout"
            @click="() => {}"
          >
            <v-icon dark color="indigo" class="mr-2">mdi-logout</v-icon>
            <v-list-item-title>Se deconnecter</v-list-item-title>
          </v-list-item>
        </v-list>
        <v-list>
          <v-list-item
             @click="$vuetify.theme.dark  =! $vuetify.theme.dark"
          >
            <v-icon dark color="indigo" alt="lite_mode" class="mr-2"></v-icon>
            
            
            <v-list-item-title>Mode</v-list-item-title>
            
          </v-list-item>
        </v-list>
          
      </v-menu>
        
      
        </v-app-bar>
      <router-view></router-view>
      </v-app>
      
      
      
  </div>
    
    <!--  -->
    
</template>


<script>



export default {
    
    data: () => (
      { 
       
        mode: true,
        parallax: true,
        drawer: null ,
        items: [
          { title: 'Tableau de bord', icon: 'mdi-view-dashboard',  to : '/dashbord' },
          { title: 'Admiistrations', icon: 'mdi-cog',  to : '/administration' },
          { title: 'Apropos', icon: 'mdi-help-box', to: '/about' },
          { title: 'Parametres', icon: 'mdi-application-settings', to: '/paramettres' },
        ],}),

        items2 : [
          { icon: 'mdi-view-dashboard'},
        ]



}
</script>

<style lang="sass">
  .v-input.expanding-search
    .v-input__slot
      &:before, &:after
        border-color: transparent !important
    
    max-width:400px

</style>