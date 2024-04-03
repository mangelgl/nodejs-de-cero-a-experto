-- CreateTable
CREATE TABLE "ToDo" (
    "id" SERIAL NOT NULL,
    "unique_id" VARCHAR NOT NULL,
    "message" VARCHAR NOT NULL,
    "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ToDo_pkey" PRIMARY KEY ("id")
);
