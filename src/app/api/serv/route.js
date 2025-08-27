import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server"
import { authOptions } from "../auth/[...nextauth]/route";

export const POST = async (req) => {
    const body = await req.json();
    const productsCollection = dbConnect(collectionNamesObj.productsCollection)
    const result = await productsCollection.insertOne(body)
    const session = await getServerSession(authOptions)
    const email = session?.user?.email
    const isOwnerOK = email
    return NextResponse.json(result)
}

// import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";
// import { getServerSession } from "next-auth";
// import { NextResponse } from "next/server";
// import { authOptions } from "../auth/[...nextauth]/route";

// export const POST = async (req) => {
//   try {
//     // Get the session
//     const session = await getServerSession(authOptions);

//     // If user is not logged in, block access
//     if (!session) {
//       return NextResponse.json(
//         { error: "Unauthorized" },
//         { status: 401 }
//       );
//     }

//     // Parse request body
//     const body = await req.json();

//     // Connect to DB collection
//     const productsCollection = dbConnect(collectionNamesObj.productsCollection);

//     // Add owner info (optional: track who created the product)
//     const newProduct = {
//       ...body,
//       ownerEmail: session.user.email, // logged-in user's email
//       createdAt: new Date(),
//     };

//     // Insert into DB
//     const result = await productsCollection.insertOne(newProduct);

//     return NextResponse.json(
//       { message: "Product added successfully", data: result },
//       { status: 201 }
//     );
//   } catch (error) {
//     console.error("Error inserting product:", error);
//     return NextResponse.json(
//       { error: "Something went wrong" },
//       { status: 500 }
//     );
//   }
// };
