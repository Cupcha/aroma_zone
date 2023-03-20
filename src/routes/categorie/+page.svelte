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
	import Photo_nutrition4 from '$lib/images/Photo_nutrition4.jpeg';
	import Photo_nutrition1 from '$lib/images/Photo_nutrition1.jpg';
	import Photo_nutrition2 from '$lib/images/Photo_nutrition2.jpeg';
	import Photo_nutrition3 from '$lib/images/Photo_nutrition3.jpeg';
	import Photo_nutrition5 from '$lib/images/Photo_nutrition5.jpeg';
	import Photo_nutrition7 from '$lib/images/Photo_nutrition7.jpeg';
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
	<title>Tous les produits</title>
	<meta name="liste_touslesproduits" content="List products shop Aroma-zone IE=edge width=device-width initial-scale=1.0">
	<script src="https://cdn.tailwindcss.com"></script>

</svelte:head>

<body class="home">
	<header class="fixed w-full z-1">
		<div id="section_brands" class="w-full items-center md:font-medium">
			<div id="shop" class="box-border flex absolute justify-center left-0 top-0 h-12 w-1/2 bg-purplebg">
				<a href="/" class="flex items-center gap-2 text-center">
					<img class="w-5" src={small_logo} alt="Aroma-zone"/>
					<h1 id="boutique" class="text-browntext">[LA BOUTIQUE]</h1>
				</a>
			</div>
			<div id="blog" class="box-border flex absolute justify-center right-0 top-0 h-12 w-1/2 bg-brownbg">
				<a href="https://www.aroma-zone.com/info/recettes/cosmetiques-maison" class="flex items-center gap-2 text-center">
					<img class="w-5" src={small_logo} alt="Aroma-zone"/>
					<h1 id="blog" class="text-purpletext">[LE BLOG]</h1>
				</a>
			</div>
		</div>
		<!-- svelte-ignore a11y-mouse-events-have-key-events -->
		<div on:mouseover={navbar} on:mouseout={closeNavBar}>
			<nav class="bg-purplebg px-2 sm:px-4 pt-12">
				<div class="flex flex-wrap items-center justify-between">
				<div class="w-full md:block md:w-full text-browntext ml-1 mr-1" id="navbar-default">
					<ul class="flex flex-col p-2 mt-2 md:flex-row md:space-x-7 md:mt-0 md:text-base md:font-medium md:border-0">
						<li>
							<a href="/" class="flex items-center">
							<img src={big_logo} class="h-6 mr-3 sm:h-9" alt="header_big_logo" />
							</a>
						</li>
						<li on:mouseover={activeNavbar} data-target="allProduct">
							<a href="/liste_touslesproduits" id="all_products" class="block py-2 pl-1 pr-1" aria-current="page">TOUS LES PRODUITS</a>
						</li>
						<li class="flex items-center">&nbsp;|&nbsp;</li>
						<li on:mouseover={activeNavbar} data-target="Promo">
							<a href="/liste_promo" class="block py-2 pl-1 pr-1">PROMOS</a>
						</li>
						<li class="flex items-center">&nbsp;|&nbsp;</li>
						<li>
							<a href="/liste_huiles" class="block py-2 pl-1 pr-1">HUILES ESSENTIELLES</a>
						</li>
						<li class="flex items-center">&nbsp;|&nbsp;</li>
						<li>
							<a href="/liste_cosmetiques" class="block py-2 pl-1 pr-1">COSMÉTIQUES</a>
						</li>
						<li class="flex items-center">&nbsp;|&nbsp;</li>
						<li>
							<a href="/liste_maison" class="block py-2 pl-1 pr-1">MAISON</a>
						</li>
						<li class="flex items-center">&nbsp;|&nbsp;</li>
						<li>
							<button class="header_icon_search">
								<picture>
									<img class="w-7 py-2" src={search} alt="Recherche">
								</picture>
							</button>
						</li>
						<li>
							<a href="https://www.aroma-zone.com/customer/account/login" class="header_icon_account">
								<picture>
									<img class="w-7 py-2" src={account} alt="Compte">
								</picture>
						</li>
						<li>
							<a href="/newsletter" class="header_icon_newsletter">
								<picture>
									<img class="w-7 py-2" src={contact} alt="Newsletter">
								</picture>
							</a>
						</li>
						<li>
							<a href="/panier" class="header_icon_cart">
								<picture>
									<img class="w-7 py-2" src={cart} alt="Panier">
								</picture>
							</a>
						</li>
					</ul>
				</div>
				</div>
			</nav>
			<div id="menu" class="hidden">Charlotte
				<div id="Promo" class="hidden menu-entry">Promo</div>
				<div id="allProduct" class="hidden menu-entry">Tous les produits</div>
			</div>
			
		</div>
