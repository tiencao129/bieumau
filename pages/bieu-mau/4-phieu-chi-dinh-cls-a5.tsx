export default function Home() {
  return (
    <div className=" paper A5 landscape">
      <section className="sheet padding-5mm">
        <table className=" table w-100 ">
          <tbody>
            <tr>
              <td className=" w-50">SỞ Y TẾ BẠC LIÊU</td>
            </tr>
            <tr>
              <td className="  ">BỆNH VIỆN LAO VÀ BỆNH PHỔI TỈNH BẠC LIÊU</td>
              <td className="  text-center">Mã BN: 2307000002</td>
            </tr>
            <tr>
              <td className="">
                Điện thoại:{" "}
                <span style={{ paddingLeft: "50px" }}>02913678977</span>
              </td>
            </tr>
          </tbody>
        </table>


        <table className="w-100   ">
          <tbody>
            <tr>
              <td className=" text-center font-bold mt-10 font-size-18">PHIẾU CHỈ ĐỊNH </td>
            </tr>
          </tbody>
        </table>

        <table className=" table w-100    ">
          <tbody>
            <tr>
              <td className="">Họ tên BN:</td>
              <td className="font-bold font-size-18">Đặng Văn Bảo</td>
              <td>Ngày sinh: 18/2/2001</td>
              <td>Giới tính: Nam</td>
            </tr>
            <tr>
              <td className="text-middle">Số thẻ BHYT:</td>
              <td className="text-middle">
              <table className=" table-bordered w-100">
                    <tbody>
                      <tr>
                        <td className="w-auto text-middle text-center ">GD</td>
                        <td className="w-auto text-middle text-center">4</td>
                        <td className="w-auto text-middle text-center">95</td>
                        <td className="w-auto text-middle text-center">95</td>
                        <td className="w-auto text-middle text-center">210</td>
                        <td className="w-auto  text-middle text-center">
                          18823
                        </td>
                        <td className="w-25 text-middle text-center">95-005</td>
                      </tr>
                    </tbody>
                  </table>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>Địa Chỉ:</td>
              <td>Ấp Tà Suôi, Xã Lộc Ninh, Huyện Hồng Dân, Bạc Liêu</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Khoa:</td>
              <td>Khoa Khám Bệnh (Phòng khám lao)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Chuẩn đoán:</td>
              <td>Lao da và mô dưới da</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Diễn giải:</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>

        <table className=" table table-bordered w-100">
          <thead>
            <tr>
              <td className="font-bold text-center">STT</td>
              <td className="font-bold text-center">Tên</td>
              <td className="font-bold text-center">SL</td>

              <td className="font-bold text-center">Đơn giá</td>
              <td className="font-bold text-center">Thành tiền</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center">1</td>
              <td className="text-center">Khám Lao(1 lần)</td>
              <td className="text-center">1</td>
              <td className="text-right">34500</td>
              <td className="text-right">34500</td>
            </tr>
          
          
            <tr>
              <td className="" colSpan={4}>
                TỔNG CỘNG:
              </td>
              <td className="text-right">34.500</td>
            </tr>
            </tbody>
            <tfoot></tfoot>
        </table>



        <table className="table  w-100 ">
          <tbody >
            <tr>
              <td className="w-65"></td>
              <td className="text-center">Ngày 3 tháng 7 năm 2023</td>
            </tr>
            <tr>
              <td></td>
              <td className="text-center ">Bác sĩ điều trị</td>
            </tr>

            <tr className="">
              <td></td>
              <td className=" font-bold text-center  pt-20">
                BS Lê Thanh Phương
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
