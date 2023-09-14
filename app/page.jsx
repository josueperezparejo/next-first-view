import UserList from "@/components/UserList"

const getUsers = async () => {
  try {
    const res = await fetch('https://reqres.in/api/users')
    const data = await res.json()
    return data.data
  } catch (error) {
    console.log(error)
  }
}

const Home = async () => {

  const users = await getUsers()

  return (
    <main>
      <UserList users={users} />
    </main>
  )
}

export default Home