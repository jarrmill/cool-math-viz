<template>
  <v-app>
    <Header @toggleDrawer="showDrawer = !showDrawer"/>
    <NavBar @toggleDrawer="showDrawer = !showDrawer" :showDrawer="showDrawer" />
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import Header from './components/Header';
import NavBar from './components/NavDrawer';
export default {
  name: 'App',
  data() {
    return {
      showDrawer: false,
    }
  },
  methods: {
    toggleDrawer: function() {
      return !this.showDrawer;
    },
  },
  components: {
    Header,
    NavBar,
  }
};
</script>
