<template>
  <v-app>
    <v-main>
      <TheNavbar />
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import TheNavbar from './components/App/Navbar';

export default {
  name: 'App',

  components: {
    HelloWorld,
    TheNavbar
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