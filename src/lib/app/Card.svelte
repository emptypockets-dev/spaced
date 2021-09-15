<script>
  export let card;

  const handleClick = () => {
    console.log('click');
    card.level += 1;
  };
</script>

<!-- This example requires Tailwind CSS v2.0+ -->
<div
  class="bg-white px-4 py-5 border-b rounded-xl border-gray-200 sm:px-6 max-w-4xl mb-10 last:mb-0"
>
  <h3 on:click={handleClick} class="text-lg leading-6 font-medium text-gray-900">
    {card.title} - {card.level}
  </h3>

  <iframe
    src={`https://codesandbox.io/embed/${card.embed_slug}?expanddevtools=1&fontsize=14&hidenavigation=1&theme=dark`}
    style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
    title="Object Destructuring"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
  />
</div>
