<script>
	import cart from '$lib/images/cart.png';
	import Beaute6 from '$lib/images/Beaute6.png';
	import Headerpage from '../Headerpage.svelte';
	import Footerpage from '../Footerpage.svelte';

</script>

<svelte:head>
	<title>Beaute6</title>
	<meta name="beaute6" content="beaute6 shop Aroma-zone IE=edge width=device-width initial-scale=1.0">
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
			<h1 class="font-bold text-center text-4xl py-7 ">BEAUTE</h1>
			<div id="facet-main">
				<div id="nb-products" class="text-center text-xl">
					<span>Argile verte illite surfine</span>
				</div>
			</div>
			
			<product-list class="flex">
				<div class="max-w-2xl mx-auto px-4 py-8 lg:max-w-7xl grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 md:h-auto object-center">
					<div class="bg-white shadow-lg rounded-lg flex justify-center items-center">
						<a href=" ">
							<img src={Beaute6} alt="Beaute6" class="rounded-t-lg center">
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
									Argile verte illite surfine
									</h1>
									<br>

									<h4 class="text-l text-gray-800   text-justify">
										L'argile verte est la plus populaire et la plus absorbante des argiles. De la famille des illites, cette argile est connue aussi bien pour ses bienfaits sur la peau et les cheveux que pour ses propriétés en santé et usage domestique. Elle nettoie et purifie les peaux mixtes, grasses et à imperfections, purifie le cuir chevelu et lutte contre l’excès de sébum des cheveux gras. Elle est idéale pour préparer des masques, cataplasmes, et enveloppements pour le bien-être. Cette argile figure parmi les indispensables du quotidien !									</h4>
								</a>
								<p class="ml-auto text-l font-medium text-gray-800">5.05&euro;</p>
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
					<li>Silicate d’aluminium hydraté </li>
				</h5>
				<div class="p-4">
				
				</div>
			</div>
		</div>
	</div>
	<Footerpage></Footerpage>
</body>
