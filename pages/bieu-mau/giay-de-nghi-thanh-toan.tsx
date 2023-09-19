import useSWR from "swr";
import { useRouter } from "next/router";
import React from "react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

// const calculateTotal = (data) => {
//   let total = 0;
//   if (data?.data?.chitiet) {

//         data.data.chitiet.forEach((chitiet) => {
//           chitiet.chitiet_thanhtien =
//             chitiet.chitietxuat_soluong * chitiet.chitietxuat_dongia;
//             total += chitiet.chitiet_thanhtien;
//         });

//     data.data.cong = total;
//   }
// };

export default function Home() {
  const router = useRouter();
  const { data, error, isLoading } = useSWR(
    `http://localhost:5000/bm_giaydenghithanhtoan/${router.query?.id}`,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  //   calculateTotal(data);

  return (
    <div className="paper A5 font-size-12">
      <section className="sheet padding-5mm">
        <table className=" w-100">
          <tbody>
            <tr>
              <td className="w-100">
                <table className="table w-50 font-bold text-center font-size-12">
                  <tbody>
                    <tr className="w-50 ">
                      <td className="">{data?.data?.donvi_cha_ten}</td>
                      <td></td>
                    </tr>
                    <tr className="w-50">
                      <td className="">{data?.data?.donvi_ten}</td>
                      <td className=""></td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr className="w-100">
              <td className="font-bold text-center font-size-14 pt-5 w-100">
                {data?.data?.tieude}
              </td>
            </tr>
            <tr className="w-100">
              <td className="  font-size-12 text-right pr-1  w-100">
                Số:.....................
              </td>
            </tr>
            <tr>
              <td className="w-100 pr-5 pl-5 " >
                <table className="w-100 " style={{ fontWeight: "normal" }}>
                  <tbody>
                    <tr>
                      <td className="w-30 text-center">Kính gửi: </td>
                      <td className="w-70 text-left"> {data?.data?.kinhgui}</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td className="p-5 ">
                <table className=" table w-100 p-5  ">
                  <tbody>
                    <tr>
                      <td className="w-50 ">
                        - Họ tên người thanh toán:&nbsp;{" "}
                        <span className="">{data?.data?.hoten}</span>
                      </td>
                      <td className="text-center ">
                        MSCB:&nbsp; <span className="">{data?.data?.mscb}</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-middle">
                        - Đơn vị: {data?.data?.bophan}{" "}
                      </td>
                    </tr>

                    <tr>
                      <td className="text-middle" colSpan={2}>
                        - Nội dung xin thanh toán:&nbsp;{" "}
                        <span>{data?.data?.noidung_thanhtoan}</span>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2}>- Số tiền: {data?.data?.sotien}</td>
                    </tr>
                    <tr>
                      <td colSpan={2}>
                        - Viết bằng chữ: {data?.data?.sotien_bangchu}
                      </td>
                    </tr>

                    <tr>
                      {" "}
                      <td className="pt-5" colSpan={2}>
                        (Kèm theo ...................... chứng từ gốc)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>

            <tr>
              <td>
                <table className="table text-center w-100 ">
                  <tbody className="">
                    <tr className="font-italic">
                      <td> Ngày ..../...../2023 </td>
                      <td>Ngày ..../...../.....</td>
                      <td>Ngày ..../...../.......</td>
                      <td>Ngày ..../...../.......</td>
                    </tr>
                    <tr className=" font-size-12 font-bold">
                      <td className=" w-30  ">NGƯỜI ĐỀ NGHỊ</td>
                      <td className="  text-center">TRƯỞNG BP.PHẦN MỀM</td>

                      <td className=" text-center"> KẾ TOÁN</td>
                      <td className=" text-center"> GIÁM ĐỐC</td>
                    </tr>
                    <tr className="h-100px font-size-11 font-italic">
                      <td className="h-100px w-30 pb-50px border-bottom-wrapper">
                        {" "}
                        (Ký,họ tên)
                      </td>
                      <td className=" h-100px w-30 text-center border-bottom-wrapper pb-50px">
                        (Ký,họ tên)
                      </td>

                      <td className=" h-100px text-center border-bottom-wrapper pb-50px">
                        (Ký,họ tên)
                      </td>
                      <td className=" h-100px text-center border-bottom-wrapper pb-50px">
                        (Ký,họ tên)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
          <tfoot className="spacer">
            <tr>
              <td></td>
            </tr>
          </tfoot>
        </table>
        <div className="footer">PAGE FOOTER</div>
      </section>
    </div>
  );
}
