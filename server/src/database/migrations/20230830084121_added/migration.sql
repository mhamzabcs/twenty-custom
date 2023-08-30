/*
  Warnings:

  - Made the column `idealCustomerProfile` on table `companies` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "companies" ALTER COLUMN "idealCustomerProfile" SET NOT NULL;

-- AlterTable
ALTER TABLE "workspaces" ADD COLUMN     "platformKey" TEXT;

-- CreateTable
CREATE TABLE "PlatformKey" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "platformKey" TEXT NOT NULL,
    "workspaceName" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "PlatformKey_pkey" PRIMARY KEY ("id")
);
