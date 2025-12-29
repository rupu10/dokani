import { Button } from "@/components/ui/button";
import { stripe } from "@/lib/stripe";
import Image from "next/image";
import Link from "next/link";


export default async function Home() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 5,
  })
  // console.log(products);
  return (
    <div>
      <section>
        <div> 

          <div>
            <h2>Welcome to dokani</h2>
            <p>Discover the latest products at the best prices.</p>
            <Button asChild variant='default'>
              <Link href={"/products"}>Browse All Products</Link>
            </Button>
          </div>
          <Image alt="Banner Image" width={150} height={150} src={products.data[0].images[0]}></Image>

        </div> 
      </section>
    </div>
  );
}
