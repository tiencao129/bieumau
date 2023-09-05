import useSWR from "swr";
import { useRouter } from "next/router";
// import React from "react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Home() {
  const router = useRouter();
  const { data, error, isLoading } = useSWR(
    `http://localhost:5000/bm_thutienvienphi_8/${router.query?.id}`,
    fetcher


  
  );
  console.log(data);

  return (
    <div className=" paper A5 landscape font-size-13">
      <section className="sheet padding-10mm">
        <table className=" table w-100 font-size-14">
          <tbody>
            <tr>
              <td className="w-25">
                <table>
                  <tbody>
                    <tr>
                      <td className="text-center ">{data?.data?.donvi_cha_ten}</td>
                    </tr>
                    <tr>
                      <td className=" text-center font-size-12">
                      {data?.data?.donvi_ten}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td className="">
                <table className="w-100">
                  <tbody>
                    <tr>
                      <td className="text-center">
                        {data?.data?.quochieu}
                      </td>
                    </tr>
                    <tr>
                      <td className=" font-bold text-center">
                      {data?.data?.tieungu}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td className="w-25">
                <table className="w-40">
                  <tbody>
                    <tr>
                      <td className=" "> Mẫu số:{data?.data?.mauso}</td>
                    </tr>
                    <tr>
                      <td className="  ">Ký hiệu: {data?.data?.kyhieu}</td>
                    </tr>
                    <tr>
                      <td className="  ">
                        Số:&nbsp; <span className="font-bold">{data?.data?.so}</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>

        <table className="w-100 mt-10  ">
          <tbody>
            <tr>
              <td className=" text-center font-bold  font-size-17 ">
              {data?.data?.tieude}
              </td>
            </tr>
            <tr>
              <td className=" text-center font-bold  ">
                {" "}
                {data?.data?.ngay_lap}
              </td>
            </tr>
          </tbody>
        </table>

        <table className=" table w-100  mt-5">
          <tbody>
            <tr>
              <td className=" ">
                Họ tên người nộp tiền:&nbsp;{" "}
                <span className="font-bold">{data?.data?.nguoinoptien_hoten}</span>
              </td>
            </tr>
            <tr >
              <td className="text-middle">Địa chỉ:{data?.data?.nguoinoptien_diachi} </td>
              
            </tr>
        
            <tr>
              <td className="text-middle">Lý do nộp:&nbsp; <span>{data?.data?.lydonop}</span></td>
             
            </tr>
            <tr>
            <td className="text-middle">Số tiền nộp:{ data?.data?.sotiennop} </td>
             
            </tr>
            <tr>
              <td className="text-middle">Viết bằng chữ: {data?.data?.vietbangchu}  </td>
             
            </tr>


          </tbody>
        </table>

        

        <table className="table  w-100 ">
          <tbody className="h-200px">
            <tr>
              <td className="w-50"></td>
              <td className="text-center"> {data?.data?.kyten_ngayky}</td>
            </tr>
            <tr>
              <td className="text-center font-bold">NGƯỜI NỘP TIỀN</td>
              <td className="text-center font-bold">NGƯỜI THU TIỀN</td>
            </tr>

            <tr className="">
              <td></td>
              <td className=" font-bold text-center  pt-20">
              {data?.data?.thongtin_in_nguoi}
              </td>
            </tr>

          </tbody>
        <tfoot>
            <tr>
                <td className="font-size-11 font-italic">Thời gian in: {data?.data?.thongtin_in_ngaygio} </td>
            </tr>
        </tfoot>
        </table>
      </section>
    </div>
  );
}
