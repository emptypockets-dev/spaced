<script>
  import { projects } from '../../stores/data';
  import Card from '$lib/app/Card.svelte';
  import NarrowSidebar from '$lib/app/NarrowSidebar.svelte';
  import Toolbar from '$lib/app/Toolbar.svelte';
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';
  let filteredCards = [];
  let selectedCard;
  let currentCard;
  let currentIndex = 0;
  let activeFilters = [2, 5];
  import { levelLabels } from '../../lib/app/app-utils';

  $: {
    selectedCard = currentCard;
    filteredCards = $projects.projects[0].cards.filter((card) => card.level >= 0);
  }

  function handleMessage(event) {
    console.log(event.detail.level);
    const level = event.detail.level;
    if (level === 'first') {
      moveCardToFirstLevel(currentCard);
    } else if (level === 'next') {
      moveCardToNextLevel(currentCard);
    } else {
      console.log('error');
    }
  }

  onMount(() => {
    filteredCards = $projects.projects[0].cards;
    currentCard = filteredCards[0];
  });

  const selectCard = (index) => {
    currentIndex = index;
    currentCard = filteredCards[currentIndex];
  };

  const moveCardToNextLevel = () => {
    console.log('moving card to next level');
    let realIndex = $projects.projects[0].cards.findIndex(
      (element) => element == filteredCards[currentIndex]
    );
    let level = $projects.projects[0].cards[realIndex].level;
    console.log(level);
    if (level >= 5) {
      console.log(currentIndex);
      if (currentIndex >= 0 || currentIndex <= 3) {
        selectCard(++currentIndex);
      } else {
        selectCard(currentIndex);
      }
      return;
    }
    level = $projects.projects[0].cards[realIndex].level + 1;
    $projects.projects[0].cards[realIndex].level = level;
    $projects.projects[0].cards[realIndex].level_name = levelLabels[level].name;
    $projects.projects[0].cards[realIndex].lastReview = 'today';

    console.log(currentIndex);
    if (currentIndex >= 0 || currentIndex <= 3) {
      selectCard(++currentIndex);
    } else {
      selectCard(currentIndex);
    }
  };

  const moveCardToFirstLevel = () => {
    console.log(filteredCards[currentIndex]);
    let realIndex = $projects.projects[0].cards.findIndex(
      (element) => element == filteredCards[currentIndex]
    );
    $projects.projects[0].cards[realIndex].level = 1;
    $projects.projects[0].cards[realIndex].level_name = levelLabels[1].name;
    $projects.projects[0].cards[realIndex].lastReview = null;

    selectCard(++currentIndex);
  };
</script>

