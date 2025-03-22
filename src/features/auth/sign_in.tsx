import {Button} from "antd";
import {LoginOutlined} from "@ant-design/icons";
import Link from "next/link";

export const SignIn = () => {
    return (
        <div>
            <Link href={"/auth/sign-in/"}>
                <Button type="primary" icon={<LoginOutlined/>}/>
            </Link>
        </div>
    )
}