</header>

	<div id="container" class="bg-gray-200 pt-28">
		<product-facet>
			
			<h1 class="font-bold text-center text-4xl py-7 ">TOUS LES PRODUITS</h1>
			
			<div id="facet-main">
				<div id="nb-products" class="text-center text-xl">
					<span>50 products</span>
				</div>
			</div>
			
			<product-list class="flex">
				
				<div class="max-w-2xl mx-auto px-4 py-8 lg:max-w-7xl grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:h-auto">
					
					<div class="bg-white shadow-lg rounded-lg">
						<a href=" ">
							<img src={Photo_nutrition1} alt="photo1" class="rounded-t-lg">
						</a>
						<div class="p-4">
							<div class="flex mb-5">
								<a href=" ">
									<h3 class="text-l text-browntext text-center font-bold text-lg">
										CBD 2,5% hydrosoluble
									</h3>
									<p class="ml-auto text-l font-medium text-center">18,90€</p>
								</a>
							</div>
							<a href=" " class="inline-flex items-center justify-between px-5 py-1 shadow-sm font-medium rounded-md bg-stone-400">
								<span class="text-white text-lg">
									Acheter
								</span>
								<img src={cart} alt="cart" class="ml-4 h-6 w-6">
							</a>
						</div>
					</div>

					<div class="bg-white shadow-lg rounded-lg">
						<a href=" ">
							<img src={Photo_nutrition2} alt="photo1" class="rounded-t-lg">
						</a>
						<div class="p-4">
							<div class="flex mb-5">
								<a href=" ">
									<h3 class="text-l text-gray-900 font-bold">
										Huile CBD 12%
									</h3>
								</a>
								<p class="ml-auto text-l font-medium text-gray-800">19,95$</p>
							</div>
							<a href=" " class="inline-flex items-center justify-between px-5 py-1 shadow-sm font-medium rounded-md bg-stone-400">
								<span class="text-white text-lg">
									Acheter
								</span>
								<img src={cart} alt="cart" class="ml-4 h-6 w-6">
							</a>
						</div>
					</div>

					<div class="bg-white shadow-lg rounded-lg">
						<a href=" ">
							<img src={Photo_nutrition3} alt="photo1" class="rounded-t-lg">
						</a>
						<div class="p-4">
							<div class="flex mb-5">
								<a href=" ">
									<h3 class="text-l text-gray-900 font-bold">
										Huile CBD 32%
									</h3>
								</a>
								<p class="ml-auto text-l font-medium text-gray-800">37,95$</p>
							</div>
							<a href=" " class="inline-flex items-center justify-between px-5 py-1 shadow-sm font-medium rounded-md bg-stone-400">
								<span class="text-white text-lg">
									Acheter
								</span>
								<img src={cart} alt="cart" class="ml-4 h-6 w-6">
							</a>
						</div>
					</div>

					<div class="bg-white shadow-lg rounded-lg">
						<a href=" ">
							<img src={Photo_nutrition4} alt="photo1" class="rounded-t-lg">
						</a>
						<div class="p-4">
							<div class="flex mb-5">
								<a href=" ">
									<h3 class="text-l text-gray-900 font-bold">
										Charbon actif végétal en gélules
									</h3>
								</a>
								<p class="ml-auto text-l font-medium text-gray-800">9,90$</p>
							</div>
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
	
	</div>

</body>

<style>

</style>
