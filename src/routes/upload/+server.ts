import { error } from '@sveltejs/kit'
import * as fs from 'fs'
import type { RequestHandler } from './$types'

export const GET = (({ url }) => {
  const files = fs.readdirSync('./static/uploads')

  // crear una url para cada archivo en uploads
  const urls = files.map((file) => `${url.origin}/uploads/${file}`)

  // formatear la respuesta como json name y url
  const data = files.map((file, index) => ({
    name: file,
    href: urls[index],
  }))

  return new Response(JSON.stringify(data))
}) satisfies RequestHandler

// ruta para subir archivos
export const POST = (async ({ request }) => {
  // recibe el archivo
  const data = await request.formData()
  const file = data.get('file') as File

  // crear el nombre para el archivo, primero volver a minúsculas y reemplazar espacios por guiones bajos
  const name = file.name.toLowerCase().replace(/ /g, '_')

  const filename = `${name}`

  // armar buffer
  const buffer = await file.arrayBuffer()

  // caragar el archivo en el servidor en la carpeta uploads
  fs.writeFileSync(`./static/uploads/${filename}`, Buffer.from(buffer))

  // añadir headers para json
  const headers = {
    'Content-Type': 'application/json',
  }

  // retornar json con la url del archivo
  return new Response(
    JSON.stringify({ url: 'https://via.placeholder.com/150' }),
    { headers }
  )
}) satisfies RequestHandler
