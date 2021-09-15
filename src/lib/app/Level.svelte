<script>
  export let levels;
  console.log(levels);
  //   export let projectTitle;

  //   console.log(project.learn_something_else);
</script>

<div class="my-5 grid grid-flow-col items-justify-end">
  <div>
    <h3 class="text-lg leading-6 font-semibold text-gray-900 mt-9 mb-2 mr-10">{levels.title}</h3>
    <h4 class="text-md font-normal">
      {levels.cards.length} cards
    </h4>
  </div>

  <ul class="grid grid-flow-col container overflow-x-scroll p-10 pr-0 justify-items-end">
    {#each levels.cards as cards}
      <li class="px-4 py-5 bg-white shadow overflow-hidden sm:p-6 card h-52 rounded-md w-44">
        {cards.title}
      </li>
    {/each}
  </ul>
</div>

<style>
  .card {
    box-shadow: -1rem 0 2rem rgba(0, 0, 0, 0.25);
    transition: 0.25s ease-out;
    position: relative;
    left: 0px;
  }

  .card:not(:first-child) {
    margin-left: -50px;
  }

  .card:hover {
    transform: translateY(-10px);
    transition: 0.24s ease-out;
  }

  .card:hover ~ .card {
    position: relative;
    left: 50px;
    transition: 0.25s ease-out;
  }
</style>
