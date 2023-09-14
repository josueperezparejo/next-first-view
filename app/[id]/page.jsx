import UserDisplay from "@/components/UserDisplay"

const getUserById = async (id) => {
    try {
        const res = await fetch(`https://reqres.in/api/users/${id}`)
        const data = await res.json()
        return data.data
    } catch (error) {
        console.log(error)
    }
}

const UserById = async ({ params }) => {
    
    const user = await getUserById(params.id)

    return (
        <UserDisplay user={user} />
    )
}

export default UserById
