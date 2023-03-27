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
	<div on:mouseover={navbar} on:mouseout={closeNavBar} class="">
		<nav class="bg-purplebg px-2 pt-12">
			<div class="flex flex-wrap items-center justify-between">
				<div class="w-full md:block md:w-full text-browntext ml-1 mr-1  mt-2" id="navbar-default">
					<a href="/" class="inline-flex items-center hidden md:inline-flex">
						<img src={big_logo} class="h-6 mr-3 sm:h-9" alt="header_big_logo" />
					</a>

					<button on:click={toggle} type="button" class="md:invisible">
						<svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
					</button>

					<ul class="inline-flex flex-col md:flex-row md:space-x-7 md:mt-0 md:text-base md:font-medium md:border-0 {open ? '' : 'hidden'} md:inline-flex">
						<li>
							<a href="/liste_touslesproduits" id="all_products" class="block py-2 pl-1 pr-1" aria-current="page">TOUS LES PRODUITS</a>
						</li>
						<li class="flex items-center invisible md:visible">&nbsp;|&nbsp;</li>
						<li data-target="Promo">
							<a href="/liste_promo" class="block py-2 pl-1 pr-1">PROMOS</a>
						</li>
						<li class="flex items-center invisible md:visible">&nbsp;|&nbsp;</li>
						<li>
							<a href="/liste_huiles" class="block py-2 pl-1 pr-1">HUILES ESSENTIELLES</a>
						</li>
						<li class="flex items-center invisible md:visible">&nbsp;|&nbsp;</li>
						<li>
							<a href="/liste_cosmetiques" class="block py-2 pl-1 pr-1">COSMÉTIQUES</a>
						</li>
						<li class="flex items-center invisible md:visible">&nbsp;|&nbsp;</li>
						<li>
							<a href="/liste_maison" class="block py-2 pl-1 pr-1">MAISON</a>
						</li>
						<li class="flex items-center invisible md:visible">&nbsp;|&nbsp;</li>
					</ul>

					<ul class="inline-flex flex-row float-right ">
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
							</a>
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
