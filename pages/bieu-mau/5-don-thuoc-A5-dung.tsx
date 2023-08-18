export default function Home() {
  const userData = [
    {
      stt: 1,
      thuoc:
        "Amoxicilin + acid clavulanic 500mg + 125mg (Augbidil 625) 500mg + 125mg ",
      cachdung: "Sáng 01 viên, trưa 01 viên, tối 01 viên(Uống)",
      soluong: "10",
    },
    {
      stt: 2,
      thuoc:
        "Amoxicilin + acid clavulanic 500mg + 125mg (Augbidil 625) 500mg + 125mg ",
      cachdung: "Sáng 01 viên, trưa 01 viên, tối 01 viên(Uống)",
      soluong: "20",
    },
    {
      stt: 3,
      thuoc:
        "Amoxicilin + acid clavulanic 500mg + 125mg (Augbidil 625) 500mg + 125mg ",
      cachdung: "Sáng 01 viên, trưa 01 viên, tối 01 viên(Uống)",
      soluong: "35",
    },
    {
      stt: 4,
      thuoc:
        "Amoxicilin + acid clavulanic 500mg + 125mg (Augbidil 625) 500mg + 125mg ",
      cachdung: "Sáng 01 viên, trưa 01 viên, tối 01 viên(Uống)",
      soluong: "11",
    },
    {
      stt: 5,
      thuoc:
        "Amoxicilin + acid clavulanic 500mg + 125mg (Augbidil 625) 500mg + 125mg ",
      cachdung: "Sáng 01 viên, trưa 01 viên, tối 01 viên(Uống)",
      soluong: "5",
    },
    {
      stt: 6,
      thuoc:
        "Amoxicilin + acid clavulanic 500mg + 125mg (Augbidil 625) 500mg + 125mg ",
      cachdung: "Sáng 01 viên, trưa 01 viên, tối 01 viên(Uống)",
      soluong: "5",
    },
    {
      stt: 7,
      thuoc:
        "Amoxicilin + acid clavulanic 500mg + 125mg (Augbidil 625) 500mg + 125mg ",
      cachdung: "Sáng 01 viên, trưa 01 viên, tối 01 viên(Uống)",
      soluong: "5",
    },
  ];

  return (
    <div>
      <div className=" paper A5">
        <section className="sheet padding-5mm">
          <table className=" table w-100 font-size-12 ">
            <tbody>
              <tr>
                <td className=" w-65 font-size-13">SỞ Y TẾ BẠC LIÊU</td>
                <td className="  text-center">Mã BN: 2307000002</td>
              </tr>
              <tr>
                <td className=" font-bold">
                  BỆNH VIỆN LAO VÀ BỆNH PHỔI TỈNH BẠC LIÊU
                </td>
              </tr>
              <tr>
                <td className="">Điện thoại: 02913678977</td>
              </tr>
            </tbody>
          </table>

          <table className="w-100  ">
            <tbody>
              <tr>
                <td className=" text-center font-bold  font-size-14">
                  ĐƠN THUỐC
                </td>
              </tr>
            </tbody>
          </table>

          <table className=" table w-100  font-size-12 ">
            <tbody>
              <tr>
                <td className="w-20">Họ tên BN:</td>
                <td className="font-bold w-40 font-size-13">Đặng Văn Bảo</td>
                <td className="">Tuổi: 33</td>
                <td className="">Giới tính: Nam</td>
              </tr>
              <tr>
                <td className="text-middle">Số thẻ BHYT:</td>
                <td className="text-middle " colSpan={3}>
                  <table className=" table-bordered w-60">
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
                <td colSpan={3}>
                  Ấp Tà Suôi, Xã Lộc Ninh, Huyện Hồng Dân, Bạc Liêu
                </td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Khoa:</td>
                <td colSpan={3}>Khoa Khám Bệnh (Phòng khám lao)</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Chuẩn đoán:</td>
                <td colSpan={3}>
                  {" "}
                  <span>
                    {" "}
                    Viêm phế quản phổi, không xác định/ Thiéu calci do chế độ
                    ăn/ Bệnh trào ngược dạ dày thực quản -Mã Bệnh J18.0 /E58
                    /k21
                  </span>{" "}
                </td>

                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>

          <table className=" w-100  ">
            <tbody>
              <tr>
                <td className="font-bold text-center font-size-15">
                  CHỈ ĐỊNH DÙNG THUỐC
                </td>
              </tr>
            </tbody>
          </table>

          <table className="  table w-100 font-size-12 ">
            <tbody>
              {userData.map((user) => (
                <tr key={user.stt}>
                  <td className="font-bold  text-center w-5">{user.stt}</td>
                  <td className="w-70">
                    <span className="font-bold ">{user.thuoc}</span>
                    <table>
                      <tbody>
                        <tr>
                          <td className=" font-italic ">
                            cách dùng: {user.cachdung}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>

                  <td className="font-bold text-center">{user.soluong}</td>
                  <td className="text-center">Viên</td>
                </tr>
              ))}
            </tbody>
          </table>
          <table className="table   w-100 text-center font-size-12 ">
            <tbody>
              <tr>
                <td className="w-50"></td>
                <td className=" ">Ngày 31 tháng 7 năm 2023</td>
              </tr>
              <tr>
                <td className="font-bold"></td>
                <td className="font-bold">Bác sĩ điều trị</td>
              </tr>
            </tbody>
          </table>

          <table className="table    font-size-12 ">
            <tbody>
              <tr>
                <td className="">Cộng:</td>
                <td className="font-bold ">7</td>
              </tr>
              <tr>
                <td className="font-bold text-middle">Lời dặn:</td>
                <td className="">
                  <table>
                    <tbody>
                      <tr>
                        <td>-Toa: 7 ngày uống</td>
                      </tr>
                      <tr>
                        <td>-Tái khám ngay khi:</td>
                      </tr>
                      <tr>
                        <td>Ngày tái khám: 26/7/2023</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>

          
            <table className="table  font-size-10 w-100  font-italic">
              <tfoot>
                <tr>
                  <td className="  ">Tái khám xin mang theo đơn này</td>
                </tr>
                <tr>
                  <td className=" bt-1">Ngày giờ in: 07/08/2023 10:30:37 AM</td>
                </tr>
              </tfoot>
            </table>
          
        </section>
      </div>

      <div className=" paper A5  ">
        <section className="sheet padding-5mm ">
          <table className=" table w-100 font-size-12 header ">
            <tbody>
              <tr>
                <td className=" w-50 ">Ngày tái khám: 26/7/2023</td>
                <td className="  text-center   font-bold">BS Huỳnh Phước Thiện</td>
              </tr>
            </tbody>
          </table>
          <table className="container"></table>

          <table className="table mt-5 font-size-11 w-100  font-italic">
            <tbody>
              <tr>
                <td className="  ">Tái khám xin mang theo đơn này</td>
              </tr>
              <tr>
                <td className=" bt-1">Ngày giờ in: 07/08/2023 10:30:37 AM</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}
