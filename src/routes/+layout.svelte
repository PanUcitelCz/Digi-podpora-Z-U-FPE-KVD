<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import '../lib/css/normallize.css';
</script>

<Header />
<main>
	<slot />
</main>
<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
	<link
		href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@10..48,200;10..48,600&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<style lang="stylus">
	
	body
		margin 0
		padding 0

	main
		display flex
		justify-content center
		margin 30px 0

</style>
