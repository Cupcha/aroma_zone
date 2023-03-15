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
	<title>AROMA-ZONE</title>
	<meta name="homepage" content="Homepage shop Aroma-zone" />
</svelte:head>

<body class="home">
			<header class="fixed w-full z-1">
				<div id="section_brands" class="w-full items-center md:font-medium">
					<div id="shop" class="box-border flex absolute justify-center left-0 top-0 h-12 w-1/2 bg-purplebg">
						<a href="http://localhost:5173" class="flex items-center gap-2 text-center">
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
							<ul class="flex flex-col p-2 mt-2 border md:flex-row md:space-x-7 md:mt-0 md:text-base md:font-medium md:border-0">
								<li>
									<a href="http://localhost:5173" class="flex items-center">
									<img src={big_logo} class="h-6 mr-3 sm:h-9" alt="header_big_logo" />
									</a>
								</li>
								<li on:mouseover={activeNavbar} data-target="allProduct">
									<a href="/tous-les-produits" id="all_products" class="block py-2 pl-1 pr-1" aria-current="page">TOUS LES PRODUITS</a>
								</li>
								<li class="flex items-center">&nbsp;|&nbsp;</li>
								<li on:mouseover={activeNavbar} data-target="Promo">
									<a href="/promotions" class="block py-2 pl-1 pr-1">PROMOS</a>
								</li>
								<li class="flex items-center">&nbsp;|&nbsp;</li>
								<li>
									<a href="/catégories/huiles-essentiels" class="block py-2 pl-1 pr-1">HUILES ESSENTIELLES</a>
								</li>
								<li class="flex items-center">&nbsp;|&nbsp;</li>
								<li>
									<a href="/catégories/cosmétiques" class="block py-2 pl-1 pr-1">COSMÉTIQUES</a>
								</li>
								<li class="flex items-center">&nbsp;|&nbsp;</li>
								<li>
									<a href="/catégories/maison" class="block py-2 pl-1 pr-1">MAISON</a>
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
		<section id="main">
			<div class="pt-28">
				<section>
					<a class="slide" href="/product/huiles-essentiels/lavande">
						<div>
							<img class="w-full" src={caroussel_2} alt="Aroma-zone"/>
						</div>
					</a>
				</section>
			</div>
			<product-list class="md:font-medium max-w-full py-20 sm:py-24 sm:px-6 text-browntext text-center">
				<div>
					<h2 class="text-title uppercase font-bold text-4xl mb-4 mt-4">Nos nouveautés</h2>
				</div>
				<div class="max-w-2xl mx-auto px-4 py-8 lg:max-w-7xl grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-3 md:h-auto">
					<div class="bg-white shadow-lg rounded-lg">
						<a href=" ">
							<img src={Photo_nutrition4} alt="photo1" class="rounded-t-lg">
						</a>
						<div class="p-4">
							<div class="mb-5">
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
							</a>
						</div>
					</div>

					<div class="bg-white shadow-lg rounded-lg">
						<a href=" ">
							<img src={Photo_nutrition5} alt="photo1" class="rounded-t-lg">
						</a>
						<div class="p-4">
							<div class="mb-5">
								<a href=" ">
									<h3 class="text-l font-bold text-lg">
										Huile CBD 12%
									</h3>
									<p class="ml-auto text-l font-medium">19,95€</p>
								</a>
							</div>
							<a href=" " class="inline-flex items-center justify-between px-5 py-1 shadow-sm font-medium rounded-md bg-stone-400">
								<span class="text-white text-lg">
									Acheter
								</span>
							</a>
						</div>
					</div>

					<div class="bg-white shadow-lg rounded-lg">
						<a href=" ">
							<img src={Photo_nutrition7} alt="photo1" class="rounded-t-lg">
						</a>
						<div class="p-4">
							<div class=" mb-5">
								<a href=" ">
									<h3 class="text-l font-bold text-lg">
										Huile CBD 32%
									</h3>
									<p class="ml-auto text-l font-medium ">37,95€</p>
								</a>
							</div>
							<a href=" " class="inline-flex items-center justify-between px-5 py-1 shadow-sm font-medium rounded-md bg-stone-400">
								<span class="text-white text-lg">
									Acheter
								</span>
							</a>
						</div>
					</div>
				</product-list>
			<section class="testimonials bg-browntestimonial md:font-medium max-w-full py-16 sm:py-20 sm:px-6 text-browntext" id="testimonials">
				<div class="title text-center">
					<h2 class="text-title uppercase font-bold text-4xl mb-2">Que Disent Nos Clients</h2>
					<p>95% de nos clients sont satisfaits !</p>
				</div>
				<div class="content mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 text-center">
					<div class="p-6 min-h-80 w-full overflow-hidden rounded-lg group-hover:opacity-75 lg:h-80">
						<div>
							<div class="inline-flex items-center mb-4 text-yellow-300">
								<svg aria-hidden="true" class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
								<svg aria-hidden="true" class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
								<svg aria-hidden="true" class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
								<svg aria-hidden="true" class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
								<svg aria-hidden="true" class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
							</div>
							<div class="text">
								<p class="italic">"La caverne d'Ali Baba si Ali Baba était homme à faire ses cosmétiques maison."</p>
								<h3 class="mt-4">Aude S.</h3>
							</div>
						</div>
					</div>
					<div class="p-6 min-h-80 w-full overflow-hidden rounded-lg group-hover:opacity-75 lg:h-80">
						<div class="imbox">
							<div class="inline-flex items-center mb-4 text-yellow-300">
								<svg aria-hidden="true" class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
								<svg aria-hidden="true" class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
								<svg aria-hidden="true" class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
								<svg aria-hidden="true" class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
								<svg aria-hidden="true" class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
							</div>
						</div>
						<div class="text">
							<p class="italic">"C'est un site qui est en perpétuelle évolution, de nouveaux produits, de nouvelles recettes, la création d'ateliers, les fiches techniques.... On a l'impression d'un échange entre les clients et l'équipe d'Aroma-zone. J'ai presque envie de dire que l'ambiance est familiale."</p>
							<h3 class="mt-4">Laeticia H.</h3>
						</div>
					</div>
					<div class="p-6 min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg group-hover:opacity-75 lg:aspect-none lg:h-80">
						<div class="imbox">
							<div class="inline-flex items-center mb-4 text-yellow-300">
								<svg aria-hidden="true" class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
								<svg aria-hidden="true" class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
								<svg aria-hidden="true" class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
								<svg aria-hidden="true" class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
								<svg aria-hidden="true" class="w-7 h-7 text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
							</div>
						</div>
						<div class="text">
							<p class="italic">"Cela fera bientôt 4 ans que je vous connais, et j'en suis toujours aussi contente, si ce n'est plus ! Les produits sont tous d'une très grande qualité, je n'ai jamais eu de souci de livraison, et si cela arrive, votre service client répond sans attendre. Toujours de très bons conseils aussi sur les produits. J'espère sincèrement que vous allez continuer comme cela... Ne pas perdre vos valeurs, qui sont aussi les nôtres..."</p>
							<h3 class="mt-4">Franck L.</h3>
						</div>
					</div>
				</div>
			 </section>
		</section>

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
