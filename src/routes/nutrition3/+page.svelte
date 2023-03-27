<script>
	import cart from '$lib/images/cart.png';
	import Nutrition4 from '$lib/images/Nutrition4.png';
	import Headerpage from '../Headerpage.svelte';
	import Footerpage from '../Footerpage.svelte';
</script>

	

<svelte:head>
	<title>nutrition4</title>
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
					<span>Charbon actif végétal en gélules - complément alimentaire 120 gélules</span>
				</div>
			</div>
			
			<product-list class="flex">
				
				<div class="max-w-2xl mx-auto px-4 py-8 lg:max-w-7xl grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 md:h-auto object-center">
					
					<div class="bg-white shadow-lg rounded-lg flex justify-center items-center">
						<a href=" ">
							<img src={Nutrition4} alt="Nutrition4" class="rounded-t-lg center">
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
										
									Charbon actif végétal en gélules - complément alimentaire 120 gélules
									</h1>
									<br>

									<h4 class="text-l text-gray-800  text-justify ">
										Certifié BIO et produit de façon éco-responsable, ce Charbon actif végétal en gélules est issu de forêts de châtaigniers françaises gérées durablement et activé à la vapeur d’eau sans agent chimique. Grâce à son ultra-microporosité très développée et à sa surface d’absorption élevée, ce Charbon végétal activé de châtaignier est particulièrement adapté pour absorber les gaz intestinaux. Allié du confort digestif et réputé pour ses vertus détoxifiantes, ce Charbon actif végétal 100% français s’utilise comme complément alimentaire naturel pour réduire les ballonnements et flatulences après les repas.									</h4>
								</a>
								<p class="ml-auto text-l font-medium text-gray-800">9,90&euro;</p>
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
					<li> charbon actif végétal de Châtaignier*, envelope de la gélule: hydroxypropylméthylcellulose</li>
					
				
				</h5>
				<div class="p-4">
				
				</div>
			</div>


		
	</div>

</body>
<Footerpage></Footerpage>