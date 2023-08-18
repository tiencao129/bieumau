export default function Home() {
  return (
    <div className=" paper A4 landscape">
      <section className="sheet padding-5mm">
        <table className=" table font-size-16">
          <tbody>
            <tr>
              <td className=" text-center">SỞ Y TẾ BẠC LIÊU</td>
            </tr>
            <tr>
              <td className=" font-bold ">
                BỆNH VIỆN LAO VÀ BỆNH PHỔI TỈNH BẠC LIÊU
              </td>
            </tr>
            <tr>
              <td className="text-center font-bold">KHOA DƯỢC - VTYT</td>
            </tr>
          </tbody>
        </table>

        <table className=" table  d  w-100 font-size-16 mt-10">
          <tbody>
            <tr>
              <td className=" text-center font-bold">
                BÁO CÁO XUẤT TỒN KHO LẺ NỘI TRÚ
              </td>
            </tr>
            <tr>
              <td className=" text-center font-size-14 font-bold">
                Tháng ........ năm ...........
              </td>
            </tr>
          </tbody>
        </table>

        <table className="  table-bordered w-100 font-size-13 mt-10">
          <thead>
            <tr>
              <th rowSpan={3} className="text-middle">
                STT
              </th>
              <th rowSpan={3} className="text-middle">
                Mã
              </th>
              <th rowSpan={3} className="text-middle">
                Tên sản phẩm{" "}
              </th>
              <th rowSpan={3} className="text-middle">
                ĐVT
              </th>
              <th rowSpan={3} className="text-middle">
                Đơn giá{" "}
              </th>
              <th rowSpan={2} colSpan={2} className="text-middle">
                Tồn đầu kỳ
              </th>
              <th colSpan={4}>Nhập trong kỳ</th>
              <th colSpan={4}>Xuất trong kỳ</th>
              <th colSpan={2} rowSpan={2} className="text-middle">
                Tồn cuối kỳ
              </th>
            </tr>

            <tr>
              {" "}
              <th colSpan={2}>Nhập</th>
              <th colSpan={2}>Chuyển kho</th>
              <th colSpan={2}>Xuất</th>
              <th colSpan={2} className="w-20">
                Chuyển kho
              </th>
            </tr>
            <tr>
              <th className="w-10">SL</th>
              <th>Số Tiền</th>

              <th className="w-10">SL</th>
              <th>Số Tiền</th>

              <th className="w-10">SL</th>
              <th>Số Tiền</th>

              <th >SL</th>
              <th>Số Tiền</th>

              <th className="w-10">SL</th>
              <th>Số Tiền</th>
              <th className="w-10">SL</th>
              <th>Số Tiền</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-light">
              <td colSpan={5} className="">
                Hoá chất
              </td>
              <td colSpan={2} className="text-right">
                7.530.000,00
              </td>
              <td colSpan={2} className="text-right"></td>
              <td colSpan={2} className="text-right"></td>
              <td colSpan={2} className="text-right">
                600.000,00
              </td>
              <td colSpan={2} className="text-right"></td>
              <td colSpan={2} className="text-right">
                6.930.000,00
              </td>
            </tr>
            <tr>
              <td
                colSpan={5}
                className="align-shift-2 font-bold remove-border-bold"
              >
                Hoá Chất
              </td>
              <td colSpan={2} className="text-right">
                7.530.000,00
              </td>
              <td colSpan={2} className="text-right"></td>
              <td colSpan={2} className="text-right"></td>
              <td colSpan={2} className="text-right">
                600.000,00
              </td>
              <td colSpan={2} className="text-right"></td>
              <td colSpan={2} className="text-right">
                6.930.000,00
              </td>
            </tr>
            <tr>
              <td className="text-middle text-center">1</td>
              <td className="text-middle text-center">2TPT1CON01</td>
              <td className="text-middle text-center">
                Cồn 90 độ (cồn sát khuẩn 90)
              </td>
              <td className="text-middle text-center">Lít</td>
              <td className="p-3px text-right">30.000,00</td>

              <td className="text-middle text-center">251</td>
              <td className="p-3px text-right">753000,00</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="text-middle text-center">20</td>
              <td className="p-3px text-right">600.000,00</td>
              <td></td>
              <td></td>
              <td className="text-middle text-center">231</td>
              <td className="p-3px text-right">693.000,00</td>
            </tr>
            <tr className="bg-light">
              <td colSpan={5} className="font-bold">
                Thuốc Gây nghiện, Thuốc Hướng thần, Thuốc Tiền chất
              </td>
              <td colSpan={2} className="text-right">
                7.530.000,00
              </td>
              <td colSpan={2} className="text-right"></td>
              <td colSpan={2} className="text-right"></td>
              <td colSpan={2} className="text-right">
                600.000,00
              </td>
              <td colSpan={2} className="text-right"></td>
              <td colSpan={2} className="text-right">
                6.930.000,00
              </td>
            </tr>
            <tr>
              <td
                colSpan={5}
                className="align-shift-2 font-bold remove-border-bold"
              >
                Thuốc Hướng thần
              </td>
              <td colSpan={2} className="text-right">
                7.530.000,00
              </td>
              <td colSpan={2} className="text-right"></td>
              <td colSpan={2} className="text-right"></td>
              <td colSpan={2} className="text-right">
                600.000,00
              </td>
              <td colSpan={2} className="text-right"></td>
              <td colSpan={2} className="text-right">
                6.930.000,00
              </td>
            </tr>
            <tr>
              <td className="text-middle text-center">1</td>
              <td className="text-middle text-center">DIA005</td>
              <td className="text-middle text-center">
                Diazepam 10mg/2ml
              </td>
              <td className="text-middle text-center">ống</td>
              <td className="p-3px text-right">30.000,00</td>

              <td className="text-middle text-center">251</td>
              <td className="p-3px text-right">753000,00</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="text-middle text-center">20</td>
              <td className="p-3px text-right">600.000,00</td>
              <td></td>
              <td></td>
              <td className="text-middle text-center">231</td>
              <td className="p-3px text-right">693.000,00</td>
            </tr>{" "}
            <tr>
              <td className="text-middle text-center">1</td>
              <td className="text-middle text-center">MID001</td>
              <td className="text-middle text-center">
                Midazolam(Paciflam)5mg/1l
              </td>
              <td className="text-middle text-center">Ống</td>
              <td className="p-3px text-right">30.000,00</td>

              <td className="text-middle text-center">251</td>
              <td className="p-3px text-right">753000,00</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="text-middle text-center">20</td>
              <td className="p-3px text-right">600.000,00</td>
              <td></td>
              <td></td>
              <td className="text-middle text-center">231</td>
              <td className="p-3px text-right">693.000,00</td>
            </tr>{" "}
            <tr>
              <td
                colSpan={5}
                className="align-shift-2 font-bold remove-border-bold"
              >
                Thuốc Gây nghiện
              </td>
              <td colSpan={2} className="text-right">
                227.000,00
              </td>
              <td colSpan={2} className="text-right"></td>
              <td colSpan={2} className="text-right"></td>
              <td colSpan={2} className="text-right">
                7.000,00
              </td>
              <td colSpan={2} className="text-right"></td>
              <td colSpan={2} className="text-right">
                230.000,00
              </td>
            </tr>
            <tr>
              <td className="text-middle text-center">1</td>
              <td className="text-middle text-center">FEN004</td>
              <td className="text-middle text-center">
                Fentanyl(Feniham) 100mcg/2ml
              </td>
              <td className="text-middle text-center">Ống</td>
              <td className="p-3px text-right">14.300,00</td>

              <td className="text-middle text-center">10</td>
              <td className="p-3px text-right">143.000,00</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="text-middle text-center"></td>
              <td className="p-3px text-right"></td>
              <td></td>
              <td></td>
              <td className="text-middle text-center">10</td>
              <td className="p-3px text-right">143.000,00</td>
            </tr>{" "}
          </tbody>
        </table>

        <table>
          <thead></thead>
        </table>
      </section>
    </div>
  );
}
