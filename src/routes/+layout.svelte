<script>
	import '../app.postcss';
	import { DarkMode } from 'flowbite-svelte';

	import NavBar from '$lib/navBar.svelte';
	import Footer from '$lib/footer.svelte';
</script>

<NavBar />

<slot />

<Footer />
