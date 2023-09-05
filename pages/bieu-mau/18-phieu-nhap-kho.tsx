import useSWR from "swr";
import { useRouter } from "next/router";
import React from "react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const calculateTotal = (data) => {
  let total = 0;
  if (data?.data?.chitiet) {
 
        data.data.chitiet.forEach((chitiet) => {
          chitiet.chitiet_thanhtien =
            chitiet.chitietxuat_soluong * chitiet.chitietxuat_dongia;
            total += chitiet.chitiet_thanhtien;
        });
   
    data.data.cong = total;
  }
};

export default function Home() {
  const router = useRouter();
  const { data, error, isLoading } = useSWR(
    `http://localhost:5000/bm_phieunhapkho_18/${router.query?.id}`,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  calculateTotal(data);

    return (
      <div className="paper A4 font-size-13">
        <section className="sheet padding-10mm">
          <table className="table w-100  ">
            <tbody>
              <tr className="">
                <td className="w-70 font-bold">{data?.data?.donvi_cha_ten}</td>
              </tr>
              <tr className="">
                <td className="font-bold">{data?.data?.donvi_ten}</td>
                <td className="">Số:{data?.data?.so}</td>
              </tr>
              <tr className="">
                <td className=""></td>
                <td className="font-bold">Nhập tại: {data?.data?.nhaptai}</td>
                

              </tr>
            </tbody>
          </table>
  
          <table className="table  w-100">
            <tbody>
              <tr>
                <td className="font-bold text-center font-size-17 mt-5px">
                {data?.data?.tieude}
                </td>
              </tr>
              <tr>
                <td className=" text-center">  {data?.data?.ngay_lap}</td>
              </tr>
            </tbody>
          </table>
  
          <table className="table  w-100 mt-5px font-bold">
            <tbody>
              <tr>
                <td className=" ">Số chừng từ: {data?.data?.sochungtu}</td>
               
              </tr>
              <tr>
                <td className="  "> Nhà cung cấp:  {data?.data?.nhacungcap}</td>
              </tr>
              <tr>
                <td className="" colSpan={2}>
                  Lý do nhập: {data?.data?.lydo_nhap}
                </td>
              </tr>
            </tbody>
          </table>
          <table className="table table-bordered w-100">
            <tbody>
              <tr className=" ">
                <td className="font-bold text-center text-middle">STT</td>
                <td className="font-bold text-center text-middle">Mã </td>
                <td className="font-bold text-center text-middle w-40 ">
                  Tên sản phẩm
                </td>
                <td className="font-bold text-center text-middle p-5px">
                  Đơn vị
                </td>
                <td className="font-bold text-center text-middle p-5px">
                  Hãng, nước sản xuất
                </td>
                <td className="font-bold text-center text-middle p-5px">Số lô</td>
                <td className="font-bold text-center text-middle p-5px">
                  Hạn sử dụng
                </td>
                <td className="font-bold text-center text-middle p-5px">
                  Số lượng
                </td>
                <td className="font-bold text-center text-middle p-5px">
                  Đơn giá
                </td>
                <td className="font-bold text-center text-middle p-5px">
                  Thành tiền
                </td>
                <td className="font-bold text-center text-middle p-5px">
                  Ghi chú
                </td>
              </tr>
              {data?.data?.chitiet?.map((chitiet, chitietIndex) => (
              <tr key={chitietIndex}>
                <td className="text-center text-middle"> {chitiet.stt} </td>
                <td className="text-center text-middle">{chitiet.sanpham_ma}</td>
                <td className="text-center text-middle">{chitiet.sanpham_ten}{chitiet.sanpham_hoatchat}{chitiet.sanpham_nongdohamluong}  </td>
                <td className="text-center text-middle">{chitiet.sanpham_donvitinh}</td>
                <td className="text-center text-middle">
                {chitiet.sanpham_hangsanxuat}
                </td>
                <td className="text-right p-3px text-middle">{chitiet.sanpham_solo}</td>
                <td className="text-right p-3px text-middle">{chitiet.sanpham_hansudung}</td>
                <td className="text-right p-3px text-middle">{chitiet.chitietxuat_soluong}</td>
                <td className="text-right p-3px text-middle ">{chitiet.chitietxuat_dongia}</td>
                <td className="text-right p-3px text-middle">{chitiet.chitiet_thanhtien}</td>
                <td className="text-right p-3px text-middle">{chitiet.ghichu}</td>

              </tr>
              ))}
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan={9} className="text-right p-3px font-bold">Cộng:</td>
                    <td colSpan={2} className="text-right p-3px">{data?.data?.cong}</td>
                </tr>
            </tfoot>
          </table>
          <table className="table  w-100 mt-5">
            <tbody>
            
              <tr className="">
                <td className=" ">Tổng số tiền (viết bằng chữ):&emsp; {data?.data?.tongsotien_bangchu}</td>
              </tr>
  

            </tbody>
          </table>
          
          <table className="table text-center w-100 font-bold mt-10">
            <tbody  className="">
                <tr>
                    <td> NGƯỜI GIAO </td>
                    <td>THỦ KHO</td>
                    <td>{data?.data?.kyten_noiky}, {data?.data?.kyten_ngayky}</td>
                </tr>
              <tr className="h-150px font-size-14">
                <td className=" w-30  ">NGƯỜI LẬP BẢNG</td>
                <td className="  text-center">TRƯỞNG KHOA DƯỢC - VTYT</td>
                
                <td className=" text-center"> THỦ KHOA ĐƠN VỊ</td>
              </tr>
              <tr className="font-size-16">
                <td className=" w-30 ">NGƯỜI GIAO HÀNG</td>
                <td className=" w-30 text-center">THỦ KHO</td>
                
                <td className=" text-center">KẾ TOÁN</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    );
  };
  
  