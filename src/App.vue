<template>
  <v-app>
    <v-main>
      <Cosa />
      <HelloWorld/>
      <!-- Hola mundo -->
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import Cosa from './components/App/Navbar';

export default {
  name: 'App',

  components: {
    HelloWorld,
    Cosa
  },

  data: () => ({
    //
  }),
};
</script>

<style>
.v-application {
  background-color: #000733;
}
</style>