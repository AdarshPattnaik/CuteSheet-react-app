// App Component: App.jsx
import React, { useEffect, useState } from "react";

// Material UI:
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';

// Importing React Media:
import ModalClip from "../React-Media/modal-title-clip.mp4";

// Importing Components:
import Navbar from "./Navbar.jsx";
import TaskElement from "./TaskElement.jsx";
import Alert from "./Alert.jsx";

// Get Data from Local Storage:
const getLocalItems = () => {
  let list = localStorage.getItem('localList');

  if (list) {
    return JSON.parse(localStorage.getItem('localList'));
  } else { return []; }
};

const App = () => {

  const [inputData, setInputData] = useState("");
  const [inputNote, setInputNote] = useState("");
  const [inputColor, setInputColor] = useState("white");
  const [items, setItems] = useState(getLocalItems());
  const [toggleAction, setToggleAction] = useState(true);
  const [saveItem, setSaveItem] = useState(null);

  const addItem = () => {
    if (!inputData || !inputNote) {
      document.querySelector(".alert-modal").style.display = "block";
    }
    else if (inputData && !toggleAction) {
      setItems(
        items.map((elem) => {
          if (elem.id === saveItem) {
            return {
              ...elem, name: {
                title: inputData,
                note: inputNote,
              },
              bgColor: inputColor
            };
          }
          return elem;
        })
      );
      setToggleAction(true);
      setInputData("");
      setInputNote("");
      setInputColor("white");
      setSaveItem(null);
    }
    else {
      const allInputData = {
        id: new Date().getTime().toString(),
        name: {
          title: inputData,
          note: inputNote,

        }, bgColor: inputColor
      }

      setItems([...items, allInputData]);
      setInputData("");
      setInputNote("");
      setInputColor("white");
    }
  }

  // Edit an Item:
  const editItem = (id) => {
    let newEditItem = items.find((elem) => {
      return elem.id === id;
    });
    console.log(newEditItem);

    setToggleAction(false);
    setInputData(newEditItem.name.title);
    setInputNote(newEditItem.name.note);
    setInputColor(newEditItem.bgColor);
    setSaveItem(id);
  }

  // Delete an Item:
  const deleteItem = (index) => {
    const updatedItems = items.filter((elem) => {
      return index !== elem.id;
    });
    setItems(updatedItems);
  }

  // Clearing fields on closing the modal:
  const clearField = () => {
    setInputData("");
    setInputNote("");
    setInputColor("white");
    setToggleAction(true);
  }

  // Background Color Option:
  const colorOption = [
    { bgC: "white", colName: "White" },
    { bgC: "aquamarine", colName: "Aquamarine" },
    { bgC: "chartreuse", colName: "Chartreuse" },
    { bgC: "coral", colName: "Coral" },
    { bgC: "cornflowerblue", colName: "Cornflowerblue" },
    { bgC: "gold", colName: "Gold" },
    { bgC: "hotpink", colName: "Hotpink" },
    { bgC: "lavender", colName: "Lavender" },
    { bgC: "orange", colName: "Orange" },
    { bgC: "silver", colName: "Silver" },
    { bgC: "plum", colName: "Plum" }
  ];

  // Set Data in Local Storage:
  useEffect(() => {
    localStorage.setItem('localList', JSON.stringify(items));
  }, [items]);

  return (
    <>
      {/* Navigation Bar */}
      <Navbar
        items={items}
        setItems={setItems} />

      {/* Item Section */}
      <section className="container-fluid text-center mt-5">
        <div className="row">

          <div className="col-lg-4 col-md-6 col-sm-6 col-12 d-flex justify-content-center align-items-center mb-5">
            <div className="main-card d-flex justify-content-center align-items-center rounded-4">

              {/* Input Button */}
              <Tooltip title="Add a note">
                <Button
                  type="button"
                  className="add-btn rounded-circle"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal">
                  <AddIcon />
                </Button>
              </Tooltip>

              {/* Empty Note Alert */}
              <Alert />

              {/* ********** Input Modal ********** */}
              <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5 d-flex align-items-center fw-bold" id="exampleModalLabel">
                        <video
                          loop muted autoPlay
                          src={ModalClip}
                          width="50px">modal/mp4</video>
                        {
                          toggleAction
                            ? <>Create Note</>
                            : <>Edit Note</>
                        }
                      </h1>
                      <button
                        onClick={clearField}
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <label className="d-flex my-2">Title:</label>
                      <input
                        value={inputData}
                        onChange={(e) => setInputData(e.target.value)}
                        type="text"
                        className="form-control focus:outline-none"
                        placeholder="Give a title..." />
                      <label className="d-flex my-2">Note:</label>
                      <textarea
                        value={inputNote}
                        onChange={(e) => setInputNote(e.target.value)}
                        className="task-input-area"
                        placeholder="Enter your note..." />

                      <label className="d-flex my-2">Background:</label>
                      <select
                        className="bg-selector"
                        onChange={(e) => setInputColor(e.target.value)}>
                        {
                          colorOption.map((opt) => (
                            <option value={opt.bgC}>{opt.colName}</option>
                          ))
                        }
                      </select>

                    </div>
                    <div className="modal-footer d-flex justify-content-between">
                      <button
                        onClick={clearField}
                        type="button"
                        className="btn btn-secondary outline-off"
                        data-bs-dismiss="modal">Close</button>
                      <button
                        onClick={addItem}
                        type="button"
                        className="btn btn-primary outline-off"
                        data-bs-dismiss="modal">
                        {
                          toggleAction
                            ? <>Add</>
                            : <>Save</>
                        }
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* ************************************ */}
            </div>
          </div>

          {/* Items: */}
          {
            items.map((elem, ind) => {
              return (
                <>
                  <TaskElement
                    key={elem.id}
                    OpNum={elem.id}
                    num={ind}
                    title={elem.name.title}
                    note={elem.name.note}
                    bgColor={elem.bgColor}
                    onEdit={editItem}
                    toggleAction={toggleAction}
                    onDelete={deleteItem} />
                </>
              )
            })
          }

        </div>
      </section>
    </>
  );
}

export default App;