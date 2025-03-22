"use client"

import Link from "next/link";
import {Button} from "antd";
import {LogoutOutlined} from "@ant-design/icons";
import {useAuthStore} from "@/store";
import {useRouter} from "next/navigation";


export const Logout = () => {
    const {logout} = useAuthStore();
    const router = useRouter();

    return (
        <div>
            <Link href={"/auth/sign-in/"}>
                <Button type="primary" icon={<LogoutOutlined/>} onClick={()=> {
                    logout();
                    router.replace("/auth");
                }}/>
            </Link>
        </div>
    )
}