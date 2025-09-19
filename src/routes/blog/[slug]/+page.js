/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    const post = await import(`../${params.slug}.svx`);
    const { date, title } = post.metadata;
    const content = post.default;

    return { 
        date,
        title,
        content,
    }
}