<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Login form</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form id="login-form">
              <v-text-field
                v-model="loginform.login"
                label="Логин"
                name="login"
                prepend-icon="mdi-account"
                type="text"
              ></v-text-field>
              <v-text-field
                id="password"
                v-model="loginform.password"
                label="Пароль"
                name="password"
                prepend-icon="mdi-lock"
                type="password"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              form="login-form"
              @click="submitLoginForm(loginform)"
              >Login</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'LoginForm',
  props: ['submitLoginForm'],
  data() {
    return {
      loginform: {
        login: '',
        password: '',
      },
    }
  },

  methods: {},
}
</script>
