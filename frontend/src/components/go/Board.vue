<script setup lang="ts">
    import { ref, defineProps } from 'vue';
    import type { Ref } from 'vue';
    import Stone from '../../models/Stone';
    import StoneComponent from './Stone.vue'
    
    const props = defineProps({
        size: {
            type: Number,
            required: true
        }
    });
    
    const pieces = ref<Stone[]>([]);
    const placed = ref<Number[]>([]);

    const color = ref('white');

    function hoverStone(position: number): Stone {
        return new Stone(
            color.value === 'white' ? 'white' : 'black',
            {
                x: 0,
                y: 0
            }
        )
    }

    function placeStone(position: number) {
        pieces.value.push(new Stone(
            color.value === 'white' ? 'white' : 'black',
            {
                x: Math.floor((position - 1) / props.size),
                y: (position - 1) % props.size
            }
        ));

        color.value = color.value === 'black' ? 'white' : 'black';
        placed.value.push(position);
    }

    function getHoverStyle(position: number) {

        const size = ( 100 / (props.size - 1))
        const y = (position - 1) % props.size;
        const x = Math.floor((position - 1) / props.size);

        return {
            'top': (y * size - size / 2) +'%',
            'left': (x * size - size / 2) +'%',
            'width': size + '%',
            'height': size + '%'
        };
    }
    </script>
    
    <template>
        <div class="board">
            <div class="play-area">
                <div v-for="n in (size)" class="line vertical" :key="n" :style="{
                    'left': ((n-1) * 100 / (size - 1)) + '%'
                }"></div>
                <div v-for="n in (size)" class="line horizontal" :key="n" :style="{
                    'top': ((n-1) * 100 / (size - 1)) + '%'
                }"></div>

                <div class="piece-selection" v-for="n in (size *  size)" v-if="!placed.includes(n)" :key="n" :style="getHoverStyle(n)" @click="() => placeStone(n)">
                    <StoneComponent class="hover-stone" :stone="hoverStone(n)" 
                        :size="0.8 * ( 100 / (size - 1))" :borderRowSize="(100 / (size - 1))"/>
                </div>
        
                <StoneComponent v-for="(piece, key) in pieces" :key="key" :stone="piece" 
                    :size="0.8 * ( 100 / (size - 1))" :borderRowSize="(100 / (size - 1))"/>
            </div>
        </div>
    </template>
    
    <style scoped lang="scss">
    .board {
        width: 100%;
        padding-top: 100%;
        position: relative;
        background: #e5b747;

        .play-area {
            position: absolute;
            left: 30px;
            right: 30px;
            top: 30px;
            bottom: 30px;

            .piece-selection {
                position: absolute;

                .stone {
                    display: none;
                    width: 80% !important;
                    height: 80% !important;
                    top: 10% !important;
                    left: 10% !important;
                }

                &:hover {
                     .stone {
                        display: block;
                     }
                }
            }
        }
    
        .line {
            position: absolute;
            left: 0;
            top: 0;
            background: #141719;
    
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