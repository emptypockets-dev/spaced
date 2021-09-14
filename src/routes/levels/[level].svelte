<script context="module">
	export async function load({ page, fetch, session, context }) {
		const level = {
			title: page.params.level,
			date: new Date(),
			body: 'lorem ipsum'
		};
		return {
			props: {
				level
			}
		};
	}
</script>

<script>
	export let level;
</script>

<h3>{level.title} detail</h3>
