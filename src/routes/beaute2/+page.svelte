<script>
	import cart from '$lib/images/cart.png';
	import Beaute2 from '$lib/images/Beaute2.png';
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
	<title>Beaute2</title>
	<meta name="beaute2" content="beaute2 shop Aroma-zone IE=edge width=device-width initial-scale=1.0">
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
					<span>Sérum visage concentré acide glycolique 10% & AHA</span>
				</div>
			</div>
			
			<product-list class="flex">
				<div class="max-w-2xl mx-auto px-4 py-8 lg:max-w-7xl grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 md:h-auto object-center">
					<div class="bg-white shadow-lg rounded-lg flex justify-center items-center">
						<a href=" ">
							<img src={Beaute2} alt="Beaute2" class="rounded-t-lg center">
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
									Sérum visage concentré acide glycolique 10% & AHA
									</h1>
									<br>

									<h4 class="text-l text-gray-800   text-justify">
										Faites peau neuve avec notre sérum visage hautement concentré en acide glycolique et en AHA acides de fruits ! Grâce à son effet peeling, ce sérum élimine les cellules mortes et stimule le renouvellement cutané pour un teint éclatant et unifié. Particulièrement adapté aux peaux marquées par le soleil, le tabac ou le vieillissement prématuré, il atténue les cicatrices d'acné et lisse les irrégularités. Il resserre également les pores de la peau, lutte contre les points noirs et réduit rides et taches brunes. De texture gel non grasse, notre sérum peeling concentré en acide glycolique est aussi enrichi en acide hyaluronique, aux vertus hydratantes et anti-rides, pour une peau repulpée. Sans parfum, ce sérum visage naturel s'utilise pur ou agrémenté d'huiles essentielles ou de fragrances. Retrouvez les différents ajouts possibles et leurs dosages dans cette fiche conseil. Disponible en éco-recharge recyclable, écologique et économique pour recharger facilement son flacon tout en réduisant ses déchets.									
									</h4>
								</a>
								<p class="ml-auto text-l font-medium text-gray-800">6.30&euro;</p>
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
					<li> Aqua, Glycolic Acid, Sodium Hydroxide (pour obtenir un pH adapté à l'application cutanée), Salix Nigra Bark Extract (extrait de saule noir ou acide salicylique végétal, aux effets antimicrobiens puissants), Glycerin, Vaccinium Myrtillus Fruit Extract (extrait de myrtille), Sodium Hyaluronate (acide hyaluronique obtenu par biotechnologies), Levulinic Acid (conservateur naturel), Saccharum Officinarum Extract (extrait de canne à sucre), Sodium Levulinate (conservateur naturel), Citrus Aurantium Dulcis Fruit Extract (extrait d'orange douce), Citrus Limon Fruit Extract (extrait de citron), Acer Saccharum Extract (extrait d'érable)</li>
				</h5>
				<div class="p-4">
				
				</div>
			</div>
		</div>
	</div>
	<Footerpage></Footerpage>
</body>
