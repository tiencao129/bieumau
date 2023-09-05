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
    data.data.tongsotien = total;
  }
};

export default function Home() {
  const router = useRouter();
  const { data, error, isLoading } = useSWR(
    `http://localhost:5000/bm_phieuchuyenkho_10/${router.query?.id}`,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  calculateTotal(data);


  return (
    <div className="paper A4 font-size-13">
      <section className="sheet padding-10mm">
        <table className="table w-100 ">
          <tbody>
            <tr className="text-center">
              <td className="w-50">{data?.data?.donvi_cha_ten}</td>
            </tr>
            <tr className="text-center">
              <td className="font-bold">{data?.data?.donvi_ten}</td>
              <td className="">Số:{data?.data?.so}</td>
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
              <td className=" text-center"> {data?.data?.ngay_lap}</td>
            </tr>
          </tbody>
        </table>

        <table className="table  w-100 mt-5px">
          <tbody>
            <tr>
              <td className=" ">Số chứng từ: {data?.data?.sochungtu}</td>
              <td>Loại sản phẩm: {data?.data?.loai_sanpham}</td>
            </tr>
            <tr>
              <td className="  "> Nơi nhận: {data?.data?.noinhan}</td>
              <td>Kho xuất: {data?.data?.kho_xuat}</td>
            </tr>
            <tr>
              <td className="" colSpan={2}>
                Lý do xuất: {data?.data?.lydo_xuat}
              </td>
            </tr>
          </tbody>
        </table>
        <table className="table table-bordered  w-100">
          <tbody className="text-middle">
            <tr className=" ">
              <td className="font-bold text-center text-middle">STT</td>
              <td className="font-bold text-center text-middle">Mã </td>
              <td className="font-bold text-center text-middle ">
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
            
            {data?.data?.loai?.map((loai, index) => (
              <React.Fragment key={index}>
                <tr>
                  <td
                    colSpan={11}
                    className=" font-bold remove-border-bold"
                  >
                    {loai.tenloai}
                  </td>
                  
                </tr>
                {loai.nhom?.map((nhom, nhomIndex) => (
                  <React.Fragment key={nhomIndex}>
                    <tr>
                      <td
                        colSpan={11}
                        className="align-shift-2 font-bold remove-border-bold"
                      >
                        {nhom.tennhom}
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
                        <td className="text-center">
                          {chitiet.sanpham_solo}
                        </td>
                        <td className="text-center">
                          {chitiet.sanpham_hansudung}
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
                         <td className="text-center">
                          {chitiet.ghichu}
                        </td>
                        
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
               
              </React.Fragment>
              
            ))}
          </tbody>
        </table>
        <table className="table  w-100">
          <tbody>
            <tr>
              <td className=" ">Tổng số tiền:&emsp;{data?.data?.tongsotien}</td>
            </tr>
            <tr>
              <td className=" ">Tổng số tiền (viết bằng chữ):&emsp; {data?.data?.tongsotien_bangchu}</td>
            </tr>

            <tr>
              <td className=" text-right " colSpan={2}>
                {" "}
                {data?.data?.kyten_noiky},  {data?.data?.kyten_ngayky}
              </td>
            </tr>
          </tbody>
        </table>
        
        <table className="table text-center w-100">
          <tbody>
            <tr>
              <td className="font-bold w-30 ">NGƯỜI GIAO</td>
              <td className="font-bold w-30 text-center">NGƯỜI NHẬN</td>
              
              <td className="font-bold text-center">TRƯỞNG KHOA DƯỢC - VTYT</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

