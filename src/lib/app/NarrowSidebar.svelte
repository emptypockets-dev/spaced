<script>
  import { getStores, navigating, page, session } from '$app/stores';
</script>

<!-- Narrow sidebar-->
<nav
  aria-label="Sidebar"
  class="hidden lg:block lg:flex-shrink-0 lg:bg-gray-800 lg:overflow-y-auto"
>
  <div class="relative w-20 flex flex-col p-3 space-y-3">
    <a
      href="/levels"
      class="text-gray-400 flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg"
      class:bg-gray-900={$page.path === '/levels'}
      class:text-white={$page.path === '/levels'}
    >
      <span class="sr-only">Open</span>
      <!-- Heroicon name: outline/inbox -->
      <svg
        class="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
        />
      </svg>
    </a>

    <a
      href="/collections"
      class="text-gray-400 hover:bg-gray-700 flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg"
      class:bg-gray-900={$page.path === '/collections'}
      class:text-white={$page.path === '/collections'}
    >
      <span class="sr-only">Collection</span>
      <!-- Heroicon name: outline/archive -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    </a>

    <a
      href="/archive"
      class="text-gray-400 hover:bg-gray-700 flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg"
    >
      <span class="sr-only">Archive</span>
      <!-- Heroicon name: outline/archive -->
      <svg
        class="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
        />
      </svg>
    </a>

    <a
      href="/"
      class="text-gray-400 hover:bg-gray-700 flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg"
    >
      <span class="sr-only">Drafts</span>
      <!-- Heroicon name: outline/pencil-alt -->
      <svg
        class="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
        />
      </svg>
    </a>
  </div>
</nav>
