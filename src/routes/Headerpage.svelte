<script>
	import small_logo from '$lib/images/small_logo_2.png';
	import big_logo from '$lib/images/big_logo.png';
	import search from '$lib/images/search.png';
	import account from '$lib/images/account.png';
	import arrow_right from '$lib/images/arrow_right.png';
	import cart from '$lib/images/cart.png';
	import newsletter from '$lib/images/newsletter.png';
	let open = false;

	function toggle() {
		open = !open;
	}
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
	<div class=" bg-purplebg md:invisible h-auto w-full pt-12 inline-flex items-center"> 
		<div class="py-2 w-2/3">
			<button class:open on:click={toggle} data-collapse-toggle="mega-menu" type="button" id="menu-toggle" class="block items-center p-2 ml-1 text-sm text-browntext rounded-lg md:hidden hover:bg-browntestimonial focus:outline-none focus:ring-2 focus:ring-browntestimonial dark:browntext dark:hover:bg-white dark:focus:ring-browntext" aria-controls="mega-menu" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
				<ul class="text-browntext hidden md:block" id="menu">
					<li>
						<a href="/liste_touslesproduits" id="all_products" class="block py-2 pl-1 pr-1" aria-current="page">TOUS LES PRODUITS</a>
					</li>
					<li>
						<a href="/liste_promo" class="block py-2 pl-1 pr-1">PROMOS</a>
					</li>
					<li>
						<a href="/liste_huiles" class="block py-2 pl-1 pr-1">HUILES ESSENTIELLES</a>
					</li>
					<li>
						<a href="/liste_cosmetiques" class="block py-2 pl-1 pr-1">COSMÉTIQUES</a>
					</li>
					<li>
						<a href="/liste_maison" class="block py-2 pl-1 pr-1">MAISON</a>
					</li>
				</ul>
		</div>
		<div class="inline-flex">
			<button class="header_icon_search px-3">
				<picture>
					<img class="w-6 py-2" src={search} alt="Recherche">
				</picture>
			</button>
			<a href="https://www.aroma-zone.com/customer/account/login" class="header_icon_account px-2">
				<picture>
					<img class="w-6 py-2" src={account} alt="Compte">
				</picture>
			</a>
			<a href="/contact" class="header_icon_newsletter px-3">
				<picture>
					<img class="w-6 py-2" src={newsletter} alt="Newsletter">
				</picture>
			</a>
			<a href="/panier" class="header_icon_cart px-3">
				<picture>
					<img class="w-6 py-2" src={cart} alt="Panier">
				</picture>
			</a>
		</div>
	</div>
	<!-- svelte-ignore a11y-mouse-events-have-key-events -->
	<div on:mouseover={navbar} on:mouseout={closeNavBar} class="">
		<nav class="bg-purplebg px-2 invisible lg:visible pt-12">
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
						<a href="/contact" class="header_icon_newsletter">
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

<style>
	/* header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	} */
</style>
