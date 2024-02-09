<script lang="ts">
  let counters = [
      {name:"new", count: 0}
  ];
  let sum: number;
  $: sum = counters.reduce((total, current) => total + current.count, 0);
  let counterNames: any;
  $: counterNames = counters.reduce((all, current) => [...all, current.name], []);


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
      counters = counters.filter((c,i) => index != i)

  }
</script>
<ul>
{#each counters as count, index}
<li class="flex ">
  <input type="text" bind:value={count.name} />
  <p>{count.count}</p>
  <button on:click={() => handlePlus(index)} class="text-red-500 border hover:text-blue-300">+1</button>
  <button on:click={() => handleMinus(index)} class="text-blue-500 border hover:text-blue-300">-1</button>
  <button on:click={() => handleInit(index)} class="border">0</button>
  <button on:click={() => deleteCounter(index)}>x</button>
</li>
{/each}
</ul>

<button on:click={addCounter} class="shadow p-2">カウンターを追加</button>
<div>
  <p>LIST: {counterNames}</p>
  <p>SUM: {sum}</p>
</div>