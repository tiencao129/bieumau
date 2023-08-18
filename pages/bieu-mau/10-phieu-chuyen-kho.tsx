const BaoCaoXuatKhoa = () => {
  return (
    <div className="paper A4 font-size-13">
      <section className="sheet padding-10mm">
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

        <table className="table  w-100">
          <tbody>
            <tr>
              <td className="font-bold text-center font-size-17 mt-5px">
                PHIẾU CHUYỂN KHO
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
              <td className=" ">Số chứng từ</td>
              <td>Loại sản phẩm</td>
            </tr>
            <tr>
              <td className="  "> Nơi nhận: kho chẵn thuốc</td>
              <td>Kho xuất: Kho lẻ Ngoại trú</td>
            </tr>
            <tr>
              <td className="" colSpan={2}>
                Lý do xuất:
              </td>
            </tr>
          </tbody>
        </table>
        <table className="table table-bordered w-100">
          <tbody>
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
            <tr>
              <td
                colSpan={11}
                className="bg-light font-bold remove-border-bold"
              >
                Thuốc viên
              </td>
            </tr>
            <tr>
              <td
                colSpan={11}
                className="align-shift-2 font-bold remove-border-bold"
              >
                Thuốc viên
              </td>
            </tr>
            <tr>
              <td className="text-center text-middle">1</td>
              <td className="text-center text-middle">21TPT1CON01</td>
              <td className="text-center text-middle">Eprazinon 50mg</td>
              <td className="text-center text-middle">viên</td>
              <td className="text-center text-middle">
                Công ty Cổ Phần Hoá - Dược Phẩm Việt Nam
              </td>
              <td className="text-right p-3px text-middle">23003HN</td>
              <td className="text-right p-3px text-middle">05/05/2026</td>
              <td className="text-right p-3px text-middle">66</td>
              <td className="text-right p-3px text-middle ">400</td>
              <td className="text-right p-3px text-middle">26.400</td>
            </tr>
          </tbody>
        </table>
        <table className="table  w-100">
          <tbody>
            <tr>
              <td className=" ">Tổng số tiền:&emsp;26.400</td>
            </tr>
            <tr>
              <td className=" ">Tổng số tiền (viết bằng chữ):&emsp; Hai mươi sáu ngàn bốn trăm đồng</td>
            </tr>

            <tr>
              <td className=" text-right " colSpan={2}>
                {" "}
                Bạc Liêu, ngày ..7.. tháng .8.. năm 2023
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

export default BaoCaoXuatKhoa;
