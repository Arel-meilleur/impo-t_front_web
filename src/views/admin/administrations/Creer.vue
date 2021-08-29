<template>
    <v-container>
        <v-form>
            <div class="ml-12 mr-12 mt-10">
                 <v-text-field
                    label="Nom de l'administration"
                    type="text"
                    required
                    ></v-text-field>
                    <v-text-field
                    label="Juridiction"
                    type="text"
                    required
                    ></v-text-field>
                    <v-text-field
                    label="Porte"
                    type="text"
                    required
                    ></v-text-field>
                    <v-text-field
                    label="détail localisation"
                    type="text"
                    required
                    ></v-text-field>
                    <v-text-field
                    label="Intitulé Rue "
                    type="email"
                    required
                    ></v-text-field>
                    <v-text-field
                    label="Intitulé Quartiers"
                    type="text"
                    required
                    ></v-text-field>
                    <v-text-field
                    label="Code Arondissements"
                    type="text"
                    required
                    ></v-text-field>
                    <v-text-field
                    label="Intitulé Arondissements"
                    type="text"
                    required
                    ></v-text-field>
                    <v-text-field
                    label="Intitulé Département "
                    type="text"
                    required
                    ></v-text-field>
                    <v-text-field
                    label="Code Département "
                    type="text"
                    required
                    ></v-text-field>
            
                <div>
                    <v-btn type="submit" class="mr-4" color="teal">Creer </v-btn>
                    <v-btn type="submit" color="pink" to="/administration">Annuler </v-btn>
                </div>
            </div>
            
            
        </v-form>
    </v-container>
    
</template>
<script>
export default {
    
}
</script>