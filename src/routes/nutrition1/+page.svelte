<script>
	import small_logo from '$lib/images/small_logo_2.png';
	import big_logo from '$lib/images/big_logo.png';
	import search from '$lib/images/search.png';
	import account from '$lib/images/account.png';
	import cart from '$lib/images/cart.png';
	import Nutrition2 from '$lib/images/Nutrition2.png';
	import newsletter from '$lib/images/newsletter.png';
	import Headerpage from '../Headerpage.svelte';
	import Footerpage from '../Footerpage.svelte';
</script>

	

<svelte:head>
	<title>nutrtion2</title>
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
					<span>Huile CBD 12%</span>
				</div>
			</div>
			
			<product-list class="flex">
				
				<div class="max-w-2xl mx-auto px-4 py-8 lg:max-w-7xl grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 md:h-auto object-center">
					
					<div class="bg-white shadow-lg rounded-lg flex justify-center items-center">
						<a href=" ">
							<img src={Nutrition2} alt="Nutrition2" class="rounded-t-lg center">
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
										
									Huile CBD 12%
									</h1>
									<br>

									<h4 class="text-l text-gray-800  text-justify">
										100% naturelle, cette huile de CBD à spectre large contient 12% de Cannabidiol ou CBD, sur support d'huile de Chanvre BIO d'origine France. Grâce à sa teneur optimale en CBD, sans ajout d'isolat, cette huile est idéale pour découvrir les propriétés du cannabidiol en toute sérénité. Stress, troubles du sommeil, douleurs, récupération musculaire…l’huile de CBD est appréciée par de nombreux utilisateurs pour un effet de bien-être général et pour aider à apaiser les maux du quotidien.
										Notre CBD est extrait des fleurs et feuilles de chanvre, selon un savoir-faire suisse qui permet d'obtenir un extrait "à spectre large" ou "broad spectrum", c'est-à-dire un extrait qui contient une large variété de cannabinoïdes aux multiples bienfaits, mais quasiment dépourvu de THC. Formulée sur une huile de chanvre BIO vierge française, cette huile de CBD 12% permet ainsi de bénéficier de l'effet d'entourage, c'est-à-dire d'une synergie optimale entre le CBD, majoritaire, les autres cannabinoïdes, présents en plus faible quantité et les composés terpéniques du chanvre qui lui confèrent ses notes aromatiques. Une huile de CBD sûre, analysée à chaque lot et de haute qualité.									</h4>
								</a>
								<p class="ml-auto text-l font-medium text-gray-800">19,95&euro;</p>
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
					<li> Cannabis sativa seed oil* (huile de graines de chanvre BIO), Cannabis sativa flower extract (extrait de fleurs de chanvre concentré en CBD).</li>
					
					
				</h5>
				<div class="p-4">
				
				</div>
			</div>


		
	</div>
	<Footerpage></Footerpage>
</body>