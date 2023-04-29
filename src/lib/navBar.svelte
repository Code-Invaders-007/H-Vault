<script>
	import Icon from 'svelte-awesome';
	import stethoscope from 'svelte-awesome/icons/stethoscope';
	import { DarkMode } from 'flowbite-svelte';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
</script>

<Navbar let:hidden let:toggle>
	<NavBrand href="/">
		<Icon data={stethoscope} scale={2} style="color :orange ;margin-right:9px;" />

		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
			H-Vault
		</span>
	</NavBrand>
	<NavHamburger on:click={toggle} />
	<NavUl {hidden}>
		<NavLi href="/" active={true}>Home</NavLi>
		<NavLi href="/About">About</NavLi>
		<NavLi href="/Pricing">Pricing</NavLi>
		<NavLi href="/Login">Login</NavLi>
		<NavLi href="/ContactUs">Contact</NavLi>
		<NavLi><DarkMode /></NavLi>
	</NavUl>
</Navbar>
