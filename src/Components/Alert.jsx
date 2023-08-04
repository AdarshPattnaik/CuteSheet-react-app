import React from 'react'

// Importing React Media:
import AlertClip from "../React-Media/alert-clip.mp4";

const Alert = () => {

    const ModalNone = () => {
        document.querySelector(".alert-modal").style.display = "none";
    }

    return (
        <>
            <div
                className="modal alert-modal"
                tabIndex="-1">
                <div
                    className="modal-dialog alert-dialog">
                    <div
                        className="modal-content alert-content">
                        <div
                            className="modal-header">
                            <h1 className="modal-title text-danger fs-5 d-flex align-items-center fw-bold">
                                <video
                                    className="me-2"
                                    loop muted autoPlay
                                    src={AlertClip}
                                    width="50px">alert/mp4</video>
                                Oops!!
                            </h1>
                            <button
                                onClick={ModalNone}
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>
                        <div
                            className="modal-body alert-body">
                            <p>
                                Well, well, well... What do we have here? A note without Information! 😳
                                <br />
                                Looks like you forgot to type something. 🤔
                                <br />
                                No worries, take your time to add a new note with proper information. 😉
                            </p>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={ModalNone}
                                data-bs-dismiss="modal">I Understand</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Alert