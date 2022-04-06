<template>
  <div>
    <v-app-bar app color="white" dark elevation="0">
      <v-spacer></v-spacer>
      <div class="d-flex align-center mr-10">
        <v-btn class="mr-5" icon>
          <v-icon color="#6F50FF" small>mdi-bell-outline</v-icon>
        </v-btn>
        <div class="d-flex align-center">
          <v-avatar class="mr-4" size="30">
            <!-- <img class="avatar" src="../../assets/user.svg" alt="John" /> -->
          </v-avatar>
          <p class="name pa-0 ma-0 text-caption" style="color: #000">¡Hola!</p>
        </div>
        <v-menu bottom left offset-y transition="scroll-y-transition">
          <template v-slot:activator="{ on, attrs }">
            <v-layout align-center>
              <v-icon
                small
                color="#6F50FF"
                v-on="on"
                v-bind="attrs"
                :class="$vuetify.breakpoint.mdAndUp ? 'ml-6' : 'ml-1'"
                >mdi-chevron-down
              </v-icon>
            </v-layout>
          </template>
          <v-list class="vmenucont">
            <v-list-item
              class="vmenu d-flex align-start flex-column justify-center mt-5"
            >
              <v-btn
                color="white"
                class="d-flex justify-start ma-0"
                v-for="link in navLinks"
                :key="link.title"
                :to="link.path"
                text
              >
                <v-icon class="mr-4" small color="#6F50FF">{{
                  link.icon
                }}</v-icon>
                <p
                  class="text-caption pa-0 ma-0 text-capitalize font-weight-light"
                  style="color: #000"
                >
                  {{ link.title }}
                </p>
              </v-btn>
              <v-btn text color="white" class="d-flex justify-start ma-0" @click="logout">
                <v-icon class="mr-4" small color="#6F50FF">mdi-logout</v-icon>
                <p
                  class="text-caption pa-0 ma-0 text-capitalize font-weight-light"
                  style="color: #000"
                >
                  Cerrar sesión
                </p>
              </v-btn>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Cosa",
  data: () => ({
    active: false,
    navLinks: [
      { title: "Mi Perfil", icon: "mdi-account-outline" },
      { title: "Tutoriales", icon: "mdi-school-outline" },
      { title: "Ayuda y soporte técnico", icon: "mdi-help" },
    ],
  }),
  methods: {
  }
};
</script>