

export default async function Home() {
  const products = await fetch('https://dummyjson.com/products')
  const result = await products.json()

  return (
    <div>
      <h1>HOME</h1>
      <pre>{JSON.stringify(result)}</pre>
    </div>

  )
}
