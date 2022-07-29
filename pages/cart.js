import MainLayout from "../components/layout";
import Slider from "../components/slider";
// import { sql_query } from "../lib/db.js"
import Link from "next/link"
import axios from "axios";
import dbConnect from "../utils/mongo";
// import products from "../models/product";
import order from "../models/order";

export default function Home({dataorder}) {
    
  return (
    <MainLayout>
      <Slider/>
     <section className="shadow-md px-2">
        <h6 className="my-5 mx-6 sm:text-4xl font-bold">Order</h6>
        <div>
          <div className="grid grid-cols-2 md:grid-cols-2 justify-center">
          {dataorder.map((item)=>
            <Link href={'/payment/' + item._id} key={item._id}><a>
              <div className="flex flex-col text-lg bg-white hover:bg-[#f5eddc]">
                <div className="flex flex-col p-8">
                  <img className="" src={item.product_img[0]} />
                  <p className="font-bold ml-24">Name Product :</p><span className="ml-24">{item.name_product.substring(0,26)}</span>
                  <p className="font-bold ml-24">Size :</p><span className="ml-24">{item.size}</span>
                  <p className="font-bold ml-24">Addres :</p><span className="ml-24">{item.addres}</span>
                  <p className="font-bold ml-24">Note :</p><span className="ml-24">{item.note}</span>
                  <p className="font-bold ml-24">Customer :</p><span className="ml-24">{item.name_customer}</span>
                  <p className="font-bold ml-24">Status :</p><span  className="ml-24">{item.statuss}</span>
                  
                  <div className=" flex flex-row w-min  my-2 rounded-xl text-2xl font-semibold ml-24">{"Rp."+item.total.toLocaleString()}
                  </div>
                  <button type="button" className="text-white bg-gray-800 hover:bg-gray-400 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 
                    dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
                      Klik Untuk Pembayaran
                  </button>   
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
    
    const data = await order.find().lean();
    // Pass data to the page via props
    return {
      props: {
        dataorder: JSON.parse(JSON.stringify(data)),
      },
    };
}
