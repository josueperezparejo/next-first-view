"use client"
import Link from 'next/link'

export default function UserDisplay({user}) {
    return (
        <div className="bg-purple-300 p-5 rounded-xl flex items-center gap-3 w-fit mx-auto">
            <img className="rounded-full" src={user.avatar} alt={`photo ${user.first_name}`} />

            <div className="text-center">
                <h2 className="font-bold">{user.first_name} {user.last_name}</h2>
                <p className="mb-3">{user.email}</p>
                <Link className="bg-blue-300 p-2 rounded-lg" href={'/'}>Go Back!</Link>
            </div>
        </div>
    )
}
