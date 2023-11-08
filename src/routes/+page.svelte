<script lang="ts">

	import Card from "$components/Card.svelte";

</script>
<div class="grid">
    <Card href="/" src="https://images.squarespace-cdn.com/content/v1/5892601aff7c50aa7531c614/1635885429629-HE3D3I1QMOT6PR3AUBD1/student+sketching+Spatial+Vis+iPad+app.jpg?format=2500w" >
        Ahoj
    </Card>
    <Card href="/" src="https://images.squarespace-cdn.com/content/v1/5892601aff7c50aa7531c614/1635885429629-HE3D3I1QMOT6PR3AUBD1/student+sketching+Spatial+Vis+iPad+app.jpg?format=2500w" >
        Ahoj
    </Card>
    <Card href="/" src="https://images.squarespace-cdn.com/content/v1/5892601aff7c50aa7531c614/1635885429629-HE3D3I1QMOT6PR3AUBD1/student+sketching+Spatial+Vis+iPad+app.jpg?format=2500w" >
        Ahoj
    </Card>
    <Card href="/" src="https://images.squarespace-cdn.com/content/v1/5892601aff7c50aa7531c614/1635885429629-HE3D3I1QMOT6PR3AUBD1/student+sketching+Spatial+Vis+iPad+app.jpg?format=2500w" >
        Ahoj
    </Card>
    <Card href="/" src="https://images.squarespace-cdn.com/content/v1/5892601aff7c50aa7531c614/1635885429629-HE3D3I1QMOT6PR3AUBD1/student+sketching+Spatial+Vis+iPad+app.jpg?format=2500w" >
        Ahoj
    </Card>
    <Card href="/" src="https://images.squarespace-cdn.com/content/v1/5892601aff7c50aa7531c614/1635885429629-HE3D3I1QMOT6PR3AUBD1/student+sketching+Spatial+Vis+iPad+app.jpg?format=2500w" >
        Ahoj
    </Card>
</div>

<style lang="stylus">

    .grid
        margin 0 auto
        max-width 1300px
        padding 12px
        display grid
        justify-content center

        grid-template-columns repeat(1, 1fr)
        grid-template-rows repeat(2, 1fr)
        grid-column-gap 21px
        grid-row-gap 21px

        @media only screen and (min-width 641px)
            padding 24px
            grid-template-columns: repeat(2, 1fr)

        @media only screen and (min-width 1024px)
            padding 24px
            grid-template-columns: repeat(3, 1fr)
</style>