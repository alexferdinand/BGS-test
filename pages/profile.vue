<template>
  <v-app>
    <v-app-bar app>
      Profile
    </v-app-bar>
    <v-main>
      <v-container class="grey lighten-5">
        <v-row>
          <v-col>
            <v-row
              :align="center"
              :justify="center"
              class="grey lighten-5"
              style="height: 400px;"
            >
              <v-card max-width="500" class="pa-2" outlined tile>
                <v-img :src="this.$auth.user.profileImg" height="200px"></v-img>

                <v-card-title>
                  {{ this.$auth.user.name }}
                </v-card-title>

                <v-card-subtitle>
                  {{ this.$auth.user.email }}
                </v-card-subtitle>
                <v-card-actions>
                  <v-btn text @click="$auth.logout()">Logout</v-btn>
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
      <v-footer absolute="true">2002&copy;</v-footer>
    </v-main>
  </v-app>
</template>

<script>
export default {
  methods: {
    userInfo() {
      // eslint-disable-next-line no-undef
      console.log(this.$auth.user.name)
    },
  },
}
</script>
