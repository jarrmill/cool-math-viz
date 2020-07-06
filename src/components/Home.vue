<template>
  <div class="main">
    <div class="hero">
      <h1>StudyBeats - GRE</h1>
      <p>A Streamlined GRE Prep Experience</p>
    </div>
    <div class="information">
      <div class="text">
        <h2>StudyBeats aims to improve an outdated study system</h2>
        <h3>However, it's not there yet</h3>
        <p>
          While StudyBeats is being built, it will serve first and foremost as a place to image better ways to perform mathematics on the web.
          The problems will be focused around GRE study prep, specifically the mathematical section
          With enough progress, not only do we hope to provide a solid learning platform, but also one that improves the pains of working with mathematics online.
        </p>
      </div>
    </div>
    <div class="table-of-contents">
      <div class="left">
        <h1>See For Yourself</h1>
      </div>
      <div class="right">
      <router-link class="link" to="/learn/pemdas"> Order of Operations  </router-link>
      <router-link class="link" to="/learn/pemdas"> Order of Operations </router-link>
      <router-link class="link" to="/learn/pemdas"> Order of Operations </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
.main {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh;
  width: 100vw;
}
.hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("../assets/banners/shattered-island.gif");
  background-repeat: repeat;
  height: 600px;
  width: 100vw;
  color: white;
}

.hero h1 {
  font-size: 300%;
}

.information {
  height: 500px;
  background-color: white;
  display: flex;
  display: column;
  align-items: center;
  justify-content: center;
}

.information .text {
  width: 60%;
  padding: 20px 0px;
  border-top: 3px solid #f7b801;
  border-bottom: 3px solid #f7b801;
}

.information .text h3 {
  margin: 10px 0;
}

.information .text p {
  margin: 20px 0;
}
.table-of-contents {
  height: 500px;
  display: flex;
}

.table-of-contents .left {
  flex: 1;
  display: flex;
  color: white;
  background-color: #3d348b;
  font-size: 160%;
  justify-content: center;
  align-items: center;
}

.table-of-contents .right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: #7678ed;
}

.link {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px 0;
  height: 70px;
  width: 150px;
  border-radius: 10px;
  background-color: #ededfd;
  box-shadow: 0px 0px 5px #222;
  text-decoration: none;
  color: #333;
}

.link:hover {
  box-shadow: 0px 0px 20px #444;
}
</style>