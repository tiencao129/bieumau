import { Table, Pagination, Text } from "@mantine/core";
import { useState } from "react";

const PhongKham = () => {
  const Data = [
    { phong: "Nội 1", tiepnhan: 6, dangcho: 12.011, dakham: "C" },
    { phong: "Nội 2", tiepnhan: 6, dangcho: 12.011, dakham: "Cfsdg" },
    { phong: "Phổi 1", tiepnhan: 645, dangcho: 12.011, dakham: "C" },
    { phong: "Phổi 1", tiepnhan: 6, dangcho: 12.011, dakham: "Cfdg" },
    { phong: "Phổi 1", tiepnhan: 4536, dangcho: 12.011, dakham: "Cfg" },
    { phong: "Nội 1", tiepnhan: 612, dangcho: 12.011, dakham: "C" },
    { phong: "Nội 2", tiepnhan: 346, dangcho: 12.011, dakham: "C" },
    { phong: "Phổi 1", tiepnhan: 6, dangcho: 12.011, dakham: "Certs" },
    { phong: "Phổi 1", tiepnhan: 656, dangcho: 12.011, dakham: "C" },
    { phong: "Phổi 1", tiepnhan: 6, dangcho: 12.011, dakham: "C" },
    { phong: "Nội 1", tiepnhan: 456, dangcho: 12.011, dakham: "Creews" },
    { phong: "Nội 2", tiepnhan: 6, dangcho: 12.011, dakham: "C" },
    { phong: "Phổi 1", tiepnhan: 6, dangcho: 12.011, dakham: "fgC" },
    { phong: "Phổi 1", tiepnhan: 643, dangcho: 12.011, dakham: "C" },
    { phong: "Phổi 1", tiepnhan: 6, dangcho: 12.011, dakham: "dfgC" },
    { phong: "Nội 1", tiepnhan: 635, dangcho: 12.011, dakham: "C" },
    { phong: "Nội 2", tiepnhan: 6, dangcho: 12.011, dakham: "Cerg" },
    { phong: "Phổi 1", tiepnhan: 56, dangcho: 12.011, dakham: "C" },
    { phong: "Phổi 1", tiepnhan: 6, dangcho: 12.011, dakham: "C" },
    { phong: "Phổi 1", tiepnhan: 6553, dangcho: 12.011, dakham: "fdtrC" },
    { phong: "Nội 1", tiepnhan: 6, dangcho: 12.011, dakham: "Cdf" },
    { phong: "Nội 2", tiepnhan: 6, dangcho: 12.011, dakham: "dgC" },
    { phong: "Phổi 1", tiepnhan: 6, dangcho: 12.011, dakham: "C" },
    { phong: "Phổi 1", tiepnhan: 645, dangcho: 12.011, dakham: "ytgfC" },
    { phong: "Phổi 1", tiepnhan: 6, dangcho: 12.011, dakham: "ddfC" },
    { phong: "Nội 1", tiepnhan: 686, dangcho: 12.011, dakham: "C" },
    { phong: "Nội 2", tiepnhan: 6, dangcho: 12.011, dakham: "Cerer" },
    { phong: "Phổi 1", tiepnhan: 6, dangcho: 12.011, dakham: "Ccvhs" },
    { phong: "Phổi 1", tiepnhan: 6, dangcho: 12.011, dakham: "Casde" },
    { phong: "Phổi 1", tiepnhan: 6, dangcho: 12.011, dakham: "C" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = Data.slice(firstIndex, lastIndex);
  const npage = Math.ceil(Data.length / recordsPerPage);

  const handleOnChangePage = (page: number) => {
    setCurrentPage(page);
  };

  const ths = (
    <tr>
      <th>Phòng khám</th>
      <th>Tiếp nhận</th>
      <th>Đang chờ</th>
      <th>Đã khám</th>
    </tr>
  );

  const items = records.map((element: any) => (
    <tr>
      <td>{element.phong}</td>
      <td>{element.tiepnhan}</td>
      <td>{element.dangcho}</td>
      <td>{element.dakham}</td>
    </tr>
  ));

  return (
    <>
      <Text bg={"gray.0"} fw={500}>
        Tình hình phòng khám ngày 30/05/2023
      </Text>
      <Table
        verticalSpacing={"xs"}
        fontSize={"xs"}
        className="border-y border-gray-200 mt-2 "
      >
        <thead>{ths}</thead>
        <tbody>{items}</tbody>
      </Table>
      <Pagination
        align="center"
        size="xs"
        radius="xs"
        mb={5}
        defaultValue={currentPage}
        onChange={handleOnChangePage}
        total={npage}
      />
    </>
  );
};

export default PhongKham;
