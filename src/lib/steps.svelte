<!-- This example requires Tailwind CSS v2.0+ -->
<nav class="flex" aria-label="Breadcrumb">
	<ol role="list" class="flex items-center space-x-4">
		<li>
			<div>
				<a href="#" class="text-gray-400 hover:text-gray-500">
					<!-- Heroicon name: solid/home -->
					<svg
						class="flex-shrink-0 h-5 w-5"
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
							d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
					<span class="sr-only">Home</span>
				</a>
			</div>
		</li>

		<li>
			<div class="flex items-center">
				<svg
					class="flex-shrink-0 h-5 w-5 text-gray-300"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 20 20"
					aria-hidden="true"
				>
					<path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
				</svg>
				<a href="#" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">Level Five</a
				>
			</div>
		</li>

		<li>
			<div class="flex items-center">
				<svg
					class="flex-shrink-0 h-5 w-5 text-gray-300"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 20 20"
					aria-hidden="true"
				>
					<path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
				</svg>
				<a
					href="#"
					class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
					aria-current="page">Level Two</a
				>
			</div>
		</li>
	</ol>
</nav>
