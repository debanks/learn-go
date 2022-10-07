<script lang="ts" setup>
    import StoneComponent from '../../components/go/Stone.vue';
    import Stone from '../../models/Stone'; 
    import Icon from '../../models/Icon';
    import Board from '../../components/go/Board.vue';
    import StaticBoard from '../../components/go/StaticBoard.vue';

    const captureStones = [
        new Stone('black', {x: 4, y: 4}),
        new Stone('white', {x: 1, y: 0}),
        new Stone('black', {x: 8, y: 8}),
    ];

    const captureIcons = [
        new Icon('x', '#ff0000', {x: 4, y: 3}),
        new Icon('x', '#ff0000', {x: 3, y: 4}),
        new Icon('x', '#ff0000', {x: 4, y: 5}),
        new Icon('x', '#ff0000', {x: 5, y: 4}),

        new Icon('x', '#ff0000', {x: 0, y: 0}),
        new Icon('x', '#ff0000', {x: 1, y: 1}),
        new Icon('x', '#ff0000', {x: 2, y: 0}),
        
        new Icon('x', '#ff0000', {x: 8, y: 7}),
        new Icon('x', '#ff0000', {x: 7, y: 8}),
    ];

    const surroundStones = [
        new Stone('black', {x: 1, y: 0}),
        new Stone('black', {x: 0, y: 1}),

        new Stone('black', {x: 2, y: 2}),
        new Stone('black', {x: 4, y: 2}),
        new Stone('black', {x: 3, y: 1}),
        new Stone('black', {x: 3, y: 3}),

        new Stone('white', {x: 7, y: 7}),
        new Stone('white', {x: 8, y: 6}),
        new Stone('white', {x: 6, y: 8}),
        new Stone('black', {x: 7, y: 8}),
        new Stone('black', {x: 8, y: 7}),
        
        new Stone('black', {x: 0, y: 5}),
        new Stone('black', {x: 1, y: 5}),
        new Stone('black', {x: 1, y: 6}),
        new Stone('black', {x: 1, y: 7}),
        new Stone('black', {x: 1, y: 8}),
        new Stone('black', {x: 0, y: 7}),
        new Stone('white', {x: 0, y: 4}),
        new Stone('white', {x: 1, y: 4}),
        new Stone('white', {x: 2, y: 4}),
        new Stone('white', {x: 2, y: 5}),
        new Stone('white', {x: 2, y: 6}),
        new Stone('white', {x: 2, y: 7}),
        new Stone('white', {x: 2, y: 8}),

        new Stone('black', {x: 8, y: 1}),
        new Stone('black', {x: 7, y: 1}),
        new Stone('black', {x: 7, y: 2}),
        new Stone('black', {x: 7, y: 3}),
        new Stone('black', {x: 8, y: 3}),
        new Stone('white', {x: 8, y: 0}),
        new Stone('white', {x: 7, y: 0}),
        new Stone('white', {x: 6, y: 0}),
        new Stone('white', {x: 6, y: 1}),
        new Stone('white', {x: 6, y: 2}),
        new Stone('white', {x: 6, y: 3}),
        new Stone('white', {x: 6, y: 4}),
        new Stone('white', {x: 7, y: 4}),
        new Stone('white', {x: 8, y: 4}),
    ];

    const surroundIcons = [

        new Icon('x', '#ff0000', {x: 3, y: 2}),
        new Icon('x', '#ff0000', {x: 0, y: 0}),
        new Icon('o', '#00ff00', {x: 8, y: 8}),
        new Icon('x', '#ff0000', {x: 0, y: 6}),
        new Icon('x', '#ff0000', {x: 0, y: 8}),
        new Icon('o', '#00ff00', {x: 8, y: 2}),
    ];

    const annotateIcons = [

        new Icon('3', '#ffffff', {x: 1, y: 0}),
        new Icon('3', '#ffffff', {x: 0, y: 1}),

        new Icon('4', '#ffffff', {x: 2, y: 2}),
        new Icon('4', '#ffffff', {x: 4, y: 2}),
        new Icon('4', '#ffffff', {x: 3, y: 1}),
        new Icon('4', '#ffffff', {x: 3, y: 3}),

        new Icon('2', '#000000', {x: 7, y: 7}),
        new Icon('2', '#000000', {x: 8, y: 6}),
        new Icon('2', '#000000', {x: 6, y: 8}),
        new Icon('1', '#ffffff', {x: 7, y: 8}),
        new Icon('1', '#ffffff', {x: 8, y: 7}),
        
        new Icon('2', '#ffffff', {x: 0, y: 5}),
        new Icon('2', '#ffffff', {x: 1, y: 5}),
        new Icon('2', '#ffffff', {x: 1, y: 6}),
        new Icon('2', '#ffffff', {x: 1, y: 7}),
        new Icon('2', '#ffffff', {x: 1, y: 8}),
        new Icon('2', '#ffffff', {x: 0, y: 7}),
        new Icon('8', '#000000', {x: 0, y: 4}),
        new Icon('8', '#000000', {x: 1, y: 4}),
        new Icon('8', '#000000', {x: 2, y: 4}),
        new Icon('8', '#000000', {x: 2, y: 5}),
        new Icon('8', '#000000', {x: 2, y: 6}),
        new Icon('8', '#000000', {x: 2, y: 7}),
        new Icon('8', '#000000', {x: 2, y: 8}),

        new Icon('1', '#ffffff', {x: 8, y: 1}),
        new Icon('1', '#ffffff', {x: 7, y: 1}),
        new Icon('1', '#ffffff', {x: 7, y: 2}),
        new Icon('1', '#ffffff', {x: 7, y: 3}),
        new Icon('1', '#ffffff', {x: 8, y: 3}),
        new Icon('8', '#000000', {x: 8, y: 0}),
        new Icon('8', '#000000', {x: 7, y: 0}),
        new Icon('8', '#000000', {x: 6, y: 0}),
        new Icon('8', '#000000', {x: 6, y: 1}),
        new Icon('8', '#000000', {x: 6, y: 2}),
        new Icon('8', '#000000', {x: 6, y: 3}),
        new Icon('8', '#000000', {x: 6, y: 4}),
        new Icon('8', '#000000', {x: 7, y: 4}),
        new Icon('8', '#000000', {x: 8, y: 4}),
    ];

    const smallBoard = [
        new Stone('black', {x: 0, y: 1}),
        new Stone('black', {x: 1, y: 2}),
        new Stone('black', {x: 1, y: 3}),
        new Stone('black', {x: 1, y: 4}),
        new Stone('black', {x: 0, y: 3}),
        new Stone('white', {x: 0, y: 0}),
        new Stone('white', {x: 1, y: 1}),
        new Stone('white', {x: 2, y: 2}),
        new Stone('white', {x: 2, y: 3}),
        new Stone('white', {x: 2, y: 4}),
    ];

    const smallIcons = [
        new Icon('1', '#ffffff', {x: 0, y: 1}),
        new Icon('2', '#ffffff', {x: 1, y: 2}),
        new Icon('2', '#ffffff', {x: 1, y: 3}),
        new Icon('2', '#ffffff', {x: 1, y: 4}),
        new Icon('2', '#ffffff', {x: 0, y: 3}),
        new Icon('8', '#000000', {x: 0, y: 0}),
        new Icon('8', '#000000', {x: 1, y: 1}),
        new Icon('8', '#000000', {x: 2, y: 2}),
        new Icon('8', '#000000', {x: 2, y: 3}),
        new Icon('8', '#000000', {x: 2, y: 4}),
    ];

    const koStones = [
        new Stone('black', {x: 0, y: 1}),
        new Stone('black', {x: 1, y: 0}),
        new Stone('black', {x: 1, y: 2}),
        new Stone('black', {x: 2, y: 1}),

        new Stone('white', {x: 2, y: 0}),
        new Stone('white', {x: 3, y: 1}),
        new Stone('white', {x: 2, y: 2}),
    ]

    const koStones2 = [
        new Stone('black', {x: 0, y: 1}),
        new Stone('black', {x: 1, y: 0}),
        new Stone('black', {x: 1, y: 2}),

        new Stone('white', {x: 2, y: 0}),
        new Stone('white', {x: 3, y: 1}),
        new Stone('white', {x: 2, y: 2}),
        new Stone('white', {x: 1, y: 1}),
    ]
