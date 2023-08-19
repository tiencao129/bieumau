const BaoCaoXuatKhoa = () => {
    return (
      <div className="paper A4 font-size-13">
        <section className="sheet padding-10mm">
          <table className="table w-100  ">
            <tbody>
              <tr className="">
                <td className="w-70 font-bold">SỞ Y TẾ BẠC LIÊU</td>
              </tr>
              <tr className="">
                <td className="font-bold">BỆNH VIÊN LAO VÀ BỆNH PHỔI BẠC LIÊU</td>
                <td className="">Số:XHT0000000001/202308</td>
              </tr>
              <tr className="">
                <td className=""></td>
                <td className="font-bold">Nhập tại Kho chẵn VTYT - Hoá chất</td>
                

              </tr>
            </tbody>
          </table>
  
          <table className="table  w-100">
            <tbody>
              <tr>
                <td className="font-bold text-center font-size-17 mt-5px">
                  PHIẾU NHẬP KHO
                </td>
              </tr>
              <tr>
                <td className=" text-center"> Ngày 4 Tháng 7 năm 2023</td>
              </tr>
            </tbody>
          </table>
  
          <table className="table  w-100 mt-5px font-bold">
            <tbody>
              <tr>
                <td className=" ">Số chứng từ</td>
               
              </tr>
              <tr>
                <td className="  "> Nơi cung cấp: CÔNG TY THIÉT BỊ Y TẾ THANH PHƯỚC</td>
              </tr>
              <tr>
                <td className="" colSpan={2}>
                  Lý do nhập: nhập hoá chất
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
            <tfoot>
                <tr>
                    <td colSpan={9} className="text-right p-3px font-bold">Cộng:</td>
                    <td colSpan={2} className="text-right p-3px">26.400</td>
                </tr>
            </tfoot>
          </table>
          <table className="table  w-100 mt-5">
            <tbody>
            
              <tr className="">
                <td className=" ">Tổng số tiền (viết bằng chữ):&emsp; Hai mươi sáu triệu bảy trăm chín mươi bốn ngàn không trăm chín mươi bốn phẩy một đồng</td>
              </tr>
  

            </tbody>
          </table>
          
          <table className="table text-center w-100 font-bold mt-10">
            <tbody  className="">
                <tr>
                    <td> NGƯỜI GIAO </td>
                    <td>THỦ KHO</td>
                    <td>Bạc liêu, ngày 4 tháng 7 năm 2023</td>
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
  
  export default BaoCaoXuatKhoa;
  