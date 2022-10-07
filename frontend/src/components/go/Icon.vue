<script setup>
    import Icon from '../../models/Icon';
    import { defineProps } from 'vue';
    
    const props = defineProps({
        icon: Icon,
        size: Number,
        borderRowSize: Number,
        fontSize: {
            type: String,
            default: "14px"
        },
    })

    function isNumber() {
        return !["x", "o"].includes(props.icon.icon);
    }
    </script>
    
    <template>
        <div class="board-icon" 
            :style="{
                'width': size + '%',
                'height': size + '%',
                'top': (icon.coordinates.y * borderRowSize - size / 2) +'%',
                'left': (icon.coordinates.x * borderRowSize - size / 2) +'%',
                'color': icon.color
            }"
        >
            <svg v-if="icon.icon === 'x'" style="vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 460.775 460.775" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55  c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55  c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505  c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55  l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719  c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z" :fill="icon.color" />
            </svg>

            <svg v-if="icon.icon === 'o'" style="vertical-align: middle;fill: currentColor;overflow: hidden;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"  viewBox="0 0 500 500">
                <ellipse style="paint-order: fill; fill-opacity: 0; stroke-width: 100px;" :stroke="icon.color" cx="250" cy="250" rx="200" ry="200"></ellipse>
            </svg>

            <span v-if="isNumber()" class="number" :style="{'font-size': fontSize}">
                {{icon.icon}}
            </span>
    </div>
    </template>
    
    <style scoped lang="scss">
    @import '../../assets/base.css';
    .board-icon {
        position: absolute;
        margin-left: 1px;
        text-align: center;

        svg {
            width: 60%;
            height: 60%;
        }

        .number {
            display: flex;
            justify-content: center;
            align-content: center;
            flex-direction: column;
            height: 100%;
        }
    }
    </style>