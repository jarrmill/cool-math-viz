<template>
  <v-app-bar 
    app
    color="gray"
    dark
  >
  <v-app-bar-nav-icon @click="$emit('toggleDrawer')"></v-app-bar-nav-icon>
  <div class="logo">
  </div>
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
.logo {
  height: 20px;
  width: 20px;
  background-image: linear-gradient(to right, #3d348b , #7678ed);
  border-radius: 50%;
  margin-right: 10px;
}
</style>