"use client"

import { useRouter } from "next/navigation"
import { createClient } from "@/supabase/client"

export default function LogoutButton() {
    const supabase = createClient() // For client-side usage
    const router = useRouter()

    const handleLogout = async () => {
        await supabase.auth.signOut() // Sign out user
        router.push("/") // Redirect to home page
    }

    return (
        <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
            Logout
        </button>
    )
}