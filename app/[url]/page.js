// dynamic route
import clientPromise from "@/lib/mongodb";
import { redirect } from "next/navigation";

export default async function page({params}){
    let parameter = await params;
    let short_url = parameter.url;
    // connect to mongodb
    const client = await clientPromise;

    // check the short url in the database
    const db = client.db("bitlinks");
    const collection = db.collection("urlShortner");
    const check = await collection.findOne({ customUrl: short_url });
    if(check){
        const update = await collection.updateOne({ customUrl:short_url},{$inc:{Number_of_visit:1}});
        return redirect(check.url);
    }
    else{
        return redirect(process.env.NEXT_PUBLIC_HOST);
    }
}