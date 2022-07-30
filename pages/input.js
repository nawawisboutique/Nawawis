import { useState } from "react";
import axios from "axios";
import dbConnect from "../utils/mongo";
import bodyParser from "body-parser";
import { promisify } from "util";
import products from "../models/product";
import Slider from "../components/slider1";


const getBody = promisify(bodyParser.urlencoded());

export const getServerSideProps = async ({ req, res}) => {
  await dbConnect();

  if (req.method === "POST") {
   await getBody(req, res);
   const img1 = req.body.imgUrl
   const img2 = req.body.imgUrl1
   const desc = req.body.desc
   const price0 = req.body.price0
   const price1 = req.body.price1
   const price2 = req.body.price2
   const price3 = req.body.price3
   console.log(img1);
   const type = req.body.type
   const name_product = req.body.name_product
   const newProduct = ({
            img:[img1,img2],
            desc,
            price:[price0,price1,price2,price3],
            type,
            name_product
          })
   await products.create( newProduct)
    
  }
    return {
      props : {
      
      }
    };

}

function Add ({props}){
  const [img, setImg] = useState([]);
  const [imgUrl, setImgUrl] = useState([]);
  const [name_product, setNameProduct] = useState(null);
  const [type, setType] = useState(null);
  const [desc, setDesc] = useState(null);
  const [price, setPrices] = useState([]);
  const [new1, setNew] = useState([]);
  props=new1


  const changePrice = (e, index) => {
    const currentPrices = price;
    currentPrices[index] = e.target.value;
    setPrices(currentPrices);
  };
  
  const handleImage = async () => {
    const data = new FormData();
    console.log("..............."+img);
    data.append("file", img);
    data.append("upload_preset", "nawawisProduct");
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

  return (
    <div className="bg-[url('/images/12.webp')]">
          <div className="flex flex-row">
      <div className="flex-initial w-1/2" >
        <h1 className="px-3">Add a new Product</h1>
        <div className="px-3 py-1">
          <label >Choose an image </label><br></br>
          <input type="file" onChange={(e) => setImg(e.target.files[0])} />
        </div>
        <div className="px-3 py-1">
        <button  onClick={handleImage} className="bg-[#46391e] px-3 py-1 text-white  hover:bg-[#f5eddc] hover:text-black">
          Create
        </button>
        </div>
        <div  className="px-3 py-3">
          <label >Product : </label>
          <input
           className="border-1"
            type="text"
            onChange={(e) => setNameProduct(e.target.value)}
          />
        </div>
        <div className="px-3 py-10">
          <label>Description : </label>
          <textarea
              className="border-1"
              rows={5}
              type="text"
              onChange={(e) => setDesc(e.target.value)}
            />
        </div>
        <div className="px-3 py-3">
          <label >Prices :</label>
          <div className="py-1">
            <input
              className="border-1"
              type="number"
              placeholder="S"
              onChange={(e) => changePrice(e, 0)}
            />
            <input
            className="border-1"
              type="number"
              placeholder="M"
              onChange={(e) => changePrice(e, 1)}
            />
            <br></br>
            <input
           className="border-1"
              type="number"
              placeholder="L"
              onChange={(e) => changePrice(e, 2)}
            />
            <input
              className="border-1"
              type="number"
              placeholder="XL"
              onChange={(e) => changePrice(e, 3)}
            />
          </div>
        </div>
        <div className="px-3 py-5">
          <label>Type : </label>
          <input
           className="border-1"
           type="text"
           onChange={(e) => setType(e.target.value)}
          />
        </div>
        <form method="POST" >
        <div className="px-3 py-1"> 
        <button  type="submit" className="bg-[#46391e] px-3 py-1 text-white  hover:bg-[#f5eddc] hover:text-black">
          Create
        </button>
        </div>
        <input className="opacity-0" name="name_product" defaultValue={props.name_product = name_product}  readOnly="readonly"/>
        <input className="opacity-0" name="desc" defaultValue={props.desc = desc}  readOnly="readonly"/>
        <input className="opacity-0" name="price0" defaultValue={props.price0 = price[0]}  readOnly="readonly"/>
        <input className="opacity-0" name="price1" defaultValue={props.price1 = price[1]}  readOnly="readonly"/>
        <input className="opacity-0" name="price2" defaultValue={props.price2 = price[2]}  readOnly="readonly"/>
        <input className="opacity-0" name="price3" defaultValue={props.price3 = price[3]}  readOnly="readonly"/>
        <input className="opacity-0" name="type" defaultValue={props.type = type}  readOnly="readonly"/>
        <input className="opacity-0" name="imgUrl" defaultValue={props.imgUrl = imgUrl[0]}  readOnly="readonly"/>
        <input className="opacity-0" name="imgUrl1" defaultValue={props.imgUrl1 = imgUrl[1]}  readOnly="readonly"/>
        </form>
      </div>
      <Slider/>
    </div>  
    </div>

    
  );
};

export default Add;