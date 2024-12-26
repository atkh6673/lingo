import { auth } from "@clerk/nextjs/server";

const adminIds = [
    "user_2n9uP3Ruu8dJwXcbGbv8gAE4PVi"
];

export const isAdmin = () => {
    const { userId } = auth();

    if (!userId) return false;

    return adminIds.indexOf(userId) !== -1
}