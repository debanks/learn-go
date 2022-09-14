<script lang="ts" setup>
    import StoneComponent from '../../components/go/Stone.vue';
    import Stone from '../../models/Stone';
    import Board from '../../components/go/Board.vue';
    import StaticBoard from '../../components/go/StaticBoard.vue';

    const white = new Stone('white', {x: 0, y:0})
    const black = new Stone('black', {x: 0, y:0})

    const captureStones = [
        new Stone('white', {x: 1, y: 0}),
        new Stone('white', {x: 0, y: 1}),
        new Stone('white', {x: 1, y: 2}),
        new Stone('white', {x: 2, y: 1}),
        new Stone('black', {x: 1, y: 1}),
    ]
</script>
<template>
    <section class="update">
        <div class="tag">Web Development</div>
        <h1>Go Board</h1>
        <div class="index">
            <h4>Update Contents:</h4>
            <div class="toc" v-scroll-to="'#history'"><span>1:</span> History of Go</div>
            <div class="toc" v-scroll-to="'#board'"><span>2:</span> The Go Board</div>
        </div>
        <hr />
        <p>
            Now we can start getting into learning go and doing more development. This update 
            will cover some history of Go and setting up the game board and initial interactions 
            over on the <a href="/play">Play page</a>.
        </p>
        <h2 id="history" class="accent">History of Go</h2>
        <p>
            Go is an ancient board game (~2500 years old) that has two players vying for 
            territory on the board. Each player takes turns placing stones on the board 
            of their color (usually either white or black) and each is trying to enclose 
            spaces on the board as territory to win. The player with the most spaces on the 
            board owned by them wins.
        </p>
        <p>
            That is a very simplistic description, but honestly there aren't a ton of rules
            to the game. You can place your stone anywhere on the board as long as it can 
            survive after being placed. If you surround an enemy piece on all cardinal sides 
            (just up/down/left/right and not diagnoally) you capture it and can take it off the
            board like below:
        </p>
        <div class="example-board">
            <StaticBoard :stones="captureStones" :size="3"/>
        </div>
        <p>
            With very simple rules, it becomes incredibly complex as every move needs to work 
            towards your objective of claiming more territory, defending your existing territory,
            and attacking your opponent's territory. With how complex the game is, it has been a 
            mainstay of several asian countries for many centuries. Go originated in China sometime in the 4th 
            century BCE and spread to Korea (known as Baduk) and Japan sometime between the 5th 
            and 7th century CE.
        </p>
        <h2 id="board" class="accent">The Go Board</h2>
        <p>
            Before we can really get into AIs and setting up rules, we need to get a playable board 
            in place. We walked through the stones and lines last time, so this time we'll look at 
            making the full board and playing stones on it. The only real difference from what we 
            covered last time and setting it on the board is really just a background. We want our 
            board to be larger than the playing area, so really just a padding is all we need.
        </p>
        <div class="columns two">
            <div class="col">
                <pre>
                    <code>.board {</code>
                    <code>  width: 100%;</code>
                    <code>  padding-top: 100%;</code>
                    <code>  position: relative;</code>
                    <code>  background: #e5b747;</code>
                    <code></code>
                    <code>  .play-area {</code>
                    <code>      position: absolute;</code>
                    <code>      left: 30px;</code>
                    <code>      right: 30px;</code>
                    <code>      top: 30px;</code>
                    <code>      bottom: 30px;</code>
                    <code>  }</code>
                    <code>}</code>
                </pre>
            </div>
            <div class="col">
                <div class="dummy-board"><div class="play-area"></div></div>
            </div>
        </div>
        <p>
            With that we can make a realistic looking board, but now how do we place stones
            on it? At this point we are going to rely on hoverable divs and click events to 
            show and place our stones.
        </p>
        <div class="columns two">
            <div class="col">
                <h4>Typescript</h4>
                <pre>
                    <code>const pieces = ref&lt;Stone[]&gt;([]);</code>
                    <code>const placed = ref&lt;Number[]&gt;([]);</code>
                    <code>const color = ref('white');</code>
                    <code></code>
                    <code>function hoverStone(position: number): Stone {</code>
                    <code>    return new Stone(</code>
                    <code>        color.value === 'white' ? 'white' : 'black',</code>
                    <code>        {</code>
                    <code>            x: 0,</code>
                    <code>            y: 0</code>
                    <code>        }</code>
                    <code>    )</code>
                    <code>}</code>
                    <code></code>
                    <code>function placeStone(position: number) {</code>
                    <code>    pieces.value.push(new Stone(</code>
                    <code>      color.value === 'white' ? 'white' : 'black',</code>
                    <code>      {</code>
                    <code>        x: Math.floor((position - 1) / props.size),</code>
                    <code>        y: (position - 1) % props.size</code>
                    <code>      }</code>
                    <code>    ));</code>
                    <code></code>
                    <code>    color.value = color.value === 'black' ? 'white' : 'black';</code>
                    <code>    placed.value.push(position);</code>
                    <code>}</code>
                    <code></code>
                    <code>function getHoverStyle(position: number) {</code>
                    <code>    const size = ( 100 / (props.size - 1))</code>
                    <code>    const y = (position - 1) % props.size;</code>
                    <code>    const x = Math.floor((position - 1) / props.size);</code>
                    <code></code>
                    <code>    return {</code>
                    <code>        'top': (y * size - size / 2) +'%',</code>
                    <code>        'left': (x * size - size / 2) +'%',</code>
                    <code>        'width': size + '%',</code>
                    <code>        'height': size + '%'</code>
                    <code>    };</code>
                    <code>}</code>
                </pre>
            </div>
            <div class="col">
                <h4>HTML + CSS</h4>
                <pre>
                    <code>&lt;div class="piece-selection" v-for="n in (size *  size)" v-if="!placed.includes(n)" :key="n" :style="getHoverStyle(n)" @click="() => placeStone(n)"&gt;</code>
                    <code>    &lt;StoneComponent class="hover-stone" :stone="hoverStone(n)"</code> 
                    <code>        :size="0.8 * ( 100 / (size - 1))" :borderRowSize="(100 / (size - 1))"/&gt;</code>
                    <code>&lt;/div&gt;</code>
                    <code></code>
                    <code>&lt;script&gt;</code>
                    <code>.piece-selection {</code>
                    <code>    position: absolute;</code>
                    <code></code>
                    <code>    .stone {</code>
                    <code>        display: none;</code>
                    <code>        width: 80% !important;</code>
                    <code>        height: 80% !important;</code>
                    <code>        top: 10% !important;</code>
                    <code>        left: 10% !important;</code>
                    <code>    }</code>
                    <code></code>
                    <code>    &:hover {</code>
                    <code>         .stone {</code>
                    <code>            display: block;</code>
                    <code>         }</code>
                    <code>    }</code>
                    <code>}</code>
                    <code>&lt;/script&gt;</code>
                </pre>
            </div>
        </div>
        <div class="mini-board">
            <Board :size="13"/>
        </div>
        <p>
            And with that we several invisible boxes hoverable to show a stone to play. When 
            you place a stone, it updates the board pieces and alternates the color. You 
            can't place another stone on the same square, but we have no rules in place 
            so there is no capturing. With all this in place we can start getting into the 
            rules of Go in the next update.
        </p>
    </section>
</template>

<style lang="scss" scoped>
@import '../../assets/base.css';
@import '../../assets/updates.scss';

section {
    border-top: 3px solid var(--updates-purple);
    color: var(--gray);
    line-height: 2;

    .tag {
        color: var(--updates-purple);
    }

    .toc span {
        color: var(--updates-purple);
    }

    p {
        margin: 10px 0;
    }

    h4 {
        color: #fff;
        font-size: 16px;
        font-weight:500;
    }

    .example-board {
        width: 200px;
        height: 200px;
        margin: 20px auto;
    }

    .dummy-board {
        width: 150px;
        height: 150px;
        position: relative;
        background: #e5b747;
        margin: 20px auto;

        .play-area {
            position: absolute;
            left: 30px;
            right: 30px;
            top: 30px;
            bottom: 30px;
            border: 1px solid #000;
        }
    }

    .mini-board {
        width: 50%;
        margin: 20px auto;
    }

    
    @media (max-width: 800px) {
        .mini-board {
            width: 100%
        }
    }
}
</style>