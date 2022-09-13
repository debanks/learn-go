<script lang="ts" setup>
    import StoneComponent from '../../components/go/Stone.vue';
    import Stone from '../../models/Stone';
    import RandomBoard from '../../components/RandomBoard.vue';

    const white = new Stone('white', {x: 0, y:0})
    const black = new Stone('black', {x: 0, y:0})

const code1 = `terraform {
    required_providers {
        aws = {
            source  = "hashicorp/aws"
            version = "~> 4.16"
        }
    }

    backend "s3" {
        key    = "project/learn-go"
        region = "us-west-2"
    }

    required_version = ">= 1.2.0"
}`
</script>
<template>
    <section class="update">
        <div class="tag">Web Development</div>
        <h1>Setup Code</h1>
        <div class="index">
            <h4>Update Contents:</h4>
            <div class="toc" v-scroll-to="'#terraform'"><span>1:</span> Terraform Code</div>
            <div class="toc" v-scroll-to="'#css'"><span>2:</span> Go Components</div>
        </div>
        <hr />
        <p>
            To even launch this website, a lot of coding had to happen to make it presentable,
            deployable, and functional. While I am trying to piecemeal out the development and
            updates, it's always important to call out that even a PoC has an upfront cost to
            even start. This update will go over some code samples and decisions made to begin
            this process.
        </p>
        <h2 id="terraform" class="accent">Terraform Code</h2>
        <p>
            For those unaware, <a href="https://www.terraform.io/docs">Terraform</a> is a
            tool/language that you can use to manage your infrastructure as code rather than
            manually in AWS or Azure. It can be a little weird to work with at times as it isn't
            just a programming language, but rather feels more like migration code against a
            database. Similar to coding, you can set up variables and dynamic values to use
            in your infrastructure (like custom names or separating different environments).
        </p>
        <p>
            Terraform is an option available to do this, with others like
            <a href="https://www.serverless.com/framework/docs">Serverless</a> and
            <a href="https://docs.aws.amazon.com/cdk/v2/guide/home.html">AWS CDK</a> being a couple
            other options. Terraform is currently the most popular one used in DevOps, and the most
            likely one you'll see when starting at a company. While it is appealing to write
            your infrastructure code in the same language as your application (AWS CDK), I often
            find it nice to keep the separation as they aren't used the same way.
        </p>
        <h3>State File</h3>
        <p>
            As mentioned earlier, using terraform can feel like running migrations against a
            database as terraform is essentially managing a state file of all the resources
            that has been created, and mapping it to your terraform code. It's not exactly
            "What resources terraform has created" as it will check your AWS account to see
            what already exists and use that. I often use an S3 bucket to store and pull my
            state file from, and to do that you would add a block like:
        </p>
        <pre>
            <code>terraform {</code>
            <code>  required_providers {</code>
            <code>      aws = {</code>
            <code>          source  = "hashicorp/aws"</code>
            <code>          version = "~> 4.16"</code>
            <code>      }</code>
            <code>  }</code>
            <code></code>
            <code>  backend "s3" {</code>
            <code>      key    = "project/learn-go"</code>
            <code>      region = "us-west-2"</code>
            <code>  }</code>
            <code></code>
            <code>  required_version = ">= 1.2.0"</code>
            <code>}</code>
        </pre>
        <p>
            So we are telling terraform what version of terraform and aws we are using. The key
            part is the `backend` block. In there we specify the subfolder we will be using and
            what region it will be in. The on thing it is missing is a `bucket` attribute for
            what the s3 bucket name is. For this project i am passing it in using a `tfvars` file
            since my bucket will be different than your bucket.
        </p>
        <pre>
            <code>AWS_PROFILE={your profile name} terraform init \</code>
            <code>  -backend-config="bucket={your aws terraform bucket}"</code>
        </pre>
        <h2 id="css" class="accent">Go Components</h2>
        <p>
            Another key piece that came together early was some of the code around the Go stones
            and lines. We'll be using these heavily in future updates and they will be what we
            are at for most of the project. Let's start with the simple part which is the CSS:
        </p>
        <div class="columns two">
            <div class="col">
                <pre>
                    <code>.stone {</code>
                    <code>    border-radius: 50%;</code>
                    <code>    position: absolute;</code>
                    <code>    margin-left: 2px;</code>
                    <code>    box-shadow: var(--shadow);</code>
                    <code>    &.white {</code>
                    <code>        background: #fff;</code>
                    <code>        background: radial-gradient(circle at 20% 20%, #fff, #666);</code>
                    <code>    }</code>
                    <code>    &.black {</code>
                    <code>        background: #000;</code>
                    <code>        background: radial-gradient(circle at 20% 20%, #363636, #000);</code>
                    <code>    }</code>
                    <code>}</code>
                </pre>
            </div>
            <div class="col">
                <div class="stone-example"><StoneComponent :size="100" :stone="white"/></div>
                <div class="stone-example"><StoneComponent :size="100" :stone="black"/></div>
            </div>
        </div>
        <p>
            We're giving it a drop shadow similar to other elements we do, and we are applying a gradient 
            to give it the appearance of being spherical. The main piece though is that it is positioned 
            absolute. This becomes important in the vue component.
        </p>
        <pre>
            <code>&lt;script setup&gt;&lt;/script&gt;</code>
            <code>import { defineProps } from 'vue';</code>
            <code></code>
            <code>type pieceStates = 'alive' | 'dead' | 'captured';</code>
            <code>type colors = 'white' | 'black';</code>
            <code></code>
            <code>export interface ICoordinates {</code>
            <code>    x: number,</code>
            <code>    y: number</code>
            <code>}</code>
            <code></code>
            <code>class Stone {</code>
            <code>    public color: colors;</code>
            <code>    public state: pieceStates;</code>
            <code>    public coordinates: ICoordinates;</code>
            <code> </code>   
            <code>    constructor(color: colors, coordinates: ICoordinates) {</code>
            <code>        this.color = color;</code>
            <code>        this.coordinates = coordinates;</code>
            <code>        this.state = 'alive';</code>
            <code>    }</code>
            <code>}</code>
            <code></code>
            <code>const props = defineProps({</code>
            <code>    stone: Stone,</code>
            <code>    size: Number,</code>
            <code>    borderRowSize: Number</code>
            <code>})</code>
            <code>&lt;script&gt;</code>
            <code></code>
            <code>&lt;template&gt;</code>
            <code>  &lt;div class="stone"</code>
            <code>      :class="{</code>
            <code>          'white': stone.color === 'white',</code>
            <code>          'black': stone.color === 'black',</code>
            <code>      }"</code>
            <code>      :style="{</code>
            <code>          'width': size + '%',</code>
            <code>          'height': size + '%',</code>
            <code>          'top': (stone.coordinates.y * borderRowSize - size / 2) +'%',</code>
            <code>          'left': (stone.coordinates.x * borderRowSize - size / 2) +'%'</code>
            <code>      }"</code>
            <code>  &gt;&lt;/div&gt;</code>
            <code>&lt;/template&gt;</code>
        </pre>
        <p>
            There's a lot going on here, but first we make our model. This isn't super necessary
            right now, but will be how we want to create and use our stone later when we are
            actually playing. The component uses the coordinates, along with the size information 
            we pass it to properly place the stones on what would be the board. Here's an example 
            similar to the homepage.
        </p>
        <div class="actual-container">
            <div class="board-container">
                <RandomBoard :size="9" backgroundColor="transparent" lineColor="rgba(255,255,255,0.4)" :numPieces="10"/>
            </div>
        </div>
        <p>
            What's nice about this is that i could scale the board to any size i want, and with the math taking 
            care of where to place the stones, I can support any size of board now. That makes the math very 
            important here, so let's take a look. 
        </p>
        <pre>
            <code># Our vertical lines will start at 0, and space</code>
            <code>#  evenly throughout the div</code>
            <code>'left': ((n-1) * 100 / (size - 1)) + '%'</code>
            <code></code>
            <code># Same with our horizontal lines</code>
            <code>'top': ((n-1) * 100 / (size - 1)) + '%',</code>
            <code></code>
            <code># Our stones then need to position themselves assuming</code>
            <code>#  the lines are evenly spaces, removing 2 pixels since the</code>
            <code>#  line width is 4 pixels</code>
            <code>'top': (stone.coordinates.y * borderRowSize - size / 2) +'%',</code>
            <code>'left': (stone.coordinates.x * borderRowSize - size / 2) +'%'</code>
        </pre>
        <p>
            And with that we can programming our interactions on a board. The next update will 
            have us learning more about Go and making our own board.
        </p>
    </section>
</template>

<style lang="scss">
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

    .stone-example {
        width: 100px;
        height: 100px;
        margin: 20px auto;
    }

    .actual-container {
        position: relative;
        width: 300px;
        height: 300px;
        margin: 30px auto;
    }

    .board-container {
        width: 100%;
        padding-top: 100%;
        position: absolute;
        right: 0;
        opacity: 1;
    }
}
</style>