<script lang="ts">

	import Card from "$components/Card.svelte";
	import Card_h1 from "$components/Card_h1.svelte";

</script>

<Card_h1>Digi podpora</Card_h1>
<div class="grid">
    <Card href="/" src="https://images.squarespace-cdn.com/content/v1/5892601aff7c50aa7531c614/1635885429629-HE3D3I1QMOT6PR3AUBD1/student+sketching+Spatial+Vis+iPad+app.jpg?format=2500w" >
        Online aplikace pro podporu výuky
    </Card>
    <Card href="/" src="https://ilikeit2.eu/wp-content/uploads/2022/02/Remote-working-1024x681-1-900x599-1.jpg" >
        Aplikace pro učitele
    </Card>
    <Card href="/" src="https://teach.outschool.com/wp-content/uploads/2023/05/image-1.png" >
        Aplikace pro podporu AI
    </Card>
</div>

<style lang="stylus">

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