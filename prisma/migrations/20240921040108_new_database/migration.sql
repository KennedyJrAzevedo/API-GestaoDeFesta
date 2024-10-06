-- CreateTable
CREATE TABLE "Party" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(40) NOT NULL,
    "date" TIMESTAMP(0) NOT NULL,
    "adress" VARCHAR(50) NOT NULL,
    "owner" VARCHAR(40) NOT NULL,
    "status" BOOLEAN NOT NULL,

    CONSTRAINT "Party_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Guest" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(40) NOT NULL,
    "email" VARCHAR(127) NOT NULL,

    CONSTRAINT "Guest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PartyGuest" (
    "idGuest" INTEGER NOT NULL,
    "idParty" INTEGER NOT NULL,

    CONSTRAINT "PartyGuest_pkey" PRIMARY KEY ("idGuest","idParty")
);

-- AddForeignKey
ALTER TABLE "PartyGuest" ADD CONSTRAINT "PartyGuest_idGuest_fkey" FOREIGN KEY ("idGuest") REFERENCES "Guest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PartyGuest" ADD CONSTRAINT "PartyGuest_idParty_fkey" FOREIGN KEY ("idParty") REFERENCES "Party"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
