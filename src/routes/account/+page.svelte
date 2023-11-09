<script lang="ts">

</script>

<div class="Hero">
    <div class="profil">
        <div class="Foto">
            <img src="https://pruvodce.fpe.zcu.cz/wp-content/uploads/2023/04/pruvodce_breit.jpg" alt="">
        </div>
        <div class="infor">
            <div class="inputs">
                <label for="input">Přihlašovací jméno</label>
                <input type="text">
            </div>
            <div class="inputs">
                <label for="input">Email</label>
                <input type="text">
            </div>
        </div>
    </div>
        
    <div class="info">
        <div class="info">
            <div class="inputs">
                <label for="input">Stávající heslo</label>
                <input type="text">
            </div>
            <div class="inputs">
                <label for="input">Nové heslo</label>
                <input type="text">
            </div>
            <div class="inputs">
                <label for="input">Zadejte znovu nové heslo</label>
                <input type="text">
            </div>
        </div>
    </div>
    <div class="tlacitka">
        <a href="/" class="button">Potvrdit zěmny</a>
        <a href="/" class="button">Smazat účet</a>
    </div>
</div>

<style lang="stylus">

    .Hero
        background #113946
        padding 16px
        color white
        margin 5px auto
        max-width 650px

        .profil
            display: grid
            grid-template-columns: 0.3fr 1fr; 
            grid-template-rows repeat(1, 1fr)
            grid-column-gap 0px
            grid-row-gap 0px

        .infor
            display flex
            flex-direction column
            align-items flex-start

            .inputs
                width 100%
                display flex
                justify-content center
                margin 5px 0

                label
                    width 130px

        .tlacitka
            width 100%
            margin 35px 0
            display flex
            justify-content space-between
                
    input
        border-top 0
        border-left 0
        border-right 0
        border-bottom 2px solid red
        background-color #113946
        color white

        &:focus
            border-bottom 2px solid red
            background-color none
            outline: none;

    .info
        display flex
        justify-content space-between
        flex-direction row
        width 100%

    a
        border 1px solid black
        padding 5px
        background-color red
        color white
        text-decoration none
        border-radius 5px
        transition background .6s ease

        &:hover
            background purple



</style>