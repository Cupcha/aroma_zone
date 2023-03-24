<script>
	import small_logo from '$lib/images/small_logo_2.png';
	import big_logo from '$lib/images/big_logo.png';
	import search from '$lib/images/search.png';
	import account from '$lib/images/account.png';
	import cart from '$lib/images/cart.png';
	import Beaute4 from '$lib/images/Beaute4.png';
	import newsletter from '$lib/images/newsletter.png';
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
	<title>beaute4</title>
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
			
			<h1 class="font-bold text-center text-4xl py-7 ">BEAUTE</h1>
			
			<div id="facet-main">
				<div id="nb-products" class="text-center text-xl">
					<span>Sérum visage concentré vitamine C 10% & astaxanthine</span>
				</div>
			</div>
			
			<product-list class="flex">
				
				<div class="max-w-2xl mx-auto px-4 py-8 lg:max-w-7xl grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 md:h-auto object-center">
					
					<div class="bg-white shadow-lg rounded-lg">
						<a href=" ">
							<img src={Beaute4} alt="Beaute4" class="rounded-t-lg center">
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
										
									Sérum visage concentré vitamine C 10% & astaxanthine
									</h1>
									<br>

									<h4 class="text-l text-gray-800  text-center ">
										Hautement concentré, ce sérum visage à 10% de vitamine C est un véritable élixir de beauté et booster d’éclat pour la peau. Actif de référence pour les peaux ternes et incontournable des soins anti-âge, la vitamine C stimule la synthèse de collagène, lutte contre les signes du photo-vieillissement, unifie le teint et atténue les taches brunes. Pour une action efficace contre les radicaux libres responsables du vieillissement cutané, ce sérum associe la vitamine C sous une forme puissante et stabilisée à un extrait de de micro-algue, l’astaxanthine, connue pour son pouvoir antioxydant inégalé et sa couleur rouge intense. Ce sérum vitamine C à la texture légère et douce est également enrichi en acide hyaluronique aux vertus hydratantes et anti-rides pour une peau repulpée. Résultat : la peau est plus lisse, plus ferme et éclatante ! Un sérum vitamine C visage naturel, efficace, sans parfum et sans allergènes qui s'adapte à tous les types de peaux. Disponible en éco-recharge recyclable, écologique et économique pour recharger facilement son flacon tout en réduisant ses déchets.									</h4>
								</a>
								<p class="ml-auto text-l font-medium text-gray-800">6,90&euro;</p>
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
					<li> Aqua, Ascorbyl glucoside (10%), Glycerin (glycérine végétale), Salix nigra bark extract (antimicrobien, extrait de saule noir), Sodium hydroxide (ajusteur de pH, pour obtenir un pH adapté à l'application cutanée), Sodium levulinate (conservateur naturel), Haematococcus Pluvialis Extract (astaxanthine, micro-algue rouge), Sodium hyaluronate (acide hyaluronique obtenu par biotechnologies), Simmondsia Chinensis Seed Oil (huile végétale de jojoba), Astragalus Gummifer Gum (gomme adragante, agent suspensif), Levulinic acid (conservateur natrel), Sodium anisate (conservateur naturel), Phytic Acid (sequestrant), Polypepsilon-Lysine (conservateur naturel), Tocopherol (vitamine E), Helianthus Annuus Seed Oil (huile végétale tournesol), Lecithin (émulsifiant naturel).</li>
					
					
				</h5>
				<div class="p-4">
				
				</div>
			</div>


		
	</div>
	<Footerpage></Footerpage>
</body>




  
<!-- 
<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img src={welcome_fallback} alt="Welcome" />
			</picture>
		</span>

		to your new<br />SvelteKit app
	</h1>

	<h2>
		try editing <strong>src/routes/+page.svelte</strong>
	</h2>

	<Counter />
</section> -->

<style>
	/* section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	} */
</style>
