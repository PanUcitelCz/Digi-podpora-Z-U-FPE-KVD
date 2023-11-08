<script lang="ts">
	export let src: string;
	export let href: string;
</script>

<a class="Card" href="{href}">
	<h2 class="Card-heading">
		<slot />
	</h2>
	<img class="Card-image" src="{src}" alt="" />
</a>

<style lang="stylus">
    .Card
        position relative
        min-height 200px
        display flex
        cursor pointer
        text-decoration none

        &:after
            position absolute
            inset 0
            content ""
            background #5D5D5D
            opacity .4
            transition opacity .3s ease
        
        &:hover
            &:after
                opacity 0

            .Card-heading
                background #5D5D5D
                top 0
                transform translateY(0)

        &-heading
            position relative
            z-index 1
            color black
            background transparent
            width 100%
            top 50%
            transform translateY(-50%)
            margin 0
            height fit-content
            text-align center
            padding 24px 0
            transition background .3s ease, transform .3s ease, top .3s ease
            color white
        
        &-image
            position absolute
            inset 0
            width 100%
            height 100%
            object-fit cover
</style>
