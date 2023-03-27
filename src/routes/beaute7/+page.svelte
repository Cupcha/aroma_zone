<script>
	import cart from '$lib/images/cart.png';
	import Beaute7 from '$lib/images/Beaute7.png';
	import Headerpage from '../Headerpage.svelte';
	import Footerpage from '../Footerpage.svelte';

</script>

<svelte:head>
	<title>Beaute7</title>
	<meta name="beaute7" content="beaute7 shop Aroma-zone IE=edge width=device-width initial-scale=1.0">
	<script src="https://cdn.tailwindcss.com"></script>
</svelte:head>



<body class=" home font-karla text-lg">
	<Headerpage></Headerpage>

	<div id="container" class="bg-gray-200">
		<br>
		<br>
		<br>
		<br>
		<product-facet>
			<h1 class="font-bold text-center text-4xl py-7 ">BEAUTE</h1>
			<div id="facet-main">
				<div id="nb-products" class="text-center text-xl">
					<span>Beurre végétal de karité (sauvage)</span>
				</div>
			</div>
			
			<product-list class="flex">
				<div class="max-w-2xl mx-auto px-4 py-8 lg:max-w-7xl grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 md:h-auto object-center">
					<div class="bg-white shadow-lg rounded-lg flex justify-center items-center">
						<a href=" ">
							<img src={Beaute7} alt="Beaute7" class="rounded-t-lg center">
						</a>
						<div class="p-4"></div>
					</div>

					<div class="bg-white shadow-lg rounded-lg">
						<div class="p-4">
							<div class="flex mb-5">
								<a href=" ">
									<h1 class="text-l text-gray-900 font-bold text-center text-xl">
									<br>
									<br>
									<br>
									Beurre végétal de karité (sauvage)
									</h1>
									<br>

									<h4 class="text-l text-gray-800   text-justify">
										Riche et nourrissant, ce beurre est indispensable dans vos soins maison : il protège, adoucit et restructure les peaux abîmées. Incorporé à vos préparations capillaires, il nourrit et redonne brillance et beauté aux cheveux.
										Cette version du beurre de karité est une qualité désodorisée, pour une odeur et une couleur plus neutre dans vos formules.									</h4>
								</a>
								<p class="ml-auto text-l font-medium text-gray-800">3.25&euro;</p>
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
					<li> Acide linoléique (oméga-6) (6.10%), acide oléique (44.14%), acide stéarique (40.70%), acide palmitique (3.25%), alcools terpéniques (sous forme d'esters de l'acide cinnamique ou d'esters d'acides gras), phytostérols (karistérols dont alpha-spinastérol, delta-7-stigmastérol), latex (source de karitène (hydrocarbure isoprénique)), vitamines A, E (tocophérols)</li>
				</h5>
				<div class="p-4">
				
				</div>
			</div>
		</div>
	</div>
	<Footerpage></Footerpage>
</body>
