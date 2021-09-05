<template>
  <v-app id="inspire">
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
                  <v-row>
                    <v-col>
                        <h1 class="text-center display-1 mt-8 mb-4">Connexion!</h1>
                      <v-card-text>
                        <v-form lazy-validation >
                          
                          <v-text-field
                            v-model="form.email"
                            label="Email"
                            name="Email"
                            prepend-icon="mdi-email"
                            type="text"
                            color="red accent-2"
                          />

                          <v-text-field
                            v-model="form.password"
                            id="password"
                            label="Mot de passe"
                            name="password"
                            prepend-icon="mdi-lock"
                            type="password"
                            color="red accent-2"
                          />
                        </v-form>
                      <div class="text-center mt-2 mb-6">
                        <v-btn rounded color="red accent-1" @click="login">Se connecter</v-btn>
                      </div>
                        <h3 class="text-center mt-4">Mot de passe oublié ?</h3>
                        <div class="text-center">
                            <v-btn style="text-decoration: none; text-transform :none; text-align:center; text-color:blue;" text > Cliquer ici </v-btn>
                        </div>

                      </v-card-text>
                    </v-col>
                    
                  </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

// import axios from '../../librairie/axios'

export default {
   data: () => ({
    step: 1,
    form: {
            email: '',
            password: ''
          },
    form2:{
            name  : null,
            email  : null,
            password : null,
            password_confirmation  : null
          },
    errors : {},
    loginerror : '',

  }),
  props: {
    source: String
  },
  created(){
  },

  computed : {
    disabled(){
        return !(this.form.email && this.form.password)
    }
  },

  methods : {
    login(){
        localStorage.setItem("authenticated", true)
        window.location = '/admin'
    }

  } 
}
</script>
<style scoped>

</style>