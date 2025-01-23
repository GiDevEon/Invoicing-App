import { pgTable, pgEnum, serial, timestamp, text, integer } from "drizzle-orm/pg-core";

export const statusEnum = pgEnum("status", ["pending", "paid", "cancelled"]);

export const Invoices = pgTable("invoices", {
    id: serial("id").primaryKey().notNull(),
    createdAt: timestamp("createTs").defaultNow.notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
    value: integer("value").notNull(),
    description: text("description").notNull(),
    status: statusEnum("status").notNull(),
});

