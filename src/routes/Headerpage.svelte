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
</script>

<header class="fixed w-full z-1 h-12">
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
	<div class="">
		<nav class="bg-purplebg px-1 pt-12">
			<div class="flex flex-wrap items-center justify-between">
				<div class="w-full md:block md:w-full text-browntext ml-1 mr-1  mt-1 mb-2 md:mb-2 items-center" id="navbar-default">
					<button on:click={toggle} type="button" class="md:invisible pt-2 md:hidden">
						<svg aria-hidden="true" class="w-9 h-9" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
					</button>
					<a href="/" id="big_logo" class="inline-flex items-center md:hidden">
						<img src={big_logo} class="w-32" alt="header_big_logo" />
					</a>
					<ul class="md:flex flex-col md:flex-row md:space-x-7 md:mt-0 pt-1 md:pt-2 md:text-base md:font-medium md:border-0 {open ? '' : 'hidden'} md:inline-flex">
						<li class="md:flex items-center hidden md:visible">
							<a href="/" id="big_logo" class="md:flex items-center">
								<img src={big_logo} class="w-32 md:w-40 lg:w-52 md:ml-1" alt="header_big_logo" />
							</a>
						</li>
						<li class="md:flex items-center md:pl-1">
							<a href="/liste_touslesproduits" id="all_products" class="block py-1 pl-1 pr-1" aria-current="page">TOUS LES PRODUITS</a>
						</li>
						<li class="md:flex items-center hidden md:visible md:pl-1">&nbsp;|&nbsp;</li>
						<li class="md:flex items-center md:pl-1" data-target="Promo">
							<a href="/liste_promo" class="block py-1 pl-1 pr-1">PROMOS</a>
						</li>
						<li class="md:flex items-center hidden md:visible md:pl-1">&nbsp;|&nbsp;</li>
						<li class="md:flex items-center md:pl-1">
							<a href="/liste_huiles" class="block py-1 pl-1 pr-1 ">HUILES ESSENTIELLES</a>
						</li>
						<li class="md:flex items-center hidden md:visible md:pl-1">&nbsp;|&nbsp;</li>
						<li class="md:flex items-center md:pl-1">
							<a href="/liste_cosmetiques" class="block py-1 pl-1 pr-1">COSMÉTIQUES</a>
						</li>
						<li class="md:flex items-center hidden md:visible md:pl-1">&nbsp;|&nbsp;</li>
						<li class="md:flex items-center md:pl-1">
							<a href="/liste_maison" class="block py-1 pl-1 pr-1">MAISON</a>
						</li>
						<li class="md:flex items-center hidden md:visible md:pl-1">&nbsp;|&nbsp;</li>
						<li class="md:flex items-center hidden md:visible md:pl-2">
							<button class="header_icon_search">
								<picture>
									<img class="w-6" src={search} alt="Recherche">
								</picture>
							</button>
						</li>
						<li class="md:flex items-center hidden md:visible md:pl-3">
							<a href="https://www.aroma-zone.com/customer/account/login" class="header_icon_account">
								<picture>
									<img class="w-6" src={account} alt="Compte">
								</picture>
							</a>
						</li>
						<li class="md:flex items-center hidden md:visible md:pl-3">
							<a href="/contact" class="header_icon_newsletter">
								<picture>
									<img class="w-6" src={newsletter} alt="Newsletter">
								</picture>
							</a>
						</li>
						<li class="md:flex items-center hidden md:visible md:pl-3">
							<a href="/cart" class="header_icon_cart">
								<picture>
									<img class="w-6" src={cart} alt="Panier">
								</picture>
							</a>
						</li>
					</ul>
					{#if !open}
					<ul class="inline-flex flex-row float-right md:float-none space-x-5 md:hidden">
						<li>
							<button class="header_icon_search">
								<picture>
									<img class="w-6 pt-4" src={search} alt="Recherche">
								</picture>
							</button>
						</li>
						<li>
							<a href="https://www.aroma-zone.com/customer/account/login" class="header_icon_account">
								<picture>
									<img class="w-6 pt-4" src={account} alt="Compte">
								</picture>
							</a>
						</li>
						<li>
							<a href="/contact" class="header_icon_newsletter">
								<picture>
									<img class="w-6 pt-4" src={newsletter} alt="Newsletter">
								</picture>
							</a>
						</li>
						<li>
							<a href="/panier" class="header_icon_cart">
								<picture>
									<img class="w-6 pt-4" src={cart} alt="Panier">
								</picture>
							</a>
						</li>
					</ul>
					{/if}
				</div>
			</div>
		</nav>
	</div>
</header>
