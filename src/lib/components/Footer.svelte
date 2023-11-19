<script lang="ts">

</script>

<footer>
    <div class="wrapper">
        <div class="inf">
            <div class="text">Západočeská univerzita</div>
            <div class="text">Fakulta pedagogická</div>
            <div class="text">Katedra výpočetní a didaktické tecnniky</div>
        </div>
        <div class="logo">
            <img src="images/FPE_ZČU_(cmyk).png" alt="">
        </div>
    </div>
</footer>

<style lang="stylus">
    footer
        background #DDE6ED
        padding 36px
        display flex
        justify-content center

        .wrapper
            max-width 1300px
            width 1300px
            display flex
            flex-direction column
            
            .inf
                display flex
                flex-direction column
                border-bottom 1px solid black
                justify-content space-between
                width 100%

                @media $large-up
                    flex-direction row

                
            
            .text
                padding 21px
                font-weight bold
                text-align center
            
            .logo
                display flex
                justify-content center
                width 100%

                img
                    width 300px
                    
            

        

</style>