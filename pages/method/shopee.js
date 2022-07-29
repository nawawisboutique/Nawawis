import MainLayout from "../../components/layout";
import Link from "next/link";

export default function SHOPEEPAY(){
    return(
        <MainLayout>
            <div div className="bg-fuchsia-100 p-6 mt-3 text-xs">
                <h2 className="font-semibold mb-2 my-5 mx-6 sm:text-2xl font-['serif']" align='center'>SHOPEEPAY</h2>
                <h2 className="font-normal mb-2 my-5 mx-6 sm:text-2xl font-['serif']" align='center'>No : 088989319606 a/n nawawis.boutique </h2>
                <p align='center'>Note: Harap pastikan nomor dan nama penerima sesuai dengan yang tertera diatas.</p>
                <Link href='/'>
                    <div className="flex justify-center mb-2 my-5">
                        <button className="cursor-pointer hover:bg-gray-500 text-black hover:text-white px-2 py-1 text-xs md:px-3 md:py-2 rounded-md md:text-sm font-medium">Kembali</button>
                    </div>
                </Link>
            </div>
        </MainLayout>
    )
}