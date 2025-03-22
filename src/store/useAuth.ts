import {create} from 'zustand'
import {LoginData} from "@/app/auth/sign-in/page";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {supabase} from "@/services";

interface AuthState {
    isAuthenticated: boolean
    logout: () => void
    login: (data: LoginData, router: AppRouterInstance) => void;
    accessToken: string | null;
    isLoading: boolean;
}

export const useAuthStore = create<AuthState>()((set) => ({
    isAuthenticated: false,
    isLoading: false,
    accessToken: null,
    logout: () => {
        set({isAuthenticated: false})
        void supabase.auth.signOut();
    },
    login: async (data: LoginData, router) => {
        set({isLoading: true});

        try {
            const response = await supabase.auth.signInWithPassword({
                email: data.email,
                password: data.password,
            })

            const token = response.data.session?.access_token;

            set({isAuthenticated: true, accessToken: token });

            router.push("/");
        } catch (error) {
            console.debug(error)
        }finally {
            set({isLoading: false});
        }
    }
}))