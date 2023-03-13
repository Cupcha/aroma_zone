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
			<header class="fixed w-full">
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
			<section class="testimonials" id="testimonials">
				<div class="title">
					<h2 class="titre-texte">Que Disent Nos <span>C</span>lients</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. </p>
				</div>
				<div class="contenu">
					<div class="box">
						<div class="imbox">
							<img src="./images/t1.jpeg" alt="">
						</div>
						<div class="text">
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
							<h3>Franck leroi</h3>
						</div>
					</div>
					<div class="box">
						<div class="imbox">
							<img src="./images/t2.jpg" alt="">
						</div>
						<div class="text">
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
							<h3>Franck leroi</h3>
						</div>
					</div>
					<div class="box">
						<div class="imbox">
							<img src="./images/t3.jpg" alt="">
						</div>
						<div class="text">
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
							<h3>Franck leroi</h3>
						</div>
					</div>
				</div>
			 </section>
		</section>
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
