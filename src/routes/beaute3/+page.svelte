<script>
	import cart from '$lib/images/cart.png';
	import Beaute3 from '$lib/images/Beaute3.png';
	import Headerpage from '../Headerpage.svelte';
	import Footerpage from '../Footerpage.svelte';


	function navbar (){
		// @ts-ignore
		document.getElementById("menu").style.display="block";
    }
	function closeNavBar (){
		// @ts-ignore
		document.getElementById("menu").style.display="none";
    }
	// @ts-ignore
	function activeNavbar(e){
		// @ts-ignore
		document.querySelectorAll(".menu-entry").forEach(e=>e.style.display="none");
		let target = e.currentTarget.getAttribute("data-target");
		// @ts-ignore
		document.getElementById(target).style.display="block";
	}
</script>

<svelte:head>
	<title>Beaute3</title>
	<meta name="beaute3" content="beaute3 shop Aroma-zone IE=edge width=device-width initial-scale=1.0">
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
					<span>Sérum cils au ricin bio</span>
				</div>
			</div>
			
			<product-list class="flex">
				<div class="max-w-2xl mx-auto px-4 py-8 lg:max-w-7xl grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 md:h-auto object-center">
					<div class="bg-white shadow-lg rounded-lg flex justify-center items-center">
						<a href=" ">
							<img src={Beaute3} alt="Beaute3" class="rounded-t-lg center">
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
									Sérum cils au ricin bio
									</h1>
									<br>

									<h4 class="text-l text-gray-800   text-justify">
										À la fois boucliers de protection des yeux et alliés de séduction, nos cils sont souvent négligés et fragilisés ! Offrez une nouvelle jeunesse à votre regard et retrouvez des cils volumineux, longs et voluptueux, sans artifice grâce à notre sérum cils au Ricin. Sa formule unique combine 2 actifs issus de la recherche capillaire antichute à l’efficacité scientifiquement prouvée : Le Biotinoyl Tripeptide-1 et l’extrait de pousse de Pois, à 2 ingrédients incontournables qui n’ont plus besoin de faire leurs preuves quant à leurs propriétés régénératrices et stimulantes de la pousse : l'huile de Ricin BIO et le Panthénol. Jour après jour, ce sérum nourrit, renforce et favorise la croissance de vos cils, les rendant plus résistants, plus longs et plus épais !  Sa texture non grasse et son pinceau applicateur précis type eyeliner, permet une utilisation simple et rapide qui ne gêne nullement le maquillage.									</h4>
								</a>
								<p class="ml-auto text-l font-medium text-gray-800">4.95&euro;</p>
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
					<li> Aqua, Ricinus Communis Seed Oil, Pentylene Glycol, Propanediol, Panthenol, Isomalt, Glycerin, Astragalus Gummifer Gum, Biotinoyl Tripeptide-1, Pisum Sativum Sprout Extract, Sodium Hyaluronate, Arginine, Tocopherol, Phytic Acid, Citric Acid, Helianthus Annuus Seed Oil</li>
				</h5>
				<div class="p-4">
				
				</div>
			</div>
		</div>
	</div>
	<Footerpage></Footerpage>
</body>
