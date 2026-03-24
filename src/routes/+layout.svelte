<script lang="ts">
	import '../styles/global.css';
	import favicon from '$lib/assets/favicon.svg';
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	let { children } = $props();

	onMount(() => {
		const redirect = sessionStorage.redirect;
		if (redirect) {
			delete sessionStorage.redirect;
			goto(redirect);
		}
	});
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
