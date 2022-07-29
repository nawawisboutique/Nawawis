import MainLayout from "../components/layout";
import Slider from "../components/slider";
// import { sql_query } from "../lib/db.js"
import Link from "next/link"
// import axios from "axios";
import dbConnect from "../utils/mongo";
import products from "../models/product";
// import order from "../models/order";
export default function Home({datanew, databest, dataall}) {
  return (
    <MainLayout>
      <Slider/>
      <section className="shadow-md px-4">
        <h6 className="my-5 mx-6 sm:text-3xl font-semibold">New Arrival</h6>
        <div>
          <div className="grid grid-cols-2 md:grid-col-2 justify-center">
          {datanew.map((item)=>
            <Link href={'/pesanan/' + item._id} key={item._id}>
              <div className="flex flex-col gap-2 text-2xl text-center font-semibold bg-white hover:bg-[#f5eddc]">
                <div className="flex flex-col">
                  <img className="object-contain p-5" src={item.img[0]} />
                  <p>{item.name_product.substring(0,26)}</p>
                  <div className="text-xl text-center">{"Rp."+item.price[0].toLocaleString()}
                  </div>
                </div>
              </div> 
            </Link>)}
          </div>
        </div>
      </section>
 
       <section className="shadow-md px-4">
        <h6 className="my-5 mx-6 sm:text-3xl font-semibold">Best Seller</h6>
        <div>
          <div className="grid grid-cols-2 md:grid-col-2 justify-center">
          {databest.map(item=>
            <Link href={'/pesanan/' +item._id} key={item._id}><a>
              <div className="flex flex-col gap-2 text-2xl text-center font-semibold bg-white hover:bg-[#f5eddc]">
                <div className="flex flex-col">
                  <img className="object-contain p-5" src={item.img[0]} />
                  <p>{item.name_product.substring(0,26)}</p>
                  <div className="text-xl text-center">{"Rp."+item.price[0].toLocaleString()}
                  </div>
                </div>
              </div> </a>
            </Link>)}
          </div>
        </div>
      </section> 

      <section className="shadow-md px-4">
        <h6 className="my-5 mx-6 sm:text-3xl font-semibold">All Product</h6>
        <div>
          <div className="grid grid-cols-2 md:grid-col-2 justify-center">
          {dataall.map(item=>
            <Link href={'/pesanan/' +item._id} key={item._id}><a>
              <div className="flex flex-col gap-2 text-2xl text-center font-semibold bg-white hover:bg-[#f5eddc]">
                <div className="flex flex-col">
                  <img className="object-contain p-5" src={item.img[0]} />
                  <p>{item.name_product.substring(0,26)}</p>
                  <div className="text-xl text-center">{"Rp."+item.price[0].toLocaleString()}
                  </div>
                </div>
              </div> </a>
            </Link>)}
          </div>
        </div>
      </section> 
    </MainLayout>
  )
}

export const getServerSideProps = async () => {
  await dbConnect();
    var pipeline = [
        {$sort :{"sold":-1 }}
    ]
  const data = await products.find().lean().limit(6);
  
  const best = await products.aggregate(pipeline).limit(6)
  const all = await products.find();

  // Pass data to the page via props
  return {
    props: {
      datanew: JSON.parse(JSON.stringify(data)),
      databest: JSON.parse(JSON.stringify(best)),
      dataall: JSON.parse(JSON.stringify(all)),
    },
    
  };
  
}

