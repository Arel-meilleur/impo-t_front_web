<template>
    <v-container>
        <div class="d-flex flex-row-reverse mt-6 mb-4 mr-10">
        <v-btn type="submit" color="teal" to="/administration/create">Ajouter </v-btn>

        </div>

        <v-card>
            <v-toolbar
                color="indigo"
                dark
                dense
                class="mt-2"
                >
            <v-toolbar-title >Administrations</v-toolbar-title>
        </v-toolbar>

        <v-list>
            <div v-for="item in items" :key="item.title">
                <v-list-item  >
                    <!-- <v-list-item-action>
                        <v-btn icon small @click="edit(index)" >
                            <v-icon color="orange">
                                mdi-circle-edit-outline
                            </v-icon>
                        </v-btn>
                    </v-list-item-action> -->
                <v-list-item link to="/administrations/administration">
                    <v-list-item-content >
                        <v-list-item-title >
                            {{item.title}}
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                    <v-list-item-action>
                        <v-btn icon small @click="edit(index)" >
                            <v-icon color="orange">
                                mdi-circle-edit-outline
                            </v-icon>
                        </v-btn>
                    </v-list-item-action>
                    
                    <v-list-item-action>
                        <v-btn icon small @click="destroy(category.slug,index)" >
                            <v-icon color="red">
                                mdi-delete
                            </v-icon>
                        </v-btn>
                    </v-list-item-action>
            </v-list-item>
            <v-divider></v-divider>
            </div>
        </v-list>

        </v-card>
    </v-container>

</template>

<script>
export default {

    data(){
        return {
            selectedItem: 1,
            form :{
                name : null,
            },
            categories : {},
            items: [
              
                {title : 'Ekounou'},
                {title : 'Essos' },
                {title : 'Byematie'},
                {title : 'Emana'},
                {title : 'Longkack'},
                {title : 'Efoulan'},
            ],
            editSlug : null
        }
    },

}



</script>

<style>
  
</style>
