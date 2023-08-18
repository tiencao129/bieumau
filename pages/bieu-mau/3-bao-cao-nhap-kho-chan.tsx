//import React from "react";
//import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  const userData = [
    {
      stt: 1,
      congty: "Công Ty Cổ Phần Dược Phẩm Trung ương Codupha",
      sotien: "1.503.990",
      ghichu: "",
    },
    {
      stt: 2,
      congty: "Công Ty TNHH Dược Phẩm Tường Thành",
      sotien: "567.000",
      ghichu: "",
    },
    {
      stt: 3,
      congty: "Công Ty Cổ Phần Hoá-Dược Phẩm Mekophar  ",
      sotien: "537.900",
      ghichu: "",
    },
    {
      stt: 4,
      congty: "Công Ty Cổ Phần Dược Phẩm Minh Dân",
      sotien: "11.766.000",
      ghichu: "",
    },
    {
      stt: 5,
      congty: "Công Ty Cổ Phần Hoá-Dược Phẩm Mekophar1",
      sotien: "1.585.600",
      ghichu: "",
    },
    {
      stt: 6,
      congty: "Công Ty Cổ Phần Hoá-Dược Phẩm Mekophar",
      sotien: "1.260.000",
      ghichu: "",
    },
    {
      stt: 7,
      congty: "Công Ty Cổ Phần Hoá-Dược Phẩm Mekophar",
      sotien: "1.000.000",
      ghichu: "",
    },
    {
      stt: 8,
      congty: "Công Ty Cổ Phần Hoá-Dược Phẩm Mekophar",
      sotien: "1.000.000",
      ghichu: "",
    },
    {
      stt: 9,
      congty: "Công Ty Cổ Phần Hoá-Dược Phẩm Mekophar",
      sotien: "1.000.000",
      ghichu: "",
    },
    {
      stt: 10,
      congty: "Công Ty Cổ Phần Hoá-Dược Phẩm Mekophar ",
      sotien: "1.000.000",
      ghichu: "",
    },
    {
      stt: 11,
      congty: "Công Ty Cổ Phần Hoá-Dược Phẩm Mekophar 1",
      sotien: "1.000.000",
      ghichu: "",
    },
    {
      stt: 12,
      congty: "Công Ty Cổ Phần Hoá-Dược Phẩm Mekophar 1",
      sotien: "1.000.000",
      ghichu: "",
    },
    {
      stt: 13,
      congty: "Công Ty Cổ Phần Hoá-Dược Phẩm Mekophar 1",
      sotien: "1.000.000",
      ghichu: "",
    },
    {
      stt: 14,
      congty: "Công Ty Cổ Phần Hoá-Dược Phẩm Mekophar 1",
      sotien: "1.000.000",
      ghichu: "",
    },
    {
      stt: 15,
      congty: "Công Ty Cổ Phần Hoá-Dược Phẩm Mekophar 1",
      sotien: "1.000.000",
      ghichu: "",
    },
  ];

  return (
    <div className=" paper A4">
      <section className="sheet padding-10mm">
        <table className=" w-100 row ">
          <tbody>
            <tr>
              <td className="font-bold  text-center font-size-17">
                BÁO CÁO NHẬP KHO CHẴN THUỐC
              </td>
            </tr>
            <tr>
              <td className="font-bold  text-center">Tháng 7 năm 2023</td>
            </tr>
          </tbody>
        </table>

        <table className="table  table-bordered w-100">
          <thead>
            <tr>
              <th>STT</th>
              <th>Công Ty</th>
              <th>Số Tiền</th>
              <th>Ghi Chú</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user) => (
              <tr key={user.stt}>
                <td className="font-bold  text-center">{user.stt}</td>
                <td className="font-bold p-3px">{user.congty}</td>
                <td className="font-bold text-right p-3px">{user.sotien}</td>
                <td className="font-bold">{user.ghichu}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="">
              <td colSpan={2} className="font-bold text-right pr-20 ">
                Tổng Cộng
              </td>
              <td className="font-bold text-right p-3px">12.385.585</td>
            </tr>
          </tfoot>
        </table>
        <table className="table mt-20px  w-100 text-center ">
            
          <tbody>
            <tr>
              <td className="w-50"></td>
              <td className=" font-italic">Bạc Liêu, ngày 31 tháng 7 năm 2023</td>
            </tr>
            <tr>
              <td className="font-bold">TRƯỞNG KHOA DƯỢC_VTYT</td>
              <td className="font-bold">NGƯỜI LẬP</td>
            </tr>
            <tr>
              
              <td className="table m-40px"></td>
            </tr>
            <tr>
              <td className=""></td>
              <td className="font-bold">DS ĐOÀN HOÀNG SAO</td>
            </tr>
            

          </tbody>
        </table>
      </section>
    </div>
  );
}
