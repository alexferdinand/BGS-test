<template>
  <v-app id="inspire">
    <v-main>
      <LoginForm :submit-login-form="userLogin" />
    </v-main>
  </v-app>
</template>

<script>
import LoginForm from '~/components/loginForm.vue'

export default {
  components: {
    LoginForm,
  },
  methods: {
    async userLogin(userInfo) {
      try {
        await this.$auth.loginWith('local', {
          data: { login: userInfo.login, password: userInfo.password },
        })
        this.$router.push('/profile')
      } catch (err) {
        alert('Error' + err)
      }
    },
  },
}
</script>
