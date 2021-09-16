<script context="module">
  //   import Card from '$lib/app/Card.svelte';
  import Level from '$lib/app/Level.svelte';

  export async function load({ page, fetch, session, context }) {
    const url = `/levels/levels.json`;
    const res = await fetch(url);
    const data = await res.json();
    if (res.ok) {
      return {
        props: {
          project: data.project
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
  export let project;
  let projectTitle = '';

  //   const getProject = async (project) => {
  //     const data = await project;
  //     const title = data.title;
  //     projectTitle = title;
  //   };
  //   getProject(project);
</script>

<section class="container max-w-7xl mx-auto h-full">
  <div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
    {#await project}
      ...pending
    {:then data}
      <h1 class="text-lg leading-6 font-semibold text-gray-900">{data.title}</h1>
      <ul class="w-full">
        {#each data.levels as levels}
          <div class="relative">
            <div class="absolute inset-0 flex items-center" aria-hidden="true">
              <div class="w-full border-t border-gray-400" />
            </div>
          </div>
          <li>
            <Level {levels} />
          </li>
        {/each}
      </ul>
    {/await}
  </div>
</section>
