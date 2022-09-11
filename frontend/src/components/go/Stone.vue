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
            'white': this.stone.color === 'white',
            'black': this.stone.color === 'black',
        }"
        :style="{
            'width': this.size + '%',
            'height': this.size + '%',
            'top': (this.stone.coordinates.y * this.borderRowSize - this.size / 2) +'%',
            'left': (this.stone.coordinates.x * this.borderRowSize - this.size / 2) +'%'
        }"
    ></div>
</template>

<style scoped lang="scss">
@import '../../assets/base.css';
.stone {
    border-radius: 50%;
    position: absolute;

    &.white {
        background: #fff;
        content: "";
    }
    &.black {
        background: #000;
    }
}
</style>