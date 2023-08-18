import { Table, Pagination } from "@mantine/core";
import { useState, useEffect } from "react";
import Data from "./mock-data.json";

const HoTen = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = Data.slice(firstIndex, lastIndex);
  const npage = Math.ceil(Data.length / recordsPerPage);

  const handleOnChangePage = (page: number) => {
    setCurrentPage(page);
  };

  const items = records.map((element: any) => (
    <tr key={element.name}>
      <td>{element.stt}</td>
      <td>{element.position}</td>
      <td>{element.name}</td>
      <td>{element.symbol}</td>
      <td>{element.mass}</td>
    </tr>
  ));

  const ths = (
    <tr>
      <th>STT</th>
      <th>Họ tên</th>
      <th>Đối tượng</th>
      <th>Thời gian</th>
      <th>In thẻ</th>
    </tr>
  );

  return (
    <>
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

export default HoTen;
