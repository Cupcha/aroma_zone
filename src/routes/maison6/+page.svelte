<script>
	import small_logo from '$lib/images/small_logo_2.png';
	import big_logo from '$lib/images/big_logo.png';
	import search from '$lib/images/search.png';
	import account from '$lib/images/account.png';
	import cart from '$lib/images/cart.png';
	import Maison3 from '$lib/images/Maison3.png';
	import newsletter from '$lib/images/newsletter.png';
	import Headerpage from '../Headerpage.svelte';
	import Footerpage from '../Footerpage.svelte';
</script>

	

<svelte:head>
	<title>maison3</title>
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
			
			<h1 class="font-bold text-center text-4xl py-7 ">MAISON</h1>
			
			<div id="facet-main">
				<div id="nb-products" class="text-center text-xl">
					<span>Beurre Végétal de Cacao filtré Bio</span>
				</div>
			</div>
			
			<product-list class="flex">
				
				<div class="max-w-2xl mx-auto px-4 py-8 lg:max-w-7xl grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 md:h-auto object-center">
					
					<div class="bg-white shadow-lg rounded-lg flex justify-center items-center">
						<a href=" ">
							<img src={Maison3} alt="Maison3" class="rounded-t-lg center">
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
										
									Beurre Végétal de Cacao filtré Bio
									</h1>
									<br>

									<h4 class="text-l text-gray-800  text-justify">
										Ce beurre jaune pâle à la délicate odeur chocolatée est une alternative plus neutre à notre beurre de Cacao BIO brut. Il permet de profiter des bienfaits de ce beurre très nourrissant et riche en insaponifiables sans colorer vos formules. Ce beurre dur apporte de la consistance dans les formules de baumes et est apprécié pour protéger les peaux sèches et rêches. Idéal dans les recettes de baumes à lèvres, il est aussi apprécié en saponification à froid pour son effet durcissant, ou encore en cuisine pour la fabrication de chocolats "maison" ou de pâtisseries vegan. Cette présentation en pastilles est facile à prélever et à doser.									</h4>
								</a>
								<p class="ml-auto text-l font-medium text-gray-800">1,95&euro;</p>
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
					<li> Acides gras essentiels poly-insaturés (AGPI ou AGE) ou vitamine F : acide linoléique (oméga 6) (3.13%)</li>
					<li>Acides gras mono-insaturés (AGMI) : acide oléique (32.49%)</li>
					<li>Acides gras saturés (AGS) : acide stéarique (33.48%), acide palmitique (28.66%)</li>
					
					
				</h5>
				<div class="p-4">
				
				</div>
			</div>


		
	</div>
	<Footerpage></Footerpage>
</body>