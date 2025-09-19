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