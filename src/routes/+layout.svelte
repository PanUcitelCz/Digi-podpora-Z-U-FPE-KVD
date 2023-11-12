<script lang="ts">
	import Footer from '$components/Footer.svelte';
import Header from '$lib/components/Header.svelte';
	import '../lib/css/normallize.css';
</script>

<Header />
<main class="Main">
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

<Footer />

<style lang="stylus">
	
	:global(body)
		margin 0
		padding 0
		font-family 'Bricolage Grotesque', sans-serif

	.Main
		margin 30px auto
		max-width 1300px

</style>
