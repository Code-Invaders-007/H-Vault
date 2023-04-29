<script>
	import { Card, Button } from 'flowbite-svelte';
	export let f1 = false,
		f2 = false,
		f3 = false;
	export let price, feature_1, feature_2, feature_3, plan_name;
</script>

<Card padding="xl">
	<h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">{plan_name}</h5>
	<div class="flex items-baseline text-gray-900 dark:text-white">
		<span class="text-3xl font-semibold">₹</span>
		<span class="text-5xl font-extrabold tracking-tight">{price}</span>
		<span class="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
	</div>
	<!-- List -->

	<ul class="my-7 space-y-4">
		{#if f1}
			<li class="flex space-x-2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6 text-blue-600 dark:text-blue-500"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/></svg
				>

				<span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
					>{feature_1}</span
				>
			</li>
		{/if}

		{#if f2}
			<li class="flex space-x-2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6 text-blue-600 dark:text-blue-500"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/></svg
				>
				<span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
					>{feature_2}</span
				>
			</li>
		{/if}

		{#if f3}
			<li class="flex space-x-2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6 text-blue-600 dark:text-blue-500"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/></svg
				>
				<span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
					>{feature_3}</span
				>
			</li>
		{/if}
	</ul>
	<Button class="w-full" color="primary">Choose plan</Button>
</Card>
