<template>
  <div class="container">
    <div class="lesson">
      <h1>Order of Operations (PEMDAS)</h1>
      <p>Order of Operations refers to the way we solve mathematical equations. Take a simple mathematical equation:</p>
      <p class="equation"> 3 x 4 / 2 + 2 </p>
      <p>Imagine, for a moment, you and a friend are kicking back, solving mathematical equations like good friends do. Your friend solves the problem as so:</p>
      <p class="equation"> 3 x 4 / 2 + 2 </p>
      <p class="equation"> 3 * 4 / 4</p>
      <p class="equation"> 3 * 1</p>
      <p class="equation"> 3</p>
      <p> This can't be right, you think! You give the equation a try, and end up with a completely different answer </p>
      <p class="equation"> 3 x 4 / 2 + 2 </p>
      <p class="equation"> 12 / 2 + 2</p>
      <p class="equation"> 6 + 2</p>
      <p class="equation"> 8</p>
      <h3>Try it yourself</h3>
      <InteractivePemdas initialEquation="8*2/(1+1)"/>
      <p> As it turns out, without a set order of solving an equation, there are many ways to interperate an equation. </p>
      <h3> Introducing: The Order of Operations </h3>
      <p> To solve this issue, mathematicians agreed on an <b>order of operations.</b>
      <p> This order of operations is often called "PEMDAS" (Parenthesis, Exponent, Multiply, Divide, Add, Subract) for short.</p>
      <p> <b>P</b>arenthesis</p>
      <p> <b>E</b>xponent</p>
      <p> <b>M</b>ultiply</p>
      <p> <b>D</b>ivide</p>
      <p> <b>A</b>dd</p>
      <p> <b>S</b>ubtract</p>
      <p> By solving an equation in this order of operators, we can extract the same answer from an equation <i>every time</i></p>
      <p class="equation"> (2 x 2)^3 / (1 + 1) * 2 </p>
      <p class="equation"> (4)^3 / (1 +1) * 2</p>
      <p class="equation"> (4)^3 / 2 * 2</p>
      <p class="equation"> 64 / 2 * 2</p>
      <p class="equation"> 32 * 2</p>
      <p class="equation"> 64</p>
      <h3>Conclusion</h3>
      <p> Though it may appear simple, it is vital to learn this order. Moving forward, all equations will be solved using this method. </p>
    </div>
    <div class ="try-it">
      <h1>Try it yourself</h1>
      <PemdasSolver />
    </div>
  </div>
</template>

<script>
  import PemdasSolver from './PemdasSolver.vue';
  import InteractivePemdas from './InteractivePemdas.vue';
  export default {
    components: {
      PemdasSolver,
      InteractivePemdas
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    width: 100vw;
    height: 100%;
  }
  .lesson {
   flex: 1;
   height: 100vh;
   padding: 30px;
   text-align: left;
   border-right: 1px solid #ccc;
   overflow: scroll;
  }
  .try-it {
    flex: 1;
    padding: 30px;
  }
  .equation {
    width: 50%;
    margin-left: 10px;
    margin-bottom: 0px;
    margin-top: 0px;
    background-color: #eee;
    padding: 3px 3px 3px 5px;
  }
</style>