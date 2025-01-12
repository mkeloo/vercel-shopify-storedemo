import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

export default function Home() {
    return (
        <main className="w-full h-[80vh] flex items-center justify-center py-10 gap-10">
            <h1 className="text-2xl font-bold">Home</h1>
            <Link href='/private'>
                <Button variant='default'>
                    Private Page
                </Button>
            </Link>
        </main>
    )
}
