<template>
    <div class="text-center">
        <v-dialog v-model="dialog" width="600px">
            <template v-slot:activator="{ on }">
                <v-btn class="success" v-on="on">Add New Project</v-btn>
            </template>
            <v-card>
                <v-card-title class="headline grey lighten-4" primary-title>Add a New Project</v-card-title>
                <v-card-text>
                    <v-form class="px-3" ref="form">
                        <v-text-field label="Title" v-model="title" prepend-icon="mdi-folder" :rules="inputRules"></v-text-field>
                        <v-textarea label="Information" v-model="content" prepend-icon="mdi-pencil" :rules="inputRules"></v-textarea>

                        <v-menu
                            max-width="290"
                        >
                            <template v-slot:activator="{ on }">
                                <v-text-field
                                    :value="formattedDate"
                                    label="Due date"
                                    prepend-icon="mdi-calendar-range"
                                    v-on="on"
                                    :rules="inputRules"
                                ></v-text-field>
                            </template>
                            <v-date-picker v-model="due"></v-date-picker>
                        </v-menu>

                        <v-spacer></v-spacer>

                        <v-btn depressed class="success mx-0 mt-3" @click="submit" :loading="loading">Add project</v-btn>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'
import db from '@/fb.js';

export default {
    name: "Popup",

    data() {
        return {
            title: '',
            content: '',
            due: null,
            inputRules: [
                v => v.length >= 3 || 'Minimum length is 3 characters'
            ],
            loading: false,
            dialog: false
        }
    },

    methods: {
        submit() {
            if(this.$refs.form.validate()) {
                this.loading = true;

                const project = {
                    title: this.title,
                    content: this.content,
                    due: format(parseISO(this.due),'do MMM yyyy'),
                    person: 'The Net Ninja',
                    status: 'ongoing'
                }

                db.collection('projects').add(project).then(() => {
                    this.loading = false;
                    this.dialog = false;
                    this.$emit('projectAdded')
                })
            }
        }
    },

    computed: {
        formattedDate() {
            return this.due ? format(parseISO(this.due),'do MMM yyyy') : "";
        }
    }
}
</script>