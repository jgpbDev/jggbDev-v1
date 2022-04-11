<template>
  <v-app>
    <v-main>
      <TheNavbar />
      <GreetingSection/>
    </v-main>
  </v-app>
</template>

<script>
import GreetingSection from './components/GreetingSection';
import TheNavbar from './components/App/Navbar';

export default {
  name: 'App',

  components: {
    GreetingSection,
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