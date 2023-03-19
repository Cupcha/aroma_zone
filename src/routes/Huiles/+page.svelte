
<script>
	import supabase from '../supabase.js';
    
	async function getData() {
  	const { data, error } = await supabase
    .from('Huile')
    .select()
  	if (error) throw new Error(error.message)
  
  return data
};
</script>

<body>
<h1>My Huiles</h1>
{#await getData()}
  <p>Fetching data...</p>
{:then data}
  {#each data as huile}
    <li>{huile.name}</li>
  {/each}
{:catch error}
  <p>Something went wrong while fetching the data:</p>
  <pre>{error}</pre>
{/await}

</body> 