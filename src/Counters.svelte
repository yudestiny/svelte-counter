<script lang="ts">
  import Counter from './Counter.svelte';
  import { counters, sum } from './stores';

  const title = '<strong>counter</strong>';
  let i: number = 1;
  $:counter = {id:i, name: "new", count: 0};

  function addCounter (){
    i += 1;
    counters.update(c => [...c, counter]);
  }
  function handleDelete (event:any) {
    counters.update((n) => (
      n.filter((i) => i.id != event.detail.id)
      ));
  }
</script>
<h1 class="text-center text-5xl m-7">
  {@html title.toUpperCase()}
</h1>
<div class="justify-center">
  <div class="text-center">
    <p class=" text-4xl">LIST :
    {#each $counters as list, index}
      <label for="">{list.name}{index === $counters.length - 1 ? (""):(", ")}</label>
    {:else}
      <div class="text-3xl m-6">No Counter...</div>
    {/each}
    </p>
      <p class=" text-4xl">SUM : <label class="m-6" for="">{$sum}</label></p>
  </div> 
  <ul class="m-6">
    {#each $counters as count (count.id)}
      <Counter id={count.id} on:delete={handleDelete} />
    {/each}
  </ul>
  
  <button on:click={addCounter} class="shadow-md p-5 text-2xl rounded-lg">カウンターを追加</button>
</div>
