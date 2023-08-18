export default function Home() {
  const userData = [
    {
      noiDung: "siêu âm tuyến giáp",
      donViTinh: "lần",
      soLuong: "1,0 ",
      donGiaBV: "40.000",
      donGiaBH: "40.000",
      tyLeThanhToanDV: "100",
      thanhTienBV: "40.000",
      tyLeThanhToanBHYT: "100",
      thanhTienBH: "40.000",
      quyBHYT: "40.000",
      nguoiBenhCungChiTra: "0.00",
      khac: "0.00",
      nguoiBenhTuTra: "0.00",
    },
    {
      noiDung: "siêu âm tuyến giáp",
      donViTinh: "lần",
      soLuong: "1,0 ",
      donGiaBV: "50.000",
      donGiaBH: "50.000",
      tyLeThanhToanDV: "100",
      thanhTienBV: "40.000",
      tyLeThanhToanBHYT: "100",
      thanhTienBH: "40.000",
      quyBHYT: "40.000",
      nguoiBenhCungChiTra: "0.00",
      khac: "0.00",
      nguoiBenhTuTra: "0.00",
    },
  ];

  return (
    <div className=" paper A4 landscape ">
      <section className="sheet padding-5mm ">
        <table>
          <tbody>
            <tr>
              <td>
                <table className=" table w-100  font-size-13">
                  <tbody>
                    <tr>
                      <td className=" w-70 ">SỞ Y TẾ BẠC LIÊU</td>
                      <td className="  ">Mẫu số:01/KBCB</td>
                    </tr>
                    <tr>
                      <td className=" font-bold">
                        BỆNH VIỆN LAO VÀ BỆNH PHỔI TỈNH BẠC LIÊU
                      </td>
                      <td className=" ">Mã số người khám bệnh: 230800004</td>
                    </tr>
                    <tr>
                      <td className="">KHOA KHÁM BỆNH</td>
                      <td> Số khám bệnh:118367</td>
                    </tr>
                    <tr>
                      <td className="">Mã khoa k01</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td className=" ">
                        <span className="table-bordered p-15px ">1</span>{" "}
                      </td>
                    </tr>
                  </tbody>
                </table>

                <table className="w-100  ">
                  <tbody>
                    <tr>
                      <td className=" text-center font-bold  font-size-16">
                        BẢNG KÊ CHI PHÍ ĐIỀU TRỊ NỘI TRÚ
                      </td>
                    </tr>
                  </tbody>
                </table>

                <table className=" table w-100  font-size-13 ">
                  <thead>
                    <tr>
                      <td className=""> I. Phần Hành Chính</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        {" "}
                        <table className="table  w-100">
                          <tbody>
                            <tr>
                              <td className="w80 ">
                                (1)Họ tên người bệnh:&nbsp;
                                <span
                                  className="font-bold border-bottom-wrapper text-with-dotted"
                                  style={{
                                    width: "calc(100% - 150px)",
                                  }}
                                >
                                  LƯU HÙNG THANH
                                </span>
                              </td>
                              <td className="">
                                Ngày, tháng năm sinh:&nbsp;
                                <span
                                  className="border-bottom-wrapper text-with-dotted "
                                  style={{
                                    width: "calc(100% - 150px)",
                                  }}
                                >
                                  4/11/1998
                                </span>
                              </td>{" "}
                              <td className="">Giới tính: nam(1)</td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {" "}
                        <table className="table w-100 mt-5px">
                          <tbody>
                            <tr>
                              <td className="w-70">
                                (2)Địa chỉ hiện tại:&nbsp;
                                <span
                                  className="border-bottom-wrapper text-with-dotted "
                                  style={{
                                    width: "calc(100% - 150px)",
                                  }}
                                >
                                  Thị trấn tôn Huyên trị An Giang
                                </span>
                              </td>
                              <td className="">(3) Mã khu vực(k1/k2/k3)</td>
                              <td className=" w-40   ">
                                <table className="w-100 table-bordered mlr-10  display-inline ">
                                  <tbody>
                                    <tr>
                                      <td className="pr-20px pl-20px display-inline">
                                        {" "}
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {" "}
                        <table className="table w-100">
                          <tbody>
                            <tr className="">
                              <td className="">(4)Mã thẻ BHYT:</td>
                              <td className="">
                                <table className=" table-bordered w-350px">
                                  <tbody>
                                    <tr>
                                      <td className="w-auto text-middle text-center ">
                                        GD
                                      </td>
                                      <td className="w-auto text-middle text-center">
                                        4
                                      </td>
                                      <td className="w-auto text-middle text-center">
                                        95
                                      </td>
                                      <td className="w-40 text-middle text-center">
                                        952101882395005
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>{" "}
                              <td className="">
                                Giá trị từ:&nbsp;
                                <span
                                  className="border-bottom-wrapper text-with-dotted "
                                  style={{
                                    width: "calc(100% - 60px)",
                                  }}
                                >
                                  4/11/2023
                                </span>
                              </td>{" "}
                              <td className="">
                                đến:&nbsp;
                                <span
                                  className="border-bottom-wrapper text-with-dotted "
                                  style={{
                                    width: "calc(100% - 40px)",
                                  }}
                                >
                                  4/11/2023
                                </span>
                              </td>{" "}
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {" "}
                        <table className="table w-100">
                          <tbody>
                            <tr>
                              <td className="w80 ">
                                (5)Nơi ĐK KCB ban đầu:&nbsp;
                                <span
                                  className="font-bold border-bottom-wrapper text-with-dotted"
                                  style={{
                                    width: "calc(100% - 150px)",
                                  }}
                                >
                                  TYT xã Vĩnh Mỹ B
                                </span>
                              </td>
                              <td className="">(6)Mã:</td>
                              <td className=" w-40   ">
                                <table className=" table-bordered">
                                  <tbody>
                                    <tr>
                                      <td className="pr-20px pl-20px ">
                                        213322132{" "}
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {" "}
                        <table className="table w-100">
                          <tbody>
                            <tr>
                              <td className="w-50">
                                (7)Đến Khám:&nbsp;
                                <span
                                  className="font-bold border-bottom-wrapper text-with-dotted"
                                  style={{
                                    width: "calc(100% - 300px)",
                                  }}
                                >
                                  07h52 ngày 07/08/2023
                                </span>
                              </td>

                              <td className="w-50">
                                (8)Điều trị ngoại trú/ nội trú tù:&nbsp;
                                <span
                                  className="font-bold border-bottom-wrapper text-with-dotted"
                                  style={{
                                    width: "calc(100% - 300px)",
                                  }}
                                >
                                  07h52 ngày 07/08/2023
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        {" "}
                        <table className="table w-100">
                          <tbody>
                            <tr>
                              <td className="">
                                (9)Kết thúc khám/ điều trị:&nbsp;
                                <span
                                  className="font-bold border-bottom-wrapper text-with-dotted"
                                  style={{
                                    width: "calc(100% - 200px)",
                                  }}
                                >
                                  10h37 ngày 07/08/2023
                                </span>
                              </td>
                              <td className="text-center">
                                Tổng số ngày điều trị:&nbsp;
                                <span
                                  className="font-bold border-bottom-wrapper text-with-dotted"
                                  style={{
                                    width: "calc(100% - 200px)",
                                  }}
                                >
                                  1
                                </span>
                              </td>
                              <td className="text-right">
                                (10)Tình trạng ra viện:
                                <table className="w-100 table-bordered mlr-10  display-inline">
                                  <tbody>
                                    <tr>
                                      <td className=" display-inline pr-20px pl-20px">
                                        {" "}
                                        aaaaa
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        {" "}
                        <table className="table w-100">
                          <tbody>
                            <tr>
                              <td className="w-20">
                                (11)Cấp cứu
                                <table className=" table-bordered mlr-10  display-inline ">
                                  <tbody>
                                    <tr>
                                      <td className=" display-inline pr-20px pl-20px">
                                        X
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                              <td className="w-20">
                                (12)Đúng tuyến
                                <table className=" table-bordered mlr-10  display-inline ">
                                  <tbody>
                                    <tr>
                                      <td className=" display-inline pr-20px pl-20px"></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>

                              <td className="w-20">
                                Nơi chuyển dến từ{" "}
                                <span
                                  className="border-bottom-wrapper text-with-dotted "
                                  style={{
                                    width: "calc(100% - 100px)",
                                  }}
                                ></span>
                              </td>
                              <td className="w-20">
                                Nơi chuyển đi{" "}
                                <span
                                  className="border-bottom-wrapper text-with-dotted "
                                  style={{
                                    width: "calc(100% - 100px)",
                                  }}
                                ></span>
                              </td>
                              <td className="w-20">
                                (13)Thông tuyến{" "}
                                <table className=" table-bordered mlr-10  display-inline ">
                                  <tbody>
                                    <tr>
                                      <td className=" display-inline pr-20px pl-20px">
                                        X
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                              <td className="w-20">
                                (14)trái tuyến{" "}
                                <table className=" table-bordered mlr-10  display-inline ">
                                  <tbody>
                                    <tr>
                                      <td className=" display-inline pr-20px pl-20px">
                                        X
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {" "}
                        <table className="table w-100">
                          <tbody>
                            <tr>
                              <td className="w-80">
                                (15)Chuẩn đoán xác định:
                                <span
                                  className="border-bottom-wrapper text-with-dotted "
                                  style={{
                                    width: "calc(100% - 200px)",
                                  }}
                                ></span>
                              </td>
                              <td className="w-20">
                                (16)Mã bệnh:
                                <table className=" table-bordered mlr-10  display-inline ">
                                  <tbody>
                                    <tr>
                                      <td className=" display-inline pr-20px pl-20px"></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>{" "}
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {" "}
                        <table className="table w-100">
                          <tbody>
                            <tr>
                              <td className="w-70">
                                (17)Bệnh kèm theo:
                                <span
                                  className="border-bottom-wrapper text-with-dotted "
                                  style={{
                                    width: "calc(100% - 200px)",
                                  }}
                                ></span>
                              </td>
                              <td className="w-30">
                                (18)Mã Bệnh kèm theo:
                                <table className=" table-bordered   display-inline ">
                                  <tbody>
                                    <tr>
                                      <td className=" display-inline pr-20px pl-20px"></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>{" "}
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        {" "}
                        <table className="table w-100">
                          <tbody>
                            <tr>
                              <td className="w-50">
                                (19)Thời điểm đủ 5 năm liên tục từ ngày:
                                <span
                                  className="border-bottom-wrapper text-with-dotted "
                                  style={{
                                    width: "calc(100% - 290px)",
                                  }}
                                ></span>
                              </td>
                              <td className="w-50">
                                (20)Miễn cùng chi trả trong năm từ ngày:
                                <span
                                  className="border-bottom-wrapper text-with-dotted "
                                  style={{
                                    width: "calc(100% - 290px)",
                                  }}
                                ></span>
                              </td>{" "}
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                {/* -------------------------------------------------------------------------------- */}
               
                        <table className=" w-100 font-size-13  ">
                          <thead>
                            <tr>
                              <td className="">
                                {" "}
                                II. Phần Chi phí khám bệnh, chữa bệnh
                              </td>
                            </tr>
                          </thead>

                          <tbody>
                            <tr>
                              <td>
                                <table className=" w-100">
                                  <tbody>
                                    <tr className="">
                                      <td className="">(4)Mã thẻ BHYT:</td>
                                      <td className="">
                                        <table className=" table-bordered w-300px">
                                          <tbody>
                                            <tr>
                                              <td className="w-auto text-middle text-center ">
                                                GD
                                              </td>
                                              <td className="w-auto text-middle text-center">
                                                4
                                              </td>
                                              <td className="w-auto text-middle text-center">
                                                95
                                              </td>
                                              <td className="w-40 text-middle text-center">
                                                952101882395005
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>{" "}
                                      <td className="w-25">
                                        Giá trị từ:&nbsp;
                                        <span
                                          className="border-bottom-wrapper text-with-dotted "
                                          style={{
                                            width: "calc(100% - 150px)",
                                          }}
                                        >
                                          4/11/2023
                                        </span>
                                      </td>{" "}
                                      <td className="w-25">
                                        đến:&nbsp;
                                        <span
                                          className="border-bottom-wrapper text-with-dotted "
                                          style={{
                                            width: "calc(100% - 150px)",
                                          }}
                                        >
                                          4/11/2023
                                        </span>
                                      </td>
                                      <td className="">
                                        Mức hưởng:&nbsp;
                                        <table className=" table-bordered   display-inline ">
                                          <tbody>
                                            <tr>
                                              <td className=" display-inline pr-20px pl-20px">
                                                100
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>{" "}
                                    </tr>
                                  </tbody>
                                </table>
                                <table className="w-50">
                                  <tbody>
                                    <tr>
                                      <td className="">
                                        Giá trị từ:&nbsp;
                                        <span
                                          className="border-bottom-wrapper text-with-dotted "
                                          style={{
                                            width: "calc(100% - 150px)",
                                          }}
                                        >
                                          4/11/2023
                                        </span>
                                      </td>{" "}
                                      <td className="">
                                        đến:&nbsp;
                                        <span
                                          className="border-bottom-wrapper text-with-dotted "
                                          style={{
                                            width: "calc(100% - 150px)",
                                          }}
                                        >
                                          4/11/2023
                                        </span>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <table className="  table-bordered w-100 font-size-13">
                          <thead>
                            <tr>
                              <th rowSpan={2}>Nội dung</th>
                              <th rowSpan={2}>Đơn vị tính</th>
                              <th rowSpan={2}>Số lượng </th>
                              <th rowSpan={2}>Đơn giá BV</th>
                              <th rowSpan={2}>Đơn giá BH</th>
                              <th rowSpan={2}>Tỷ lệ thanh toán theo dịch vụ</th>
                              <th rowSpan={2}>Thành tiền BV</th>
                              <th rowSpan={2}>Tỷ Lệ Thanh Toán BHYT</th>
                              <th rowSpan={2}>Thành tiền BH</th>

                              <th colSpan={4}>Nguồn thanh toán(đồng)</th>
                            </tr>
                            <tr>
                              {" "}
                              <th>Quỹ BHYT</th>
                              <th>Người bệnh cùng chi trả</th>
                              <th className="w-20">Khác</th>
                              <th>Người bệnh tự trả</th>
                            </tr>
                            <tr>
                              <th>(1)</th>
                              <th>(2)</th>
                              <th>(3)</th>
                              <th>(4)</th>
                              <th>(5)</th>
                              <th>(6)</th>
                              <th>(7)</th>
                              <th>(8)</th>
                              <th>(9)</th>

                              <th>(10)</th>
                              <th>(11)</th>
                              <th>(12)</th>
                              <th>(13)</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td colSpan={6} className="text-left font-bold">
                                Chuẩn đoán hình ảnh
                              </td>
                              <td className="font-bold text-right p-3px">
                                87.800,00
                              </td>
                              <td className=""></td>
                              <td className="font-bold text-right p-3px">
                                87.800,00
                              </td>
                              <td className="font-bold text-right p-3px">
                                87.800,00
                              </td>
                              <td className="font-bold text-right p-3px">
                                0,00
                              </td>
                              <td className="font-bold text-right p-3px">
                                0,00
                              </td>
                              <td className="font-bold text-right p-3px">
                                0,00
                              </td>
                            </tr>
                            {userData.map((user) => (
                              <tr className="" key={user.noiDung}>
                                <td className="w-150px p-3px">
                                  {user.noiDung}
                                </td>
                                <td className="text-center p-3px">
                                  {user.donViTinh}
                                </td>
                                <td className=" text-right p-3px">
                                  {user.soLuong}
                                </td>
                                <td className=" text-right p-3px">
                                  {user.donGiaBV}
                                </td>
                                <td className=" text-right p-3px">
                                  {user.donGiaBH}
                                </td>
                                <td className=" text-right p-3px">
                                  {user.tyLeThanhToanDV}
                                </td>
                                <td className="font-bold text-right p-3px">
                                  {user.thanhTienBV}
                                </td>
                                <td className="font-bold text-right p-3px">
                                  {user.tyLeThanhToanBHYT}
                                </td>
                                <td className="font-bold text-right p-3px">
                                  {user.thanhTienBH}
                                </td>
                                <td className="font-bold text-right p-3px">
                                  {user.quyBHYT}
                                </td>
                                <td className="font-bold text-right p-3px">
                                  {user.nguoiBenhCungChiTra}
                                </td>
                                <td className="font-bold text-right p-3px">
                                  {user.khac}
                                </td>

                                <td className="font-bold  text-right p-3px">
                                  {user.nguoiBenhTuTra}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                          <tfoot>
                            <tr className="">
                              <td
                                colSpan={6}
                                className="font-bold text-right pr-20"
                              >
                                Tổng Cộng
                              </td>
                              <td className="font-bold text-right">
                                87.800,00
                              </td>
                              <td className="font-bold text-right"></td>
                              <td className="font-bold text-right">
                                87.800,00
                              </td>
                              <td className="font-bold text-right">
                                87.800,00
                              </td>
                              <td className="font-bold text-right">0,00</td>
                              <td className="font-bold text-right">0,00</td>

                              <td className="font-bold text-right">0,00</td>
                            </tr>
                          </tfoot>
                        </table>

                        <table className=" w-100 font-size-13">
                          <tbody>
                            <tr className="w-100">
                              <td className="w-100">
                                Tổng chi phí lần khám bệnh/ cả đợt điều
                                trị:&nbsp;
                                <span
                                  className="border-bottom-wrapper text-with-dotted "
                                  style={{
                                    width: "calc(100% - 300px)",
                                  }}
                                >
                                  87.000,00 đồng
                                </span>
                              </td>
                            </tr>

                            <tr>
                              <td className="w-100">
                                Viết bằng chữ :&nbsp;
                                <span
                                  className="border-bottom-wrapper text-with-dotted "
                                  style={{
                                    width: "calc(100% - 300px)",
                                  }}
                                >
                                  tám mươi bảy nghìn tám trăm đồng
                                </span>
                              </td>
                            </tr>

                            <tr>
                              {" "}
                              <td className="w-100">
                                Trong đó số tiền do:&nbsp;
                              </td>
                            </tr>

                            <tr>
                              <td className="w-100">
                                Quỹ BHYT thanh toán:&nbsp;
                                <span
                                  className="border-bottom-wrapper text-with-dotted "
                                  style={{
                                    width: "calc(100% - 300px)",
                                  }}
                                >
                                  87.000,000 đồng
                                </span>
                              </td>
                            </tr>

                            <tr>
                              <td className="w-100">
                                Người bệnh trã, trong đó:&nbsp;
                              </td>
                            </tr>

                            <tr>
                              <td className="w-100">
                                + Cung trả trong phạm vi BHYT:&nbsp;
                                <span
                                  className="border-bottom-wrapper text-with-dotted "
                                  style={{
                                    width: "calc(100% - 300px)",
                                  }}
                                >
                                  87.000,00 đồng
                                </span>
                              </td>
                            </tr>

                            <tr>
                              <td className="w-100">
                                + Các khoản phải trả khác:&nbsp;
                                <span
                                  className="border-bottom-wrapper text-with-dotted "
                                  style={{
                                    width: "calc(100% - 300px)",
                                  }}
                                >
                                  87.000,00 đồng
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="w-100">Nguồn khác:&nbsp;</td>
                            </tr>
                          </tbody>
                        </table>

                        <table className="table  font-size-11 w-100  font-italic">
                          <tbody>
                            <tr>
                              <td className="  ">
                                Tái khám xin mang theo đơn này
                              </td>
                            </tr>
                            <tr>
                              <td className=" bt-1">
                                Ngày giờ in: 07/08/2023 10:30:37 AM
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
             
        <footer>123123123</footer>
      </section>
    </div>

    // {/* <div className=" paper A4 landscape ">
    //   <section className="sheet padding-5mm ">
    //     <table className=" table w-100 font-size-13 ">
    //       <tbody>
    //         <tr>
    //           <td>

    //           </td>

    //         </tr>
    //       </tbody>
    //     </table>
    //     <table className="container"></table>

    //     <table className="table mt-5 font-size-11 w-100  font-italic">
    //       <tbody>
    //         <tr>
    //           <td className="  ">Tái khám xin mang theo đơn này</td>
    //         </tr>
    //         <tr>
    //           <td className=" bt-1">Ngày giờ in: 07/08/2023 10:30:37 AM</td>
    //         </tr>
    //       </tbody>
    //     </table>
    //     <table className="table   w-100 text-center font-size-12 ">
    //       <tbody>
    //         <tr>
    //           <td className="w-50"></td>
    //           <td className=" ">Ngày 31 tháng 7 năm 2023</td>
    //         </tr>
    //         <tr>
    //           <td className="font-bold"></td>
    //           <td className="font-bold">Bác sĩ điều trị</td>
    //         </tr>
    //       </tbody>
    //     </table>
    //   </section>
    // </div> */}
  );
}
