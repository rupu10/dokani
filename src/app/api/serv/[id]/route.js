import { NextResponse } from "next/server";
import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export const GET = async (req, { params }) => {
  const p = await params;
  const productsCollection = dbConnect(collectionNamesObj.productsCollection);
  const data = await productsCollection.findOne({ _id: new ObjectId(p.id) });

  return NextResponse.json(data);
};


// export const POST = async (req, {params})