"use client"

import { login, signup } from "./actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "@/components/ui/card"
import { useState } from "react"



export default function LoginPage() {
    const [email, setEmail] = useState("");

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (value === "admin") {
            setEmail("admin@siteadmin.com");
        } else {
            setEmail(value);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-background">
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle>Login</CardTitle>
                    <CardDescription>Sign in to your account</CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="flex flex-col space-y-4">
                        <div>
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                name="email"
                                value={email}
                                onChange={handleEmailChange}
                                placeholder="name@example.com"
                                required
                                className="mt-1"
                            />
                        </div>
                        <div>
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="********"
                                required
                                className="mt-1"
                            />
                        </div>
                        <div className="flex flex-col gap-2 pt-2">
                            <Button formAction={login}>Log in</Button>
                            <Button variant="outline" formAction={signup}>
                                Sign up
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}