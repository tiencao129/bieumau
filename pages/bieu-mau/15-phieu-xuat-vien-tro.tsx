export default function Home() {
  const userData = [
    {
      stt: 1,
      ma: "21TPT1CON01",
      tensanpham: "Cồn 70 độ (cồn sát khuẩn 70)",
      donvi: "lít",
      hang: "Công ty ABC",
      solohang: "12345",
      hansudung: "30/12/2023",
      soluong: 2,
      dongia: "750000",
      thanhtien: "1500000",
      ghichu: "",
    },
    {
      stt: 1,
      ma: "21TPT1CON01",
      tensanpham: "Cồn 70 độ (cồn sát khuẩn 70) Cồn 70 độ (cồn sát khuẩn 70) ",
      donvi: "lít",
      hang: "Công ty ABC",
      solohang: "12345",
      hansudung: "30/12/2023",
      soluong: 2,
      dongia: "750000",
      thanhtien: "1500000",
      ghichu: "",
    },
    {
      stt: 1,
      ma: "21TPT1CON01",
      tensanpham: "Cồn 70 độ (cồn sát khuẩn 70)",
      donvi: "lít",
      hang: "Công ty ABC",
      solohang: "12345",
      hansudung: "30/12/2023",
      soluong: 2,
      dongia: "750000",
      thanhtien: "1500000",
      ghichu: "",
    },
    {
      stt: 1,
      ma: "21TPT1CON01",
      tensanpham: "Cồn 70 độ (cồn sát khuẩn 70)",
      donvi: "lít",
      hang: "Công ty ABC",
      solohang: "12345",
      hansudung: "30/12/2023",
      soluong: 2,
      dongia: "750000",
      thanhtien: "1500000",
      ghichu: "",
    },
    {
      stt: 1,
      ma: "21TPT1CON01",
      tensanpham: "Cồn 70 độ (cồn sát khuẩn 70)",
      donvi: "lít",
      hang: "Công ty ABC",
      solohang: "12345",
      hansudung: "30/12/2023",
      soluong: 2,
      dongia: "750000",
      thanhtien: "1500000",
      ghichu: "",
    },
    {
      stt: 1,
      ma: "21TPT1CON01",
      tensanpham: "Cồn 70 độ (cồn sát khuẩn 70)",
      donvi: "lít",
      hang: "Công ty ABC",
      solohang: "12345",
      hansudung: "30/12/2023",
      soluong: 2,
      dongia: "750000",
      thanhtien: "1500000",
      ghichu: "",
    },
    {
      stt: 1,
      ma: "21TPT1CON01",
      tensanpham: "Cồn 70 độ (cồn sát khuẩn 70)",
      donvi: "lít",
      hang: "Công ty ABC",
      solohang: "12345",
      hansudung: "30/12/2023",
      soluong: 2,
      dongia: "750000",
      thanhtien: "1500000",
      ghichu: "",
    },
    {
      stt: 1,
      ma: "21TPT1CON01",
      tensanpham: "Cồn 70 độ (cồn sát khuẩn 70)",
      donvi: "lít",
      hang: "Công ty ABC",
      solohang: "12345",
      hansudung: "30/12/2023",
      soluong: 2,
      dongia: "750000",
      thanhtien: "1500000",
      ghichu: "",
    },
    {
      stt: 1,
      ma: "21TPT1CON01",
      tensanpham: "Cồn 70 độ (cồn sát khuẩn 70)",
      donvi: "lít",
      hang: "Công ty ABC",
      solohang: "12345",
      hansudung: "30/12/2023",
      soluong: 2,
      dongia: "750000",
      thanhtien: "1500000",
      ghichu: "",
    },
    {
      stt: 1,
      ma: "21TPT1CON01",
      tensanpham: "Cồn 70 độ (cồn sát khuẩn 70)",
      donvi: "lít",
      hang: "Công ty ABC",
      solohang: "12345",
      hansudung: "30/12/2023",
      soluong: 2,
      dongia: "750000",
      thanhtien: "1500000",
      ghichu: "",
    },

    // ... Thêm dữ liệu người dùng khác tương tự ở đây
  ];

  return (
    <div className="paper A4  font-size-13">
      <section className="sheet padding-5mm">
        <table className="table w-100 ">
          <tbody>
            <tr className="text-center">
              <td className="w-50">SỞ Y TẾ BẠC LIÊU</td>
            </tr>
            <tr className="text-center">
              <td className="font-bold">BỆNH VIÊN LAO VÀ BỆNH PHỔI BẠC LIÊU</td>
              <td className="">Số:XHT0000000001/202308</td>
            </tr>
          </tbody>
        </table>

        <table className="table mt-5px w-100">
          <tbody>
            <tr>
              <td className="font-bold text-center font-size-17 ">
                PHIẾU XUẤT THUỐC
              </td>
            </tr>
            <tr>
              <td className=" text-center"> Ngày 4 Tháng 7 năm 2023</td>
            </tr>
          </tbody>
        </table>

        <table className="table  w-100 mt-5px">
          <tbody>
            <tr>
              <td className=" ">Nơi nhận: TTYT Huyện Vĩnh Lợi</td>
              <td>Kho xuất: Kho thuốc chương trình Lao</td>
            </tr>
           
            
            <tr>
              <td className="" colSpan={2}>
                Lý do xuất: Xuất theo phân bổ được duyệt
              </td>
            </tr>
          </tbody>
        </table>
        <table className="table table-bordered w-100">
          <thead >
            <tr>
              <th className="p-5px">STT</th>
              <th className="p-5px">Mã</th>
              <th className="p-5px">Tên Sản Phẩm</th>
              <th className="p-5px">Đơn Vị</th>
              <th className="p-5px">Hãng, Nước SX</th>
              <th className="p-5px">Số Lô</th>
              <th className="p-5px">Hạn SD</th>
              <th className="p-5px">Số Lượng</th>
              <th className="p-5px">Đơn Giá</th>
              <th className="p-5px">Thành Tiền</th>
              <th className="p-5px">Ghi Chú</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user) => (
              <tr key={user.stt}>
                <td className="text-center">{user.stt}</td>
                <td className=" p-3px">{user.ma}</td>
                <td className=" p-3px">{user.tensanpham}</td>
                <td className=" text-center p-3px">{user.donvi}</td>
                <td className=" p-3px">{user.hang}</td>
                <td className=" p-3px">{user.solohang}</td>
                <td className=" text-center p-3px">
                  {user.hansudung}
                </td>
                <td className=" text-right p-3px">{user.soluong}</td>
                <td className=" text-right p-3px">{user.dongia}</td>
                <td className=" text-right p-3px">{user.thanhtien}</td>
                <td className="">{user.ghichu}</td>
              </tr>
            ))}
          </tbody>

        </table>
        <table className="table  w-100">
            <tbody>
              <tr>
                <td className=" ">Tổng số tiền:&emsp;<span className="font-bold">12.463.638,40</span></td>
              </tr>
              <tr>
                <td className=" ">Tổng số tiền (viết bằng chữ):&emsp; mười hai triệu bốn trăm sáu mươi ba ngàn sáu trăm ba mươi tám phẩy bốn đồng</td>
              </tr>
  
              <tr>
                <td className=" text-right font-italic" colSpan={2}>
                  {" "}
                  Bạc Liêu, ngày ..7.. tháng .8.. năm 2023
                </td>
              </tr>
            </tbody>
          </table>
          
          <table className="table text-center w-100 mt-5px">
            <tbody>
              <tr>
                <td className="font-bold w-30 ">NGƯỜI LẬP BẢNG</td>
                <td className="font-bold w-30 text-center">PHỤ TRÁCH CTCL</td>
                <td className="font-bold text-center">THỦ TRƯỞNG ĐƠN VỊ</td>
              </tr>
            </tbody>
          </table>

      </section>
    </div>
  );
}
