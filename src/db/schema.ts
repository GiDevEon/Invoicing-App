import { pgTable, pgEnum, serial, timestamp, text, integer } from "drizzle-orm/pg-core";

export const statusEnum = pgEnum("status", ["open", "paid", "void", "uncollectible"]);

export const Invoices = pgTable("invoices", {
    id: serial("id").primaryKey().notNull(),
    createAt: timestamp("createTs").defaultNow().notNull(),
    value: integer("value").notNull(),
    description: text("description").notNull(),
    status: statusEnum("status").notNull(),
});

