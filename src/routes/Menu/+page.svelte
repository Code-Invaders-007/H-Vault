<script>
	import { Card, Button, Toggle } from 'flowbite-svelte';
</script>

<div class="mainMenu">
	<Card>
		<h5 class="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
			Register a New Patient
		</h5>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">Description</p>
		<Button color="primary">
			<a href="/Register">Register</a>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-5 h-5 ml-2"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
				/></svg
			>
		</Button>
	</Card>
	<br />
	<br />

	<Card>
		<h5 class="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
			Diagnose a Patient
		</h5>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">Description</p>
		<Button color="primary">
			Read more <svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-5 h-5 ml-2"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
				/></svg
			>
		</Button>
	</Card>
	<br />
	<br />
	<Card>
		<h5 class="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
			Approve a Claim request
		</h5>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">Description</p>
		<Button color="primary">
			Read more <svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-5 h-5 ml-2"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
				/></svg
			>
		</Button>
	</Card>
</div>

<style>
	.mainMenu {
		display: flex;
		flex-direction: row;
		justify-content: space-around;

		margin-top: 100px;
		margin-left: 100px;
		margin-right: 100px;
	}

	@media (max-width: 768px) {
		.mainMenu {
			flex-direction: column;
		}
	}
</style>
