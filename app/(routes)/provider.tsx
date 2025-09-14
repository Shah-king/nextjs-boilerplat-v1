"use client"
import React, { useEffect } from 'react'
import { useAuthContext } from '../provider';
import { useRouter } from 'next/navigation';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import axios from "axios";
import AppHeader from '../_components/AppHeader';
import { AppSidebar } from '../_components/AppSidebar';

function DashboardProvider({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const user = useAuthContext();
    const router = useRouter();

    useEffect(() => {
        // Redirect to home if user is not authenticated
        if (!user?.user) {
            router.replace('/');
            return;
        }

        // Check user in database if authenticated
        checkUser();
    }, [user]);

    const checkUser = async () => {
        try {
            const result = await axios.post('/api/user', {
                userName: user?.user?.displayName,
                userEmail: user?.user?.email
            });
            console.log('User data received:', result.data);
        } catch (error) {
            console.error('Error checking user:', error);
        }
    }


    return (
        <SidebarProvider>
            <AppSidebar />
            <main className='w-full'>
                <AppHeader />
                {/* <SidebarTrigger /> */}
                <div className='p-10'>{children}</div>
            </main>
        </SidebarProvider>

    )
}

export default DashboardProvider