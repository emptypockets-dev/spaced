<script>
  export let selectedCard;

  const levelLabels = {
    1: { name: 'level one', color: 'bg-gray-400' },
    2: { name: 'level two', color: 'bg-red-400' },
    3: { name: 'level three', color: 'bg-yellow-400' },
    4: { name: 'level four', color: 'bg-blue-400' },
    5: { name: 'level five', color: 'bg-purple-400' }
  };

  // console.log(selectedCard);

  const handleClick = () => {
    console.log('click');
    // selectedCard.level += 1;
  };
</script>

<div class="sm:flex sm:justify-between sm:items-center">
  <h3 class="text-base font-medium">
    <span class="text-gray-900">{selectedCard.title}</span>
    <span class="text-gray-600">in javascript</span>
  </h3>
  <p class="flex-shrink-0 whitespace-nowrap text-sm text-gray-500 flex items-start">
    <span
      class="block w-2 h-2 rounded-full relative top-1.5 -left-1.5 {levelLabels[selectedCard.level]
        .color}"
    />
    {selectedCard.level_name}
  </p>
</div>
<div class="mt-4 space-y-6">
  <iframe
    height="400"
    style="width: 100%;"
    scrolling="no"
    title=""
    src={`https://codepen.io/emptypockets-dev/embed/${selectedCard.embed_slug}?default-tab=js&editable=true&theme-id=dark`}
    frameborder="no"
    loading="lazy"
    allowtransparency="true"
    allowfullscreen="true"
  />
</div>
