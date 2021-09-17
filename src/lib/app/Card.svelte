<script>
  export let selectedCard;

  // console.log(selectedCard);

  const handleClick = () => {
    console.log('click');
    // selectedCard.level += 1;
  };
</script>

<div class="sm:flex sm:justify-between sm:items-baseline">
  <h3 class="text-base font-medium">
    <span class="text-gray-900">{selectedCard.title}</span>
    <span class="text-gray-600">in javascript</span>
  </h3>
  <p class="mt-1 text-sm text-gray-600 whitespace-nowrap sm:mt-0 sm:ml-3">
    <time datetime="2021-01-27T16:35">{selectedCard.level_name}</time>
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
