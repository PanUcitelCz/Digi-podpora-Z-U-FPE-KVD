<script lang="ts">
	import Card from "$components/Card.svelte";

</script>

<div class="lista">
    <div class="search">
        <input type="search">
        <button>Hledej</button>
    </div>
    <div class="vyber">
        <div class="">

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