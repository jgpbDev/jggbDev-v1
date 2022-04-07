<template>
  <div>
    <v-app-bar app dense color="primary" elevation="0">
      <div class="text-subtitle-1 mr-6">jgpbDev</div>
      <v-btn text class="text-capitalize text-subtitle-2 font-weight-light">
        About
      </v-btn>
      <v-btn text class="text-capitalize text-subtitle-2 font-weight-light">
        Work
      </v-btn>
      <v-btn text class="text-capitalize text-subtitle-2 font-weight-light">
        Contact
      </v-btn>
      <v-spacer></v-spacer>
      <div class="d-flex align-center">
        <v-btn class="" icon>
          <v-icon color="secondary" small>mdi-linkedin</v-icon>
        </v-btn>
        <v-btn class="" icon>
          <v-icon color="secondary" small>mdi-email-edit</v-icon>
        </v-btn>
        <v-btn class="ml-5" icon>
          <v-icon color="secondary" small>mdi-file-document</v-icon>
        </v-btn>
      </div>
    </v-app-bar>
    <div style="background-color:#FFFFFF; height: 1px; width:100%;"></div>
  </div>
</template>

<script>
export default {
  name: "TheNavbar",
  data: () => ({
  }),
  methods: {
  }
};
</script>