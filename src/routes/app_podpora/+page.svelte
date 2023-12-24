<script lang="ts">
    import Card from "$components/Card.svelte";

    let typ_active = [false, false, false, false];
    
    const active = (index: number) => {
        typ_active[index] = !typ_active[index];
    }
</script>

<div class="lista">
    <div class="search">
        <input type="search" placeholder="Zadejte název aplikace">
        <button>Hledej</button>
    </div>
    <div class="vyber">
        <div class="container">
            {#each [0, 1, 2, 3] as index}
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div class="typ_aplikace" class:typ_active={typ_active[index]} on:click={() => active(index)}>
                    {#if index === 0}
                        Android
                    {:else if index === 1}
                        IOS
                    {:else if index === 2}
                        Online aplikace
                    {:else}
                        Free
                    {/if}
                </div>
            {/each}
        </div>
    </div>
</div>

<div class="grid">
    <Card href="/app_podpora" src="https://images.squarespace-cdn.com/content/v1/5892601aff7c50aa7531c614/1635885429629-HE3D3I1QMOT6PR3AUBD1/student+sketching+Spatial+Vis+iPad+app.jpg?format=2500w">
        Test
    </Card>
    <Card href="/app_podpora" src="https://images.squarespace-cdn.com/content/v1/5892601aff7c50aa7531c614/1635885429629-HE3D3I1QMOT6PR3AUBD1/student+sketching+Spatial+Vis+iPad+app.jpg?format=2500w">
        Test
    </Card>
    <Card href="/app_podpora" src="https://images.squarespace-cdn.com/content/v1/5892601aff7c50aa7531c614/1635885429629-HE3D3I1QMOT6PR3AUBD1/student+sketching+Spatial+Vis+iPad+app.jpg?format=2500w">
        Test
    </Card>
    <Card href="/app_podpora" src="https://images.squarespace-cdn.com/content/v1/5892601aff7c50aa7531c614/1635885429629-HE3D3I1QMOT6PR3AUBD1/student+sketching+Spatial+Vis+iPad+app.jpg?format=2500w">
        Test
    </Card>
</div>

<style lang="stylus">
    
    .lista
        max-width 1300px
        margin  10px
        background-color #526D82
        padding 16px
        border-radius 10px
        display flex
        justify-content space-between
        align-items center
        flex-direction column

        .container
            display flex
            gap 10px
            margin 10px 0

        .typ_aplikace
            background-color white
            color #6F6F6F
            border-radius white
            padding 10px
            border-radius 20px
            cursor pointer
            transition .5s ease
            
        .typ_active
            background-color red

    .grid
        margin 0 auto
        max-width 1300px
        padding 10px
        display grid
        justify-content center

        grid-template-columns repeat(auto-fit, minmax(320px, 1fr))
        grid-column-gap 21px
        grid-row-gap 21px
</style>