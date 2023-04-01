<script lang="ts">
  import { Listgroup } from 'flowbite-svelte'
  type FileData = {
    name: string
    href: string
  }
  const fetchData = (async () => {
    const response = await fetch('/upload')

    return await response.json()
  })() as Promise<FileData[]>
</script>

{#await fetchData}
  <p>...waiting</p>
{:then data}
  <ul class="mt-5">
    <Listgroup active items={data} let:item>
      {item.name}
    </Listgroup>
  </ul>
{:catch error}
  <p>An error occurred!</p>
{/await}
