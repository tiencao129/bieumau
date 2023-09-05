import useSWR from "swr";
import { useRouter } from "next/router";
import React from "react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Home() {
  const router = useRouter();
  const { data, error, isLoading } = useSWR(
    `http://localhost:5000/bm_phieubosungtutruc_13/${router.query?.id}`,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  console.log(data);

  return (
    <div className="paper A4 landscape font-size-13">
      <section className="sheet padding-5mm">
        <table className="w-100  ">
          <tbody>
            <tr className="">
              <td className="  w-50 p-20px">
                <table className="table  w-100 ">
                  <tbody>
                    <tr className="font-bold">
                      <td>{data?.data?.donvi_cha_ten}</td>
                      <td className="text-right">Lưu: {data?.data?.luu}</td>
                    </tr>
                    <tr className="">
                      <td className="font-bold">{data?.data?.donvi_ten}</td>
                      <td className="text-right">số: {data?.data?.so}</td>
                    </tr>
                    <tr className="">
                      <td className=" text-decoration-underline">
                        Khoa lĩnh: {data?.data?.khoalinh}
                      </td>
                      <td rowSpan={2} className="text-middle text-right">
                        In lần thứ {data?.data?.inlanthu}
                      </td>
                    </tr>
                    <tr className="">
                      <td className=" text-decoration-underline">
                        Kho duyệt: {data?.data?.khoaduyet}
                      </td>
                    </tr>
                  </tbody>
                </table>

                <table className="table  w-100 mt-5">
                  <tbody>
                    <tr>
                      <td className="font-bold text-center">
                        {data?.data?.tieude}
                      </td>
                    </tr>
                    <tr>
                      <td className="font-italic text-center">
                        (Phiếu thu hồi tủ trực - Ngày 31 tháng 01 năm 2023)
                      </td>
                    </tr>
                  </tbody>
                </table>

                <table className="table  w-100 mt-5">
                  <tbody>
                    <tr>
                      <td className=" ">Lý do xuất: {data?.data?.lydo_xuat}</td>
                    </tr>
                  </tbody>
                </table>

                <table className="table table-bordered w-100">
                  <tbody>
                    <tr className="h-40px font-bold text-center ">
                      <td className="text-middle" rowSpan={2}>
                        STT
                      </td>
                      <td className="text-middle" rowSpan={2}>
                        Mã sản phẩm
                      </td>
                      <td className="text-middle " rowSpan={2}>
                        Tên sản phẩm
                      </td>
                      <td className="text-middle" rowSpan={2}>
                        Đơn vị
                      </td>

                      <td className="text-middle" colSpan={2}>
                        số lượng
                      </td>

                      <td className="text-middle" rowSpan={2}>
                        Ghi chú
                      </td>
                    </tr>
                    <tr className="font-bold text-center">
                      <td>yêu cầu</td>
                      <td>Thực trả</td>
                    </tr>
                    {data?.data?.loai?.map((loai, index) => (
                      <React.Fragment key={index}>
                        <tr>
                          <td
                            colSpan={7}
                            className=" font-bold remove-border-bold"
                          >
                           {loai.tenloai}
                          </td>
                        </tr>
                        {loai.nhom?.map((nhom, nhomIndex) => (
                          <React.Fragment key={nhomIndex}>
                            <tr>
                              <td
                                colSpan={7}
                                className="align-shift-2 font-bold remove-border-bold"
                              >
                                {nhom.tennhom}
                              </td>
                            </tr>

                            {nhom.chittiet?.map((chitiet, chitietIndex) => (
                              <tr key={chitietIndex}>
                                <td className="text-center">{chitiet.stt}</td>
                                <td className="text-center">
                                  {chitiet.sanpham_ma}
                                </td>
                                <td className="text-center">
                                  {chitiet.sanpham_ten}(
                                  {chitiet.sanpham_hoatchat}){" "}
                                  {chitiet.sanpham_nongdohamluong}
                                </td>
                                <td className="text-center">
                                  {chitiet.sanpham_donvitinh}
                                </td>
                                <td className="text-center">
                                  {chitiet.chitietxuat_soluong_yeucau}
                                </td>
                                <td className="text-center">
                                  {chitiet.chitietxuat_soluong_thuctra}
                                </td>
                                <td className="text-center">
                                  {chitiet.ghichu}
                                </td>
                              </tr>
                            ))}
                          </React.Fragment>
                        ))}
                      </React.Fragment>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td className="font-bold  " colSpan={2}>
                        Tổng cộng: 4
                      </td>
                      <td
                        className="font-bold text-right remove-border-bold"
                        colSpan={2}
                      >
                        Ngày,giờ duyệt: {data?.data?.thongtin_duyet_ngaygio}
                      </td>
                      <td
                        className="font-bold text-right remove-border-bold"
                        colSpan={3}
                      >
                        Ngày in: {data?.data?.thongtin_in_ngaygio}
                      </td>
                    </tr>
                  </tfoot>
                </table>

                <table className="table text-center font-bold  w-100 mt-10 ">
                  <tbody>
                    <tr>
                      <td className="  ">
                        Trưởng khoa dược - VTYT <br />
                        <span
                          className="font-italic"
                          style={{ fontWeight: "normal" }}
                        >
                          (Hoặc người được uỷ quyền)
                        </span>
                      </td>
                      <td className="">Người giao</td>
                      <td className="">Người nhận</td>
                      <td className="">
                        Trưởng khoa lâm sàng/
                        <br />
                        Cận lâm sàng <br />
                        <span
                          className="font-italic"
                          style={{ fontWeight: "normal" }}
                        >
                          ( Hoặc người được uỷ quyền)
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>

              <td className="  w-50 p-20px">
                <table className="table  w-100 ">
                  <tbody>
                    <tr className="font-bold">
                      <td>{data?.data?.donvi_cha_ten}</td>
                      <td className="text-right">Lưu: {data?.data?.luu}</td>
                    </tr>
                    <tr className="">
                      <td className="font-bold">{data?.data?.donvi_ten}</td>
                      <td className="text-right">số: {data?.data?.so}</td>
                    </tr>
                    <tr className="">
                      <td className=" text-decoration-underline">
                        Khoa lĩnh: {data?.data?.khoalinh}
                      </td>
                      <td rowSpan={2} className="text-middle text-right">
                        In lần thứ {data?.data?.inlanthu}
                      </td>
                    </tr>
                    <tr className="">
                      <td className=" text-decoration-underline">
                        Kho duyệt: {data?.data?.khoaduyet}
                      </td>
                    </tr>
                  </tbody>
                </table>

                <table className="table  w-100 mt-5">
                  <tbody>
                    <tr>
                      <td className="font-bold text-center">
                        {data?.data?.tieude}
                      </td>
                    </tr>
                    <tr>
                      <td className="font-italic text-center">
                        (Phiếu thu hồi tủ trực - Ngày 31 tháng 01 năm 2023)
                      </td>
                    </tr>
                  </tbody>
                </table>

                <table className="table  w-100 mt-5">
                  <tbody>
                    <tr>
                      <td className=" ">Lý do xuất: {data?.data?.lydo_xuat}</td>
                    </tr>
                  </tbody>
                </table>

                <table className="table table-bordered w-100">
                  <tbody>
                    <tr className="h-40px font-bold text-center ">
                      <td className="text-middle" rowSpan={2}>
                        STT
                      </td>
                      <td className="text-middle" rowSpan={2}>
                        Mã sản phẩm
                      </td>
                      <td className="text-middle " rowSpan={2}>
                        Tên sản phẩm
                      </td>
                      <td className="text-middle" rowSpan={2}>
                        Đơn vị
                      </td>

                      <td className="text-middle" colSpan={2}>
                        số lượng
                      </td>

                      <td className="text-middle" rowSpan={2}>
                        Ghi chú
                      </td>
                    </tr>
                    <tr className="font-bold text-center">
                      <td>yêu cầu</td>
                      <td>Thực trả</td>
                    </tr>
                    {data?.data?.loai?.map((loai, index) => (
                      <React.Fragment key={index}>
                        <tr>
                          <td
                            colSpan={7}
                            className=" font-bold remove-border-bold"
                          >
                            {loai.tenloai}
                          </td>
                        </tr>
                        {loai.nhom?.map((nhom, nhomIndex) => (
                          <React.Fragment key={nhomIndex}>
                            <tr>
                              <td
                                colSpan={7}
                                className="align-shift-2 font-bold remove-border-bold"
                              >
                                {nhom.tennhom}
                              </td>
                            </tr>

                            {nhom.chittiet?.map((chitiet, chitietIndex) => (
                              <tr key={chitietIndex}>
                                <td className="text-center">{chitiet.stt}</td>
                                <td className="text-center">
                                  {chitiet.sanpham_ma}
                                </td>
                                <td className="text-center">
                                  {chitiet.sanpham_ten}(
                                  {chitiet.sanpham_hoatchat}){" "}
                                  {chitiet.sanpham_nongdohamluong}
                                </td>
                                <td className="text-center">
                                  {chitiet.sanpham_donvitinh}
                                </td>
                                <td className="text-center">
                                  {chitiet.chitietxuat_soluong_yeucau}
                                </td>
                                <td className="text-center">
                                  {chitiet.chitietxuat_soluong_thuctra}
                                </td>
                                <td className="text-center">
                                  {chitiet.ghichu}
                                </td>
                              </tr>
                            ))}
                          </React.Fragment>
                        ))}
                      </React.Fragment>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td className="font-bold  " colSpan={2}>
                        Tổng cộng: 4
                      </td>
                      <td
                        className="font-bold text-right remove-border-bold"
                        colSpan={2}
                      >
                        Ngày,giờ duyệt: {data?.data?.thongtin_duyet_ngaygio}
                      </td>
                      <td
                        className="font-bold text-right remove-border-bold"
                        colSpan={3}
                      >
                        Ngày in: {data?.data?.thongtin_in_ngaygio}
                      </td>
                    </tr>
                  </tfoot>
                </table>

                <table className="table text-center font-bold  w-100 mt-10 ">
                  <tbody>
                    <tr>
                      <td className="  ">
                        Trưởng khoa dược - VTYT <br />
                        <span
                          className="font-italic"
                          style={{ fontWeight: "normal" }}
                        >
                          (Hoặc người được uỷ quyền)
                        </span>
                      </td>
                      <td className="">Người giao</td>
                      <td className="">Người nhận</td>
                      <td className="">
                        Trưởng khoa lâm sàng/
                        <br />
                        Cận lâm sàng <br />
                        <span
                          className="font-italic"
                          style={{ fontWeight: "normal" }}
                        >
                          ( Hoặc người được uỷ quyền)
                        </span>
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
  );
}
