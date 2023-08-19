import React, { useState } from 'react';

const YourComponent: React.FC = () => {
  const [td1Content, setTd1Content] = useState("Nội dung từ thẻ td thứ 1");

  return (
    <div className="paper A4 landscape font-size-13">
      <table>
        <tbody>
          <tr>
            <td className="td1">{td1Content}
            123123123</td>
            <td className="td2">{td1Content}</td>
          </tr>
        </tbody>
      </table>
      {/* ...Các phần khác của component */}
    </div>
  );
}

export default YourComponent;