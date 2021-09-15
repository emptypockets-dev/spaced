<script>
  import Header from '$lib/header.svelte';
  import Footer from '$lib/footer.svelte';
  import '../css/tailwind.css';
</script>

<Header />

<main>
  <slot />
</main>

<Footer />
