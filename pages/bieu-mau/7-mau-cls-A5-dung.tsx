import useSWR from "swr";
import { useRouter } from "next/router";
// import React from "react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const calculateTotal = (data) => {
  let total = 0;
  if (data?.data) {
    // Tính tổng thành tiền cho mảng "diengiai"
    if (data.data.diengiai) {
      data.data.diengiai.forEach((diengiai) => {
        diengiai.diengiai_thanhtien =
          diengiai.kham_soluong * diengiai.kham_dongia;
        total += diengiai.diengiai_thanhtien;
      });
    }
    data.data.tongcong = total;
  }
};

export default function Home() {
  const router = useRouter();
  const { data, error, isLoading } = useSWR(
    `http://localhost:5000/bm_phieuchidinh_7/${router.query?.id}`,
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

  calculateTotal(data);

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
      <div className=" paper A5 font-size-13">
        <section className="sheet padding-5mm ">
        <table className=" table w-100 ">
          <tbody>
            <tr>
              <td className=" w-50">{data?.data?.donvi_cha_ten}</td>
            </tr>
            <tr>
              <td className="  ">{data?.data?.donvi_ten}</td>
              <td className="  text-center">Mã BN: {data?.data?.mabn}</td>
            </tr>
            <tr>
              <td className="">
                Điện thoại:{" "}
                <span style={{ paddingLeft: "50px" }}>
                  {data?.data?.donvi_dienthoai}
                </span>
              </td>
            </tr>
          </tbody>
        </table>

        <table className="w-100   ">
          <tbody>
            <tr>
              <td className=" text-center font-bold mt-10 font-size-13">
                {data?.data?.tieude}
              </td>
            </tr>
          </tbody>
        </table>

        <table className=" table w-100    ">
          <tbody>
            <tr>
              <td className="">Họ tên BN:</td>
              <td className="font-bold font-size-14 w-45">
                {" "}
                {data?.data?.benhnhan_hoten}
              </td>
              <td>Ngày sinh: {data?.data?.benhnhan_ngaysinh}</td>
              <td>Giới tính:{data?.data?.benhnhan_gioitinh}</td>
            </tr>
            <tr>
              <td className="text-middle">Số thẻ BHYT:</td>
              <td className="text-middle">
                <table className=" table-bordered w-100">
                  <tbody>
                    <tr>
                      <td className="w-auto text-middle text-center ">
                        {str1}
                      </td>
                      <td className="w-auto text-middle text-center">{str2}</td>
                      <td className="w-auto text-middle text-center">{str3}</td>
                      <td className="w-auto text-middle text-center">{str4}</td>
                      <td className="w-auto text-middle text-center">{str5}</td>
                      <td className="w-auto  text-middle text-center">
                        {str6}
                      </td>
                      <td className="w-25 text-middle text-center">
                        {" "}
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
              <td>{data?.data?.benhnhan_diachi}</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Khoa:</td>
              <td>{data?.data?.khoa}</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Chuẩn đoán:</td>
              <td>{data?.data?.chuandoan}</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Diễn giải:</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>

        <table className=" table table-bordered w-100 ">
          <thead>
            <tr>
              <td className="font-bold text-center">STT</td>
              <td className="font-bold text-center">Tên</td>
              <td className="font-bold text-center">SL</td>

              <td className="font-bold text-center">Đơn giá</td>
              <td className="font-bold text-center">Thành tiền</td>
            </tr>
          </thead>
          <tbody>
            {data?.data?.diengiai?.map((diengiai, index) => (
              <>
                <tr key={index}>
                  <td className="text-center">{diengiai.kham_stt}</td>
                  <td className="text-center">{diengiai.kham_ten}</td>
                  <td className="text-center">{diengiai.kham_soluong}</td>
                  <td className="text-right">{diengiai.kham_dongia}</td>
                  <td className="text-right">
                    {diengiai.kham_soluong * diengiai.kham_dongia}
                  </td>
                </tr>
              </>
            ))}
            <tr>
              <td className="" colSpan={4}>
                TỔNG CỘNG:
              </td>
              <td className="text-right">{data?.data?.tongcong}</td>
            </tr>
          </tbody>
          <tfoot></tfoot>
        </table>

        <table className="table  w-100 ">
          <tbody>
            <tr>
              <td className="w-65"></td>
              <td className="text-center">Ngày 3 tháng 7 năm 2023</td>
            </tr>
            <tr>
              <td></td>
              <td className="text-center ">Bác sĩ điều trị</td>
            </tr>

            <tr className="">
              <td></td>
              <td className=" font-bold text-center  pt-20">
                BS Lê Thanh Phương
              </td>
            </tr>
            <tr></tr>
          </tbody>
        </table>
          <table className="h-290px"></table>

          <table className="w-80 ">
          <tfoot>
                <tr>
                    <td>Ngày giờ in</td>
                    <td>0708/2023 10:28:30 AM</td>
                    <td>Tài khoản</td>
                    <td>system</td>

                </tr>
            </tfoot>
          </table>
        </section>
      </div>
    );
  }
  