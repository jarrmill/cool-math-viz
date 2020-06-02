<template>
  <v-app-bar 
    app
    color="gray"
    dark
  >
  <v-app-bar-nav-icon @click="$emit('toggleDrawer')"></v-app-bar-nav-icon>
  <v-toolbar-title @click="go('/')">StudyBeats - GRE</v-toolbar-title>
  </v-app-bar>
</template>

<script>
  export default {
    data() {
      return {
        drawer: false,
      }
    },
    methods: {
      go: function(link) {
        if (this.$router.currentRoute.path === link) return;
        this.$router.push(link)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>