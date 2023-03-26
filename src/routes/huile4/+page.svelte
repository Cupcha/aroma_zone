<script>
	import cart from '$lib/images/cart.png';
	import Huile1 from '$lib/images/Huile1.png';
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

</script>

<svelte:head>
	<title>huile1</title>
	<meta name="huile1" content="Huile1 shop Aroma-zone IE=edge width=device-width initial-scale=1.0">
	<script src="https://cdn.tailwindcss.com"></script>
</svelte:head>



<body class=" home font-karla text-lg">
	<Headerpage></Headerpage>

	<div id="container" class="bg-gray-200">
		<br>
		<br>
		<br>
		<br>
		<product-facet>
			<h1 class="font-bold text-center text-4xl py-7 ">HUILES ESSENTIELLES</h1>
			<div id="facet-main">
				<div id="nb-products" class="text-center text-xl">
					<span>Huile essentielle d'Achill&eacute;e millefeuille Bio</span>
				</div>
			</div>
			
			<product-list class="flex">
				<div class="max-w-2xl mx-auto px-4 py-8 lg:max-w-7xl grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 md:h-auto object-center">
					<div class="bg-white shadow-lg rounded-lg flex justify-center items-center">
						<a href=" ">
							<img src={Huile1} alt="Huile1" class="rounded-t-lg center">
						</a>
						<div class="p-4"></div>
					</div>

					<div class="bg-white shadow-lg rounded-lg">
						<div class="p-4">
							<div class="flex mb-5">
								<a href=" ">
									<h1 class="text-l text-gray-900 font-bold text-center text-xl">
									<br>
									<br>
									<br>
										
									Huile essentielle d'Achill&eacute;e millefeuille Bio
									</h1>
									<br>

									<h4 class="text-l text-gray-800   text-justify">
										Riche en actifs anti-inflammatoires et cicatrisants, cette huile est &eacute;galement r&eacute;put&eacute;e pour soulager les crampes intestinales et en cas de r&egrave;gles irr&eacute;guli&egrave;res ou peu abondantes.
									</h4>
								</a>
								<p class="ml-auto text-l font-medium text-gray-800">8,90&euro;</p>
							</div>
									<br>
									<br>
									<br>
									<br>
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
		<div class="max-w-2xl mx-auto px-4 py-8 lg:max-w-7xl grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 md:h-auto">
					
			<div class="bg-gray-200 shadow-lg rounded-lg ">
				<h5>
					Composition : 
					<br>
					<li> Monoterp&egrave;nes : sabin&egrave;ne (16.14%)</li>
					
					<li>Monoterp&eacute;nols : linalol (0.14%)</li>
					<li>Sesquiterp&egrave;nes : B&eacute;ta-caryophyll&egrave;ne (11.31%), Germacr&egrave;ne-D (17.75%), Chamazul&egrave;ne (12.02%)</li>
					<li>C&eacute;tones : Camphre (0.32%)</li>
				</h5>
				<div class="p-4">
				
				</div>
			</div>
		</div>
	</div>
	<Footerpage></Footerpage>
</body>





  
