<script>
  export let selectedCard;
  import { levelLabels } from './app-utils';

  // console.log(selectedCard);

  const handleClick = () => {
    console.log('click');
    // selectedCard.level += 1;
  };
</script>

<div class="sm:flex sm:justify-between sm:items-center">
  <!-- <h3 class="text-base font-medium">
    <span class="text-white">Scratchpad</span>
  </h3> -->
  <p class="flex-shrink-0 whitespace-nowrap text-sm text-gray-500 flex items-start">
    <!-- <span
      class="block w-2 h-2 rounded-full relative top-1.5 -left-1.5 {levelLabels[selectedCard.level]
        .color}"
    />
    {selectedCard.level_name} -->
    <!-- <span
      class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium {levelLabels[
        selectedCard.level
      ].bg} text-gray-600"
    >
      <svg
        class="-ml-0.5 mr-1.5 h-2 w-2 {levelLabels[selectedCard.level].color}"
        fill="currentColor"
        viewBox="0 0 8 8"
      >
        <circle cx="4" cy="4" r="3" />
      </svg>
      {selectedCard.level_name}
    </span> -->
  </p>
</div>
<div class="bg-white px-6 py-8 shadow sm:rounded-lg" style="background-color: #3d3d3e;">
  <!-- Codepen embed -->
  <iframe
    src="https://codesandbox.io/embed/${selectedCard.embed_slug}?autoresize=1&expanddevtools=1&fontsize=14&hidenavigation=1&theme=dark"
    style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
    title="Object Destructuring"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
  />
  <!-- <iframe
    height="420"
    style="width: 100%;"
    scrolling="no"
    title=""
    src={`https://codepen.io/emptypockets-dev/embed/?default-tab=js&editable=true`}
    frameborder="no"
    loading="lazy"
    allowtransparency="true"
    allowfullscreen="true"
  >
    See the Pen <a href="https://codepen.io/emptypockets-dev/pen/MWoQKQx" /> by Andrey Kondratyuk (<a
      href="https://codepen.io/emptypockets-dev">@emptypockets-dev</a
    >) on <a href="https://codepen.io">CodePen</a>.
  </iframe> -->
</div>
