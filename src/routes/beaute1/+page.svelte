<script>
	import small_logo from '$lib/images/small_logo_2.png';
	import big_logo from '$lib/images/big_logo.png';
	import search from '$lib/images/search.png';
	import account from '$lib/images/account.png';
	import cart from '$lib/images/cart.png';
	import Beaute1 from '$lib/images/Beaute1.png';
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
	<title>beaute1</title>
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
					<span>Sérum concentré d'acide hyaluronique</span>
				</div>
			</div>
			
			<product-list class="flex">
				
				<div class="max-w-2xl mx-auto px-4 py-8 lg:max-w-7xl grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 md:h-auto object-center">
					
					<div class="bg-white shadow-lg rounded-lg">
						<a href=" ">
							<img src={Beaute1} alt="Beaute1" class="rounded-t-lg center">
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
										
									Sérum concentré d'acide hyaluronique
									</h1>
									<br>
									<h4 class="text-l text-gray-800  text-center ">
										Ce sérum d'acide hyaluronique 100 % d'origine naturelle est l'un des plus concentrés du marché : 2.5% contre 0.1 à 1% d'acide hyaluronique dans les cosmétiques classiques. Reconnu pour lisser, hydrater et repulper la peau, sa texture fraîche, naturellement gélifiée, pénètre instantanément sans la pelucher ni la tirailler. Son efficacité en tant que sérum anti-âge a été testée et prouvée pour combler les rides, hydrater et améliorer l'élasticité de la peau. Notre sérum d'acide hyaluronique fait également des miracles sur les cheveux secs et abimés qu'il adoucit et restructure. Ce sérum hydratant visage anti-âge s'utilise pur ou agrémenté d'actifs pour le personnaliser. Sa nouvelle formule ne contient pas d'alcool. Disponible en éco-recharge recyclable, écologique et économique pour recharger facilement son flacon tout en réduisant ses déchets. 
									</h4>
								</a>
								<p class="ml-auto text-l font-medium text-gray-800">5,90&euro;</p>
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
					<li> Aqua (​eau), Salix nigra bark extract (extrait d'écorce de saule noir), Sodium hyaluronate (acide hyaluronique, actif anti-âge d'origine naturelle), Glycerin (glycérine végétale BIO non dérivée d'huile de palme , hydratante), Levulinic acid (agent antimicrobien d'origine végétale), Sodium Levulinate (agent antimicrobien d'origine végétale)</li>
					
					
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
