<script>
	export let data;
</script>

<svelte:head>
	<title>Cam Steeves</title>
</svelte:head>

<section>
	<h1 class="intro">
		<span class="intro-text">Cam</span>
	</h1>
</section>

<section class="articles">
	<h2>Articles</h2>
	<div class="post-list">
		{#each data.posts as post}
			<article class="post-item">
				<h3><a href="/blog/{post.slug}">{post.title}</a></h3>
				<time>{post.date}</time>
			</article>
		{/each}
	</div>
</section>

<style>
	.articles {
		margin-top: 2rem;
	}

	.post-list {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.post-item {
		border-bottom: 1px solid #eee;
		padding-bottom: 1rem;
	}

	.post-item:last-child {
		border-bottom: none;
	}

	.post-item time {
		color: #646464;
		font-size: 0.9rem;
	}

    /*.intro-text {
        font-family:"Gabarito", sans-serif;
        font-size: 2.5rem;
        font-weight: 700;
    }*/ /* trying to use a different font specifically for this text, might be something to do later */
</style>
