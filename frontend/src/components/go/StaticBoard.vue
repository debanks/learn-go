<script setup lang="ts">
    import { ref, defineProps } from 'vue';
    import type { PropType } from 'vue';
    import type Stone from '../../models/Stone';
    import type Icon from '../../models/Icon';
    import StoneComponent from './Stone.vue'
    import IconComponent from './Icon.vue'
    
    const props = defineProps({
        size: {
            type: Number,
            required: true
        },
        stones: {
            type: Array as PropType<Array<Stone>>,
            required: true
        },
        icons: {
            type: Array as PropType<Array<Icon>>,
            default: []
        },
        fontSize: {
            type: String,
            default: '14px'
        }
    });
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
        
                <StoneComponent v-for="(piece, key) in stones" :key="key" :stone="piece" 
                    :size="0.8 * ( 100 / (size - 1))" :borderRowSize="(100 / (size - 1))"/>
        
                <IconComponent v-for="(icon, key) in icons" :key="key" :icon="icon" :fontSize="fontSize"
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