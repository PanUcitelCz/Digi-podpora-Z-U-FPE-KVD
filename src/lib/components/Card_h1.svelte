<script lang="ts">
    export let h1: string;
</script>



<div class="hero">
    <h1>
        {h1}
    </h1>
    <p>
        <slot />
    </p>
</div>


<style lang="stylus">
    .hero
        background #526D82
        padding 36px
        color white
        display flex
        justify-content center
        align-items center
        margin 10px 10px
        flex-direction column
        text-align justify
</style>