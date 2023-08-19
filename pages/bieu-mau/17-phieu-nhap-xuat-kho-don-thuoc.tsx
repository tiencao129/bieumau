import { hkdfSync } from "crypto";

export default function Home() {
  const userData = [
    {
      stt: 1,
      ma: "META0067",
      tensanpham: "Methylperhydiion 4mg",
      donvi: " Viên",
      hangsx: "Công Ty Cổ Phần Dược Phẩm Quảng Bình Việt Nam",
      solo: "1222",
      hsd: "12/12/2023",
      soluong: "12",
      dongia: "15.000,00",
      thanhtien: "150.00,00",
      ghichu: "",
    },
    {
        stt: 2,
        ma: "META0067",
        tensanpham: "Methylperhydiion 4mg",
        donvi: " Viên",
        hangsx: "Công Ty Cổ Phần Dược Phẩm Quảng Bình Việt Nam",
        solo: "1222",
        hsd: "12/12/2023",
        soluong: "12",
        dongia: "15.000,00",
        thanhtien: "150.00,00",
        ghichu: "",
      },
      {
        stt: 3,
        ma: "META0067",
        tensanpham: "Methylperhydiion 4mg",
        donvi: " Viên",
        hangsx: "Công Ty Cổ Phần Dược Phẩm Quảng Bình Việt Nam",
        solo: "1222",
        hsd: "12/12/2023",
        soluong: "12",
        dongia: "15.000,00",
        thanhtien: "150.00,00",
        ghichu: "",
      },{
        stt: 4,
        ma: "META0067",
        tensanpham: "Methylperhydiion 4mg",
        donvi: " Viên",
        hangsx: "Công Ty Cổ Phần Dược Phẩm Quảng Bình Việt Nam",
        solo: "1222",
        hsd: "12/12/2023",
        soluong: "12",
        dongia: "15.000,00",
        thanhtien: "150.00,00",
        ghichu: "",
      },{
        stt: 5,
        ma: "META0067",
        tensanpham: "Methylperhydiion 4mg",
        donvi: " Viên",
        hangsx: "Công Ty Cổ Phần Dược Phẩm Quảng Bình Việt Nam",
        solo: "1222",
        hsd: "12/12/2023",
        soluong: "12",
        dongia: "15.000,00",
        thanhtien: "150.00,00",
        ghichu: "",
      },
  ];

  return (
    <div className=" paper A4 font-size-13">
      <section className="sheet padding-10mm">
        <table className="table ">
          <tbody>
            <tr className="text-center">
              <td>SỞ Y TẾ BẠC LIÊU</td>
            </tr>
            <tr className="text-center">
              <td className="font-bold w-50">
                BỆNH VIÊN LAO VÀ BỆNH PHỔI BẠC LIÊU
              </td>
              <td className="text-right">Số:XKTDT00000000044/202307</td>
            </tr>
          </tbody>
        </table>
        <table className=" w-100 row ">
          <tbody>
            <tr>
              <td className="font-bold  text-center font-size-17">
                PHIẾU XUẤT KHO
              </td>
            </tr>
            <tr>
              <td className="  text-center">Ngày 23 tháng 7 năm 2023</td>
            </tr>
          </tbody>
        </table>
        <table className="table  w-100 mt-5px">
          <tbody>
            <tr>
              <td className=" ">Số chứng từ</td>
              <td>Loại sản phẩm</td>
            </tr>
            <tr>
              <td className="  "> Nơi nhận: VŨ THỊ LÊ QUYÊN</td>
              <td>Kho xuất: Kho lẻ Ngoại trú</td>
            </tr>
            <tr>
              <td className="" colSpan={2}>
                Lý do xuất: Phát thuốc cho bệnh nhân
              </td>
            </tr>
          </tbody>
        </table>

        <table className="table  table-bordered w-100">
          <thead>
            <tr className="text-middle text-center font-bold">
              <th>STT</th>
              <th>Mã</th>
              <th>Tên sản phẩm</th>
              <th>Đơn vị</th>
              <td>Hãng, nước sản xuất</td>
              <td>Số lô</td>
              <td>Hạn sử dụng</td>
              <td>Số lượng</td>
              <td>Đơn giá</td>
              <td>Thành tiền</td>
              <td>Ghi chú</td>
            </tr>
          </thead>
          <tbody>
            {userData.map((user) => (
              <tr key={user.stt} className="text-middle text-center">
                <td className="text-center">{user.stt}</td>
                <td className=" ">{user.ma}</td>
                <td className=" text-right W-15 ">{user.tensanpham}</td>
                <td className="">{user.donvi}</td>
                <td className="">{user.hangsx}</td>
                <td className="">{user.solo}</td>
                <td className="">{user.hsd}</td>
                <td className="">{user.soluong}</td>
                <td className="">{user.dongia}</td>
                <td className="">{user.thanhtien}</td>
                <td className="">{user.ghichu}</td>
              </tr>
            ))}
            
          </tbody>
         
         

        </table>
        <table className="w-100">
            <tbody>
            <tr>
                <td className=" ">Tổng số tiền:&emsp;900.000,00</td>
              </tr>
              <tr>
                <td className=" ">Tổng số tiền (viết bằng chữ):&emsp; Chín trăm ngàn đồng</td>
              </tr>
  
            </tbody>
        </table>
        <table className="table mt-20px  w-100 text-center ">
          <tbody>
            
            <tr>
              <td className="w-50"></td>
              <td ></td>

              <td className=" font-italic">
                Bạc Liêu, ngày 31 tháng 7 năm 2023
              </td>
            </tr>
            <tr>
              <td className="font-bold">TRƯỞNG KHOA DƯỢC_VTYT</td>
              <td className="font-bold">NGƯỜI NHẬN</td>
              <td className="font-bold">NGƯỜI LẬP</td>
            </tr>
          
            
          </tbody>
        </table>
      </section>
    </div>
  );
}
