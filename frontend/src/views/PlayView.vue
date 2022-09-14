<script setup lang="ts">
    import Board from '../components/go/Board.vue';
    import Stone from '../models/Stone';
    import StoneComponent from '../components/go/Stone.vue';

    const leftPieces: Stone[] = [];
    const rightPieces: Stone[] = [];

    for (let i = 0; i < 10; i++) {
        let x = Math.random() * 5 + 2;
        let y = Math.random() * 5 + 2;
        leftPieces.push(new Stone(
            'white',
            {
                x: x,
                y: y
            }
        ));
        x = Math.random() * 4 + 3;
        y = Math.random() * 4 + 3;
        rightPieces.push(new Stone(
            'black',
            {
                x: x,
                y: y
            }
        ));
    }
</script>

<template>
    <div class="play">
        <div class="bowl-area left">
            <div class="bowl">
                <StoneComponent v-for="(piece, key) in leftPieces" :key="key" :stone="piece" :size="12" :borderRowSize="10"/>

            </div>
        </div>
        <div class="board-column">
            <Board :size="19"/>
        </div>
        <div class="bowl-area right">
            <div class="bowl">
                <StoneComponent v-for="(piece, key) in rightPieces" :key="key" :stone="piece" :size="12" :borderRowSize="10"/>

            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../assets/base.css';
.play {
    display: grid;
    width: 100%;
    gap: 20px;
    grid-template-columns: repeat(12,1fr);
    min-height: 100vh;
    margin: 0 auto;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    flex-direction: column;
    align-items: flex-start;
    padding: 100px 0;

    .bowl-area {
        grid-area: auto / auto / span 1 / span 3;

        .bowl {
            background:  #e5b747;
            width: 150px;
            height: 150px;
            border-radius: 50%;
            margin: 0 auto;
            box-shadow: inset 0 5px 10px 10px rgba(0,0,0,0.2);
            position: relative;
        }
    }

    .board-column {
        grid-area: auto / auto / span 1 / span 6;
    }
}
</style>