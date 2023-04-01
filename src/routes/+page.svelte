<script lang="ts">
  import { Fileupload, Label } from 'flowbite-svelte'

  let uploadedFile: File | undefined

  // detectar el tamaño del archivo
  function fileInput(event: any) {
    uploadedFile = event.target.files[0]

    // enviar el archivo al servidor
    const formData = new FormData()
    formData.append('file', event.target.files[0])
    fetch('/upload', {
      method: 'POST',
      body: formData,
    })

    // limpiar el input
    event.target.value = ''
  }
</script>

<Label class="pb-2" for="small_size">Small file input</Label>
<Fileupload size="sm" on:change={fileInput} />

{#if uploadedFile}
  <div>
    <p>Nombre del archivo: {uploadedFile.name}</p>
    <p>Tamaño del archivo: {uploadedFile.size} bytes</p>
  </div>
{/if}
