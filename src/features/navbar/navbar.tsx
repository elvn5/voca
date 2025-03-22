"use client"

import {AppDrawer} from "@/components";
import {Logout, SignIn} from "@/features/auth";
import {useAuthStore} from "@/store";

export const Navbar = () => {
    const {isAuthenticated} = useAuthStore()

    return (
        <div className="flex justify-between">
            <AppDrawer/>
            {isAuthenticated ? <Logout/> : <SignIn/>}
        </div>
    )
}