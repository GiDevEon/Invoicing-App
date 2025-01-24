"use server";    //telling react that this is a server component

import { Invoices } from "@/db/schema";
import { db } from "@/db";


export async function createAction(formData: FormData) { //action is a server component, it's responsible for handling form data
              	        
    const name = formData.get('name')
    const email = formData.get('email')
    const value = Math.floor(parseFloat(String(formData.get('value'))) * 100) //convert string to number, multiply by 100, convert back to string
    const description = formData.get('description') as string;
    
    await db.insert(Invoices).values({  //inserting data into the database

        value,
        description,
        status: "open"
    })
  }