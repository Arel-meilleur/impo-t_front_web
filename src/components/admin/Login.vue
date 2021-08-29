<template>
  <v-app id="inspire">
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
              <v-window v-model="step">
                <v-window-item :value="1">
                  <v-row>
                    <v-col cols="12" md="6">
                        <h1 class="text-center display-1 mt-8 mb-4">Bonjour, Connexion!</h1>
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
                        <v-btn rounded color="red accent-1">Se connecter</v-btn>
                      </div>
                        <h3 class="text-center mt-4">Mot de passe oublié ?</h3>
                        <div class="text-center">
                            <v-btn style="text-decoration: none; text-transform :none; text-align:center; text-color:blue;" text > Cliquer ici </v-btn>
                        </div>

                      </v-card-text>
                    </v-col>
                    <v-col cols="12" md="6" class="blue lighten-1">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">Bonjour, Chèr Ami!</h1>
                        <h5
                          class="text-center mt-4"
                        >Entrez vos information personnelles et commencez a remplir vos devoirs fiscaux en toute sécurité.</h5>
                      </v-card-text>
                      <div class="text-center mt-2 mb-8">
                        <v-btn rounded outlined dark @click="step++">S'inscire</v-btn>
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
                <v-window-item :value="2">
                  <v-row class="fill-height">
                    <v-col cols="12" md="4" class="blue lighten-1">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">Bon Retour!</h1>
                        <h5
                          class="text-center"
                        >Pour rester connecté avec nous, veuillez entrer vos informations personnelles</h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined dark @click="step--" >Se connecter</v-btn>
                      </div>
                    </v-col>

                    <v-col cols="12" md="8">
                      <v-card-text class="mt-4">
                        <h1 class="text-center display-2  ">Créer un compte</h1>
                        <h4 class="text-center mt-4">Assurez votre email pour l'inscription</h4>
                        <v-form lazy-validation ref="form2">
                          <v-text-field
                            label="Votre Nom"
                            v-model="form2.name"
                            prepend-icon="mdi-account"
                            type="text"
                            color="red accent-2"
                            required
                          />

                          <v-text-field
                            label="Email"
                            v-model="form2.email"
                            prepend-icon="mdi-email"
                            type="email"
                            color="red accent-2"
                            required
                          />

                          <v-text-field
                            id="password"
                            v-model="form2.password"
                            label="Mot de passe"
                            prepend-icon="mdi-lock"
                            type="password"
                            color="red accent-2"
                            required
                          />
                          <v-text-field
                            id="password"
                            v-model="form2.password_confirmation"
                            name="password_confirmation"
                            label="Confirmation mot de passe"
                            prepend-icon="mdi-lock"
                            type="password"
                            color="red accent-2"
                            required 
                          />
                        </v-form>
                      </v-card-text>
                      <div class="text-center mt-2 mb-8">
                        <v-btn rounded color="red accent-2" dark >S'inscrire</v-btn>
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
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

  } 
}
</script>
<style scoped>

</style>