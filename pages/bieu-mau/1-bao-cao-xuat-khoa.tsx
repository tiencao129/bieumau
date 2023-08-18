const BaoCaoXuatKhoa = () => {
  return (
    <div className="paper A4">
      <section className="sheet padding-10mm">
        <table className="table ">
          <tbody>
            <tr className="text-center">
              <td>SỞ Y TẾ BẠC LIÊU</td>
            </tr>
            <tr className="text-center">
              <td className="font-bold">BỆNH VIÊN LAO VÀ BỆNH PHỔI BẠC LIÊU</td>
            </tr>
            <tr className="text-center">
              <td className="font-bold text-decoration-underline">
                KHOA DƯỢC - VTYT
              </td>
            </tr>
          </tbody>
        </table>

        <table className="table  w-100">
          <tbody>
            <tr>
              <td className="font-bold text-center">BÁO CÁO XUẤT KHOA</td>
            </tr>
            <tr>
              <td className="font-bold text-center">Tháng 7 năm 2023</td>
            </tr>
          </tbody>
        </table>

        <table className="table  w-100">
          <tbody>
            <tr>
              <td className="font-bold ">Kho Khoa Dược</td>
            </tr>
            <tr>
              <td className="font-bold align-shift-2 "> Xuất qua kho lẻ</td>
            </tr>
            <tr>
              <td className="table row"></td>
            </tr>
            <tr>
              <td className="font-bold  align-shift-5">
                Hình thức dự trù:BHYT
              </td>
            </tr>
          </tbody>
        </table>
        <table className="table table-bordered w-100">
          <tbody>
            <tr className="h-40px ">
              <td className="font-bold text-center text-middle">STT</td>
              <td className="font-bold text-center text-middle">Mã sản phẩm</td>
              <td className="font-bold text-center text-middle ">Tên sản phẩm</td>
              <td className="font-bold text-center text-middle">Đơn vị</td>
              <td className="font-bold text-center text-middle">Hãng sx</td>
              <td className="font-bold text-center text-middle">Số lượng</td>
              <td className="font-bold text-center text-middle">Đơn giá</td>
              <td className="font-bold text-center text-middle">Thành tiền</td>
            </tr>
            <tr>
              <td colSpan={7} className="bg-light font-bold remove-border-bold">
                Hoá Chất
              </td>
              <td className="text-right bg-light remove-border-bold p-3px">60.000,00</td>
            </tr>
            <tr>
              <td colSpan={7} className="align-shift-2 font-bold remove-border-bold">
                Hoá Chất
              </td>
              <td className="text-right remove-border-bold p-3px">60.000,00</td>
            </tr>
            <tr>
              <td className="text-center">1</td>
              <td className="text-center">21TPT1CON01</td>
              <td className="text-center">Cồn 70 độ(cồn sát khuẩn 70)</td>
              <td className="text-center">lít</td>
              <td></td>
              <td className="text-right p-3px">2</td>
              <td className="text-right p-3px">30.000,00</td>
              <td className="text-right p-3px">60.000,00</td>
            </tr>
            <tr>
              <td colSpan={8} className="font-bold text-right p-3px">
                60.000,00
              </td>
            </tr>
          </tbody>
        </table>
        <table className="table  w-100">
          <tbody>
            <tr>
              <td className="font-bold ">Tổng khoản:1</td>
              <td className="font-bold text-right remove-border-bold">Tổng tiền : 60.000,00</td>
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
};

export default BaoCaoXuatKhoa;
