<script>
	import small_logo from '$lib/images/small_logo_2.png';
	import big_logo from '$lib/images/big_logo.png';
	import search from '$lib/images/search.png';
	import account from '$lib/images/account.png';
	import cart from '$lib/images/cart.png';
	import Maison4 from '$lib/images/Maison4.png';
	import newsletter from '$lib/images/newsletter.png';
	import Headerpage from '../Headerpage.svelte';
	import Footerpage from '../Footerpage.svelte';
</script>

	

<svelte:head>
	<title>maison4</title>
	<meta name="liste_touslesproduits" content="List products shop Aroma-zone IE=edge width=device-width initial-scale=1.0">
	<script src="https://cdn.tailwindcss.com"></script>

</svelte:head>



<body class="home font-karla">
	<Headerpage></Headerpage>

	<div id="container" class="bg-gray-200">
		<br>
									<br>
									<br>
									<br>
		<product-facet>
			
			<h1 class="font-bold text-center text-4xl py-7 ">MAISON</h1>
			
			<div id="facet-main">
				<div id="nb-products" class="text-center text-xl">
					<span>Colorant Oxyde Minéral Bleu</span>
				</div>
			</div>
			
			<product-list class="flex">
				<div class="max-w-2xl mx-auto px-4 py-8 lg:max-w-7xl grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 md:h-auto object-center">
					<div class="bg-white shadow-lg rounded-lg flex justify-center items-center">
						<a href=" ">
							<img src={Maison4} alt="Maison4" class="rounded-t-lg center">
						</a>
						<div class="p-4">
						
						</div>
					</div>

					<div class="bg-white shadow-lg rounded-lg">
						<div>

						</div>
						<div class="p-4">
							<div class="flex mb-5">
								<a href=" ">
									<h1 class="text-l text-gray-900 font-bold text-center text-xl">
									<br>
									<br>
									<br>
										
									Colorant Oxyde Minéral Bleu
									</h1>
									<br>

									<h4 class="text-l text-gray-800  text-justify">
										Le bleu est la dernière des couleurs primaires : c'est donc un indispensable pour composer vos teintes. En association avec les autres oxydes, vous pourrez réaliser des panels très beaux de verts, verts émeraude, violets, violine, bleus cyan, bleus nuit.									</h4>
								</a>
								<p class="ml-auto text-l font-medium text-gray-800">2,25&euro;</p>
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
					<li> Ultramarine (complexe minéral de silicates doubles de sodium et aluminium contenant du soufre - sans sels nocifs), silice, Kaolin</li>
					
					
				</h5>
				<div class="p-4">
				
				</div>
			</div>


		
	</div>
	<Footerpage></Footerpage>
</body>