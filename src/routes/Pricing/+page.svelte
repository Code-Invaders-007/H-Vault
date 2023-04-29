<script>
	import PriceCard from '../../lib/priceCard.svelte';
</script>

<div class="pricing">
	<PriceCard
		plan_name={'Standard'}
		price={150}
		feature_1={'20GB Storage'}
		f1={true}
		f2={true}
		feature_2={'Quick Support'}
	/>
	<PriceCard
		plan_name={'Premium'}
		price={499}
		f1={true}
		feature_1={'80GB Storage'}
		f2={true}
		feature_2={'Premium Support'}
		f3={true}
		feature_3={'Free Diet Plans '}
	/>
</div>

<style>
	.pricing {
		display: flex;
		justify-content: space-around;
	}

	@media (max-width: 768px) {
		.pricing {
			flex-direction: column;
		}
	}
</style>
