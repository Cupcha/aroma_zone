<script>
	import small_logo from '$lib/images/small_logo_2.png';
	import big_logo from '$lib/images/big_logo.png';
	import search from '$lib/images/search.png';
	import account from '$lib/images/account.png';
	import cart from '$lib/images/cart.png';
	import Nutrition10 from '$lib/images/Nutrition10.png';
	import newsletter from '$lib/images/newsletter.png';
	import Headerpage from '../Headerpage.svelte';
	import Footerpage from '../Footerpage.svelte';
</script>

	

<svelte:head>
	<title>nutrition10</title>
	<meta name="liste_touslesproduits" content="List products shop Aroma-zone IE=edge width=device-width initial-scale=1.0">
	<script src="https://cdn.tailwindcss.com"></script>

</svelte:head>



<body class="home font-karla">
	<Headerpage></Headerpage>

	<div id="container" class="bg-gray-200">
		<br>
									<br>
									<br>
									<br>
		<product-facet>
			
			<h1 class="font-bold text-center text-4xl py-7 ">NUTRITION</h1>
			
			<div id="facet-main">
				<div id="nb-products" class="text-center text-xl">
					<span>Poudre de pulpe de fruit de baobab bio</span>
				</div>
			</div>
			
			<product-list class="flex">
				
				<div class="max-w-2xl mx-auto px-4 py-8 lg:max-w-7xl grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 md:h-auto object-center">
					

					<div class="bg-white shadow-lg rounded-lg flex justify-center items-center">
						<a href=" ">
							<img src={Nutrition10} alt="Nutrition10" class="rounded-t-lg center">
						</a>
						<div class="p-4">
						
						</div>
					</div>

					<div class="bg-white shadow-lg rounded-lg">
						<div>

						</div>
						<div class="p-4">
							<div class="flex mb-5">
								<a href=" ">
									<h1 class="text-l text-gray-900 font-bold text-center text-xl">
									<br>
									<br>
									<br>	
									Poudre de pulpe de fruit de baobab bio
									</h1>
									<br>


									<h4 class="text-l text-gray-800  text-justify ">
										Trésor venu d’Afrique, la pulpe de fruit de Baobab est un super aliment riche en vitamine C et en calcium et connu pour ses nombreux bienfaits. Délicieuse en cuisine, cette poudre est une source importante de nutriments, vitamines, minéraux et antioxydants. Son goût naturellement fruité et acidulé est apprécié pour préparer des boissons rafraîchissantes ou agrémenter yaourts et smoothies. Une « superfood » idéale à consommer dans le cadre d’une alimentation saine et variée pour prévenir les carences et retrouver tonus et vitalité !</h4>
								</a>
								<p class="ml-auto text-l font-medium text-gray-800">8,90&euro;</p>
							</div>
							<br>
									<br>
									<br>
									<br>
							<a href=" " class="inline-flex items-center justify-between px-5 py-1 shadow-sm font-medium rounded-md bg-stone-400">
								<span class="text-white text-lg">
									
									Acheter
								</span>
								<img src={cart} alt="cart" class="ml-4 h-6 w-6">
							</a>
						</div>
					</div>

				</div>
			
			</product-list>
		</product-facet>
		<div class="max-w-2xl mx-auto px-4 py-8 lg:max-w-7xl grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 md:h-auto">
					
			<div class="bg-gray-200 shadow-lg rounded-lg ">
				<h5>
					Composition : 
					<br>
					<li>100% poudre de pulpe de fruit de Baobab (Adansonia digitata) biologique</li>
					
				
				</h5>
				<div class="p-4">
				
				</div>
			</div>


		
	</div>
	<Footerpage></Footerpage>
</body>