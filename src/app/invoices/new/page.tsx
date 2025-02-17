import { sql } from "drizzle-orm";
import { db } from "@/db";

import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import { createAction } from "@/app/actions"

export default async function Home() {
  const results = await db.execute(sql`SELECT current_database()`)
  return (
    <main className="flex flex-col justify-center h-full gap-6 max-w-5xl mx-auto my-12">
      <div className="flex justify-between w-full">
            <h1 className="text-3xl font-semibold">
                Create Invoice
            </h1>
        </div>

        <form action={createAction} className="grid gap-4 max-w-xs">
            <div>
             <Label htmlFor="name" className="block font-semibold text-sm mb-2">
                Billing Name
             </Label>
             <Input type="text" id="name" name="name" />   
            </div>
            <div>
             <Label htmlFor="email" className="block font-semibold text-sm mb-2">
                Billing Email
             </Label>
             <Input type="email" id="email" name="email" />   
            </div>
            <div>
             <Label htmlFor="value" className="block font-semibold text-sm mb-2">
                Value
             </Label>
             <Input type="text" id="value" name="value" />   
            </div>
            <div>
             <Label htmlFor="description" className="block font-semibold text-sm mb-2">
                Description
             </Label>
             <Textarea id="description" name="description"></Textarea> 
            </div>
            <div>
                <Button className="w-full font-semibold">
                    Submit
                </Button>
            </div>
        </form>

    </main>
  );
}
