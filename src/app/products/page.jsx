import dbConnect, { collectionNamesObj } from '@/lib/dbConnect';
import Link from 'next/link';
import React from 'react';

async function Products() {
    const productCollection = dbConnect(collectionNamesObj.productsCollection)
    const data = await productCollection.find({}).toArray();
  return (
    <div className='grid grid-cols-12 gap-3'>
        {
            data.map((item)=>{
                return (
                    <div key={item._id} className="col-span-4 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
	<img src={item?.image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-3xl font-semibold tracking-wide">{item.name}</h2>
            <h2 className='font-semibold text-3xl text-orange-500'>$ {item.price}</h2>
			<p className="dark:text-gray-800">{item.description}</p>
		</div>
		<Link href={`/product/${item._id}`}><button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md border border-violet-600 hover:bg-violet-600 hover:text-white cursor-pointer">View details</button></Link>
	</div>
</div>
                )
            })
        }
    </div>
  );
}

export default Products;