<template>
  <div class="bar">
      <div
        class="link"
        @click="go('/')">
        <p>Home</p>
      </div>
      <div
        class="link"
        @click="go('/about')">
        <p>About</p>
      </div>
  </div>
</template>

<script>
  export default {
    methods: {
      go: function(link) {
        if (this.$router.currentRoute.path === link) return;
        this.$router.push(link)
      }
    }
  }
</script>

<style lang="scss" scoped>
.bar {
  display: flex;
  align-items: center;
  width: 100vw;
  height: 50px;
  margin: 0px;
  border-bottom: 1px solid #ccc;
}
.link {
  font-family: 'Montserrat', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 90px;
}
.link:hover {
  background-color: #ddd;
}
</style>