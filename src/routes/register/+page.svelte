<script lang="ts">
let username = '';
let pw = '';
let pw2 = '';
let mail = '';

function test(){
    let toJSON = '{"postID":"'+1+'","username":"'+username+'","pw":"'+pw+'","mail":"'+mail+'"}';
    let event = JSON.parse(toJSON);
    submitForm(event);
}

async function submitForm(eve: any) {
    let n = window.sessionStorage;
    const response = await fetch("../api/getstate",{
        method: 'POST',
        body: JSON.stringify({eve}),
        headers: {
            'Content-Type': 'application/json'
        }})
        var test = await response.json();
        if(test){
            n.setItem("username",username);
        }
    }

</script>
<form on:submit|preventDefault={() => test()}>
<div class="login">
    <div class="nadpis">
        <h1>Registrace</h1>
    </div>
    <div class="name">
        <input type="text" id="name" bind:value={username} required placeholder="Zvolte si přihlašovací jméno"/>
    </div>
    <div class="name">
        <input type="password" id="pw" bind:value={pw} required placeholder="Zvolte si heslo"/>
    </div>
    <div class="name">
        <input type="password" id="pw2" bind:value={pw2} required placeholder="Zopakujte vaše heslo"/>
    </div>
    <div class="name">
        <input type="text" id="email" bind:value={mail} required placeholder="Zadejte Váš email"/>
    </div>
    <div class="buttons">
        <a href="/">Přihlásit</a>
        <button type="submit" >Registrovat</button>
        <a href="/">Zapomenuté heslo</a>
    </div>
</div>
</form>
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
</style>