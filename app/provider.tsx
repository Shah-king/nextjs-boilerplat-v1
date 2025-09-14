"use client"
import { auth } from '@/configs/firebaseConfig';
import { AuthContext } from '@/context/AuthContext';
import { onAuthStateChanged, User } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react'
import { ThemeProvider as NextThemesProvider } from "next-themes"

interface AuthContextType {
    user: User | null;
}

function Provider({
    children,
    ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
    const [user, setUser] = useState<User | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            setUser(user);
        });
        return () => unsubscribe();
    }, []);

    if (!mounted) {
        return (
            <NextThemesProvider {...props}>
                <AuthContext.Provider value={{ user: null }}>
                    <div>{children}</div>
                </AuthContext.Provider>
            </NextThemesProvider>
        );
    }

    return (
        <NextThemesProvider {...props}>
            <AuthContext.Provider value={{ user }}>
                <div>{children}</div>
            </AuthContext.Provider>
        </NextThemesProvider>
    )
}

export const useAuthContext = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        return { user: null };
    }
    return context;
};

export default Provider