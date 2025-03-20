"use client"
import {useState} from "react";
import {Button, Drawer} from "antd";
import {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";

const AppDrawer = () => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed((!collapsed))
    };



    return (
        <>
            <Button type="primary" onClick={toggleCollapsed}>
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button>
            <Drawer
                title="Меню навигации"
                onClose={()=> setCollapsed(false)}
                open={collapsed}
                placement="left"
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </>
    );
};

export { AppDrawer };