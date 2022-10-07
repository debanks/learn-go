<script lang="ts" setup>
    import StoneComponent from '../components/go/Stone.vue';
    import Stone from '../models/Stone';

    const white = new Stone('white', {x: 0, y:0})
    const black = new Stone('black', {x: 0, y:0})
</script>

<template>
    <section id="updates">
        <h2><span>Project Updates</span></h2>
        <div class="updates">
            <div class="update orange">
                <div class="label">Learning Go</div>
                <a href="/updates/4-capture" class="title"><span class="accent">04.</span> Capturing Stones</a>
                <p>
                    We need to start adding the rules of Go to the board, so we dive into those rules.
                </p>
            </div>
            <div class="update purple">
                <div class="label">Web Development</div>
                <a href="/updates/3-board" class="title"><span class="accent">03.</span> Go Board</a>
                <p>
                    Digging into what is Go and how we can set up and interactive board to play on.
                </p>
            </div>
            <div class="update purple">
                <div class="label">Web Development</div>
                <a href="/updates/2-initial" class="title"><span class="accent">02.</span> Initial Code</a>
                <p>
                    Walking through some of the initial code fragments used on the initial launch of the website.
                </p>
            </div>
            <div class="update green">
                <div class="label">Project Management</div>
                <a href="/updates/1-setup" class="title"><span class="accent">01.</span> Project Setup</a>
                <p>
                    Getting the repository and website ready and available.
                </p>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@import '../assets/base.css';
#updates {

    h2 {
        font-size: 48px;
        margin-bottom: 30px;
        width: 100%;
        text-align: center;

        span {
            display: inline-block;
            position: relative;
        }

        span:before,
        span:after {
            content: "";
            position: absolute;
            height: 5px;
            border-bottom: 1px solid white;
            border-top: 1px solid white;
            top: 40px;
            width: 150px;
        }
        span:before {
            right: 100%;
            margin-right: 30px;
        }
        span:after {
            left: 100%;
            margin-left: 30px;
        }
    }
        
    @media (max-width: 780px) {
        h2 {
            font-size: 36px;

            span:before,
            span:after {
                top: 30px;
                width: 50px;
            }
        }
    }

    .updates {
        display: grid;
        grid-template-columns: repeat(3,1fr);
        width: 100%;
        gap: 10px;

        .update {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            background: rgba(0,0,0, 0.4);
            padding: 30px;
            box-shadow: (255, 255, 255, 0.05) 0px 3px 10px;
            border: 1px solid rgba(255,255,255,0.05);

            &:hover {
                box-shadow: rgb(0, 39, 80) 0px 3px 10px;
            }

            .label {
                font-size: 12px;
                text-transform: uppercase;
                margin-bottom: 10px;
            }

            &.green {
                border-top: 2px solid var(--updates-green);

                .label {
                    color:  var(--updates-green);
                }
            }

            &.purple {
                border-top: 2px solid var(--updates-purple);

                .label {
                    color:  var(--updates-purple);
                }
            }

            &.orange {
                border-top: 2px solid var(--updates-orange);

                .label {
                    color:  var(--updates-orange);
                }
            }

            .title {
                font-size: 22px;
                margin-bottom: 20px;
                text-decoration: none;
                color: #fff;
                display: block;

                &:hover {
                    text-decoration: underline;
                }

                span {
                    font-size: 16px;
                }
            }

            p {
                font-size: 16px;

            }
        }
    }
        
    @media (max-width: 1000px) {
        .updates {
            grid-template-columns: repeat(2,1fr);
        }
    }
        
    @media (max-width: 780px) {
        .updates {
            grid-template-columns: repeat(1,1fr);
        }
    }
}
</style>
  