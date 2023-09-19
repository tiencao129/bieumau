import useSWR from "swr";
import { useRouter } from "next/router";
import React from "react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

// const calculateTotal = (data) => {
//   let total = 0;
//   if (data?.data) {
//     // Tính tổng thành tiền cho mảng "diengiai"
//     if (data?.data.chidinh) {
//       data.data.chidinh.forEach((chidinh) => {
//         chidinh.thuoc_stt += total

//       });
//     }
//     console.log(total);
//     data.data.congkhoan += total;
//   }
// };

export default function Home() {
  const router = useRouter();
  const { data, error, isLoading } = useSWR(
    `http://localhost:5000/bm_donthuoc_5/${router.query?.id}`,
    fetcher
  );

  let str1 = "";
  let str2 = "";
  let str3 = "";
  let str4 = "";
  let str5 = "";
  let str6 = "";

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  //  calculateTotal(data);

  const giaytoSo = data?.data?.giayto_so;
  if (giaytoSo) {
    str1 = giaytoSo.substring(0, 2);
    str2 = giaytoSo.substring(2, 3);
    str3 = giaytoSo.substring(3, 5);
    str4 = giaytoSo.substring(5, 7);
    str5 = giaytoSo.substring(7, 10);
    str6 = giaytoSo.substring(10, 15);

    // console.log(str1);
    // console.log(str2);
    // console.log(str3);
    // console.log(str4);
    // console.log(str5);
    // console.log(str6);
  }
  return (
    <div className=" paper A5 ">
      <section className="sheet  padding-5mm">
        <table className="report-container">
          <tbody className="report-container">
            <tr>
              <td>
                <table className=" table w-100 font-size-12 ">
                  <tbody>
                    <tr>
                      <td className=" w-65 font-size-13">
                        {data?.data?.donvi_cha_ten}
                      </td>
                      <td className="  text-center">
                        Mã BN:{data?.data?.benhnhan_ma}
                      </td>
                    </tr>
                    <tr>
                      <td className=" font-bold">{data?.data?.donvi_ten}</td>
                    </tr>
                    <tr>
                      <td className="">
                        Điện thoại: {data?.data?.donvi_dienthoai}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td>
                <table className="w-100  ">
                  <tbody>
                    <tr>
                      <td className=" text-center font-bold  font-size-14">
                        {data?.data?.tieude}{" "}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td>
                <table className=" table w-100  font-size-12 ">
                  <tbody>
                    <tr>
                      <td className="w-20">Họ tên BN:</td>
                      <td className="font-bold w-40 font-size-13">
                        {" "}
                        {data?.data?.benhnhan_hoten}{" "}
                      </td>
                      <td className="">Tuổi:{data?.data?.benhnhan_ngaysinh}</td>
                      <td className="">
                        Giới tính: {data?.data?.benhnhan_gioitinh}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-middle">Số thẻ BHYT:</td>
                      <td className="text-middle " colSpan={3}>
                        <table className="  w-60">
                          <tbody>
                            <tr>
                              <td className="w-auto text-middle font-bold ">
                                {" "}
                                {str1}-{str2}-{str3}-{str4}-{str5}-{str6}-
                                {data?.data?.giayto_noidangky}{" "}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Địa Chỉ:</td>
                      <td colSpan={3}>{data?.data?.benhnhan_diachi}</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Khoa:</td>
                      <td colSpan={3}>{data?.data?.khoa}</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Chuẩn đoán:</td>
                      <td colSpan={3}>
                        {" "}
                        <span>
                          {data?.data?.chuandoan} {data?.data?.mabenh}
                        </span>{" "}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td>
                <table className=" w-100  ">
                  <tbody>
                    <tr>
                      <td className="font-bold text-center font-size-15">
                        {data?.data?.chidinh_tieude}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td>
                <table className=" table w-100 font-size-12 ">
                  <tbody>
                    {data?.data?.chidinh?.map((thuoc, index) => (
                      <React.Fragment key={index}>
                        <tr>
                          <td className="font-bold  text-center w-5">
                            {thuoc.thuoc_stt}
                          </td>
                          <td className="w-70">
                            {" "}
                            {thuoc.thuoc_ten} {thuoc.thuoc_hoatchat}{" "}
                            {thuoc.thuoc_nongdohamluong}
                          </td>

                          <td className="font-bold text-center">
                            {thuoc.thuoc_soluong}
                          </td>
                          <td className="text-center">Viên</td>
                        </tr>
                        <tr>
                          <td></td>
                          <td className=" font-italic " colSpan={3}>
                            {thuoc.thuoc_cachdung}
                          </td>
                        </tr>
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td></td>
            </tr>
          </tbody>
          <tfoot className="report-footer">
            <tr>
              <td className="  ">Tái khám xin mang theo đơn này</td>
            </tr>
            <tr>
              <td className=" bt-1">
                Ngày giờ in: {data?.data?.thongtin_in_ngaygio}
              </td>
            </tr>
          </tfoot>
        </table>

        {/* <table className="table  w-100 text-center clear font-size-12 ">
            <tbody>
              <tr>
                <td className="w-50"></td>
                <td className=" ">Ngày 31 tháng 7 năm 2023</td>
              </tr>
              <tr>
                <td className="font-bold"></td>
                <td className="font-bold h-50px">Bác sĩ điều trị</td>
              </tr>
              <tr>
                <td className="">
                  <table className="table    font-size-12 ">
                    <tbody>
                      <tr>
                        <td className="">Cộng khoản:</td>
                        <td className="font-bold ">
                          {" "}
                          {data?.data?.congkhoan}{" "}
                        </td>
                      </tr>
                      <tr>
                        <td className="font-bold text-middle">Lời dặn:</td>
                        <td className="">
                          <table>
                            <tbody>
                              <tr>
                                <td>
                                  -Toa: {data?.data?.toa_ngayuong} ngày uống
                                </td>
                              </tr>
                              <tr>
                                <td>-Tái khám ngay khi:</td>
                              </tr>
                              <tr>
                                <td>
                                  Ngày tái khám: {data?.data?.taikham_ngay}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td className="font-bold text-middle">
                  {data?.data?.kyten_bacsydieutri}
                </td>
              </tr>
            </tbody>
          </table> */}
      </section>
      {/* <div>
          <table className=" font-size-10 w-100 footer1 font-italic  ">
            
          </table>
        </div> */}

      {/* <div className=" paper A5  ">
        <section className="sheet padding-5mm ">
          <table className=" table w-100 font-size-12 header ">
            <tbody>
              <tr>
                <td className=" w-50 ">Ngày tái khám: 26/7/2023</td>
                <td className="  text-center   font-bold">
                  BS Huỳnh Phước Thiện
                </td>
              </tr>
            </tbody>
          </table>
          <table className="container"></table>

          <table className="table mt-5 font-size-11 w-100  font-italic">
            <tbody>
              <tr>
                <td className="  ">Tái khám xin mang theo đơn này</td>
              </tr>
              <tr>
                <td className=" bt-1">Ngày giờ in: 07/08/2023 10:30:37 AM</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div> */}
    </div>
  );
}
