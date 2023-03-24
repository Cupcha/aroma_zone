<script>
	import small_logo from '$lib/images/small_logo_2.png';
	import big_logo from '$lib/images/big_logo.png';
	import search from '$lib/images/search.png';
	import account from '$lib/images/account.png';
	import arrow_right from '$lib/images/arrow_right.png';
	import cart from '$lib/images/cart.png';
	import newsletter from '$lib/images/newsletter.png';
	import caroussel_1 from '$lib/images/test.jpeg';
	import caroussel_2 from '$lib/images/caroussel_2.webp';
	import Photo_huile1 from '$lib/images/Photo_huile1.png';
	import Photo_huile2 from '$lib/images/Photo_huile2.png';
	import Photo_huile3 from '$lib/images/Photo_huile3.png';
	import Photo_huile4 from '$lib/images/Photo_huile4.png';
	import Photo_huile5 from '$lib/images/Photo_huile5.png';
	import Photo_huile6 from '$lib/images/Photo_huile6.png';
	import Photo_huile7 from '$lib/images/Photo_huile7.png';
	import Photo_huile8 from '$lib/images/Photo_huile8.png';
	import Photo_huile9 from '$lib/images/Photo_huile9.png';
	import Photo_huile10 from '$lib/images/Photo_huile10.png';
	import Photo_cosmetique1 from '$lib/images/Cosmetique1.png';
	import Photo_cosmetique2 from '$lib/images/Cosmetique2.png';
	import Photo_cosmetique3 from '$lib/images/Cosmetique3.png';
	import Photo_cosmetique4 from '$lib/images/Cosmetique4.png';
	import Photo_cosmetique5 from '$lib/images/Cosmetique5.png';
	import Photo_cosmetique6 from '$lib/images/Cosmetique6.png';
	import Photo_cosmetique7 from '$lib/images/Cosmetique7.png';
	import Photo_cosmetique8 from '$lib/images/Cosmetique8.png';
	import Photo_cosmetique9 from '$lib/images/Cosmetique9.png';
	import Photo_cosmetique10 from '$lib/images/Cosmetique10.png';
	import Photo_beaute1 from '$lib/images/Photo_beaute1.jpeg';
	import Photo_beaute2 from '$lib/images/Photo_beaute2.jpeg';
	import Photo_beaute3 from '$lib/images/Photo_beaute3.jpeg';
	import Photo_beaute4 from '$lib/images/Photo_beaute4.jpeg';
	import Photo_beaute5 from '$lib/images/Photo_beaute5.webp';
	import Photo_beaute6 from '$lib/images/Photo_beaute6.webp';
	import Photo_beaute7 from '$lib/images/Photo_beaute7.jpeg';
	import Photo_beaute8 from '$lib/images/Photo_beaute8.jpeg';
	import Photo_beaute9 from '$lib/images/Photo_beaute9.webp';
	import Photo_beaute10 from '$lib/images/Photo_beaute10.webp';
	import Photo_nutrition4 from '$lib/images/Photo_nutrition4.jpeg';
	import Photo_nutrition1 from '$lib/images/Photo_nutrition1.jpg';
	import Photo_nutrition2 from '$lib/images/Photo_nutrition2.jpeg';
	import Photo_nutrition3 from '$lib/images/Photo_nutrition3.jpeg';
	import Photo_nutrition5 from '$lib/images/Photo_nutrition5.jpeg';
	import Photo_nutrition7 from '$lib/images/Photo_nutrition7.jpeg';
	import Photo_nutrition6 from '$lib/images/Photo_nutrition6.jpeg';
	import Photo_nutrition8 from '$lib/images/Photo_nutrition8.jpeg';
	import Photo_nutrition9 from '$lib/images/Photo_nutrition9.jpeg';
	import Photo_nutrition10 from '$lib/images/Photo_nutrition10.jpeg';
	import Photo_maison1 from '$lib/images/Maison1.png';
	import Photo_maison2 from '$lib/images/Maison2.png';
	import Photo_maison3 from '$lib/images/Maison3.png';
	import Photo_maison4 from '$lib/images/Maison4.png';
	import Photo_maison5 from '$lib/images/Maison5.png';
	import Photo_maison6 from '$lib/images/Maison6.png';
	import Photo_maison7 from '$lib/images/Maison7.png';
	import Photo_maison8 from '$lib/images/Maison8.png';
	import Photo_maison9 from '$lib/images/Maison9.png';
	import Photo_maison10 from '$lib/images/Maison10.png';
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
	<title>listmaison</title>
	<meta name="liste_maison" content="List products shop Aroma-zone IE=edge width=device-width initial-scale=1.0">
	<script src="https://cdn.tailwindcss.com"></script>

