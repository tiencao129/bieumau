import useSWR from "swr";
import { useRouter } from "next/router";
import React from "react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const calculateTotal = (data) => {
  if (data?.data) {
    data.data.tongthanhtien = 0;
    if (data.data.chittiet) {
      data.data.chittiet.forEach((chitiet) => {
        chitiet.sotien = chitiet.congty_sotien;
        data.data.tongthanhtien += chitiet.sotien;
      });
    }
  }
};

export default function Home() {
  const router = useRouter();
  const { data, error, isLoading } = useSWR(
    `http://localhost:5000/bm_baocaonhapkhochan_3/${router.query?.id}`,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  calculateTotal(data);

  return (
    <div className=" paper A4">
      <section className="sheet padding-10mm">
        <table className=" w-100 row ">
          <tbody>
            <tr>
              <td className="font-bold  text-center font-size-17">
                {data?.data?.tieude}
              </td>
            </tr>
            <tr>
              <td className="font-bold  text-center">{data?.data?.ngaylap}</td>
            </tr>
          </tbody>
        </table>

        <table className="table  table-bordered w-100">
          <thead>
            <tr>
              <th>STT</th>
              <th>Công Ty</th>
              <th>Số Tiền</th>
              <th>Ghi Chú</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.chittiet?.map((chitiet, index) => (
              <tr key={index}>
                <td className="font-bold  text-center">{chitiet.stt}</td>
                <td className="font-bold w-50 p-3px">{chitiet.congty_tencongty}</td>
                <td className="font-bold text-right p-3px">
                  {chitiet.congty_sotien}
                </td>
                <td className="font-bold">{chitiet.ghichu}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="">
              <td colSpan={2} className="font-bold text-right pr-20 ">
                Tổng Cộng
              </td>
              <td className="font-bold text-right p-3px">
                {data?.data?.tongthanhtien}{" "}
              </td>
            </tr>
          </tfoot>
        </table>
        <table className="table mt-20px  w-100 text-center ">
          <tbody>
            <tr>
              <td className="w-50"></td>
              <td className=" font-italic">
              {data?.data?.kyten_noiky}, {data?.data?.kyten_ngayky}
              </td>
            </tr>
            <tr>
              <td className="font-bold">TRƯỞNG KHOA DƯỢC_VTYT</td>
              <td className="font-bold">NGƯỜI LẬP</td>
            </tr>
            <tr>
              <td className="table m-40px"></td>
            </tr>
            <tr>
              <td className=""></td>
              <td className="font-bold">DS ĐOÀN HOÀNG SAO</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
