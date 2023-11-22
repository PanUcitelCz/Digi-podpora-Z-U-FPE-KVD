<script lang="ts">

let username = '';
let pw = '';

async function submitform(){
    let n = window.sessionStorage;
    let toJSON = '{"postID":"'+2+'","username":"'+username+'","pw":"'+pw+'"}';
    let eve = JSON.parse(toJSON);
    const response = await fetch("../api/getstate",{
        method: 'POST',
        body: JSON.stringify({eve}),
        headers: {
            'Content-Type': 'application/json'
        }})
        var test = await response.json();
        if(test.succ){
            n.setItem("username",test.username);
            console.log("zaregistrován nový uživatel "+test.username);
        }
}

</script>
<div>
<form on:submit|preventDefault={() => submitform()}>
<div class="login">
    <div class="nadpis">
        <h1>Přihlášení</h1>
    </div>
    <div class="name">
        <label for="name">Username: </label>
        <input type="text" id="name" bind:value={username} required/>
    </div>
    <div class="name">
        <label for="password">Password:</label>
        <input type="password" id="password" bind:value={pw} required/>
    </div>
    <div class="buttons">
        <button type="submit">Login</button>
        <a href="/register">Registrovat</a>
        <a href="/">Zapomenuté heslo</a>
    </div>
</form>
</div>

<style lang="stylus">

    .login
        background-color #113946
        padding 16px
        border-radius 5px
        max-width 750px
        margin 10px

        @media $medium-up
            margin 10px auto
        
        .nadpis
            display flex
            justify-content center

            h1
                color white
        

        .name
            display flex
            justify-content center
            margin 16px 0

            input
                width 90%
                border-top none
                border-left none
                border-right none
                border-bottom  2px solid red
                background-color #113946
                color white

                &:focus
                    border-bottom 2px solid red
                    background-color none
                    outline: none;

        .buttons
            display flex
            justify-content center
            flex-direction column
            gap 16px

            @media $small-wide-up
                justify-content center
                flex-direction row


            a
                border 1px solid black
                padding 10px
                background-color red
                color white
                text-decoration none
                border-radius 5px
                transition background .6s ease
                text-align center

                &:hover
                    background purple

        button
            border 1px solid black
            padding 10px
            background-color red
            color white
            text-decoration none
            border-radius 5px
            transition background .6s ease
            
            &:hover
                background purple
    label
        color white

</style>