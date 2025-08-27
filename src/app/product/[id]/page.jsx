
import React from 'react';

async function ProductDetailsPage({params}) {
    const p = await params
    const res = await fetch(`http://localhost:3000/api/serv/${p.id}`)
    const data = await res.json();
  return (
    <div className=''>
        <div className="w-10/12 mx-auto p-4 my-6 shadow-md dark:bg-gray-50 dark:text-gray-800">
	<div className="flex justify-between pb-4 border-bottom">
		<div className="flex items-center">
			<a rel="noopener noreferrer" href="#" className="mb-0 capitalize dark:text-gray-800">Photography</a>
		</div>
		
	</div>
	<div className="space-y-4">
		<div className="space-y-2">
			<img src={data.image} alt="" className="block object-cover object-center w-full rounded-md h-120 dark:bg-gray-500" />
			<div className="flex items-center text-3xl">
				<span className='text-orange-600 font-semibold'>$ {data.price}</span>
			</div>
		</div>
		<div className="space-y-2">
			<h3 className="text-xl font-semibold dark:text-violet-600">{data.name}</h3>
      <h3 className="text-xl font-semibold">Brand: {data.brand}</h3>
      <h3 className="text-xl font-semibold">Color: {data.color}</h3>
			<p className="leading-snug dark:text-gray-600">{data.description}</p>
		</div>
	</div>
</div>
    </div>
  );
}

export default ProductDetailsPage;