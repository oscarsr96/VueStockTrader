<template>
	<nav class="navbar navbar-default">
	  <div class="container-fluid">
	  	<div class="navbar-header">
	  		<router-link to="/" class="navbar-brand">Stock Trader</router-link>
	  	</div>
		  <div class="collapse navbar-collapse">
		    <ul class="nav navbar-nav">
		    	<router-link to="/portfolio" activeClass="active" tag="li"><a>Portfolio</a></router-link>
		    	<router-link to="/stocks" activeClass="active" tag="li"><a>Stocks</a></router-link>
		    </ul>
	    	<strong class="navbar-text navbar-right"> Funds: {{ funds | currency }} </strong>
		    <ul class="nav navbar-nav navbar-right">
		    	<li><a @click="endDay" href="#"> End Day </a></li>
		    	<li 
		    	@click="isDropdownOpen = !isDropdownOpen"
		    	class="dropdown" :class="{open: isDropdownOpen}">
		    		<a href="#"
		    		   class="dropdown-toggle"
		    		   data-toggle="dropdown"
		    		   role="button"
		    		   aria-haspopup="true"
		    		   aria-expanded="false"

		    		>Save & Load <span class="caret"></span></a>
		    		<ul class="dropdown-menu">
		    			<li><a 
		    				@click="saveData"
		    				href="#"> Save data </a></li>
		    			<li><a 
		    				@click="loadData"
		    				href="#"> Load data </a></li>
		    		</ul>
		    	</li>
		    	
		    </ul>
		  </div>
	    </div>
	</nav>
</template> 

<script>
	import {mapActions} from 'vuex';
	import {mapGetters} from 'vuex';

	export default {
		data() {
			return {
				isDropdownOpen: false,
			}
		},
		computed: {
			...mapGetters(['funds'])
		},
		methods: {
			...mapActions({
				randomizeStocks: 'randomizeStocks',
				fetchData: 'loadData'
			}),
			endDay(){
				this.randomizeStocks();
			},
			saveData(){
				const data = {
					funds: this.$store.getters.funds, 
					stockPortfolio: this.$store.getters.stockPortfolio, 
					stocks: this.$store.getters.stocks
				};
				this.$http.put('data.json', data)
			},
			loadData(){
				this.fetchData();
			}
		}
	}
</script>