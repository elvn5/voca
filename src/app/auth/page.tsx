"use client"

import React from 'react';
import {Button, Card, Form, Input, Spin, Typography} from 'antd';
import {LockOutlined, MailOutlined} from '@ant-design/icons';
import {Controller, useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';
import {useRouter} from "next/navigation";
import {useAuthStore} from "@/store";

// Define Zod schema for validation
const loginSchema = z.object({
    email: z.string().email("Введите валидный E-Mail").min(1, 'E-Mail обязателен'),
    password: z.string().min(6, 'Пароль должен содержать минимум 6 символов'),
});

export type LoginData = z.infer<typeof loginSchema>;

const LoginForm = () => {
    const {
        control,
        handleSubmit,
        formState: {errors},
    } = useForm<LoginData>({
        resolver: zodResolver(loginSchema),
    });
    const router = useRouter();
    const { login, isLoading } = useAuthStore()

    const onSubmit = (data: LoginData) => {
       login(data, router);
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <Card className="min-w-sm">
                <Typography.Title level={3}>Авторизация</Typography.Title>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Item
                        validateStatus={errors.email ? 'error' : ''}
                        help={errors.email?.message}
                    >
                        <Controller
                            name="email"
                            control={control}
                            defaultValue=""
                            render={({field}) => (
                                <Input
                                    {...field}
                                    prefix={<MailOutlined/>}
                                    placeholder="Email"
                                />
                            )}
                        />
                    </Form.Item>
                    <Form.Item
                        validateStatus={errors.password ? 'error' : ''}
                        help={errors.password?.message}
                    >
                        <Controller
                            name="password"
                            control={control}
                            defaultValue=""
                            render={({field}) => (
                                <Input.Password
                                    {...field}
                                    prefix={<LockOutlined/>}
                                    placeholder="Пароль"
                                />
                            )}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type="dashed" htmlType="submit" block>
                            {isLoading ? (<Spin />) : "Войти"}
                        </Button>
                    </Form.Item>
                </form>
            </Card>
        </div>
    );
};

export default LoginForm;