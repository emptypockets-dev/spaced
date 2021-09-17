<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  function moveToFirstLevel() {
    dispatch('message', {
      level: 'first'
    });
  }
  function moveToNextLevel() {
    dispatch('message', {
      level: 'next'
    });
  }
</script>

<div class="flex-shrink-0 bg-white border-b border-gray-200">
  <div class="h-16 flex flex-col justify-center">
    <div class="px-4 sm:px-6 lg:px-8">
      <div class="py-3 flex justify-between">
        <!-- Left buttons -->
        <div>
          <span class="relative z-0 inline-flex shadow-sm rounded-md sm:shadow-none sm:space-x-3">
            <span class="hidden lg:flex space-x-3">
              <button
                type="button"
                class="hidden sm:inline-flex -ml-px relative items-center px-4 py-2 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-900 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
              >
                <!-- Heroicon name: solid/archive -->
                <svg
                  class="mr-2.5 h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                  <path
                    fill-rule="evenodd"
                    d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>Archive</span>
              </button>

              <button
                type="button"
                class="hidden sm:inline-flex -ml-px relative items-center px-4 py-2 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-900 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
              >
                <!-- Heroicon name: solid/folder-download -->
                <svg
                  class="mr-2.5 h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                  <path
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 9v4m0 0l-2-2m2 2l2-2"
                  />
                </svg>
                <span>Move</span>
              </button>

              <button
                type="button"
                class="hidden sm:inline-flex -ml-px relative items-center px-4 py-2 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-900 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
              >
                <!-- Heroicon name: solid/folder-download -->
                <svg
                  class="mr-2.5 h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                  />
                </svg>
                <span>Note</span>
              </button>
            </span>

            <span class="-ml-px relative block sm:shadow-sm lg:hidden">
              <div>
                <button
                  type="button"
                  class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-900 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600 sm:rounded-md sm:px-3"
                  id="menu-2-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span class="sr-only sm:hidden">More</span>
                  <span class="hidden sm:inline">More</span>
                  <!-- Heroicon name: solid/chevron-down -->
                  <svg
                    class="h-5 w-5 text-gray-400 sm:ml-2 sm:-mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
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
                class="origin-top-right absolute right-0 mt-2 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-2-button"
                tabindex="-1"
              >
                <div class="py-1" role="none">
                  <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
                  <a
                    href="/"
                    class="text-gray-700 block sm:hidden px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-2-item-0"
                  >
                    Note
                  </a>
                  <a
                    href="/"
                    class="text-gray-700 block sm:hidden px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-2-item-1"
                  >
                    Assign
                  </a>
                  <a
                    href="/"
                    class="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-2-item-2"
                  >
                    Archive
                  </a>
                  <a
                    href="/"
                    class="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-2-item-3"
                  >
                    Move
                  </a>
                </div>
              </div>
            </span>
          </span>
        </div>

        <!-- Right buttons -->
        <nav aria-label="Pagination">
          <span class="relative z-0 inline-flex shadow-sm rounded-md">
            <a
              on:click|preventDefault={moveToFirstLevel}
              href="/"
              class="relative inline-flex items-center pl-3.5 pr-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
            >
              <!-- Heroicon name: solid/chevron-down -->

              <svg
                class="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>&nbsp;move to level one</span>
            </a>
            <a
              on:click|preventDefault={moveToNextLevel}
              href="/"
              class="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
            >
              <!-- Heroicon name: solid/chevron-up -->
              <span>move to next level&nbsp;</span>
              <svg
                class="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </span>
        </nav>
      </div>
    </div>
  </div>
</div>
