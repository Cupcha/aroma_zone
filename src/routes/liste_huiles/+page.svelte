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
	<title>listhuiles</title>
	<meta name="liste_huiles" content="List products shop Aroma-zone IE=edge width=device-width initial-scale=1.0">
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
									<img class="w-7 py-2" src={newsletter} alt="Newsletter">
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
			
			<h1 class="font-bold text-browntext text-center text-4xl py-7 ">HUILES ESSENTIELLES</h1>
			
			<div id="facet-main">
				<div id="nb-products" class="text-center text-browntext text-xl">
					<span>10 products</span>
				</div>
			</div>
			
			<product-list class="flex text-browntext text-center">
				
				<div class="max-w-2xl mx-auto px-4 py-8 lg:max-w-7xl grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:h-auto">
					
					<div class="bg-white shadow-lg rounded-lg">
						<a href="/huile1">
							<img src={Photo_huile1} alt="huile" class="rounded-t-lg">
						</a>
						<div class="p-4">
							<div class="mb-5">
								<a href="/huile1">
									<h3 class="text-l text-center font-bold text-lg">
										Huile esssentielle d'Achillée millefeuille Bio
									</h3>
								</a>
								<p class="ml-auto text-l font-medium ">8.90€</p>
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
						<a href="/huile2">
							<img src={Photo_huile2} alt="huile" class="rounded-t-lg">
						</a>
						<div class="p-4">
							<div class="mb-5">
								<a href="/huile2">
									<h3 class="text-l text-center font-bold text-lg">
										Huile essentielle d'Ahibero Bio
									</h3>
								</a>
								<p class="ml-auto text-l font-medium ">4.25€</p>
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
						<a href="/huile3">
							<img src={Photo_huile3} alt="huile" class="rounded-t-lg">
						</a>
						<div class="p-4">
							<div class="mb-5">
								<a href="/huile3">
									<h3 class="text-l text-center font-bold text-lg">
										Huile essentielle d'Ail Bio
									</h3>
								</a>
								<p class="ml-auto text-l font-medium ">6.05€</p>
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
						<a href="/huile4">
							<img src={Photo_huile4} alt="huile" class="rounded-t-lg">
						</a>
						<div class="p-4">
							<div class="mb-5">
								<a href="/huile4">
									<h3 class="text-l text-center font-bold text-lg">
										Huile essentielle d'Ajowan Bio
									</h3>
								</a>
								<p class="ml-auto text-l font-medium ">3.10€</p>
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
						<a href="/huile5">
							<img src={Photo_huile5} alt="huile" class="rounded-t-lg">
						</a>
						<div class="p-4">
							<div class="mb-5">
								<a href="/huile5">
									<h3 class="text-l text-center font-bold text-lg">
										Huile essentielle d'Amande Amère
									</h3>
								</a>
								<p class="ml-auto text-l font-medium ">6.90€</p>
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
						<a href="/huile6">
							<img src={Photo_huile6} alt="huile" class="rounded-t-lg">
						</a>
						<div class="p-4">
							<div class="mb-5">
								<a href="/huile6">
									<h3 class="text-l text-center font-bold text-lg">
										Huile essentielle d'Amyris
									</h3>
								</a>
								<p class="ml-auto text-l font-medium ">3.95€</p>
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
						<a href="/huile7">
							<img src={Photo_huile7} alt="huile" class="rounded-t-lg">
						</a>
						<div class="p-4">
							<div class="mb-5">
								<a href="/huile7">
									<h3 class="text-l text-center font-bold text-lg">
										Huile essentielle d'Aneth Odorant Bio
									</h3>
								</a>
								<p class="ml-auto text-l font-medium ">4.90€</p>
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
						<a href="/huile8">
							<img src={Photo_huile8} alt="huile" class="rounded-t-lg">
						</a>
						<div class="p-4">
							<div class="mb-5">
								<a href="/huile8">
									<h3 class="text-l text-center font-bold text-lg">
										Huile essentielle d'Angélique Archangélique
									</h3>
								</a>
								<p class="ml-auto text-l font-medium ">9.95€</p>
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
						<a href="/huile9">
							<img src={Photo_huile9} alt="huile" class="rounded-t-lg">
						</a>
						<div class="p-4">
							<div class="mb-5">
								<a href="/huile9">
									<h3 class="text-l text-center font-bold text-lg">
										Huile essentielle d'Anis Vert
									</h3>
								</a>
								<p class="ml-auto text-l font-medium ">6.05€</p>
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
						<a href="/huile10">
							<img src={Photo_huile10} alt="huile" class="rounded-t-lg">
						</a>
						<div class="p-4">
							<div class="mb-5">
								<a href="/huile10">
									<h3 class="text-l text-center font-bold text-lg">
										Huile essentielle de Baies Roses
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

				</div>
			
			</product-list>
		
		</product-facet>
	
	</div>

	<footer class="bg-purplebg">
		<div class="mx-auto w-full container p-4 sm:p-6">
			<div class="md:flex md:justify-between">
			  <div class="mb-6 md:mb-0">
				  <a href="/" class="flex items-center">
					  <img src={small_logo} class="h-8 mr-3" alt="Aroma-zone" />
					  <span class="self-center text-2xl font-semibold whitespace-nowrap text-browntext">Aroma Zone</span>
				  </a>
			  </div>
			  <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
				  <div>
					  <h2 class="mb-6 text-sm font-semibold uppercase text-browntext">Notre identité</h2>
					  <ul class=" text-browntext">
						  <li class="mb-4">
							  <a href="https://www.aroma-zone.com/info/qui-sommes-nous" class="hover:underline">Qui sommes-nous ?</a>
						  </li>
						  <li>
							  <a href="https://www.aroma-zone.com/info/espace-presse" class="hover:underline">Dans la presse</a>
						  </li>
					  </ul>
				  </div>
				  <div>
					  <h2 class="mb-6 text-sm font-semibold text-browntext uppercase">Nos engagements</h2>
					  <ul class="text-browntext">
						  <li class="mb-4">
							  <a href="https://www.aroma-zone.com/info/qui-sommes-nous#nosgaranties" class="hover:underline ">Qualité et responsabilité</a>
						  </li>
						  <li>
							  <a href="https://www.aroma-zone.com/info/satisfait-ou-rembourse" class="hover:underline">Satisfaité ou remboursé</a>
						  </li>
					  </ul>
				  </div>
				  <div>
					  <h2 class="mb-6 text-sm font-semibold text-browntext uppercase">Nos services</h2>
					  <ul class="text-browntext">
						  <li class="mb-4">
							  <a href="https://www.aroma-zone.com/info/mentions-legales" class="hover:underline">Mentions légales</a>
						  </li>
						  <li>
							  <a href="/contact" class="hover:underline">Nous contacter</a>
						  </li>
					  </ul>
				  </div>
			  </div>
		  </div>
		  <hr class="my-6 sm:mx-auto border-browntext lg:my-8" />
		  <div class="sm:flex sm:items-center sm:justify-between">
			  <span class="text-sm sm:text-center text-browntext">© 2023 <a href="https://www.aroma-zone.com/info/base-de-connaissance" class="hover:underline">Aroma Zone</a>. Tous droits réservés.
			  </span>
			  <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
				  <a href="https://www.facebook.com/aromazone" class="text-browntext hover:text-gray-900 dark:hover:text-white">
					  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
					  <span class="sr-only">Facebook page</span>
				  </a>
				  <a href="https://www.instagram.com/aromazone_officiel/" class="text-browntext dark:hover:text-white">
					  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" /></svg>
					  <span class="sr-only">Instagram page</span>
				  </a>
			  </div>
		  </div>
		</div>
	</footer>

</body>

<style>
</style>