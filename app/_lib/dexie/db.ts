import Dexie, { type EntityTable } from "dexie";

export type Bullet = {
    id: string;
    text: string;
};

class AppDB extends Dexie {
    bullets!: EntityTable<Bullet, "id">;

    constructor() {
        super("SideResumeDB");
        this.version(1).stores({
            bullets: "id, text",
        });
    }
}

export const db = new AppDB();