<template>
  <v-container primary fluid>
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
    <v-row justify="center" class="text-center">
      <v-col cols="12" class="mt-12 mb-6">
        <div class="display-1 font-weight-bold">
          Hi! I'm Jorge Gabriel:)
        </div>
        <div class="display-1 font-weight-bold">
          I'm a fullstack web developer
        </div>
      </v-col>

      <v-container fluid>
        <v-row justify="center">
          <v-col cols="5">
            <p class="subheading font-weight-regular">
              The programming and develop of awesome projects is something that I love doing and I am good at
            </p>
          </v-col>
        </v-row>
      </v-container>
      <v-col cols="3">
        <div style="border-style: solid; border-width: thin thin thin thin; border-color: white; height: 180px;"></div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'GreetingSection',
    data: () => ({
    }),
  }
</script>