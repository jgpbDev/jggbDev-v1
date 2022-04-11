<template>
  <v-container primary fluid>
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