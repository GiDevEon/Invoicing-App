import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"



export default function Home() {
  return (
    <main className="flex flex-col justify-center h-full gap-6 max-w-5xl mx-auto my-12">
      <div className="flex justify-between w-full">
            <h1 className="text-3xl font-semibold">
                Create Invoice
            </h1>
        </div>

        <form className="grid gap-4 max-w-xs">
            <div>
             <Label htmlFor="name" id="name" name="name" className="block font-semibold text-sm mb-2">
                Billing Name
             </Label>
             <Input type="text" />   
            </div>
            <div>
             <Label htmlFor="email" id="email" name="email" className="block font-semibold text-sm mb-2">
                Billing Email
             </Label>
             <Input type="email" />   
            </div>
            <div>
             <Label htmlFor="value" id="value" name="value" className="block font-semibold text-sm mb-2">
                Value
             </Label>
             <Input type="text" />   
            </div>
            <div>
             <Label htmlFor="description" id="description" name="value" className="block font-semibold text-sm mb-2">
                Description
             </Label>
             <Textarea ></Textarea> 
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
