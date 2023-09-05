import useSWR from "swr";
import { useRouter } from "next/router";
import React from "react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

// const calculateTotal = (data) => {
//   let total = 0;
//   if (data?.data) {
//     // Tính tổng thành tiền cho mảng "diengiai"
//     if (data.data.diengiai) {
//       data.data.diengiai.forEach((diengiai) => {
//         diengiai.diengiai_thanhtien =
//           diengiai.kham_soluong * diengiai.kham_dongia;
//         total += diengiai.diengiai_thanhtien;
//       });
//     }
//     data.data.tongcong = total;
//   }
// };

export default function Home() {
  const router = useRouter();
  const { data, error, isLoading } = useSWR(
    `http://localhost:5000/bm_phieuchidinh_noitru_7/${router.query?.id}`,
    fetcher
  );

  let str1 = "";
  let str2 = "";
  let str3 = "";
  let str4 = "";

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  console.log(data);

  const giaytoSo = data?.data?.giayto_so;
  if (giaytoSo) {
    str1 = giaytoSo.substring(0, 2);
    str2 = giaytoSo.substring(2, 3);
    str3 = giaytoSo.substring(3, 5);
    str4 = giaytoSo.substring(5, 15);
  }

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
                      <td className=" w-70 "> {data?.data?.donvi_cha_ten} </td>
                      <td className="  ">Mẫu số:{data?.data?.donvi_mauso}</td>
                    </tr>
                    <tr>
                      <td className=" font-bold">{data?.data?.donvi_ten}</td>
                      <td className=" ">
                        Mã số người khám bệnh: {data?.data?.manguoikhambenh}
                      </td>
                    </tr>
                    <tr>
                      <td className="">{data?.data?.donvi_khoa}</td>
                      <td> Số khám bệnh: {data?.data?.sokhambenh}</td>
                    </tr>
                    <tr>
                      <td className="">Mã khoa {data?.data?.donvi_makhoa}</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td className=" ">
                        <span className="table-bordered p-15px ">
                          {data?.data?.sothutuphieu}
                        </span>{" "}
                      </td>
                    </tr>
                  </tbody>
                </table>

                <table className="w-100  ">
                  <tbody>
                    <tr>
                      <td className=" text-center font-bold  font-size-16">
                        {data?.data?.donvi_ten}
                      </td>
                    </tr>
                  </tbody>
                </table>

                <table className=" table w-100  font-size-13 ">
                  <thead>
                    <tr>
                      <td className="font-bold"> I. Phần Hành Chính</td>
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
                                  {data?.data?.benhnhan_hoten}
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
                                  {data?.data?.benhnhan_ngaysinh}
                                </span>
                              </td>{" "}
                              <td className="">
                                Giới tính: {data?.data?.benhnhan_gioitinh}(1)
                              </td>
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
                                  {data?.data?.benhnhan_diachi}
                                </span>
                              </td>
                              <td className="">(3) Mã khu vực(k1/k2/k3)</td>
                              <td className=" w-40   ">
                                <table className="w-100 table-bordered mlr-10  display-inline ">
                                  <tbody>
                                    <tr>
                                      <td className="pr-20px pl-20px display-inline">
                                        {data?.data?.benhnhan_diachi_makhuvuc}
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
                                        {str1}
                                      </td>
                                      <td className="w-auto text-middle text-center">
                                        {str2}
                                      </td>
                                      <td className="w-auto text-middle text-center">
                                        {str3}
                                      </td>
                                      <td className="w-40 text-middle text-center">
                                        {str4}
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
                                  {data?.data?.giayto_giatritu}
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
                                  {data?.data?.giayto_giatriden}
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
                                  {data?.data?.giayto_noidangkykcbbandau}
                                </span>
                              </td>
                              <td className="">(6)Mã:</td>
                              <td className=" w-40   ">
                                <table className=" table-bordered">
                                  <tbody>
                                    <tr>
                                      <td className="pr-20px pl-20px ">
                                        {data?.data?.giayto_ma}
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
                                  {data?.data?.ngaygio_denkham}
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
                                  {data?.data?.ngaygio_dieutrinoitrutu}
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
                                  {data?.data?.ngaygio_ketthucdieutri}
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
                                  {data?.data?.tongsongay_dieutri}
                                </span>
                              </td>
                              <td className="text-right">
                                (10)Tình trạng ra viện:
                                <table className="w-100 table-bordered mlr-10  display-inline">
                                  <tbody>
                                    <tr>
                                      <td className=" display-inline pr-20px pl-20px">
                                        {" "}
                                        {data?.data?.tinhtrang_ravien}
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
                                        {data?.data?.capcuu}
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
                                      <td className=" display-inline pr-20px pl-20px">
                                        {" "}
                                        {data?.data?.dungtuyen}
                                      </td>
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
                                >
                                  {" "}
                                  {data?.data?.noichuyendentu}
                                </span>
                              </td>
                              <td className="w-20">
                                Nơi chuyển đi{" "}
                                <span
                                  className="border-bottom-wrapper text-with-dotted "
                                  style={{
                                    width: "calc(100% - 100px)",
                                  }}
                                >
                                  {" "}
                                  {data?.data?.noichuyendi}
                                </span>
                              </td>
                              <td className="w-20">
                                (13)Thông tuyến{" "}
                                <table className=" table-bordered mlr-10  display-inline ">
                                  <tbody>
                                    <tr>
                                      <td className=" display-inline pr-20px pl-20px">
                                        {data?.data?.thongtuyen}
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
                                        {data?.data?.traituyen}
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
                                >
                                  {" "}
                                  {data?.data?.chuandoanxacdinh}
                                </span>
                              </td>
                              <td className="w-20">
                                (16)Mã bệnh:
                                <table className=" table-bordered mlr-10  display-inline ">
                                  <tbody>
                                    <tr>
                                      <td className=" display-inline pr-20px pl-20px">
                                        {" "}
                                        {data?.data?.mabenh}
                                      </td>
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
                                      <td className=" display-inline pr-20px pl-20px">
                                        {" "}
                                        {data?.data?.benhkemtheo}
                                      </td>
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
                                >
                                  {" "}
                                  {data?.data?.thoidiemdu5nam_tungay}
                                </span>
                              </td>
                              <td className="w-50">
                                (20)Miễn cùng chi trả trong năm từ ngày:
                                <span
                                  className="border-bottom-wrapper text-with-dotted "
                                  style={{
                                    width: "calc(100% - 290px)",
                                  }}
                                >
                                  {" "}
                                  {data?.data?.miencungchitratrongnamtungay}
                                </span>
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
                      <td className="font-bold">
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
                                        {str1}
                                      </td>
                                      <td className="w-auto text-middle text-center">
                                        {str2}
                                      </td>
                                      <td className="w-auto text-middle text-center">
                                        {str3}
                                      </td>
                                      <td className="w-40 text-middle text-center">
                                        {str4}
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
                                  {data?.data?.giayto_giatritu}
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
                                  {data?.data?.giayto_giatriden}
                                </span>
                              </td>
                              <td className="">
                                Mức hưởng:&nbsp;
                                <table className=" table-bordered   display-inline ">
                                  <tbody>
                                    <tr>
                                      <td className=" display-inline pr-20px pl-20px">
                                        {data?.data?.muchuong}
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>{" "}
                            </tr>
                          </tbody>
                        </table>
                        <table className="w-70">
                          <tbody>
                            <tr>
                              <td className="w-50">
                                Chi phí KBCB tính từ ngày:&nbsp;
                                <span
                                  className="border-bottom-wrapper text-with-dotted "
                                  style={{
                                    width: "calc(100% - 150px)",
                                  }}
                                >
                                  {data?.data?.chiphiKBCB_tinhtungay}
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
                                  {data?.data?.chiphiKBCB_tinhdenngay}
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
                    {data?.data?.loai?.map((loai, index) => (
                      <React.Fragment key={index}>
                        <tr>
                          <td colSpan={6} className="text-left font-bold">
                            {loai.tenloai}
                          </td>
                          <td className="font-bold text-right p-3px">
                            {loai.loai_thanhtienbv}
                          </td>
                          <td className=""></td>
                          <td className="font-bold text-right p-3px">
                            {loai.loai_thanhtienbh}
                          </td>
                          <td className="font-bold text-right p-3px">
                            {loai.loai_quybhyt}
                          </td>
                          <td className="font-bold text-right p-3px">
                            {loai.loai_nguoibenhcungchitra}
                          </td>
                          <td className="font-bold text-right p-3px">
                            {loai.loai_khac}
                          </td>
                          <td className="font-bold text-right p-3px">
                            {loai.loai_nguoibenhtutra}
                          </td>
                        </tr>
                        {loai.chitiet_khambenh?.map((chitiet, chitietIndex) => (
                          <tr className="" key={chitietIndex}>
                            <td className="w-150px p-3px">{chitiet.noidung}</td>
                            <td className="text-center p-3px">
                              {chitiet.donvitinh}
                            </td>
                            <td className=" text-right p-3px">
                              {chitiet.soluong}
                            </td>
                            <td className=" text-right p-3px">
                              {chitiet.dongiabv}
                            </td>
                            <td className=" text-right p-3px">
                              {chitiet.dongiabh}
                            </td>
                            <td className=" text-right p-3px">
                              {chitiet.tylethanhtoantheodichvu}
                            </td>
                            <td className="font-bold text-right p-3px">
                              {chitiet.thanhtienbv}
                            </td>
                            <td className="font-bold text-right p-3px">
                              {chitiet.tylethanhtoanbhyt}
                            </td>
                            <td className="font-bold text-right p-3px">
                              {chitiet.thanhtienbh}
                            </td>
                            <td className="font-bold text-right p-3px">
                              {chitiet.quybhyt}
                            </td>
                            <td className="font-bold text-right p-3px">
                              {chitiet.nguoibenhcungchitra}
                            </td>
                            <td className="font-bold text-right p-3px">
                              {chitiet.khac}
                            </td>

                            <td className="font-bold  text-right p-3px">
                              {chitiet.nguoibenhtutra}
                            </td>
                          </tr>
                        ))}
                      </React.Fragment>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="">
                      <td colSpan={6} className="font-bold text-right pr-20">
                        Tổng Cộng
                      </td>
                      <td className="font-bold text-right">
                        {data?.data?.tongcong_thanhtienbv}
                      </td>
                      <td></td>
                      <td className="font-bold text-right">
                        {" "}
                        {data?.data?.tongcong_thanhtienbh}
                      </td>
                      <td className="font-bold text-right">
                        {data?.data?.tongcong_quybhyt}
                      </td>
                      <td className="font-bold text-right">
                        {data?.data?.tongcong_nguoibenhcungtritra}
                      </td>
                      <td className="font-bold text-right">
                        {data?.data?.tongcong_khac}
                      </td>
                      <td className="font-bold text-right">
                        {data?.data?.tongcong_nguoibenhtutra}
                      </td>
                    </tr>
                  </tfoot>
                </table>

                <table className=" w-100 font-size-13">
                  <tbody>
                    <tr className="w-100">
                      <td className="w-100">
                        Tổng chi phí lần khám bệnh/ cả đợt điều trị:&nbsp;
                        <span
                          className="border-bottom-wrapper text-with-dotted "
                          style={{
                            width: "calc(100% - 300px)",
                          }}
                        >
                          {data?.data?.tongchiphi} đồng
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
                          {data?.data?.tongchiphi_vietbangchu}
                        </span>
                      </td>
                    </tr>

                    <tr>
                      {" "}
                      <td className="w-100">Trong đó số tiền do:&nbsp;</td>
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
                          {data?.data?.sotienthanhtoan_quybhyt} đồng
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td className="w-100">Người bệnh trã, trong đó:&nbsp;</td>
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
                          {data?.data?.sotienthanhtoan_nguoibenhtra_phamvibhyt}{" "}
                          đồng
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
                          {
                            data?.data?.sotienthanhtoan_nguoibenhtra_cackhoanphaitrakhac
                          }{" "}
                          đồng
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
                      <td className="  ">Tái khám xin mang theo đơn này</td>
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
