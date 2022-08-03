<template>
    <nav>

        <v-snackbar v-model="snackbar" :timeout="4000" top color="success">
            <span>Awesome! You added a new project.</span>
            <v-btn plain color="white" @click="snackbar = false">Close</v-btn>
        </v-snackbar>

        <v-app-bar flat app>
            <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-app-bar-title class="text-uppercase grey--text">
                <span class="font-weight-light">Todo</span>
                <span>Ninja</span>
            </v-app-bar-title>
            <v-spacer></v-spacer>

            <!-- Dropdown menu -->
            <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                    plain
                    color="grey"
                    v-bind="attrs"
                    v-on="on"
                    >
                    <v-icon>mdi-chevron-down</v-icon>
                    <span>Menu</span>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item
                    v-for="link in links"
                    :key="link.text"
                    route :to="link.route"
                    >
                        <v-list-item-title>{{ link.text }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>

            <v-btn plain color="grey">
                <span>Sign Out</span>
                <v-icon right>
                    mdi-exit-to-app
                </v-icon>
            </v-btn>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" app class="primary">
            <v-row >
                <v-col class="mt-5 text-center" >
                    <v-avatar size="100">
                    <img src="https://github.com/KlaytonJr/todo-ninja-vuetify/blob/develop/public/avatar-1.png?raw=true" alt="" />
                    </v-avatar>
                    <p class="white--text text-subtitle-1 mt-1">
                    The Net Ninja
                    </p>
                </v-col >
                <v-col class="mt-4 mb-3">
                    <Popup @projectAdded="snackbar = true"/>
                </v-col>
            </v-row >
            <v-list>
                <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-item-action>
                        <v-icon class="white--text">{{ link.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
import Popup from './Popup.vue'

export default {
    name: "Navbar",

    components: {
        Popup
    },

    data() {
        return {
            drawer: false,
            links: [
                { icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/'},
                { icon: 'mdi-folder', text: 'My Projects', route: '/projects'},
                { icon: 'mdi-account', text: 'Team', route: '/team'},
            ],
            snackbar: false
        }
    }
}
</script>