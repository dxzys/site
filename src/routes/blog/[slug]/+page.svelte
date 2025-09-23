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
        hyphens: none;
    }
    
    article :global(strong),
    article :global(b) {
        font-weight: 700;
    }

    article :global(strong a) {
        font-weight: 700;
    }

    article :global(strong) :global(a),
    article :global(b) :global(a) {
        font-weight: inherit;
    }

    article :global(em),
    article :global(i) {
        font-style: italic;
    }

    article :global(table) {
        border-collapse: collapse;
        margin: 0.5rem 0;
        border: 1px solid #d0d7de;
        border-radius: 6px;
    }

    article :global(th),
    article :global(td) {
        padding: 0.3rem 0.5rem;
        text-align: left;
        border-bottom: 1px solid #d0d7de;
        border-right: 1px solid #d0d7de;
    }

    article :global(th) {
        background-color: #f6f8fa;
        font-weight: 600;
        border-bottom: 2px solid #d0d7de;
    }

    article :global(tbody tr:nth-child(even)) {
        background-color: #f9f9f9;
    }
    
    article :global(code) {
        background: rgba(175, 184, 193, 0.2);
        padding: 0.125rem 0.25rem;
        border-radius: 3px;
        font-family: ui-monospace, SFMono-Regular, "SF Mono", Monaco, Menlo, Consolas, "Liberation Mono", "Courier New", monospace;
        font-size: 0.875em;
        border: 1px solid rgba(175, 184, 193, 0.25);
    }

    article :global(pre) {
        background: #f6f8fa;
        padding: 0.75rem 1rem;
        border-radius: 6px;
        overflow-x: auto;
        font-family: ui-monospace, SFMono-Regular, "SF Mono", Monaco, Menlo, Consolas, "Liberation Mono", "Courier New", monospace;
        font-size: 0.875rem;
        white-space: pre;
        border: 1px solid #d0d7de;
    }

    article :global(pre code) {
        background: none;
        padding: 0;
        border: none;
        border-radius: 0;
        font-size: inherit;
    }

    article :global(blockquote) {
        border-left: 4px solid #d0d7de;
        padding-left: 1rem;
        margin: 1rem 0;
        color: #656d76;
        font-style: italic;
    }
</style>