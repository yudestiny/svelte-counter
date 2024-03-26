<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { counters } from "./stores";

    export let id: number;
    $: counter = $counters.find(c => c.id === id);
    console.log(id)
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    const dispatch = createEventDispatcher();
    function handlePlus (id: number){
        $counters = $counters.map(c => {
            if (c.id === id) {
                c.count += 1;
            }
            return c;
        })
    }
    function handleMinus (id: number){
        $counters = $counters.map(c => {
            if (c.id === id) {
                c.count -= 1;
            }
            return c;
        })
    }
    function handleInit (id: number){
        $counters = $counters.map(c => {
            if (c.id === id) {
                c.count = 0;
            }
            return c;
        })
    }
    function handleDelete (id: number) {
        $counters = $counters.filter(c => (c.id != id));
    }
    
</script>


<li style="background-color: {colors[id%colors.length]}" class="flex gap-2 items-center bg-white">
    <input type="text" class="h-32 p-3 m-5 text-4xl shadow" bind:value={counter.name} />
      <p class="w-32 text-center items-center text-4xl ">{counter.count}</p>
      <button on:click={() => handlePlus(id)} class="rounded-full p-2 text-4xl text-red-500 shadow hover:bg-gray-300 hover:text-red-300 h-32 w-32">+1</button>
      <button on:click={() => handleMinus(id)} class="rounded-full p-2 text-4xl text-blue-500 shadow hover:text-blue-300 h-32 w-32">-1</button>
      <button on:click={() => handleInit(id)} class="rounded-full p-2 text-4xl hover:text-gray-300 shadow h-32 w-32">0</button>
      <button on:click={() => handleDelete(id)} class="rounded-full p-2 text-4xl hover:text-gray-300 shadow h-32 w-32">delete</button>
    </li>