"use client"
import Link from 'next/link'

export default function UserList({users}) {
    return (
        <div className="grid grid-cols-2 w-fit gap-5 mx-auto">
            {users.map(user => (
                <div key={user.id} className="bg-purple-300 p-5 rounded-xl flex items-center gap-3">
                    <img className="rounded-full" src={user.avatar} alt={`photo ${user.first_name}`} />

                    <div className="text-center">
                        <h2 className="font-bold">{user.first_name} {user.last_name}</h2>
                        <p className="mb-3">{user.email}</p>
                        <Link className="bg-green-300 p-2 rounded-lg" href={`/${user.id}`}>View Profile!</Link>
                    </div>
                </div>
            ))}
        </div>
    );
}
