import useSWR from "swr";
import { useRouter } from "next/router";
import React from "react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

// const calculateTotal = (data) => {
//   let total = 0;
//   if (data?.data?.chitiet) {

//         data.data.chitiet.forEach((chitiet) => {
//           chitiet.chitiet_thanhtien =
//             chitiet.chitietxuat_soluong * chitiet.chitietxuat_dongia;
//             total += chitiet.chitiet_thanhtien;
//         });

//     data.data.cong = total;
//   }
// };

export default function Home() {
  const router = useRouter();
  const { data, error, isLoading } = useSWR(
    `http://localhost:5000/bm_baocaotuan/${router.query?.id}`,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  //   calculateTotal(data);

  return (
    <div className="paper A5 font-size-12">
      <section className="sheet padding-15mm">
        <table className=" w-100">
          <tbody>
            <tr>
              <td className="w-100">
                <table className="table w-100 font-bold text-center font-size-12">
                  <tbody>
                    <tr className="w-50 ">
                      <td className="">{data?.data?.donvi_cha_ten}</td>
                      <td>
                        <table className="w-100 text-center">
                          <tbody>
                            <tr>
                              <td> {data?.data?.quochieu}</td>
                            </tr>
                            <tr>
                              <td> {data?.data?.tieungu}</td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    <tr className="w-50 ">
                      <td className="pt-5">Số: {data?.data?.donvi_so}</td>
                      <td className="pt-5">{data?.data?.ngay}</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr className="w-100">
              <td className="font-bold text-center font-size-13 pt-5 w-100">
                {data?.data?.tieude}
              </td>
            </tr>
            <tr className="w-100">
              <td className="font-bold text-center font-size-13  w-100">
                {data?.data?.tieude_donvi}
              </td>
            </tr>

            <tr className="">
              <td>
                <table className="font-size-13 w-100 font-bold">
                  <tbody>
                    <tr>
                      <td className="pt-5">I. THÔNG TIN CHUNG</td>
                    </tr>
                  </tbody>
                </table>
                <table className="  w-100 text-middle ">
                  <tbody>
                    <tr>
                      <td className="pl-5">Đơn vị: {data?.data?.donvi}</td>
                    </tr>

                    <tr>
                      <td className="pl-5">Địa điểm:{data?.data?.diadiem}</td>
                    </tr>

                    <tr>
                      <td className="pl-5">
                        Thời gian: từ {data?.data?.thoigiantu} -{" "}
                        {data?.data?.thoigianden}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>

            <tr>
              <td>
                <table className="font-size-14 w-100 font-bold">
                  <tbody>
                    <tr>
                      <td className="pt-5">II. Các công việc thực hiện</td>
                    </tr>
                  </tbody>
                </table>
                <table className=" table-bordered w-100 text-middle  ">
                  <tbody>
                    <tr className="font-bold  bg-light text-center">
                      <td>STT</td>
                      <td>Công việc</td>
                      <td>Kết luận</td>
                    </tr>

                    {data?.data?.caccongviecthuchien?.map(
                      (caccongviecthuchien, nhomIndex) => (
                        <React.Fragment key={nhomIndex}>
                          <tr>
                            <td
                              colSpan={3}
                              className="align-shift-2 font-bold remove-border-bold"
                            >
                              {caccongviecthuchien.ten_khoa}
                            </td>
                          </tr>
                          {caccongviecthuchien?.chitiet?.map(
                            (chitiet, chitietIndex) => (
                              <tr key={chitietIndex}>
                                <td className="text-center">{chitiet.tt}</td>
                                <td className="pl-1 pr-1">
                                  {chitiet.congviec}
                                </td>
                                <td className=" pl-1 pr-1">
                                  {chitiet.ketluan}
                                </td>
                              </tr>
                            )
                          )}
                        </React.Fragment>
                      )
                    )}
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td className="pt-5">
                {" "}
                Bằng chữ:&emsp;
                {data?.data?.tongchiphi_bangchu}
              </td>
            </tr>
            <tr>
              <td>
                <table className="table text-center w-100  mt-10">
                  <tbody className="">
                    <tr className="font-italic">
                      <td> Ngày ..../...../2023 </td>
                      <td>Ngày ..../...../.....</td>
                      <td>Ngày ..../...../.......</td>
                    </tr>
                    <tr className=" font-size-13 font-bold">
                      <td className=" w-30  ">NGƯỜI LẬP BẢNG</td>
                      <td className="  text-center">PHỤ TRÁCH BP</td>

                      <td className=" text-center"> GIÁM ĐỐC</td>
                    </tr>
                    <tr className="h-100px font-size-11 font-italic">
                      <td className="h-100px w-30 "> (Ký,họ tên) </td>
                      <td className=" h-100px w-30 text-center">(Ký,họ tên)</td>

                      <td className=" h-100px text-center">(Ký,họ tên)</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
          <tfoot className="spacer">
            <tr>
              <td></td>
            </tr>
          </tfoot>
        </table>
        <div className="footer">PAGE FOOTER</div>
      </section>
      {data?.data?.phuluc1?.map((phuluc1, index) => (
        <React.Fragment key={index}>
          <section className="sheet padding-15mm">
            <table className=" w-100">
              <thead>
                <tr>
                  <th> Phụ lục 1: {phuluc1.tenphuluc}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="w-100">
                  <td className="w-100">
                    <table className="table ">
                      <tbody>
                        <tr className="text-center font-bold">
                          <td> {phuluc1.donvi_cha_ten} </td>
                        </tr>
                        <tr className="text-center">
                          <td className="font-bold">{phuluc1.donvi_ten}</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr className="w-100">
                  <td className="w-100">
                    <table className="table  w-100">
                      <tbody>
                        <tr>
                          <td className="font-bold text-center">
                            {phuluc1.tieude}
                          </td>
                        </tr>
                        <tr>
                          <td className="font-bold text-center pt-3">
                            {phuluc1.tieude_khoa}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>{" "}
                <tr className="w-100">
                  <td className="w-100">
                    <table className="table  w-100">
                      <tbody>
                        <tr>
                          <td className="font-bold text-center pt-3">
                            Từ ngày {phuluc1.tungay} đền ngày {phuluc1.denngay}
                          </td>
                        </tr>
                        <tr>
                          <td className="font-bold align-shift-2 pt-3">
                            Danh sách các sản phẩm thay đổi cơ số tủ trực
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>{" "}
                <tr className="w-100">
                  <td className="w-100">
                    <table className="table table-bordered w-100">
                      <thead>
                        <tr className="h-40px ">
                          <td className="font-bold text-center text-middle"></td>
                          <td className="font-bold text-center text-middle">
                            Sản phẩm
                          </td>
                          <td className="font-bold text-center text-middle ">
                            ĐVT
                          </td>
                          <td className="font-bold text-center text-middle">
                            Cơ số cũ
                          </td>
                          <td className="font-bold text-center text-middle">
                            Cơ số mới
                          </td>
                          <td className="font-bold text-center text-middle">
                            Ngày cập nhật
                          </td>
                          <td className="font-bold text-center text-middle">
                            Lý do
                          </td>
                        </tr>
                      </thead>

                      <tbody>
                        {phuluc1.danhsachcacsanphamthaydoi.map(
                          (danhsachcacsanphamthaydoi, index) => (
                            <tr key={index}>
                              <td className="text-center w-10">
                                {danhsachcacsanphamthaydoi.stt}
                              </td>

                              <td className="text-center">
                                {danhsachcacsanphamthaydoi.sanpham_ten}(
                                {danhsachcacsanphamthaydoi.sanpham_hoatchat}){" "}
                                {
                                  danhsachcacsanphamthaydoi.sanpham_nongdohamluong
                                }
                              </td>
                              <td className="text-center">
                                {danhsachcacsanphamthaydoi.sanpham_donvitinh}
                              </td>
                              <td className="text-center">
                                {danhsachcacsanphamthaydoi.sanpham_cosocu}
                              </td>

                              <td className="text-right p-3px">
                                {danhsachcacsanphamthaydoi.sanpham_cosomoi}
                              </td>
                              <td className="text-center p-3px">
                                {danhsachcacsanphamthaydoi.sanpham_ngaycapnhat}
                              </td>
                              <td className="text-center p-3px">
                                {danhsachcacsanphamthaydoi.lydo}
                              </td>
                            </tr>
                          )
                        )}
                      </tbody>
                    </table>
                  </td>
                </tr>{" "}
                <tr className="w-100">
                  <td className="w-100">
                    <table className="table  w-100">
                      <tbody>
                        <tr>
                          <td className="font-bold text-right " colSpan={2}>
                            {" "}
                            Bạc Liêu, ngày .... tháng ... năm 2023
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>{" "}
                <tr className="w-100">
                  <td className="w-100">
                    <table className="table text-center font-size-13 w-100">
                      <tbody>
                        <tr>
                          <td className="font-bold w-auto text-center">
                            NGƯỜI LẬP BẢNG
                          </td>
                          <td className="font-bold w-auto text-center">
                            TRƯỞNG KHOA LÂM SÀNG/<br></br>
                            NGƯỜI UỶ QUYỀN
                          </td>

                          <td className="font-bold  ">
                            TRƯỞNG KHOA DƯỢC - VTYT
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </React.Fragment>
      ))}
    </div>
  );
}
