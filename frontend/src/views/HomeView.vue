<script setup lang="ts">
import RandomBoard from '../components/RandomBoard.vue';
import PlanView from './PlansView.vue';
import UpdatesView from './UpdatesView.vue';
</script>

<template>
  <div class="home">
      <div class="hero">
        <div class="board-container">
          <RandomBoard :size="19" backgroundColor="transparent" lineColor="#fff" :numPieces="40"/>
        </div>
        <h4 class="accent">Programming Journey</h4>
        <h1>Learning Go</h1>
        <p class="shadow">
          Come on a journey as I trick myself into learning Go, also known as Baduk, by framing it as a coding
          project. You can expect to learn about web development and the ancient board game
          Go.
        </p>
        <a  v-scroll-to="'#updates'" class="btn large">See Updates</a>
      </div>
      <PlanView />
      <UpdatesView />
  </div>
</template>

<style lang="scss">
@import '../assets/base.css';
.home {
  position: relative;
  padding: 0 30px;
  max-width: 1000px;
  margin: 0 auto;

  .hero {
    min-height: 100vh;
    margin: 0 auto;
    max-width: 1000px;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    flex-direction: column;
    align-items: flex-start;
    padding: 100px 0;
  }

  section {
    margin: 0 auto;
    max-width: 1000px;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    flex-direction: column;
    align-items: flex-start;
    padding: 100px 0;
  }

  h4 {
    margin-top: 30px;
  }

  h1 {
    font-size: 72px;
    font-weight: 700;
    line-height: 76px;
    margin-bottom: 15px;
  }

  p {
    color: var(--gray);
    font-size: 20px;
    max-width: 600px;
  }

  .btn {
    margin-top: 40px;
    cursor: pointer;
  }
}
.board-container {
  width: 60%;
  padding-top: 60%;
  position: absolute;
  right: 0;
  opacity: 0.1;
}
</style>