<script lang="ts">

</script>

<div class="login">
    <div class="nadpis">
        <h1>Login</h1>
    </div>
    <div class="name">
        <input type="text" placeholder="Přihlašovací jméno">
    </div>
    <div class="name">
        <input type="text" placeholder="Heslo">
    </div>
    <div class="buttons">
        <a href="/">Přihlásit</a>
        <a href="/">Registrovat</a>
        <a href="/">Zapomenuté heslo</a>
    </div>
</div>

<style lang="stylus">

    .login
        background-color #113946
        padding 16px
        border-radius 5px
        max-width 750px
        
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


    main
        display flex
        justify-content center

</style>