import { redirect } from "next/navigation"

import { createClient } from "@/supabase/server"
import LogoutButton from "@/components/LogOut" // Client component for logout logic
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default async function PrivatePage() {
    const supabase = await createClient()

    const { data, error } = await supabase.auth.getUser()
    if (error || !data?.user) {
        redirect("/login") // Redirect to login if user is not authenticated
    }

    return (
        <main className="flex items-center justify-center py-10 gap-10">
            <p>Hello {data.user.email}</p>
            <LogoutButton />
            <Link href='/'>
                <Button variant='default'>
                    Home
                </Button>
            </Link>
        </main>
    )
}