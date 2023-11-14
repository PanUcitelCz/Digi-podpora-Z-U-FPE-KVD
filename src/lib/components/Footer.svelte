<script lang="ts">

</script>

<footer>
    <div>
        <div>
            Západočeská univerzita v Plzni
        </div>
        <div>
            Katedra výpočetní a didaktické techniky
        </div>
        <div>
            Fakulta pedagogická
        </div>
    </div>
</footer>

<style lang="stylus">
    footer
        background red
        padding 20px
        color white

        div
            display flex
            flex-direction column
            justify-content center
            text-align center
            margin 10px
            font-weight bold
            @media $small-wide-up

                justify-content space-between 
                flex-direction row
                
                max-width 1300px
                margin auto
                text-align center
                margin 0 16px

</style>