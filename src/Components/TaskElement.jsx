import React from 'react';

// Material UI:
import Button from '@mui/material/Button';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const TaskElement = (props) => {

    const BgCard = {
        backgroundColor: props.bgColor
    };

    return (
        <>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12 d-flex justify-content-center align-items-center mb-5">
                <div className="bg-card rounded-4">
                    <div className="container-fluid">

                        {/* Item Header: */}
                        <div className="item-header d-flex justify-content-between align-items-center">
                            {/* Title: */}
                            <h2 className="item-title">
                                {`${props.num + 1}.`}
                                <input
                                    type="text"
                                    value={props.title}
                                    className="item-title-input"
                                    readOnly />
                            </h2>

                            {/* Dropdown: */}
                            <div className="dropdown">
                                <button
                                    className="btn btn-secondary dropdown-toggle"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    <MoreVertIcon className="more-vert-icon" />
                                </button>
                                <ul className="dropdown-menu">
                                    <li className="d-flex flex-column align-items-start">
                                        <Button
                                            className="edit-btn"
                                            onClick={() => props.onEdit(props.OpNum)}
                                            data-bs-toggle="modal"
                                            data-bs-target="#exampleModal">
                                            <EditIcon className="me-2" />
                                            Edit
                                        </Button>
                                    </li>
                                    <li className="d-flex flex-column align-items-start">
                                        <Button
                                            className="delete-btn"
                                            onClick={() => props.onDelete(props.OpNum)}>
                                            <DeleteOutlineIcon className="me-2" />
                                            Delete
                                        </Button>
                                        <span className="delete-warn ms-2">⚠️ Deletion is permanent.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Item Body: */}
                        <div className="item-body">
                            <textarea
                                style={BgCard}
                                className="item-text"
                                value={props.note}
                                readOnly />
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default TaskElement;