</script>
<template>
    <section class="update">
        <div class="tag">Learning Go</div>
        <h1>Capturing Stones</h1>
        <div class="banner">
            <img src="../../assets/updates/go-image.jpg"/>
        </div>
        <div class="index">
            <h4>Update Contents:</h4>
            <div class="toc" v-scroll-to="'#how-to'"><span>1:</span> How to Capture</div>
            <div class="toc" v-scroll-to="'#eyes'"><span>2:</span> Eyes</div>
            <div class="toc" v-scroll-to="'#ko'"><span>3:</span> Ko</div>
        </div>
        <hr />
        <p>
            Our board is interactive and includes taking turns, but there's no rules governing 
            the board other than not placing on a spot with a stone already on it. We touched 
            on Go being simple, but pieces on the board do not move after being placed. Once 
            you place a piece, it can only be removed when captured by the enemy.
        </p>
        <h2 id="how-to" class="accent">How to Capture</h2>
        <p>
            At its simplest form, capturing a stone is surrounding it on all cardinal sides. So 
            that's having a piece above, below, to the left, and to the right, or a wall on any 
            of those sides. Below if the red X's were taken by the other color, the pieces would 
            be captured.
        </p>
        <div class="example-board">
            <StaticBoard :stones="captureStones" :icons="captureIcons" :size="9"/>
        </div>
        <p>
            Once fully surrounded, the opponent takes the piece off the board and gains a point.
            The inverse of that is that you cannot place a stone in an area fully surrounded by 
            enemy stones unless you would now surround the enemy stones. Below are areas you 
            can't play in the red, and where you could play in green.
        </p>
        <div class="example-board">
            <StaticBoard :stones="surroundStones" :icons="surroundIcons" :size="9"/>
        </div>
        <p>
            The 2 top left red spots are straightforward, the white stone you want to play would be 
            surrounded the second you played the piece and be considered dead. The right side green 
            spots are slightly more complicated as white is allowed to play there since white would 
            then be surrounding all the black pieces. In programming terms, imagine all the black 
            pieces have 1 open space around them remaining. When you place the last white piece, 
            your decrement and resolve the pieces around the white piece first before resolving the 
            white piece that was placed.
        </p>
        <h2 id="eyes" class="accent">Eyes</h2>
        <p>
            The last group we did not talk about above was the bottom left section where white can 
            not play in either place. Each group has a number of open spaces remaining to be surrounded
            or what Go calls "liberties". If we annotated the above groups with the remaining liberties 
            left you'll start to understand why.
        </p>
        <div class="example-board">
            <StaticBoard :stones="surroundStones" :icons="annotateIcons" :size="9"/>
        </div>
        <p>
            The 2 black groups on the right each just have a single liberty left, so when white takes 
            that spot that group no longer has any remaining liberties. The black group in the bottom 
            left has 2 liberties remaining, and if white tries to place a piece in either one that piece 
            would have no liberties and be dead. For a group to be "alive" it needs to have 2 liberties 
            that the opponent cannot take. These liberties are called "eyes" and you are striving to make 
            2 eyes with your group.
        </p>
        <p>
            Unfortunately that isn't as simple as just have 2 open spaces you surround, the group has to 
            have 2 solid eyes. Let's adjust that group a bit to see what solid means:
        </p>
        <div class="example-board">
            <StaticBoard :stones="smallBoard" :icons="smallIcons" :size="5" font-size="24px"/>
        </div>
        <p>
            While black group has 2 "eyes", the top eye is weak and disconnected from the rest of the group.
            The top stone only has 1 liberty since if white plays the spot below the black stone it would be 
            surrounded. The group has 2 eyes, but white can take the top eye reducing the number of eyes to 
            1. This is where all the complexities of Go comes from and where all the conflict happens in 
            making eyes and territory.
        </p>
        <h2 id="ko" class="accent">Ko</h2>
        <p>
            The last rule we need to cover now is "Ko". This rule exists to prevent infinite loops in the game.
            Here's a board to demonstrate how that could happen:
        </p>
        <div class="example-board">
            <StaticBoard :stones="koStones" :size="4"/>
        </div>
        <p>
            If it is white's turn, they could capture black's right stone leading to this state:
        </p>
        <div class="example-board">
            <StaticBoard :stones="koStones2" :size="4"/>
        </div>
        <p>
            And now that it is black's turn, they "could" place a stone back in the same spot to take white's newly
            placed piece and be back to where we were the prior turn. This becomes an infinite loops as each player 
            could alternate retaking the piece. To prevent this, the second player is unable to place a stone that 
            would recreate the board state from the turn prior. So the above board, black cannot place the piece 
            to retake the white piece, giving white another turn to solidify that group. These are the core rules 
            of Go.
        </p>
    </section>
</template>

<style lang="scss" scoped>
@import '../../assets/base.css';
@import '../../assets/updates.scss';

section {
    border-top: 3px solid var(--updates-orange);
    color: var(--gray);
    line-height: 2;

    .tag {
        color: var(--updates-orange);
    }

    .toc span {
        color: var(--updates-orange);
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
        width: 400px;
        height: 400px;
        margin: 20px auto;
    }

    .banner {
        height: 150px;
        width: 100%;
        position: relative;
        overflow: hidden;

        img {
            position: absolute;
            width: 100%;
            top: 0;
            left: 0;
        }
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