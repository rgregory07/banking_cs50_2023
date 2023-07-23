import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import Papa from "papaparse";

import Checkbox from "./Checkbox";

const Upload = () => {
  const [delBtn, setDelBtn] = useState(true);
  const [saveBtn, setSaveBtn] = useState(true);

  // DRAG & DROP CSV Code
  const [dragHighlight, setDragHighlight] = useState(false);
  const [parsedCSVData, setParsedCSVData] = useState([]);
  const [id, setId] = useState(false);
  const [tableData, setTableData] = useState();

  const [checkedRows, setCheckedRows] = useState([]);
  const [reset, setReset] = useState(false);

  function parsedData(data) {
    setCheckedRows([]);
    return parsedCSVData.map((data, index) => (
      <tr key={index} id={data.id}>
        <td className="checkbox">
          <Checkbox
            name={`checkbox-${data.id}`}
            id={data.id}
            onCheck={onCheck}
            reset={reset}
          />
        </td>
        <td>{data.Date}</td>
        <td>{data.Description}</td>
        {/* <td>{data.Details}</td> */}
        <td>{data.Amount}</td>
        {/* <td>{data[4]}</td>
                <td>{data[5]}</td>
                <td>{data[6]}</td>
                <td>{data[7]}</td>
                <td>{data[8]}</td> */}
      </tr>
    ));
  }

  function onCheck(id) {
    let array = checkedRows;
    if (array.includes(id)) {
      array.splice(array.indexOf(id), 1);
    } else {
      array.push(id);
    }
    console.log(`array: ${array}`);
    setCheckedRows([...array]);
  }

  function DeleteRow() {
    let array = parsedCSVData;
    if (checkedRows.length > 0) {
      checkedRows.forEach((id) => {
        array.forEach((row) => {
          if (row.id === id) {
            array.splice(array.indexOf(row), 1);
          }
        });
      });
      setParsedCSVData([...array]);
      setCheckedRows([]);
      setTableData(parsedData(parsedCSVData));
      setReset(true);

      console.log("set reset true from Delete Row");
    }
  }

  function insertID() {
    parsedCSVData.map((item) => {
      Object.assign(item, { id: uuidv4() });
    });
  }

  function saveToDatabase() {
    let data = parsedCSVData;

    data.forEach((item) => {
      const convertDate = new Date(item.Date);
      let url = `http://localhost:8000/api/bankdata-api/`;
      axios
        .post(
          url,
          {
            //   account: data.account,
            transaction_date: `${convertDate.getFullYear()}-${convertDate.getMonth()}-${convertDate.getDate()}`,
            description_1: item.Description,
            //   description_2: null,
            amount: item.Amount,
            // amount_us: null,
            //   notes: null,
            // category: null,
            // sub_category: null,
          },
          { headers: { "Content-Type": "application/json" } }
        )
        .then((response) => {
          console.log(response.data);
        })
        .catch((err) => console.log(err));
    });
  }

  useEffect(() => {
    if (!id) {
      console.log("run insert id");
      insertID();
    }
    console.log(tableData);
    setTableData(parsedData(parsedCSVData));
    console.log(parsedCSVData);
    // setReset(false)
  }, [parsedCSVData]);

  useEffect(() => {
    console.log("UseEffect for TableData");
  }, [tableData]);

  // controls delete button disable/enable
  useEffect(() => {
    checkedRows.length > 0 ? setDelBtn(false) : setDelBtn(true);
  }, [checkedRows]);

  useEffect(() => {
    setReset(false);
    console.log("setReset to False");
    console.log(reset);
  }, [reset]);

  return (
    <>
      <div>
        <h2 className="text-center mb-2">Upload CSV Files</h2>
        <div
          className={`dropzone ${dragHighlight && "drag-highlight"}`}
          onDragEnter={() => {
            setDragHighlight(true);
          }}
          onDragLeave={() => {
            setDragHighlight(false);
          }}
          onDragOver={(e) => {
            e.preventDefault();
          }}
          onDrop={(e) => {
            e.preventDefault();
            setDragHighlight(false);
            console.log(e.dataTransfer.files);
            Array.from(e.dataTransfer.files)
              .filter((file) => file.type === "text/csv")
              .forEach(async (file) => {
                const text = await file.text();
                Papa.parse(text, {
                  header: true,
                  complete: function (result) {
                    setParsedCSVData(result.data);
                    setSaveBtn(false);
                  },
                });
              });
          }}
        >
          Drop Files Here
        </div>
        <div className="flex space-around mb-2">
          <button onClick={DeleteRow} className="btn-del" disabled={delBtn}>
            Delete Selected Rows
          </button>
          <button
            onClick={saveToDatabase}
            className="btn-main"
            disabled={saveBtn}
          >
            Save to Database
          </button>
        </div>

        <div className={saveBtn && "display-none"}>
          <div>
            <table className="table-upload" id="table-upload">
              <thead>
                <tr className="table-headers">
                  <th>Select</th>
                  <th>Date</th>
                  <th>Description</th>
                  {/* <th>Details</th> */}
                  <th>Amount</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>{tableData}</tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Upload;
