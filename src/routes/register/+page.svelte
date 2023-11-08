<script lang="ts">
import supabase from '../supabaseClient.js'
let username = '';
let pw = '';
let pw2 = '';
let mail = '';

async function submitForm() {
    if(pw == pw2){
        const { data, error } = await supabase
      .from('User')
      .insert([
        { username: username, pw: pw, mail: mail},
      ])

      if (error) {
          console.error('Error sending data to Supabase:', error)
        } else {
          console.log('Data sent successfully:', data)
        }
    }
    else console.log("prosím zadejte stejná hesla");
 }
</script>
<form on:submit|preventDefault={submitForm}>
<div class="login">
    <div class="nadpis">
        <h1>Registrace</h1>
    </div>
    <div class="name">
        <input type="text" id="name" bind:value={username} required placeholder="Zvolte si přihlašovací jméno"/>
    </div>
    <div class="name">
        <input type="text" id="pw" bind:value={pw} required placeholder="Zvolte si heslo"/>
    </div>
    <div class="name">
        <input type="text" id="pw2" bind:value={pw2} required placeholder="Zopakujte vaše heslo"/>
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
        margin 30px auto
        
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
            gap 16px


            a
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