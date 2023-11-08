<script lang="ts">
    import { onMount } from 'svelte'

    let desktop: MediaQueryList

    onMount(() => {
        desktop = window.matchMedia('(min-width: 991px)')
    })

    const resize = () => {
        if (desktop.matches) {
            isOpen = false
        }
    }

    const changeOpenState = () => {
        isOpen = !isOpen
    }

    let isOpen = false
</script>

<svelte:window on:resize={resize} />

<header class="Header">
    <div class="Header-wrapper">
        <div class="Header-logo">
            <img src="images/FPE_ZČU_(cmyk).png" alt="" />
        </div>
        <button class="Hamburger" class:isOpen on:click={changeOpenState}>
            <span class="Hamburger-stick" />
            <span class="Hamburger-stick" />
            <span class="Hamburger-stick" />
        </button>
        <nav class="Header-nav" class:isOpen>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/login">Přihlášení</a></li>
                <li><a href="/">Registrace</a></li>
            </ul>
        </nav>
    </div>
</header>

<style lang="stylus">
    .Header
        position relative
        display flex
        justify-content center
        width 100%
        height 96px
        background-color #113946

        &-wrapper
            position relative
            z-index 2
            display flex
            justify-content space-between
            align-items center
            gap 48px
            padding 0 48px
            width 100%
            max-width 1300px

            &:after
                content ""
                position absolute
                z-index 1
                left 50%
                width 100%
                height 100%
                background-color #113946
                transform translateX(-50%)

                @media only screen and (min-width 991px)
                    display none


        &-logo
            position relative
            z-index 4

            img
                width 150px
                margin-left -50px

        &-nav
            position absolute
            z-index 1
            top 0
            left 0
            width 100%
            transform translateY(-100%)
            transition transform .6s ease

            @media only screen and (min-width: 991px)
                position static
                transition none
                transform none
            
            &.isOpen
                transform translateY(0%)

            ul
                z-index 3
                display flex
                align-items center
                justify-content center
                flex-direction column
                gap 24px
                list-style-type none
                padding-left 0
                margin 0
                padding 24px
                padding-top 108px
                background #113946

                @media only screen and (min-width: 991px)
                    gap 12px
                    padding 0
                    display flex
                    flex-direction row
                    justify-content flex-end

                li

                    a
                        text-decoration none
                        color white
                        font-weight 600
                        padding 8px 12px
                        border-radius 3px
                        background transparent
                        transition background .3s ease

                        @media only screen and (min-width: 991px)
                            padding 8px


                        &:hover
                            background grey

    .Hamburger
        display block
        position absolute
        z-index 4
        width 35px
        height 25px
        right 35px
        top 35px
        cursor pointer
        z-index 100
        background none
        border none

        @media only screen and (min-width: 991px)
            display none

        &.isOpen
            .Hamburger-stick
                &:nth-child(1)
                    transform: rotate(45deg) translate(8px,8px)

                &:nth-child(2)
                    opacity 0
                    transform: translateX(-30px)

                &:nth-child(3)
                    transform rotate(-45deg) translate(7px,-7px)

        &-stick
            position absolute
            display flex
            width 100%
            background #F7F7F7
            height 3px
            border-radius 5px
            opacity 1
            transition ease transform .6s, ease opacity 1s

            &:nth-child(1)
                top 0
            
            &:nth-child(2)
                top 50%
                transform translateY(-50%)

            &:nth-child(3)
                bottom 0
</style>
