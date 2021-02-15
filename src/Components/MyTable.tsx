import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { createSolutionBuilderHost } from "typescript";
import Modal from "./Modal";
import {Row,GlobalStyles,Td,Th,Header} from './styledComponents'

interface ColumnsDetail {
  headers: string[];
  column: any;

}
interface Columns {
  columnsDetail: ColumnsDetail;
  remove?: boolean;
  edit?: boolean;
  index?: boolean;
  tableStyles?:object;
  headerStyles?:object;
  rowStyles?:object;

}
export default function MyTable({ columnsDetail,remove,edit,index,tableStyles,headerStyles,rowStyles}: Columns) {
  const [columnsDetails, setColumnsDetails] = useState(columnsDetail);
  const [editModal, setEditModal] = useState<number>(0);

 

  const handleOnDeletebutton = (id: number) => {
    const copyDetails = { ...columnsDetails };
    const copyColumns = [...columnsDetails.column].filter(
      (item) => item.id !== id
    );
    copyDetails.column = copyColumns;
    setColumnsDetails(copyDetails);
  };
  const handleOnEditbutton = (e:any,id: number) => {
    e.stopPropagation()
    setEditModal(id);
  };
const handleWindowClick=()=>{
  setEditModal(0)
}
  
  const { headers, column } = columnsDetails;
  return (
    <>
    <GlobalStyles />
      <table  style={tableStyles}>
        <Header >
          <tr >
            {index && <th>index</th>}
            {headers.map((header: string, index: number) => (
              <>
                <Th key={index}>{header}</Th>
              </>
            ))}
            {remove && <th>delete</th>}
            {edit && <th>edit</th>}
          </tr>
        </Header>
        <tbody>
          {column.map((column: any) => (
            <Row key={column.id} >
              {index && <td>{column.id}</td>}
              {headers.map((item) => (
                <Td style={{padding:'10px'}}>{column[item] ? column[item] : "___"}</Td>
              ))}
              {remove && (
                <Td style={{padding:'10px'}}>
                  <button onClick={() => handleOnDeletebutton(column.id)}>
                    delete
                  </button>
                </Td>
              )}
              {edit && (
                <Td>
                  <button onClick={(e) => handleOnEditbutton(e,column.id)}>
                    edit
                  </button>
                </Td>
              )}
              {column.id === editModal &&
                ReactDOM.createPortal(
                  <Modal column={column} headers={headers} onWindowClick={handleWindowClick} />,
                  document.body
                )}
            </Row>
          ))}
        </tbody>
      </table>
    </>
  );
}
