<script lang="ts">
  let counters = [
      {name:"new", count: 0}
  ];
  let sum: number;
  $: sum = counters.reduce((total, current) => total + current.count, 0);
  let counterNames: any;
  $: counterNames = counters.reduce((all: any, current: any) => [...all, current.name], []);


  function handlePlus (index: number){
      counters[index].count += 1;
  }
  function handleMinus (index: number){
      if (counters[index].count > 0) {
          counters[index].count -= 1;
      }
  }
  function handleInit (index: number){
      counters[index].count = 0;
  }
  function addCounter (){
      counters = [...counters,{name:"new", count: 0}];
  }
  function deleteCounter (index: number){
      counters = [...counters.slice(0, index), ...counters.slice(index + 1)]
  }
</script>
<div class="justify-center">
  <div class="text-center">
    
    {#if counterNames.length}
      <p class=" text-4xl">LIST :<label class="m-10" for="">{counterNames}</label></p>
      <p class=" text-4xl">SUM : <label class="m-6" for="">{sum}</label></p>
    {:else}
      <div class="text-3xl m-6">No Counter...</div>
    {/if}
  </div>
  <ul class="m-6">
    {#each counters as count, index}
      <li class="flex gap-2 items-center bg-white">
        <input type="text" class="h-32 p-3 m-5 text-4xl shadow" bind:value={count.name} />
        <p class="w-32 text-center items-center text-4xl ">{count.count}</p>
        <button on:click={() => handlePlus(index)} class="rounded-full p-2 text-4xl text-red-500 shadow hover:bg-gray-300 hover:text-red-300 h-32 w-32">+1</button>
        <button on:click={() => handleMinus(index)} class="rounded-full p-2 text-4xl text-blue-500 shadow hover:text-blue-300 h-32 w-32">-1</button>
        <button on:click={() => handleInit(index)} class="rounded-full p-2 text-4xl hover:text-gray-300 shadow h-32 w-32">0</button>
        <button on:click={() => deleteCounter(index)} class="rounded-full p-2 text-4xl hover:text-gray-300 shadow h-32 w-32">delete</button>
      </li>
    {/each}
  </ul>
  
  <button on:click={addCounter} class="shadow-md p-5 text-2xl rounded-lg">カウンターを追加</button>
</div>
