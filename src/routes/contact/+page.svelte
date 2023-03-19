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
	let name = '';
	let email = '';
	let message = '';
	let status = '';

	// @ts-ignore
	async function handleSubmit(event) {
		event.preventDefault();
		// TODO: Implement form submission logic here
		// Example: Send data to an API endpoint using fetch()
		const response = await fetch('/api/contact', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ name, email, message }),
		});
		if (response.ok) {
		status = 'Message sent successfully!';
		} else {
		status = 'An error occurred while sending your message.';
		}
	}
</script>

	

<svelte:head>
	<title>AROMA-ZONE</title>
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






	<div id="container" class="bg-gray-200">
		<br>
									<br>
									<br>
									<br>
		
		<div class="max-w-2xl mx-auto px-4 py-8 lg:max-w-7xl grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 md:h-auto">
					
			<div class="bg-gray-200 shadow-lg rounded-lg ">
				<section class="bg-white dark:bg-gray-900">
          <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
              <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">CONTACTER LE SERVICE CLIENT</h2>
              <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Notre Service Client, situ&eacute; en France pr&egrave;s d'Avignon, est &agrave; votre dispotion pour toute question concernant votre compte client, vos commandes, nos boutiques, pour vous conseiller dans l'utilisation de nos produits...</p>
              <form action="#" class="space-y-8">
                <div>
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nom : </label>
                  <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Nom" required>
              </div>
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email : </label>
                      <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="dddd@eeee.com" required>
                  </div>
                  <div>
                      <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Titre de la demande : </label>
                      <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Comment peut-on vous aider?" required>
                  </div>
                  <div class="sm:col-span-2">
                      <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Votre message : </label>
                      <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Laiser un message..."></textarea>
                  </div>
                  <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Envoyer ma demande</button>
              </form>
          </div>
        </section>
				<div class="p-4">
				
				</div>
			</div>


		
	</div>

</body>

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
                  <h2 class="mb-6 text-sm font-semibold uppercase text-browntext">Notre identit&eacute;</h2>
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
                          <a href="https://www.aroma-zone.com/info/qui-sommes-nous#nosgaranties" class="hover:underline ">Qualit&eacute; et responsabilit&eacute;</a>
                      </li>
                      <li>
                          <a href="https://www.aroma-zone.com/info/satisfait-ou-rembourse" class="hover:underline">Satisfait ou rembours&eacute;</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-browntext uppercase">Nos services</h2>
                  <ul class="text-browntext">
                      <li class="mb-4">
                          <a href="https://www.aroma-zone.com/info/mentions-legales" class="hover:underline">Mentions l&eacute;gales</a>
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
          <span class="text-sm sm:text-center text-browntext">© 2023 <a href="https://www.aroma-zone.com/info/base-de-connaissance" class="hover:underline">Aroma Zone</a>. Tous droits r&eacute;serv&eacute;s.
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