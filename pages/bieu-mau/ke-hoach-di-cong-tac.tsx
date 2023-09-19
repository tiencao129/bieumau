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
    `http://localhost:5000/bm_kehoachdicongtac/${router.query?.id}`,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  //   calculateTotal(data);

  return (
    <div className="paper A5 font-size-13">
      <section className="sheet padding-10mm">
        <table className=" w-100">
          <tbody>
            <tr>
              <td className="w-100">
                <table className="table w-100 font-bold text-center font-size-12">
                  <tbody>
                    <tr className="w-50 ">
                      <td className="">{data?.data?.donvi_cha_ten}</td>
                      <td>{data?.data?.quochieu}</td>
                    </tr>
                    <tr className="w-50">
                      <td className="">{data?.data?.donvi_ten}</td>
                      <td className="">{data?.data?.tieungu}</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr className="w-100">
              <td className="font-bold text-center font-size-16 pt-5 w-100">
                {data?.data?.tieude}
              </td>
            </tr>

            <tr className="">
              <td>
                <table className="font-size-14 w-100 font-bold">
                  <tbody>
                    <tr>
                      <td className="pt-5">I. THÔNG TIN CHUNG</td>
                    </tr>
                  </tbody>
                </table>
                <table className="table table-bordered w-100 text-middle">
                  <tbody>
                    {data?.data?.thongtinchung?.map(
                      (thongtinchung, thongtinchungIndex) => (
                        <tr key={thongtinchungIndex}>
                          <td>Nội dung (1):</td>
                          <td colSpan={3}>{thongtinchung.noidung}</td>
                        </tr>
                      )
                    )}
                    {data?.data?.thongtinchung?.map(
                      (thongtinchung, thongtinchungIndex) => (
                        <tr key={thongtinchungIndex}>
                          <td>Nơi đến công tác (2):</td>
                          <td colSpan={3}>{thongtinchung.noidencongtac}</td>
                        </tr>
                      )
                    )}
                    {data?.data?.thongtinchung?.map(
                      (thongtinchung, thongtinchungIndex) => (
                        <tr key={thongtinchungIndex}>
                          <td>Địa điểm (3):</td>
                          <td colSpan={3}>{thongtinchung.diadiem}</td>
                        </tr>
                      )
                    )}

                    {data?.data?.thongtinchung?.map(
                      (thongtinchung, thongtinchungIndex) => (
                        <tr key={thongtinchungIndex}>
                          <td>Thời gian từ:</td>
                          <td className="text-center">
                            {thongtinchung.thoigiantu}
                          </td>
                          <td className="text-center">đến</td>
                          <td className="text-center">
                            {thongtinchung.thoigianden}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td>
                <table className="font-size-14 w-100 font-bold">
                  <tbody>
                    <tr>
                      <td className="pt-5">II. THÀNH PHẦN THAM DỰ</td>
                    </tr>
                  </tbody>
                </table>
                <table className=" table-bordered w-100 text-middle   text-center">
                  <tbody>
                    <tr className="font-bold  bg-light">
                      <td>STT</td>
                      <td>Họ tên</td>
                      <td>Đơn vị(5)</td>
                    </tr>

                    {data?.data?.thanhphanthamdu?.map(
                      (thanhphanthamdu, thanhphanthamduIndex) => (
                        <tr key={thanhphanthamduIndex}>
                          <td>{thanhphanthamdu.stt}</td>
                          <td>{thanhphanthamdu.hoten}</td>

                          <td>{thanhphanthamdu.donvi}</td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td>
                <table className="font-size-14 w-100 font-bold">
                  <tbody>
                    <tr>
                      <td className="pt-5">III. DỰ TRÙ KINH PHÍ</td>
                    </tr>
                  </tbody>
                </table>
                <table className=" table-bordered w-100 text-middle  ">
                  <tbody>
                    <tr className="font-bold  bg-light text-center">
                      <td>STT</td>
                      <td>Diễn giải</td>
                      <td>Số lượng</td>
                      <td>Đơn giá</td>
                      <td>Thành tiền</td>
                    </tr>

                    {data?.data?.dutrukinhphi?.map(
                      (dutrukinhphi, dutrukinhphiIndex) => (
                        <React.Fragment key={dutrukinhphiIndex}>
                          {dutrukinhphi?.congtacchiphi.map(
                            (congtacchiphi, congtacchiphiIndex) => (
                              <tr key={congtacchiphiIndex}>
                                <td className="text-center text-middle ">
                                  {congtacchiphi.stt}
                                </td>
                                <td>
                                  Công tác phí {congtacchiphi.canbo} :<br></br>
                                  ngày {congtacchiphi.ngaycongtac} -
                                  {congtacchiphi.ngayketthuccongtac}{" "}
                                </td>

                                <td className="text-center text-middle   ">
                                  {congtacchiphi.soluong}
                                </td>
                                <td className="text-center text-middle   ">
                                  {congtacchiphi.dongia}
                                </td>
                                <td className="text-center text-middle   ">
                                  {congtacchiphi.thanhtien}
                                </td>
                              </tr>
                            )
                          )}
                          {dutrukinhphi?.tienxang.map(
                            (tienxang, tienxangIndex) => (
                              <React.Fragment key={tienxangIndex}>
                                <tr>
                                  <td></td>
                                  <td
                                    colSpan={4}
                                    className=" text-middle "
                                  >
                                    Tiền xăng {tienxang.tienxang_diadiemdi} ↔{" "}
                                    {tienxang.tienxang_diadiemden} ngày{" "}
                                    {tienxang.tienxang_ngaycongtac} -{" "}
                                    {tienxang.tienxang_ngayketthuccongtac} của{" "}
                                    {tienxang.tienxang_canbo}
                                  </td>
                                </tr>
                                {tienxang?.diengiai.map(
                                  (diengiai, diengiaiIndex) => (
                                    <React.Fragment key={diengiaiIndex}>
                                      <tr>
                                        <td></td>
                                        <td className=" text-middle ">
                                          {diengiai.canbo}:
                                          {diengiai.tienxang_chitietdive_songay}{" "}
                                          xe máy:{" "}
                                          {diengiai.tienxang_chitietdive_sokm}km
                                          di về <br></br>={">"}{" "}
                                          {diengiai.tienxang_chitietdive_sokm}
                                        </td>{" "}
                                        <td className="text-center text-middle ">
                                          {diengiai.tienxang_chitietdive_sokm}
                                        </td>{" "}
                                        <td className="text-center text-middle ">
                                          {diengiai.tienxang_dongia}
                                        </td>
                                        <td className="text-center text-middle ">
                                          {diengiai.tienxang_thanhtien}
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="text-center text-middle "></td>
                                        <td>
                                          - Di chuyển nội ô: <br></br>+
                                          {
                                            diengiai.tienxang_chitietdichuyennoio_dausang
                                          }
                                          <br></br>+
                                          {
                                            diengiai.tienxang_chitietdichuyennoio_cuoisang
                                          }
                                          <br></br>+
                                          {
                                            diengiai.tienxang_chitietdichuyennoio_dauchieu
                                          }
                                          <br></br>+
                                          {
                                            diengiai.tienxang_chitietdichuyennoio_cuoichieu
                                          }
                                          <br></br>={">"}{" "}
                                          {
                                            diengiai.tienxang_tongdichuyennoio_sokm
                                          }{" "}
                                          km/ 1 xe /1 ngày<br></br>={">"}{" "}
                                          {
                                            diengiai.tienxang_tongdichuyennoio_sokm
                                          }{" "}
                                          km *{" "}
                                          {
                                            diengiai.tienxang_tongdichuyennoio_songay
                                          }
                                        </td>
                                        <td className="text-center text-middle ">
                                          {" "}
                                          {diengiai.tienxang_tongdichuyennoio}
                                        </td>
                                        <td className="text-center text-middle ">
                                          {" "}
                                          {diengiai.tienxang_dongia}
                                        </td>
                                        <td className="text-center text-middle ">
                                          {" "}
                                          {
                                            diengiai.tienxang_tongdichuyennoio_thanhtien
                                          }
                                        </td>
                                      </tr>
                                    </React.Fragment>
                                  )
                                )}
                              </React.Fragment>
                            )
                          )}
                          <tr className="font-bold ">
                            <td colSpan={4} className="text-right pr-20">
                              Tổng cộng
                            </td>
                            <td className="text-right text-middle ">
                              {data?.data?.tongchiphi}
                            </td>
                          </tr>
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
                      <td>
                      Ngày ..../...../.......
                      </td>
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
    </div>
  );
}
