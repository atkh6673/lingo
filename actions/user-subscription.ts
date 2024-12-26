"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { auth } from "@clerk/nextjs/server";

import db from "@/db/drizzle";
import { POINTS_TO_UPGRADE } from "@/constants";
import { userProgress, userSubscription } from "@/db/schema";
import { getUserSubscription, getUserProgress } from "@/db/queries";

export const upgradeUser = async () => {
    const { userId } = auth();
    
    if (!userId) {
        throw new Error("Unauthorised");
    }

    const currentUserProgress = await getUserProgress();

    if (!currentUserProgress) {
        throw new Error("User progress not found");
    }

    const userSubscriptionInfo = await getUserSubscription();

    if (userSubscriptionInfo?.isActive) {
        throw new Error("Subscription already active");
    }

    if (currentUserProgress.points < POINTS_TO_UPGRADE) {
        throw new Error("Not enough points");
    }

    await db.update(userProgress).set({
        points: currentUserProgress.points - POINTS_TO_UPGRADE
    }).where(
        eq(userProgress.userId, currentUserProgress.userId)
    );

    const ONE_MONTH_MS = 2592000000;
    const currentPeriodEnd = new Date().getTime() + ONE_MONTH_MS;
    await db.insert(userSubscription).values({
        userId,
        currentPeriodEnd: new Date(currentPeriodEnd)
    });

    revalidatePath("/shop");
    revalidatePath("/learn");
    revalidatePath("/quests");
    revalidatePath("/leaderboard");
};