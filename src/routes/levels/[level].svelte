<script context="module">
  import Card from '$lib/app/Card.svelte';
  import Tabs from '$lib/app/Tabs.svelte';

  export async function load({ page, fetch, session, context }) {
    const url = `/levels/${page.params.level}.json`;
    const res = await fetch(url);
    const data = await res.json();
    if (res.ok) {
      return {
        props: {
          cards: data.cards
        }
      };
    }
    return {
      status: res.status,
      error: new Error(`Could not load ${url}`)
    };
  }
</script>

<script>
  export let cards;
  let projectTitle = '';

  //   const getProject = async (project) => {
  //     const data = await project;
  //     const title = data.title;
  //     projectTitle = title;
  //   };
  //   getProject(project);
</script>

<section class="container max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
  <h1 class="text-lg leading-6 font-semibold text-gray-900 my-5">Review Level One</h1>

  {#await cards}
    ...pending
  {:then data}
    {#each data as card}
      <Card {card} />
    {/each}
  {/await}
</section>

<!-- <h3>{level.title} detail</h3> -->
