export default function Home() {
  return (
    <div className=" paper A5 landscape font-size-13">
      <section className="sheet padding-10mm">
        <table className=" table w-100 font-size-14">
          <tbody>
            <tr>
              <td className="w-25">
                <table>
                  <tbody>
                    <tr>
                      <td className="text-center ">SỞ Y TẾ BẠC LIÊU</td>
                    </tr>
                    <tr>
                      <td className=" text-center font-size-12">
                        BỆNH VIỆN LAO VÀ BỆNH PHỔI TỈNH BẠC LIÊU
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td className="">
                <table className="w-100">
                  <tbody>
                    <tr>
                      <td className="text-center">
                        CỘNG HOÀ XÃ HỘI CHỦ NGHĨA VIỆT NAM
                      </td>
                    </tr>
                    <tr>
                      <td className=" font-bold text-center">
                        Độc lập - Tự do - Hạnh phúc
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td className="w-25">
                <table className="w-40">
                  <tbody>
                    <tr>
                      <td className=" "> Mẫu số:</td>
                    </tr>
                    <tr>
                      <td className="  ">Ký hiệu: k22TYY</td>
                    </tr>
                    <tr>
                      <td className="  ">
                        Số:&nbsp; <span className="font-bold">2307000012</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>

        <table className="w-100 mt-10  ">
          <tbody>
            <tr>
              <td className=" text-center font-bold  font-size-17 ">
                BIÊN LAI THU TIỀN VIỆN PHÍ{" "}
              </td>
            </tr>
            <tr>
              <td className=" text-center font-bold  ">
                {" "}
                Ngày 07 tháng 08 năm 2023{" "}
              </td>
            </tr>
          </tbody>
        </table>

        <table className=" table w-100  mt-5px ">
          <tbody>
            <tr>
              <td className=" ">
                Họ tên người nộp tiền:&nbsp;{" "}
                <span className="font-bold"> TRỊNH VĂN LƯỢNG</span>
              </td>
            </tr>
            <tr >
              <td className="text-middle">Địa chỉ:</td>
              
            </tr>
        
            <tr>
              <td className="text-middle">Lý do nộp:&nbsp; <span>xét nghiệm, chuẩn đoán hình ảnh: 136.000 đồng</span></td>
             
            </tr>
            <tr>
              <td className="text-middle">Số tiền nộp</td>
             
            </tr>
            <tr>
              <td className="text-middle">Viết bằng chữ:</td>
             
            </tr>


          </tbody>
        </table>

        

        <table className="table  w-100 ">
          <tbody className="h-200px">
            <tr>
              <td className="w-50"></td>
              <td className="text-center">Ngày 07 tháng 08 năm 2023</td>
            </tr>
            <tr>
              <td className="text-center font-bold">NGƯỜI NỘP TIỀN</td>
              <td className="text-center font-bold">NGƯỜI THU TIỀN</td>
            </tr>

            <tr className="">
              <td></td>
              <td className=" font-bold text-center  pt-20">
               System
              </td>
            </tr>

          </tbody>
        <tfoot>
            <tr>
                <td className="font-size-11 font-italic">Thời gian in: ngày 07 tháng 08 năm 2023 </td>
            </tr>
        </tfoot>
        </table>
      </section>
    </div>
  );
}
