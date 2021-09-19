<script>
  import { projects } from '../../stores/data';
  import NarrowSidebar from '$lib/app/NarrowSidebar.svelte';
  import Toolbar from '$lib/app/Toolbar.svelte';
  import { onMount } from 'svelte';
  import { levelLabels } from '../../lib/app/app-utils';

  let message = '';
  let error = '';

  let question = 'Question title';
  let answer = 'Answer title';
  let code = 'let code = "example";';

  const createNewCard = ({ question, answer, sandboxId }) => {
    console.log(question, answer, sandboxId);
    let embed = sandboxId.sandbox_id;
    console.log(embed);
    const card = {
      title: question,
      embed_slug: embed,
      answer: answer,
      level: 1,
      level_name: 'level one',
      question: question,
      lastReview: null
    };
    // console.log('card', card);
    $projects.projects[0].cards.unshift(card);
    $projects = $projects;
    console.log($projects);
  };

  const submitForm = async () => {
    try {
      const submit = await fetch('/api/sandbox', {
        method: 'POST',
        body: JSON.stringify({
          question,
          answer,
          code
        })
      });
      const data = await submit.json();
      console.log('drafts', data);
      // console.log('card', card.sandboxId.sandbox_id);
      createNewCard(data);
    } catch (err) {
      error = err;
    }
  };
</script>

<div class="relative h-screen overflow-hidden bg-gray-300 flex flex-col">
  <div class="min-h-0 flex-1 flex overflow-hidden">
    <NarrowSidebar />

    <div class="mt-10 sm:mt-0 p-10">
      <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="md:col-span-1">
          <div class="px-4 sm:px-0">
            <h3 class="text-lg font-medium leading-6 text-gray-900">Create a card</h3>
            <p class="mt-1 text-sm text-gray-600">Copy and paste your code into the JSON box</p>
            {message}
            {#if message}
              <p>{JSON.stringify(message)}</p>
            {/if}
            {#if error}
              <p>{error}</p>
            {/if}
          </div>
        </div>
        <div class="mt-5 md:mt-0 md:col-span-2">
          <form on:submit|preventDefault={submitForm}>
            <div class="shadow overflow-hidden sm:rounded-md">
              <div class="px-4 py-5 bg-white sm:p-6">
                <div class="grid grid-cols-6 gap-6">
                  <div class="col-span-12 sm:col-span-12">
                    <label for="question" class="block text-sm font-medium text-gray-700"
                      >Question</label
                    >
                    <input
                      bind:value={question}
                      type="text"
                      name="main-concept"
                      id="main-concept"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <div class="col-span-12 sm:col-span-12">
                    <label for="answer" class="block text-sm font-medium text-gray-700"
                      >Answer</label
                    >
                    <input
                      bind:value={answer}
                      type="text"
                      name="main-concept"
                      id="main-concept"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div class="col-span-12 sm:col-span-12">
                    <label for="code-practice" class="block text-sm font-medium text-gray-700"
                      >Code Practice</label
                    >
                    <input
                      bind:value={code}
                      type="text"
                      name="code-practice"
                      id="main-concept"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
              </div>
              <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  type="submit"
                  class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Create card
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- <div class="mt-10 sm:mt-0">
        <div class="md:grid md:grid-cols-3 md:gap-6">
          <div class="md:col-span-1">
            <div class="px-4 sm:px-0">
              <h3 class="text-lg font-medium leading-6 text-gray-900">Create your own card</h3>
              <p class="mt-1 text-sm text-gray-600">
                We'll have to figure out where to add some code. Probably need an editor for your
                editor.
              </p>
            </div>
          </div>
          <div class="mt-5 md:mt-0 md:col-span-2">
            {JSON.stringify(message)}
            {error}

            <form on:submit|preventDefault={submitForm}>
              <div class="shadow overflow-hidden sm:rounded-md">
                <div class="px-4 py-5 bg-white sm:p-6">
                  <div class="grid grid-cols-6 gap-6">
                    <div class="col-span-6 sm:col-span-3">
                      <label for="name" class="block text-sm font-medium text-gray-700"
                        >First name</label
                      >
                      <input
                        bind:value={name}
                        type="text"
                        name="name"
                        id="first-name"
                        autocomplete="given-name"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                      <button
                        type="submit"
                        class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div> -->
  </div>
</div>
