<script setup lang="ts">
import { ref, defineProps } from 'vue'
import Stone from '../models/Stone';
import StoneComponent from './go/Stone.vue'

const props = defineProps({
    size: Number,
    backgroundColor: String,
    lineColor: String,
    numPieces: Number
});

const pieces: Stone[] = [];

for (let i = 0; i < props.numPieces; i++) {
    const colorRand = Math.floor(Math.random() * 2);
    pieces.push(new Stone(
        colorRand == 1 ? 'white' : 'black',
        {
            x: Math.floor(Math.random() * props.size),
            y: Math.floor(Math.random() * props.size)
        }
    ));
}
</script>

<template>
    <div class="board" :style="{
        'background': this.backgroundColor
    }">
        <div v-for="n in (this.size)" class="line vertical" :key="n" :style="{
            'left': ((n-1) * 100 / (this.size - 1)) + '%',
            'background': this.lineColor
        }"></div>
        <div v-for="n in (this.size)" class="line horizontal" :key="n" :style="{
            'top': ((n-1) * 100 / (this.size - 1)) + '%',
            'background': this.lineColor
        }"></div>

        <StoneComponent v-for="(piece, key) in pieces" :key="key" :stone="piece" :size="0.8 * ( 100 / (this.size - 1))" :borderRowSize="(100 / (this.size - 1))"/>
    </div>
</template>

<style scoped lang="scss">
.board {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;

    .line {
        position: absolute;
        left: 0;
        top: 0;

        &.vertical {
            height: 100%;
            width: 3px;
        }

        &.horizontal {
            width: 100%;
            height: 3px;
        }
    }
}
</style>