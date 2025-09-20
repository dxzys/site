import { json } from '@sveltejs/kit';

async function getPosts() {
	let posts = [];

	const paths = import.meta.glob('/src/routes/blog/*.svx', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.svx', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata;
			if (metadata && typeof metadata === 'object' && 'title' in metadata && 'date' in metadata) {
				const post = { 
					title: metadata.title,
					date: metadata.date,
					slug 
				};
				posts.push(post);
			}
		}
	}

	posts = posts.sort(
		(first, second) => new Date(String(second.date)).getTime() - new Date(String(first.date)).getTime()
	);

	return posts;
}

export async function GET() {
	const posts = await getPosts();
	return json(posts);
}