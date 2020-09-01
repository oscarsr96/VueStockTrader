<template>
	<div>
		<app-stock v-for="stock in stocks"></app-stock>
	</div>
</template>

<script>
	import Stock from './Stock.vue';
	export default {
		data(){
			return {
				stocks: [
					{id: 1, name: "BW", price: 110},
					{id: 2, name: "FB", price: 120},
					{id: 3, name: "TW", price: 95},
					{id: 4, name: "AZ", price: 100},

				]
			}
		},
		components: {
			appStock: Stock
		}
	}
</script>