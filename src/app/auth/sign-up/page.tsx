"use client"

import React from 'react';
import {Button, Card, Form, Input, notification, Typography} from 'antd';
import {LockOutlined, MailOutlined} from '@ant-design/icons';
import {Controller, useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';
import {supabase} from "@/services";
import {toast} from "react-toastify";
import Link from "next/link";

// Define Zod schema for validation
const signUpSchema = z.object({
    email: z.string().email("Введите валидный E-Mail").min(1, 'E-Mail обязателен'),
    password: z.string().min(6, 'Пароль должен содержать минимум 6 символов'),
    confirmPassword: z.string().min(6, 'Пароль должен содержать минимум 6 символов'),
}).refine((data) =>
    data.password === data.confirmPassword, {
    message: 'Пароли не совпадают',
    path: ['confirmPassword'],
});

export type SignUpData = z.infer<typeof signUpSchema>;

const SignUpPage = () => {
    const {
        control,
        handleSubmit,
        formState: {errors},
    } = useForm<SignUpData>({
        resolver: zodResolver(signUpSchema),
    });

    const onSubmit = async (data: SignUpData) => {
        try {
            const response = await supabase.auth.signUp({
                email: data.email,
                password: data.password,
            })


            if(!!response.data.session?.access_token) {
                toast.success("Пользователь успешно создан")
            }

            toast.error(response.error?.message)
        } catch (e) {
            console.debug(e)
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <Card className="min-w-sm">
                <Typography.Title level={3}>Регистрация</Typography.Title>
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
                    <Form.Item
                        validateStatus={errors.confirmPassword ? 'error' : ''}
                        help={errors.confirmPassword?.message}
                    >
                        <Controller
                            name="confirmPassword"
                            control={control}
                            defaultValue=""
                            render={({field}) => (
                                <Input.Password
                                    {...field}
                                    prefix={<LockOutlined/>}
                                    placeholder="Повторите пароль"
                                />
                            )}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" block>
                            Зарегистрироваться
                        </Button>
                    </Form.Item>
                    <Form.Item>
                        <Link href="/auth/sign-in/">
                            <Button type="text" htmlType="button" block>
                                Войти
                            </Button>
                        </Link>
                    </Form.Item>
                </form>
            </Card>
        </div>
    );
};

export default SignUpPage;