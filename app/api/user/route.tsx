
import { NextRequest, NextResponse } from "next/server";
import { UserService } from "@/lib/userService";

export async function POST(req: NextRequest) {
    try {
        const { userEmail, userName } = await req.json();

        // Validate required fields
        if (!userEmail || !userName) {
            return NextResponse.json(
                { error: "Email and name are required" }, 
                { status: 400 }
            );
        }

        // Use the user service to create or find the user
        const user = await UserService.upsertUser({
            name: userName,
            email: userEmail,
            credits: 0
        });

        return NextResponse.json(user);
    } catch (error) {
        console.error('Error in user API:', error);
        return NextResponse.json(
            { error: "Internal server error" }, 
            { status: 500 }
        );
    }
}

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const email = searchParams.get('email');
        const userId = searchParams.get('id');

        if (email) {
            const user = await UserService.findUserByEmail(email);
            if (!user) {
                return NextResponse.json(
                    { error: "User not found" }, 
                    { status: 404 }
                );
            }
            return NextResponse.json(user);
        }

        if (userId) {
            const user = await UserService.getUserById(userId);
            if (!user) {
                return NextResponse.json(
                    { error: "User not found" }, 
                    { status: 404 }
                );
            }
            return NextResponse.json(user);
        }

        return NextResponse.json(
            { error: "Email or ID parameter is required" }, 
            { status: 400 }
        );
    } catch (error) {
        console.error('Error in user API:', error);
        return NextResponse.json(
            { error: "Internal server error" }, 
            { status: 500 }
        );
    }
}