</svelte:head>

<body class="home font-karla">
	<Headerpage></Headerpage>

	<div id="container" class="bg-gray-200 pt-28">
		<product-facet>
			
			<h1 class="font-bold text-browntext text-center text-4xl py-7 ">MAISON</h1>
			
			<div id="facet-main">
				<div id="nb-products" class="text-center text-browntext text-xl">
					<span>10 products</span>
				</div>
			</div>
			
			<product-list class="flex text-browntext text-center">
				
				<div class="max-w-2xl mx-auto px-4 py-8 lg:max-w-7xl grid grid-cols-2 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:h-auto">
					
					<div class="bg-white shadow-lg rounded-lg">
						<a href="/maison1">
							<img src={Photo_maison1} alt="maison" class="rounded-t-lg">
						</a>
						<div class="p-4">
							<div class="mb-5">
								<a href="/maison1">
									<h3 class="text-l text-center font-bold text-lg">
										Glycérine Végétale Bio
									</h3>
								</a>
								<p class="ml-auto text-l font-medium ">3.80€</p>
							</div>
							<a href=" " class="inline-flex items-center justify-between px-5 py-1 shadow-sm font-medium rounded-md bg-brownbg">
								<span class="text-white text-lg">
									Acheter
								</span>
								<img src={cart} alt="cart" class="ml-4 h-6 w-6">
							</a>
						</div>
					</div>

					<div class="bg-white shadow-lg rounded-lg">
						<a href="/maison2">
							<img src={Photo_maison2} alt="maison" class="rounded-t-lg">
						</a>
						<div class="p-4">
							<div class="mb-5">
								<a href="/maison2">
									<h3 class="text-l text-center font-bold text-lg">
										Argile Verte Illite Surfine
									</h3>
								</a>
								<p class="ml-auto text-l font-medium ">5.05€</p>
							</div>
							<a href=" " class="inline-flex items-center justify-between px-5 py-1 shadow-sm font-medium rounded-md bg-brownbg">
								<span class="text-white text-lg">
									Acheter
								</span>
								<img src={cart} alt="cart" class="ml-4 h-6 w-6">
							</a>
						</div>
					</div>

					<div class="bg-white shadow-lg rounded-lg">
						<a href="/maison3">
							<img src={Photo_maison3} alt="maison" class="rounded-t-lg">
						</a>
						<div class="p-4">
							<div class="mb-5">
								<a href="/maison3">
									<h3 class="text-l text-center font-bold text-lg">
										Beurre Végétal de Cacao filtré Bio
									</h3>
								</a>
								<p class="ml-auto text-l font-medium ">1.95€</p>
							</div>
							<a href=" " class="inline-flex items-center justify-between px-5 py-1 shadow-sm font-medium rounded-md bg-brownbg">
								<span class="text-white text-lg">
									Acheter
								</span>
								<img src={cart} alt="cart" class="ml-4 h-6 w-6">
							</a>
						</div>
					</div>

					<div class="bg-white shadow-lg rounded-lg">
						<a href="/maison4">
							<img src={Photo_maison4} alt="maison" class="rounded-t-lg">
						</a>
						<div class="p-4">
							<div class="mb-5">
								<a href="/maison4">
									<h3 class="text-l text-center font-bold text-lg">
										Colorant Oxyde Minéral Bleu
									</h3>
								</a>
								<p class="ml-auto text-l font-medium ">2.25€</p>
							</div>
							<a href=" " class="inline-flex items-center justify-between px-5 py-1 shadow-sm font-medium rounded-md bg-brownbg">
								<span class="text-white text-lg">
									Acheter
								</span>
								<img src={cart} alt="cart" class="ml-4 h-6 w-6">
							</a>
						</div>
					</div>

					<div class="bg-white shadow-lg rounded-lg">
						<a href="/maison5">
							<img src={Photo_maison5} alt="maison" class="rounded-t-lg">
						</a>
						<div class="p-4">
							<div class="mb-5">
								<a href="/maison5">
									<h3 class="text-l text-center font-bold text-lg">
										Chlorophylle Liquide
									</h3>
								</a>
								<p class="ml-auto text-l font-medium ">1.95€</p>
							</div>
							<a href=" " class="inline-flex items-center justify-between px-5 py-1 shadow-sm font-medium rounded-md bg-brownbg">
								<span class="text-white text-lg">
									Acheter
								</span>
								<img src={cart} alt="cart" class="ml-4 h-6 w-6">
							</a>
						</div>
					</div>

					<div class="bg-white shadow-lg rounded-lg">
						<a href="/maison6">
							<img src={Photo_maison6} alt="maison" class="rounded-t-lg">
						</a>
						<div class="p-4">
							<div class="mb-5">
								<a href="/maison6">
									<h3 class="text-l text-center font-bold text-lg">
										Composition à diffuser Eveil Ayurvédique
									</h3>
								</a>
								<p class="ml-auto text-l font-medium ">3.90€</p>
							</div>
							<a href=" " class="inline-flex items-center justify-between px-5 py-1 shadow-sm font-medium rounded-md bg-brownbg">
								<span class="text-white text-lg">
									Acheter
								</span>
								<img src={cart} alt="cart" class="ml-4 h-6 w-6">
							</a>
						</div>
					</div>

					<div class="bg-white shadow-lg rounded-lg">
						<a href="/maison7">
							<img src={Photo_maison7} alt="maison" class="rounded-t-lg">
						</a>
						<div class="p-4">
							<div class="mb-5">
								<a href="/maison7">
									<h3 class="text-l text-center font-bold text-lg">
										Lait de Coco Bio en poudre
									</h3>
								</a>
								<p class="ml-auto text-l font-medium ">1.50€</p>
							</div>
							<a href=" " class="inline-flex items-center justify-between px-5 py-1 shadow-sm font-medium rounded-md bg-brownbg">
								<span class="text-white text-lg">
									Acheter
								</span>
								<img src={cart} alt="cart" class="ml-4 h-6 w-6">
							</a>
						</div>
					</div>

					<div class="bg-white shadow-lg rounded-lg">
						<a href="/maison8">
							<img src={Photo_maison8} alt="maison" class="rounded-t-lg">
						</a>
						<div class="p-4">
							<div class="mb-5">
								<a href="/maison8">
									<h3 class="text-l text-center font-bold text-lg">
										Curcuma Bio en poudre
									</h3>
								</a>
								<p class="ml-auto text-l font-medium ">3.75€</p>
							</div>
							<a href=" " class="inline-flex items-center justify-between px-5 py-1 shadow-sm font-medium rounded-md bg-brownbg">
								<span class="text-white text-lg">
									Acheter
								</span>
								<img src={cart} alt="cart" class="ml-4 h-6 w-6">
							</a>
						</div>
					</div>

					<div class="bg-white shadow-lg rounded-lg">
						<a href="/maison9">
							<img src={Photo_maison9} alt="maison" class="rounded-t-lg">
						</a>
						<div class="p-4">
							<div class="mb-5">
								<a href="/maison9">
									<h3 class="text-l text-center font-bold text-lg">
										Colorant Oxyde Minéral Brun
									</h3>
								</a>
								<p class="ml-auto text-l font-medium ">1.95€</p>
							</div>
							<a href=" " class="inline-flex items-center justify-between px-5 py-1 shadow-sm font-medium rounded-md bg-brownbg">
								<span class="text-white text-lg">
									Acheter
								</span>
								<img src={cart} alt="cart" class="ml-4 h-6 w-6">
							</a>
						</div>
					</div>

					<div class="bg-white shadow-lg rounded-lg">
						<a href="/maison10">
							<img src={Photo_maison10} alt="maison" class="rounded-t-lg">
						</a>
						<div class="p-4">
							<div class="mb-5">
								<a href="/maison10">
									<h3 class="text-l text-center font-bold text-lg">
										Argile Multani Mitti
									</h3>
								</a>
								<p class="ml-auto text-l font-medium ">3.05€</p>
							</div>
							<a href=" " class="inline-flex items-center justify-between px-5 py-1 shadow-sm font-medium rounded-md bg-brownbg">
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
	
	</div>

	<Footerpage></Footerpage>

</body>

<style>
</style>