<div class="relative h-screen overflow-hidden bg-gray-300 flex flex-col">
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
          <div class="bg-white pt-5 pb-6 shadow">
            <div class="px-4 sm:flex sm:justify-between sm:items-baseline sm:px-6 lg:px-8">
              <div class="sm:w-0 sm:flex-1">
                <h1 id="message-heading" class="text-lg font-medium text-gray-900">
                  {#if currentCard}
                    Review: <span class="text-gray-600">{currentCard.title}</span>
                  {/if}
                </h1>
                <!-- <p class="mt-1 text-sm text-gray-500 truncate">joearmstrong@example.com</p> -->
              </div>

              <div
                class="mt-4 flex items-center justify-between sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:justify-start"
              >
                <span
                  class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-gray-200 text-gray-600"
                >
                  Review Today
                </span>
                <div class="ml-3 relative inline-block text-left">
                  <div>
                    <button
                      type="button"
                      class="-my-2 p-2 rounded-full bg-white flex items-center text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
                      id="menu-3-button"
                      aria-expanded="false"
                      aria-haspopup="true"
                    >
                      <span class="sr-only">Open options</span>
                      <!-- Heroicon name: solid/dots-vertical -->
                      <svg
                        class="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
                        />
                      </svg>
                    </button>
                  </div>

                  <!--
					  Dropdown menu, show/hide based on menu state.
  
					  Entering: "transition ease-out duration-100"
						From: "transform opacity-0 scale-95"
						To: "transform opacity-100 scale-100"
					  Leaving: "transition ease-in duration-75"
						From: "transform opacity-100 scale-100"
						To: "transform opacity-0 scale-95"
					-->
                  <div
                    class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-3-button"
                    tabindex="-1"
                  >
                    <div class="py-1 hidden" role="none">
                      <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
                      <button
                        type="button"
                        class="text-gray-700 w-full flex justify-between px-4 py-2 text-sm"
                        role="menuitem"
                        tabindex="-1"
                        id="menu-3-item-0"
                      >
                        <span>Copy email address</span>
                      </button>
                      <a
                        href="/"
                        class="text-gray-700 flex justify-between px-4 py-2 text-sm"
                        role="menuitem"
                        tabindex="-1"
                        id="menu-3-item-1"
                      >
                        <span>Previous conversations</span>
                      </a>
                      <a
                        href="/"
                        class="text-gray-700 flex justify-between px-4 py-2 text-sm"
                        role="menuitem"
                        tabindex="-1"
                        id="menu-3-item-2"
                      >
                        <span>View original</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Selected Card-->
          <ul role="list" class="py-4 space-y-2 sm:px-6 sm:space-y-4 lg:px-8">
            {#if selectedCard}
              {#key selectedCard.embed_slug}
                <li in:fly={{ delay: 250, y: 10 }} out:fly={{ duration: 150, y: -10 }}>
                  <Card {selectedCard} />
                  <div class="bg-yellow-50 px-4 py-6 mt-2 shadow sm:rounded-lg sm:px-6">
                    <div class="sm:flex sm:justify-between sm:items-baseline">
                      <h3 class="text-base font-medium">
                        <span class="text-gray-900">Note</span>
                        <span class="text-gray-600">to self</span>
                      </h3>
                      <p class="mt-1 text-sm text-gray-600 whitespace-nowrap sm:mt-0 sm:ml-3">
                        <time datetime="2021-01-28T19:24">Last review 9/13/21</time>
                      </p>
                    </div>
                    <div class="mt-4 space-y-6 text-sm text-gray-600">
                      <p>This can be used to pass in arguments into a function</p>
                    </div>
                  </div>
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
                <h2 class="text-lg font-medium text-gray-900">To Review</h2>
                <p class="text-sm font-medium text-gray-500">levels five and two</p>
              </div>
            </div>
            <!-- <div
              class="border-t border-b border-gray-200 bg-gray-50 px-6 py-2 text-sm font-medium text-gray-500"
            >
              Sorted by level
            </div> -->
          </div>
          <nav aria-label="Message list" class="min-h-0 flex-1 overflow-y-auto">
            <ul role="list" class="border-b border-gray-200 divide-y divide-gray-200">
              <!-- {#await $projects}
				  ...pending
				{:then data} -->

              {#each filteredCards as card, i}
                <!-- {JSON.stringify(filteredCards)} -->
                <li
                  class="relative bg-white py-5 px-6 hover:bg-gray-100 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600 {currentCard ===
                  card
                    ? 'bg-gray-100 hover:bg-gray-100'
                    : ''}
						"
                  on:click={() => selectCard(i)}
                >
                  <div class="flex justify-between space-x-3 items-start">
                    <div class="min-w-0 flex-1">
                      <span class="absolute inset-0" aria-hidden="true" />
                      <p class="text-sm font-medium text-gray-900 truncate flex">
                        {card.title}
                      </p>
                      <p class="text-sm text-gray-500 truncate">Javascript</p>
                    </div>

                    <span
                      class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-gray-600"
                    >
                      <svg
                        class="-ml-0.5 mr-1.5 h-2 w-2 {levelLabels[card.level].color}"
                        fill="currentColor"
                        viewBox="0 0 8 8"
                      >
                        <circle cx="4" cy="4" r="3" />
                      </svg>
                      {card.level_name}
                    </span>
                  </div>
                  <div class="mt-1">
                    <p class="line-clamp-2 text-sm text-gray-600">
                      {card.question}
                    </p>
                  </div>
                </li>
              {/each}
              <!-- {/await} -->
            </ul>
          </nav>
        </div>
      </aside>
    </main>
  </div>
</div>
