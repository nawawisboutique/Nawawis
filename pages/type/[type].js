/* eslint-disable react/jsx-no-comment-textnodes */
// import { sql_query } from "../../lib/db.js"
import MainLayout from "../../components/layout";
import Link from "next/link"
// import axios from "axios";
import dbConnect from "../../utils/mongo";
import products from "../../models/product";
// import order from "../../models/order";

export const getServerSideProps = async ({params}) => {
  await dbConnect();
  const type = params
  const data = await products.find(type);

  // Pass data to the page via props
  return {
    props: {
      datatype: JSON.parse(JSON.stringify(data)),
    },
  };

  // await dbConnect();
  // const res = await axios.get(`http://localhost:3000/api/product/${params.type}`)
 
  // return {
  //   props : {
  //     datatype : res.data,
  //     // databest : best.data
  //   }
  // };

}

function Type ({datatype}) {
    
    return(
        <MainLayout>
        <section className="shadow-md px-2">
        <h6 className="my-5 mx-6 sm:text-3xl font-semibold">{(datatype.type)}</h6>
        <div>
          <div className="grid grid-cols-2 md:grid-cols-2 justify-center">
          {datatype.map(item=>
            <Link href={'/pesanan/' +item._id} key={item._id}><a>
              <div className="flex flex-col  text-2xl text-center font-semibold bg-white hover:bg-[#f5eddc]">
                <div className="flex flex-col">
                  <img className="object-contain p-5" src={item.img[0]} />
                  <p>{item.name_product.substring(0,26)}</p>
                  <div className="text-xl text-center mb-4">{"Rp."+item.price[0].toLocaleString()}
                  </div>
                </div>
              </div> </a>
            </Link>)}
          </div>
        </div>
      </section> 
        </MainLayout>
    );
}


export default Type