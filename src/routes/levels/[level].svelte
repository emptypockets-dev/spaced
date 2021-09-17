<!-- <script context="module">
 

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
</script> -->
<script>
  import { projects } from '../../stores/data';
  import Card from '$lib/app/Card.svelte';
  import NarrowSidebar from '$lib/app/NarrowSidebar.svelte';
  import Toolbar from '$lib/app/Toolbar.svelte';
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  export let cards;
  let reviewCards = [];
  let selectedCard;
  let currentCard;
  let currentIndex = 0;

  $: {
    selectedCard = currentCard;
  }

  async function doPost() {
    const res = await fetch('levels.json', {
      method: 'POST',
      body: JSON.stringify(cards)
    });
    return false;
  }

  function handleMessage(event) {
    // console.log(event.detail.level);
    const level = event.detail.level;
    if (level === 'first') {
      moveCardToFirstLevel(currentCard);
      currentIndex = ++currentIndex;
      selectCard(currentIndex);
      doPost();
    } else if (level === 'next') {
      moveCardToNextLevel(currentCard);
      currentIndex = ++currentIndex;
      selectCard(currentIndex);
      doPost();
    } else {
      console.log('error');
    }
  }

  onMount(() => {
    currentCard = $projects.projects[0].cards[0];
  });

  const selectCard = (index) => {
    currentIndex = index;
    currentCard = $projects.projects[0].cards[currentIndex];
  };

  const moveCardToNextLevel = () => {
    console.log('moving card to next level');
    $projects.projects[0].cards[currentIndex].level += 1;
    $projects.projects[0].cards[currentIndex].level_name += 1;
    // card.level += 1;
    // card.level_name += 1;
    // currentCard = reviewCards[card.level];
  };

  const moveCardToFirstLevel = () => {
    $projects.projects[0].cards[currentIndex].level = 1;
    $projects.projects[0].cards[currentIndex].level_name = 1;
    // card.level = 1;
    // card.level_name = 'one';
    // currentCard = reviewCards[++card.level];
    // doPost(reviewCards);
  };
</script>

<div class="relative h-screen overflow-hidden bg-gray-100 flex flex-col">
  <div class="min-h-0 flex-1 flex overflow-hidden">
    <NarrowSidebar />

    <!-- Main area -->
    <main class="min-w-0 flex-1 border-t border-gray-200 xl:flex">
      <section
        aria-labelledby="message-heading"
        class="min-w-0 flex-1 h-full flex flex-col overflow-hidden xl:order-last"
      >
        <Toolbar on:message={handleMessage} />

        <div class="min-h-0 flex-1 overflow-y-auto">
          <!-- Selected Card-->
          <ul role="list" class="py-4 space-y-2 sm:px-6 sm:space-y-4 lg:px-8">
            {#if selectedCard}
              {#key selectedCard.embed_slug}
                <li
                  in:fade={{ delay: 200 }}
                  out:fade={{ duration: 150 }}
                  class="bg-white px-4 py-6 shadow sm:rounded-lg sm:px-6"
                >
                  <Card {selectedCard} />
                </li>
              {/key}
            {/if}
          </ul>
        </div>
      </section>

      <!-- Message list-->
      <aside class="hidden xl:block xl:flex-shrink-0 xl:order-first">
        <div class="h-full relative flex flex-col w-96 border-r border-gray-200 bg-gray-100">
          <div class="flex-shrink-0">
            <div class="h-16 bg-white px-6 flex flex-col justify-center">
              <div class="flex items-baseline space-x-3">
                <h2 class="text-lg font-medium text-gray-900">Review</h2>
                <p class="text-sm font-medium text-gray-500">levels five and two</p>
              </div>
            </div>
            <div
              class="border-t border-b border-gray-200 bg-gray-50 px-6 py-2 text-sm font-medium text-gray-500"
            >
              Sorted by level
            </div>
          </div>
          <nav aria-label="Message list" class="min-h-0 flex-1 overflow-y-auto">
            <ul role="list" class="border-b border-gray-200 divide-y divide-gray-200">
              {#await $projects}
                ...pending
              {:then data}
                {#each data.projects[0].cards as card, i}
                  <li
                    class="relative bg-white py-5 px-6 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600 {currentCard ===
                    card
                      ? 'bg-gray-200 hover:bg-gray-200'
                      : ''}"
                    on:click={() => selectCard(i)}
                  >
                    <div class="flex justify-between space-x-3">
                      <div class="min-w-0 flex-1">
                        <span class="absolute inset-0" aria-hidden="true" />
                        <p class="text-sm font-medium text-gray-900 truncate">
                          {card.title}
                        </p>
                        <p class="text-sm text-gray-500 truncate">Javascript</p>
                      </div>
                      <time
                        datetime="2021-01-27T16:35"
                        class="flex-shrink-0 whitespace-nowrap text-sm text-gray-500"
                        >{card.level_name}</time
                      >
                    </div>
                    <div class="mt-1">
                      <p class="line-clamp-2 text-sm text-gray-600">
                        {card.question}
                      </p>
                    </div>
                  </li>
                {/each}
              {/await}
            </ul>
          </nav>
        </div>
      </aside>
    </main>
  </div>
</div>
