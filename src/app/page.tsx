// Import your Client Component
import HomePage from '../screens/home'
 
async function getRepo() {
  const res = await fetch('https://api.github.com/users/eliaskalan/repos')
  const repos = await res.json()
  return repos
}
 
export default async function Page() {
  // Fetch data directly in a Server Component
  const repositories = await getRepo()
  // Forward fetched data to your Client Component
  return <HomePage repositories={repositories} />
}