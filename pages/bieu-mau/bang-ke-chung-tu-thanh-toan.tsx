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
    `http://localhost:5000/bm_kechungtuthanhtoan/${router.query?.id}`,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  //   calculateTotal(data);

  return (
    <div className="paper A5 font-size-13">
      <section className="sheet padding-10mm">
        <table className=" w-100">
          <tbody>
            <tr>
              <td className="w-100">
                <table className="table w-100 font-bold text-center font-size-12">
                  <tbody>
                    <tr className="w-50 ">
                      <td className="">{data?.data?.donvi_cha_ten}</td>
                      <td>{data?.data?.quochieu}</td>
                    </tr>
                    <tr className="w-50">
                      <td className="">{data?.data?.donvi_ten}</td>
                      <td className="">{data?.data?.tieungu}</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr className="w-100">
              <td className="font-bold text-center font-size-16 pt-5 w-100">
                {data?.data?.tieude}
              </td>
            </tr>

            <tr>
              <td>
                <table className=" table w-100  mt-5">
                  <tbody>
                    <tr>
                      <td className=" ">
                        - Họ tên người thanh toán:&nbsp;{" "}
                        <span className="">{data?.data?.nguoithanhtoan}</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-middle">
                        - Đơn vị: {data?.data?.donvi}{" "}
                      </td>
                    </tr>

                    <tr>
                      <td className="text-middle">
                        - Nội dung xin thanh toán:&nbsp;{" "}
                        <span>{data?.data?.noidung_thanhtoan}</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table className=" table-bordered w-100">
                  <tbody>
                    <tr className="font-bold text-middle text-center bg-light">
                      <td>TT</td>
                      <td>Diễn giải</td>
                      <td>Số lượng</td>
                      <td>Đơn giá</td>
                      <td>Thành tiền</td>
                      <td>Ghi chú</td>
                    </tr>

                    {data?.data?.chitiet?.map((chitiet, chitietIndex) => (
                      <tr key={chitietIndex}>
                        <td className="text-center ">{chitiet.tt}</td>
                        <td className="w-30 pl-1">{chitiet.diengiai}</td>
                        <td className="text-right pr-1">{chitiet.soluong}</td>
                        <td className="text-right pr-1">{chitiet.dongia}</td>
                        <td className="text-right pr-1">{chitiet.thanhtien}</td>
                        <td className="w-30 pr-1 pl-1 ">
                          <span className=""> {chitiet.ghichu} </span>{" "}
                        </td>
                      </tr>
                    ))}
                    <tr>
                      <td></td>
                      <td className="text-center font-bold">Cộng</td>
                      <td></td>
                      <td></td>

                      <td className="text-center font-bold">{data?.data?.tongcong}</td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>

            <tr>
              <td className="pt-5">
                {" "}
                Số tiền bằng chữ: {data?.data?.tongcong_bangchu}
              </td>
            </tr>
            <tr>
              {" "}
              <td className="">Gồm:........ chứng từ gốc.</td>
            </tr>
            <tr>
              <td>
                <table className="table text-center w-100  mt-10">
                  <tbody className="">
                    <tr className="font-italic">
                      <td> Ngày ..../...../2023 </td>
                      <td>Ngày ..../...../.....</td>
                      <td>Ngày ..../...../.......</td>
                    </tr>
                    <tr className=" font-size-13 font-bold">
                      <td className=" w-30  ">NGƯỜI LẬP BẢNG</td>
                      <td className="  text-center">PHỤ TRÁCH BP</td>

                      <td className=" text-center"> GIÁM ĐỐC</td>
                    </tr>
                    <tr className="h-100px font-size-11 font-italic">
                      <td className="h-100px w-30 pb-50px border-bottom-wrapper"> (Ký,họ tên)</td>
                      <td className=" h-100px w-30 text-center border-bottom-wrapper pb-50px">(Ký,họ tên)</td>

                      <td className=" h-100px text-center border-bottom-wrapper pb-50px">(Ký,họ tên)</td>
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
