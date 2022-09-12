<script setup lang="ts">
</script>

<template>
    <section class="update">
        <div class="tag">Web Development</div>
        <h1>Project Setup</h1>
        <div class="banner">
            <img src="../../assets/coding.png"/>
        </div>
        <div class="index">
            <h4>Update Contents:</h4>
            <div class="toc" v-scroll-to="'#project'"><span>1:</span> Short Term vs Long Term</div>
            <div class="toc" v-scroll-to="'#structure'"><span>2:</span> Project Structure</div>
        </div>
        <hr />
        <p>
            The goals of this project are both straight forward, and nebulous at the same 
            time. Saying you have learned something is rather subjective and can be hard to 
            determine where to stop. What I am hoping to get out of this is:
        </p>
        <ul>
            <li>Be around 12k kyu rank at Go</li>
            <li>Create an AI that can operate at around 10-12k kyu</li>
            <li>Document the process of setting that up as I go along</li>
        </ul>
        <p>
            The last one is the easiest and mostly accomplished in the github repository
            and update blogs like this one. The second one drives those updates and has 
            some relatively straight forward goes and progression to hit. I'm hoping that 
            those 2 will help drive the first goal.
        </p>
        <h2 id="project" class="accent">Short Term vs Long Term Project State</h2>
        <p>
            With the goals laid out, now I have to plan out how to achieve them in 
            a realistic and attainable way. It's real easy with a large project to get 
            caught up in the long term goals and not actually release anything. Long 
            term I would probably want:
        </p>
        <ol>
            <li>Database to persist and maintain game states</li>
            <li>Backend API and/or socket to calculate the next move for AIs</li>
            <li>Backend probably also should handle board state validation</li>
            <li>Robust UI to handle actually playing the game</li>
            <li>Full CI/CD pipeline to push changes</li>
            <li>Test suite on frontend and backend to ensure no breaking changes</li>
        </ol>
        <p>
            Those are great goals to have and should be what I strive for, but doesn't
            mean they need to all happen at the time of writing this update. I need to 
            ensure that I can make progress towards them, without getting too bogged down 
            in process. The goal is to learn Go, not necessarily deliver a production ready 
            Go AI and website. With that in mind, the structure of the project will 
            probably look something like:
        </p>
        <ol>
            <li>Create website to capture progress</li>
            <li>Add in basic terraform to create necessary infrastructure</li>
            <li>Build out UI components for playing Go</li>
            <li>Start with rules and AI in the frontend</li>
            <li>Build out backend to handle board validation</li>
            <li>Add in database to persist state (maybe)</li>
            <li>Iterate on AI</li>
        </ol>
        <p>
            and along the way add in testing and move more towards automated deployments.
            Those things can come in periods with less coding and more researching.
        </p>        
        <h2 id="structure" class="accent">Project Structure</h2>
        <p>
            Now that we know what we are doing and when, it's time to discuss how we 
            are doing it. For this project I am going to leverage:
        </p>
        <ul>
            <li>VueJS Version 3</li>
            <li>Terraform</li>
            <li>SCSS</li>
            <li>ExpressJS</li>
            <li>Socket.IO</li>
        </ul>
        <p>
            Some of that might change as time goes on, but for now that's where I'm at. 
            The folder structure will probably be pretty simple, as seen currently in the 
            <a href="https://github.com/debanks/learn-go">GitHub Repository</a>
        </p>
        <img src="../../assets/updates/github.png"/>
        <p>
            With folders for the backend and socket coming in the future as we get there.
            In the next update we'll go over some of the code for both terraform and the 
            frontend to explain how we go to having this live.
        </p>
    </section>
</template>

<style lang="scss">
@import '../../assets/base.css';
@import '../../assets/updates.scss';

section {
    border-top: 3px solid  var(--updates-green);
    color: var(--gray);
    line-height: 2;

    .toc span {
        color: var(--updates-green);
    }

    p {
        margin: 10px 0;
    }
}
</style>