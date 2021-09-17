<script>
  import { projects } from '../../stores/data';
  import Card from '$lib/app/Card.svelte';
  import ListAll from '$lib/app/ListAll.svelte';
  import NarrowSidebar from '$lib/app/NarrowSidebar.svelte';
  import Toolbar from '$lib/app/Toolbar.svelte';
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';
  import { levelLabels } from '../../lib/app/app-utils';
  //   export let cards;
  let filteredCards = [];
  let selectedCard;
  let currentCard;
  let currentIndex = 0;
  let activeFilters = [2, 5];

  $: {
    selectedCard = currentCard;
    filteredCards = $projects.projects[0].cards.filter((card) => card.level >= 0);
  }
  //   $: {
  //     selectedCard = currentCard;
  //     filteredCards = $projects.projects[0].cards.filter(
  //       (card) => card.level === 2 || card.level === 5
  //     );
  //   }

  //   async function doPost() {
  //     const res = await fetch('levels.json', {
  //       method: 'POST',
  //       body: JSON.stringify(cards)
  //     });
  //     return false;
  //   }

  function handleSelectCard(event) {
    selectCard(event.detail.index);
  }

  function handleMessage(event) {
    console.log(event.detail.level);
    const level = event.detail.level;
    if (level === 'first') {
      moveCardToFirstLevel(currentCard);
      //   currentIndex = ++currentIndex;
      //   selectCard(currentIndex);
      //   doPost();
    } else if (level === 'next') {
      moveCardToNextLevel(currentCard);
      //   currentIndex = ++currentIndex;
      //   if (activeFilters.includes(currentIndex)) {
      //     currentIndex = --currentIndex;
      //     selectCard(currentIndex);
      //   } else {
      //     selectCard(currentIndex);
      //   }

      //   doPost();
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

    // card.level += 1;
    // card.level_name += 1;
    // currentCard = reviewCards[card.level];
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

    // card.level = 1;
    // card.level_name = 'one';
    // currentCard = reviewCards[++card.level];
    // doPost(reviewCards);
  };
</script>

<div class="relative h-screen overflow-hidden bg-gray-400 flex flex-col">
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
                  in:fly={{ delay: 250, y: 10 }}
                  out:fly={{ duration: 150, y: -10 }}
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
                <h2 class="text-lg font-medium text-gray-900">Javascript Collection</h2>
                <p class="text-sm font-medium text-gray-500">204 cards</p>
              </div>
            </div>
            <!-- <div
              class="border-t border-b border-gray-200 bg-gray-50 px-6 py-2 text-sm font-medium text-gray-500"
            >
              Sorted by level
            </div> -->
            <!-- <div
              class="border-t border-b border-gray-200 bg-gray-50 px-6 py-2 text-sm font-medium text-gray-500"
            >
              Sorted by level
            </div> -->
          </div>

          <ListAll {filteredCards} {currentCard} on:selectCard={handleSelectCard} />
        </div>
      </aside>
    </main>
  </div>
</div>
