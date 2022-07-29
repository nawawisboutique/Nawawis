import MainLayout from "../../components/layout";
import axios from "axios";
import {useState}  from "react";
import dbConnect from "../../utils/mongo";
import order from "../../models/order";
import bodyParser from "body-parser";
import { promisify } from "util";

const getBody = promisify(bodyParser.urlencoded());

export const getServerSideProps = async ({params, req, res}) => {
  await dbConnect();
  const _id = params
  const data = await order.findById(_id);
  const id = data._id
  if (req.method === "POST") {
   await getBody(req, res);
   const statuss = "pembayaran sedang di verifikasi"
   const imgurl = req.body.url
   const pay = ({
            imgPay: imgurl,
            statuss
          })
 console.log(params);
   await order.update({"_id":`${id}`},{$set: pay})    
  }
    return {
      props : {
        dataorder: JSON.parse(JSON.stringify(data)),
      
      }
    };

}


function Details ({dataorder, props}) {
  const [img, setImg] = useState([]);
  const [imgUrl, setImgUrl] = useState([]);
  const [newOrder, setNewOrder] = useState([]);
  props=newOrder
  
  const handlePay = async () => {
    const data = new FormData();
    console.log("..............."+img);
    data.append("file", img);
    data.append("upload_preset", "nawawisPay");
    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dp3l7tywm/image/upload", 
        data
      );

      const { url } = uploadRes.data;
      setImgUrl( arr => [...arr, url])
      alert("gambar berhasil dimasukan")
    } catch (err) {
      console.log(err);
    }
  }
    return(
        <MainLayout>
        <section className="pt-6">
        <div className="flex flex-row w-full ">
        
        <div className="h-30 md:h-96 w-6/12 gap-2 mx-20">
        <img className="object-contain h-full mx-auto" src={dataorder.product_img[0]} />
        </div>
        <div className="h-30 md:relative md:h-150 text-lg pr-3 w-6/12">
        <div className="flex flex-col md:flex-row w-full">
        <div className='flex w-1/6'><span> Product:</span> </div><div className="flex w-full md:text-right md:justify-end">{dataorder.name_product}</div>
        </div>
        <div className="flex flex-col md:flex-row w-full py-5">
        <div className='flex w-1/6 '><span> Note:</span> </div><div className="flex w-full md:text-right md:justify-end">{dataorder.note}</div>
        </div>
        <div className="flex flex-row w-full py-5">
        <div className='flex w-1/6 '><span> Size : </span></div><div className="flex w-full md:text-right md:justify-end">{dataorder.size}</div>
        </div>
        <div className="flex flex-col md:flex-row w-full py-5">
        <div className='flex w-1/6 '><span> Addres:</span> </div><div className="flex w-full md:text-right md:justify-end">{dataorder.addres}</div>
        </div>
        <div className="flex flex-col md:flex-row w-full py-5">
        <div className='flex w-1/6 '><span> Customer:</span> </div><div className="flex w-full md:text-right md:justify-end">{dataorder.name_customer}</div>
        </div>
        
        
        <div className="py-5">
          <label >Choose an image </label><br></br>
          <input className="w-full"  type="file" onChange={(e) => setImg(e.target.files[0])} />
          <button onClick={handlePay}  className="bg-[#52411e] mt-1 px-1 py-1 text-white hover:bg-[#f5eddc] hover:text-black"> Upload bukti pembayaran</button>
        </div>
        
        <form method="POST" name="imgPay">
        <input className="opacity-0" name="url" defaultValue={props.url = imgUrl}  readOnly="readonly"/>
        <div  className="bg-[#f5eddc] flex flex-row w-full mx-auto p-2 my-1 mb-7 rounded-xl text-base sm:text-base justify-center"><button > Verivikasi Pembayaran</button></div>
        </form>
        </div>
       
        </div>
        </section>
        
        </MainLayout>
    );
}


export default Details