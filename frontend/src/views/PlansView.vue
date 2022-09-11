<script lang="ts" setup>
    import StoneComponent from '../components/go/Stone.vue';
    import Stone from '../models/Stone';

    const white = new Stone('white', {x: 0, y:0})
    const black = new Stone('black', {x: 0, y:0})
</script>

<template>
    <section id="plans">
        <h2>Project Plans</h2>
        <p>
            The end goal of this project is to both learn how to plan go (for myself)
            and explain how to build out a project like this for others. To accomplish these
            2 objectives I plan on building a dumb go AI to play against on this site and 
            documenting my progress and process to get there.
        </p>
        <div class="steps">
            <div class="step">
                <div class="number">
                    <StoneComponent :stone="white" :size="100"/>
                    <span class="accent">.01</span>
                </div>
                <div class="step-content">
                    <h5 class="accent">Project Setup</h5>
                    <p>
                        Get the website, github, and basic infrastructure set up.
                    </p>
                </div>
            </div>
            <div class="step">
                <div class="number">
                    <StoneComponent :stone="black" :size="100"/>
                    <span class="accent">.02</span>
                </div>
                <div class="step-content">
                    <h5 class="accent">Interactable Board</h5>
                    <p>
                        Get a basic go board created and interactable.
                    </p>
                </div>
            </div>
            <div class="step">
                <div class="number">
                    <StoneComponent :stone="black" :size="100"/>
                    <span class="accent">.03</span>
                </div>
                <div class="step-content">
                    <h5 class="accent">Basic Rules</h5>
                    <p>
                        Get the basic rules of Go in place for the board.
                    </p>
                </div>
            </div>
            <div class="step">
                <div class="number">
                    <StoneComponent :stone="white" :size="100"/>
                    <span class="accent">.04</span>
                </div>
                <div class="step-content">
                    <h5 class="accent">Research Basic Go AI</h5>
                    <p>
                        Learn about dumb basic Go AI bots and how they govern.
                    </p>
                </div>
            </div>
            <div class="step">
                <div class="number">
                    <StoneComponent :stone="white" :size="100"/>
                    <span class="accent">.05</span>
                </div>
                <div class="step-content">
                    <h5 class="accent">Implement Basic AI</h5>
                    <p>
                        Implement a basic Go AI bot to play against.
                    </p>
                </div>
            </div>
            <div class="step">
                <div class="number">
                    <StoneComponent :stone="black" :size="100"/>
                    <span class="accent">.06</span>
                </div>
                <div class="step-content">
                    <h5 class="accent">Test AI</h5>
                    <p>
                        Play and refine the AI until it is better than me.
                    </p>
                </div>
            </div>
            <div class="step">
                <div class="number">
                    <StoneComponent :stone="black" :size="100"/>
                    <span class="accent">.07</span>
                </div>
                <div class="step-content">
                    <h5 class="accent">Iterate</h5>
                    <p>
                        Play against and improve the AI as I improve.
                    </p>
                </div>
            </div>
            <div class="step">
                <div class="number">
                    <StoneComponent :stone="white" :size="100"/>
                    <span class="accent">.08</span>
                </div>
                <div class="step-content">
                    <h5 class="accent">Recap</h5>
                    <p>
                        Recap the process and learnings about both Go and development.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@import '../assets/base.css';
#plans {

    h2 {
        font-size: 48px;
        margin-bottom: 30px;
        text-align: center;
        width: 100%
    }

    p {
        margin: 0 auto 60px auto;
        text-align: center;
    }

    .steps {
        display: grid;
        grid-template-columns: repeat(12,1fr);
        width: 100%;
        gap: 20px;
    }

    .step {
        background: rgba(255,255,255,0.15);
        border-radius: 6px;
        padding: 30px;
        width: 100%;
        position: relative;
        min-height: 120px;

        &:nth-child(odd) {
            grid-area: auto / 1 / auto / 7;
        }

        &:nth-child(even) {
            grid-area: auto / 7 / auto / 13;
        }

        @media (max-width: 780px) {
            &:nth-child(odd) {
                grid-area: auto / 1 / auto / 13;
            }

            &:nth-child(even) {
                grid-area: auto / 1 / auto / 13;
            }
        }

        .number {
            width: 60px;
            height: 60px;
            text-align: center;
            position: absolute;

            span {
                font-size: 24px;
                font-weight: 700;
                line-height: 60px;
            }
        }

        .step-content {
            padding-left: 90px;

            h5 {
                font-size: 20px;
            }

            p {
                font-size: 18px;
                text-align: left;
                margin: 7px 0;
            }
        }
    }
}
</style>
  