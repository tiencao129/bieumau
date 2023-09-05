import useSWR from "swr";
import { useRouter } from "next/router";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Home() {
  const router = useRouter();
  const { data, error, isLoading } = useSWR(
    `http://localhost:5000/bm_xuatvientro_15/${router.query?.id}`,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  console.log(data);
  const userData = [
    {
      stt: 1,
      ma: "21TPT1CON01",
      tensanpham: "Cồn 70 độ (cồn sát khuẩn 70)",
      donvi: "lít",
      hang: "Công ty ABC",
      solohang: "12345",
      hansudung: "30/12/2023",
      soluong: 2,
      dongia: "750000",
      thanhtien: "1500000",
      ghichu: "",
    },
    {
      stt: 1,
      ma: "21TPT1CON01",
      tensanpham: "Cồn 70 độ (cồn sát khuẩn 70) Cồn 70 độ (cồn sát khuẩn 70) ",
      donvi: "lít",
      hang: "Công ty ABC",
      solohang: "12345",
      hansudung: "30/12/2023",
      soluong: 2,
      dongia: "750000",
      thanhtien: "1500000",
      ghichu: "",
    },
    {
      stt: 1,
      ma: "21TPT1CON01",
      tensanpham: "Cồn 70 độ (cồn sát khuẩn 70)",
      donvi: "lít",
      hang: "Công ty ABC",
      solohang: "12345",
      hansudung: "30/12/2023",
      soluong: 2,
      dongia: "750000",
      thanhtien: "1500000",
      ghichu: "",
    },
    {
      stt: 1,
      ma: "21TPT1CON01",
      tensanpham: "Cồn 70 độ (cồn sát khuẩn 70)",
      donvi: "lít",
      hang: "Công ty ABC",
      solohang: "12345",
      hansudung: "30/12/2023",
      soluong: 2,
      dongia: "750000",
      thanhtien: "1500000",
      ghichu: "",
    },
    {
      stt: 1,
      ma: "21TPT1CON01",
      tensanpham: "Cồn 70 độ (cồn sát khuẩn 70)",
      donvi: "lít",
      hang: "Công ty ABC",
      solohang: "12345",
      hansudung: "30/12/2023",
      soluong: 2,
      dongia: "750000",
      thanhtien: "1500000",
      ghichu: "",
    },
    {
      stt: 1,
      ma: "21TPT1CON01",
      tensanpham: "Cồn 70 độ (cồn sát khuẩn 70)",
      donvi: "lít",
      hang: "Công ty ABC",
      solohang: "12345",
      hansudung: "30/12/2023",
      soluong: 2,
      dongia: "750000",
      thanhtien: "1500000",
      ghichu: "",
    },
    {
      stt: 1,
      ma: "21TPT1CON01",
      tensanpham: "Cồn 70 độ (cồn sát khuẩn 70)",
      donvi: "lít",
      hang: "Công ty ABC",
      solohang: "12345",
      hansudung: "30/12/2023",
      soluong: 2,
      dongia: "750000",
      thanhtien: "1500000",
      ghichu: "",
    },
    {
      stt: 1,
      ma: "21TPT1CON01",
      tensanpham: "Cồn 70 độ (cồn sát khuẩn 70)",
      donvi: "lít",
      hang: "Công ty ABC",
      solohang: "12345",
      hansudung: "30/12/2023",
      soluong: 2,
      dongia: "750000",
      thanhtien: "1500000",
      ghichu: "",
    },
    {
      stt: 1,
      ma: "21TPT1CON01",
      tensanpham: "Cồn 70 độ (cồn sát khuẩn 70)",
      donvi: "lít",
      hang: "Công ty ABC",
      solohang: "12345",
      hansudung: "30/12/2023",
      soluong: 2,
      dongia: "750000",
      thanhtien: "1500000",
      ghichu: "",
    },
    {
      stt: 1,
      ma: "21TPT1CON01",
      tensanpham: "Cồn 70 độ (cồn sát khuẩn 70)",
      donvi: "lít",
      hang: "Công ty ABC",
      solohang: "12345",
      hansudung: "30/12/2023",
      soluong: 2,
      dongia: "750000",
      thanhtien: "1500000",
      ghichu: "",
    },

    // ... Thêm dữ liệu người dùng khác tương tự ở đây
  ];

  return (
    <div className="paper A4  font-size-13">
      <section className="sheet padding-5mm">
        <table className="table w-100 ">
          <tbody>
            <tr className="text-center">
              <td className="w-50">{data?.data?.donvi_cha_ten}</td>
            </tr>
            <tr className="text-center">
              <td className="font-bold">{data?.data?.donvi_ten}</td>
              <td className="">{data?.data?.so_phieu}</td>
            </tr>
          </tbody>
        </table>

        <table className="table mt-5px w-100">
          <tbody>
            <tr>
              <td className="font-bold text-center font-size-17 ">
                  {data?.data?.tieude}
              </td>
            </tr>
            <tr>
              <td className=" text-center"> {data?.data?.ngay_lap}</td>
            </tr>
          </tbody>
        </table>

        <table className="table  w-100 mt-5px">
          <tbody>
            <tr>
              <td className=" ">Nơi nhận: {data?.data?.noi_nhan}</td>
              <td>Kho xuất: {data?.data?.kho_xuat }</td>
            </tr>

            <tr>
              <td className="" colSpan={2}>
                Lý do xuất: {data?.data?.ly_do }
              </td>
            </tr>
          </tbody>
        </table>
        <table className="table table-bordered w-100">
          <thead>
            <tr>
              <th className="p-5px">STT</th>
              <th className="p-5px">Mã</th>
              <th className="p-5px">Tên Sản Phẩm</th>
              <th className="p-5px">Đơn Vị</th>
              <th className="p-5px">Hãng, Nước SX</th>
              <th className="p-5px">Số Lô</th>
              <th className="p-5px">Hạn SD</th>
              <th className="p-5px">Số Lượng</th>
              <th className="p-5px">Đơn Giá</th>
              <th className="p-5px">Thành Tiền</th>
              <th className="p-5px">Ghi Chú</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.chitiet?.map((user, index) => (
              <tr key={index}>
                <td className="text-center">{user.stt}</td>
                <td className=" p-3px">{user.sanpham_ma}</td>
                <td className=" p-3px">{user.sanpham_ten} ({user.sanpham_hoatchat}) {user.sanpham_nongdohamluong}</td>
                <td className=" text-center p-3px">{user.sanpham_donvitinh }</td>
                <td className=" p-3px">{user.sanpham_hangsanxuat }</td>
                <td className=" p-3px">{user.sanpham_solo}</td>
                <td className=" text-center p-3px">{user.sanpham_hansudung}</td>
                <td className=" text-right p-3px">{user.chitietxuat_soluong}</td>
                <td className=" text-right p-3px">{user.chitietxuat_dongia }</td>
                <td className=" text-right p-3px"></td>
                <td className="">{user.ghichu}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className="table  w-100">
          <tbody>
            <tr>
              <td className=" ">
                Tổng số tiền:&emsp;
                <span className="font-bold">{data?.data?.tongthanhtien }</span>
              </td>
            </tr>
            <tr>
              <td className=" ">
                Tổng số tiền (viết bằng chữ):&emsp;{data?.data?.tongthanhtien_bangchu }
              </td>
            </tr>

            <tr>
              <td className=" text-right font-italic" colSpan={2}>
                {" "}
                Bạc Liêu, <span>{data?.data?.kyten_ngayky } </span>
              </td>
            </tr>
          </tbody>
        </table>

        <table className="table text-center w-100 mt-5px">
          <tbody>
            <tr>
              <td className="font-bold w-30 ">NGƯỜI LẬP BẢNG</td>
              <td className="font-bold w-30 text-center">PHỤ TRÁCH CTCL</td>
              <td className="font-bold text-center">THỦ TRƯỞNG ĐƠN VỊ</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
