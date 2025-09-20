<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<svelte:head>
    <title>{data.title}</title>
</svelte:head>

<article>
    <h1>{data.title}</h1>
    <p>{data.date}</p>

    <svelte:component this={data.content} />
</article>

<style>
    article {
        max-width: 100%;
        word-wrap: break-word;
        overflow-wrap: break-word;
        hyphens: auto;
    }
    
    article :global(p),
    article :global(h1),
    article :global(h2),
    article :global(h3),
    article :global(h4),
    article :global(h5),
    article :global(h6) {
        max-width: 100%;
        word-wrap: break-word;
    }
    
    article :global(pre),
    article :global(code) {
        max-width: 100%;
        overflow-x: auto;
        white-space: pre-wrap;
    }
</style>