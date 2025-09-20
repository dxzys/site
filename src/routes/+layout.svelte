<script lang="ts">
	import '../styles/global.css';
	import favicon from '$lib/assets/favicon.svg';
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="site">
	<Header />

	<main>
	    {@render children?.()}
	</main>

	<Footer />
</div>
