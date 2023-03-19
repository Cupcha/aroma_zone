

<script>
	import small_logo from '$lib/images/small_logo_2.png';
	import big_logo from '$lib/images/big_logo.png';
	import search from '$lib/images/search.png';
	import account from '$lib/images/account.png';
	import arrow_right from '$lib/images/arrow_right.png';
	import cart from '$lib/images/cart.png';
	import newsletter from '$lib/images/newsletter.png';


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

	// Importation de la fonction `onMount` depuis Svelte et de l'objet `supabase` depuis le fichier "../config/supabaseProduct"
	import { onMount } from 'svelte';
			import supabase from "../supabase.js"
		  
			// Déclaration des variables d'état `fetchError` et `Huile` avec la syntaxe `let`
			let fetchError = null;
			let Huile = null;
		  
			// Utilisation de la fonction `onMount` pour effectuer une action une fois que le composant est monté
			onMount(async () => {
			  try {
				// Récupération des données de la table `Huile` depuis Supabase
				const { data, error } = await supabase
				  .from('Huile')
				  .select();
		  
				// Gestion des erreurs
				if (error) {
				  fetchError = 'Could not fetch the Product';
				  Huile = null;
				  console.log(error);
				}
		  
				// Si les données sont récupérées avec succès, stockage dans la variable d'état `Huile`
				if (data) {
				  Huile = data;
				  fetchError = null;
				}
			  } catch (error) {
				// Gestion des erreurs
				fetchError = 'Could not fetch the Product';
				Huile = null;
				console.log(error);
			  }
			});
</script>

<svelte:head>
	<title>huiles</title>
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
									<a href="./src/routes/liste_touslesproduits/+page.svelte" id="all_products" class="block py-2 pl-1 pr-1" aria-current="page">TOUS LES PRODUITS</a>
								</li>
								<li class="flex items-center">&nbsp;|&nbsp;</li>
								<li on:mouseover={activeNavbar} data-target="Promo">
									<a href="./src/routes/Huile1/+page.svelte" class="block py-2 pl-1 pr-1">PROMOS</a>
								</li>
								<li class="flex items-center">&nbsp;|&nbsp;</li>
								<li>
									<a href="/Huile" class="block py-2 pl-1 pr-1">HUILES ESSENTIELLES</a>
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
									<a href="./src/routes/Contact/+page.svelte" class="header_icon_newsletter">
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
			
		  	<div>
			{#if fetchError}
			  <!-- Si une erreur est survenue, affichage du message d'erreur -->
			  <p>{fetchError}</p>
			{:else if Huile}
			  <!-- Si les données sont récupérées avec succès, affichage de chaque élément de la liste `Huile` -->
			  <div>
				<!-- Tri des éléments par ordre -->
				<div>
				  {#each Huile as item (item.id)}
					<div>
					  <h3>{item.name}</h3>
					  <h5>Description: {item.description}</h5>
					  <p>Ingrédients: {item.ingredient}</p>
					  <div>{item.price}€</div>
					</div>
				  {/each}
				</div>
			  </div>
			{/if}
		  </div>

	
</body>


<!-- <script>
	import supabase from '../supabase.js';
    

	async function getData() {
  	const { data, error } = await supabase
    .from('Huile')
    .select()
  	if (error) throw new Error(error.message)
  
  return data
};
</script>

<div>
<h1>My favvorite games</h1>
{#await getData()}
  <p>Fetching data...</p>
{:then data}
  {#each data as game}
    <li>{game.name}</li>
  {/each}
{:catch error}
  <p>Something went wrong while fetching the data:</p>
  <pre>{error}</pre>
{/await}

</div>  
