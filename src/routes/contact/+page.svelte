<script>
	import { navigate } from "svelte-routing";
	import supabase from "../supabase.js";
	import small_logo from '$lib/images/small_logo_2.png';
	import big_logo from '$lib/images/big_logo.png';
	import search from '$lib/images/search.png';
	import account from '$lib/images/account.png';
	import cart from '$lib/images/cart.png';
	import newsletter from '$lib/images/newsletter.png';
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
  
	let name = '';
	let email = '';
	let message = '';
	let titre = '';
	let formError = null;

	let messageEnvoye = false;

	function envoyerFormulaire(e) {
		e.preventDefault();
		messageEnvoye = true;
	}
  
	const handleNameChange = (e) => {
	  if (e.target) {
		name = e.target.value;
	  }
	};
  
	const handleEmailChange = (e) => {
	  if (e.target) {
		email = e.target.value;
	  }
	};
  
	const handleMessageChange = (e) => {
	  if (e.target) {
		message = e.target.value;
	  }
	};
	const handleTitreChange = (e) => {
	  if (e.target) {
		titre = e.target.value;
	  }
	};
  
	const handleSubmit = async (e) => {
	  e.preventDefault();
  
	  if (!name || !email) {
		formError = 'Please fill in all the fields correctly.';
		return;
	  }
  
	  const { data, error } = await supabase.from('Contact').insert([{ name, email, message, titre }]);
  
	  if (error) {
		console.log(error);
		formError = 'Please fill in all the fields correctly.';
	  }
	  if (data) {
		console.log(data);
		formError = null;
		navigate('/');
	  }
	};
</script>
  

<svelte:head>
	<title>AROMA-ZONE</title>
	<meta name="contact" content="Contact form Aroma-zone" />
</svelte:head>



<body class="home font-karla text-lg">
	<Headerpage></Headerpage>
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
			<form action="#" class="space-y-8" on:submit|preventDefault={envoyerFormulaire} on:submit={handleSubmit}>
				<div>
				<label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nom : </label>
				<input type="name" id="name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Nom" required value={name} on:input={handleNameChange}>
				</div>
				<div>
					<label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email : </label>
					<input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="dddd@eeee.com" required value={email} on:input={handleEmailChange}>
				</div>
				<div>
					<label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Titre de la demande : </label>
					<input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Comment peut-on vous aider?" required value={titre} on:input={handleTitreChange}>
				</div>
				<div class="sm:col-span-2">
					<label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Votre message : </label>
					<textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Laiser un message..." required value={message} on:input={handleMessageChange}></textarea>
				</div>
				<div>
					<button type="submit" class="py-3 px-5 text-sm font-medium text-center text-gray-900 rounded-lg bg-primary-700 bg-gray-50 shadow-sm border border-gray-300 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Envoyer ma demande</button>
				</div>
				
				{#if messageEnvoye}
				<p>Message envoyé !</p>
				{/if}
				
				{#if formError}
				<p class="error">{formError}</p>
				{/if}
				
			</form>
			</div>
			</section>
		</div>
	</div>
	<Footerpage></Footerpage>
</body>





