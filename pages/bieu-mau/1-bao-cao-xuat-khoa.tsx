import useSWR from "swr";
import { useRouter } from "next/router";
import React from "react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());


const calculateTotal = (data) => {
  let total = 0;
  if (data?.data?.loai) {
    data.data.loai.forEach((loai) => {
      loai.loai_thanhtien = 0;
      loai.nhom.forEach((nhom) => {
        nhom.nhom_thanhtien = 0;
        nhom.chittiet.forEach((chitiet) => {
          chitiet.chitiet_thanhtien =
            chitiet.chitietxuat_soluong * chitiet.chitietxuat_dongia;
          nhom.nhom_thanhtien += chitiet.chitiet_thanhtien;
        });
        loai.loai_thanhtien += nhom.nhom_thanhtien;
      });
      total += loai.loai_thanhtien;
    });
    data.data.tongthanhtien = total;
  }
};

export default function Home() {
  const router = useRouter();
  const { data, error, isLoading } = useSWR(
    `http://localhost:5000/bm_baocaoxuatkhoa_1/${router.query?.id}`,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  calculateTotal(data);


  return (
    <div className="paper A4">
      <section className="sheet padding-10mm">
        <table className="table ">
          <tbody>
            <tr className="text-center">
              <td>{data?.data?.donvi_cha_ten}</td>
            </tr>
            <tr className="text-center">
              <td className="font-bold">{data?.data?.donvi_ten}</td>
            </tr>
            <tr className="text-center">
              <td className="font-bold text-decoration-underline">
                {data?.data?.donvi_khoa}
              </td>
            </tr>
          </tbody>
        </table>

        <table className="table  w-100">
          <tbody>
            <tr>
              <td className="font-bold text-center">{data?.data?.tieude}</td>
            </tr>
            <tr>
              <td className="font-bold text-center">{data?.data?.ngaylap}</td>
            </tr>
          </tbody>
        </table>

        <table className="table  w-100">
          <tbody>
            <tr>
              <td className="font-bold ">Kho Khoa Dược: {data?.data?.kho_khoa_duoc}</td>
            </tr>
            <tr>
              <td className="font-bold align-shift-2 "> Xuất qua kho lẻ:{data?.data?.xuat_qua_kho_le}</td>
            </tr>
            <tr>
              <td className="table row"></td>
            </tr>
            <tr>
              <td className="font-bold  align-shift-5">
                Hình thức dự trù:{data?.data?.hinh_thuc_du_tru}
              </td>
            </tr>
          </tbody>
        </table>
        <table className="table table-bordered w-100">
          <thead>
            <tr className="h-40px ">
              <td className="font-bold text-center text-middle">STT</td>
              <td className="font-bold text-center text-middle">Mã sản phẩm</td>
              <td className="font-bold text-center text-middle ">
                Tên sản phẩm
              </td>
              <td className="font-bold text-center text-middle">Đơn vị</td>
              <td className="font-bold text-center text-middle">Hãng sx</td>
              <td className="font-bold text-center text-middle">Số lượng</td>
              <td className="font-bold text-center text-middle">Đơn giá</td>
              <td className="font-bold text-center text-middle">Thành tiền</td>
            </tr>
          </thead>

          <tbody>
            {data?.data?.loai?.map((loai, index) => (
              <React.Fragment key={index}>
                <tr>
                  <td
                    colSpan={7}
                    className="bg-light font-bold remove-border-bold"
                  >
                    {loai.tenloai}
                  </td>
                  <td className="text-right bg-light remove-border-bold p-3px">
                  {loai.loai_thanhtien}
                  </td>
                </tr>
                {loai.nhom?.map((nhom, nhomIndex) => (
                  <React.Fragment key={nhomIndex}>
                    <tr>
                      <td
                        colSpan={7}
                        className="align-shift-2 font-bold remove-border-bold"
                      >
                        {nhom.tennhom}
                      </td>
                      <td className="text-right remove-border-bold p-3px">
                      {nhom.nhom_thanhtien}
            
                      </td>
                    </tr>
                    {nhom.chittiet?.map((chitiet, chitietIndex) => (
                      <tr key={chitietIndex}>
                        <td className="text-center">{chitiet.stt}</td>
                        <td className="text-center">{chitiet.sanpham_ma}</td>
                        <td className="text-center">{chitiet.sanpham_ten}({chitiet.sanpham_hoatchat}) {chitiet.sanpham_nongdohamluong}</td>
                        <td className="text-center">
                          {chitiet.sanpham_donvitinh}
                        </td>
                        <td className="text-center">
                          {chitiet.sanpham_hangsanxuat}
                        </td>
                        
                        <td className="text-right p-3px">
                          {chitiet.chitietxuat_soluong}
                        </td>
                        <td className="text-right p-3px">
                          {chitiet.chitietxuat_dongia}
                        </td>
                        <td className="text-right p-3px">
                          {chitiet.chitiet_thanhtien}
                            
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
               
              </React.Fragment>
              
            ))}
             <tr>
                  <td colSpan={8} className="font-bold text-right p-3px">
                    {data?.data?.tongthanhtien}
                  </td>
                </tr>
          </tbody>
        </table>
        <table className="table  w-100">
          <tbody>
            <tr>
              <td className="font-bold ">Tổng khoản:{data?.data?.tongkhoan}</td>
              <td className="font-bold text-right remove-border-bold">
                Tổng tiền : {data?.data?.tongthanhtien}
              </td>
            </tr>
            <tr>
              <td className="table row"></td>
            </tr>

            <tr>
              <td className="font-bold text-right " colSpan={2}>
                {" "}
                Bạc Liêu, ngày .... tháng ... năm 2023
              </td>
            </tr>
          </tbody>
        </table>
        {/* // <table calssName="table table-bordered w-100">
        //   <tbody>
        //     <tr>
        //       <td className="font-bold text-right "> Bạc Liêu, ngày .... tháng ... năm 2023</td>

        //     </tr>
        //   </tbody>
        // </table> */}
        <table className="table  w-100">
          <tbody>
            <tr>
              <td className="font-bold w-280px ">TRƯỞNG KHOA DƯỢC - VTYT</td>
              <td className="font-bold w-auto text-center">THỦ KHO</td>
              <td className="font-bold w-auto text-center">THỐNG KÊ DƯỢC</td>
              <td className="font-bold w-auto text-center">NGƯỜI NHẬN</td>
            </tr>
          </tbody>
        </table>
        
      </section>
    </div>
  );
}
