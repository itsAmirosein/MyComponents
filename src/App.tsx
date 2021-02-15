
import MyTable from "./Components/MyTable";

function App() {
  const columsDetail = {
    headers: ["firstName", "lastName", "type"],
    column: [
      {
        id: 1,
        firstName: "amir",
        lastName: "beygi",
        type: "strig",
        plc: "tr tr",
      },
      {
        id: 2,
        firstName: "amir",
        lastName: "beygi",
        type: "man",
      },
      {
        id: 3,
        firstName: "amir",
        lastName: "beygi",
      },
      {
        id: 4,
        firstName: "amir",
        lastName: "beygi",
      },
      {
        id: 5,
        firstName: "amirosein",
        lastName: "alinaghibeygi",
      },
    ],
  };
  return (
    <MyTable
      columnsDetail={columsDetail}
      remove={true}
      edit={true}
      index={true}
      tableStyles={{ borderCollapse: "collapse" }}
    />
  );
}

export default App;
