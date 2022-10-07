<script setup>
import Stone from '../../models/Stone';
import { defineProps } from 'vue';

const props = defineProps({
    stone: Stone,
    size: Number,
    borderRowSize: Number
})
</script>

<template>
    <div class="stone" 
        :class="{
            'white': stone.color === 'white',
            'black': stone.color === 'black',
            'transparent': stone.transparent,
        }"
        :style="{
            'width': size + '%',
            'height': size + '%',
            'top': (stone.coordinates.y * borderRowSize - size / 2) +'%',
            'left': (stone.coordinates.x * borderRowSize - size / 2) +'%'
        }"
    ></div>
</template>

<style scoped lang="scss">
@import '../../assets/base.css';
.stone {
    border-radius: 50%;
    position: absolute;
    margin-left: 2px;
    box-shadow: var(--shadow);
    &.white {
        background: #fff;
        background: radial-gradient(circle at 20% 20%, #fff, #666);
    }
    &.black {
        background: #000;
        background: radial-gradient(circle at 20% 20%, #363636, #000);
    }
    &.transparent {
        opacity: 0.8;
    }
}
</style>