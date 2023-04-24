import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import "../App.css";
import { ModalProps } from "../Utils/interfaces";

const portalDiv = document.getElementById("portal-root")!;

const ContactForm = ({ onClose, type, onSave, editId }: ModalProps) => {
  const contacts = useSelector((state: any) => state.contacts.contacts);

  const [firstName, setFirstName] = useState(
    type === "edit" ? contacts[editId].firstName : "" //If The mode is edit initial data is set to get data from current data
  );
  const [lastName, setLastName] = useState(
    type === "edit" ? contacts[editId].lastName : ""
  );
  const [status, setStatus] = useState(
    type === "edit" ? contacts[editId].status : "active"
  );

  const validator = () => {
    return !firstName || !lastName;
  };

  const statusItems = [
    { value: "active", title: "Active" },
    { value: "inactive", title: "Inactive" },
  ];

  const savePayload = () => {
    let payload = {
      firstName,
      lastName,
      status,
      id: type === "edit" ? editId : contacts.length,
    };
    onSave(payload);
    onClose(); //Close Modal
  };

  return ReactDOM.createPortal(
    <div className="modal-container">
      <div className="flex flex-col w-full">
        <div className="divide-y divide-grey-300 text-lg font-bold border px-4 py-2 bg-gray-100">
          Create Contact
        </div>
        <div className="p-4">
          <div className="flex flex-row mb-4 justify-between items-center">
            <label className="block text-gray-700 text-sm font-bold w-[20%]">
              First Name
            </label>
            <input
              className="shadow appearance-none border rounded w-[80%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="firstName"
              type="text"
              placeholder="Enter first name"
              value={firstName}
              onChange={(e: any) => {
                setFirstName(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-row mb-6 justify-between items-center">
            <label className="block text-gray-700 text-sm font-bold w-[20%]">
              Last Name
            </label>
            <input
              className="shadow appearance-none border rounded w-[80%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="lastName"
              type="text"
              value={lastName}
              placeholder="Enter last name"
              onChange={(e: any) => {
                setLastName(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-row mb-2">
            <label className="block text-gray-700 text-sm font-bold w-[20%]">
              Status:
            </label>
            <div className="flex flex-col">
              {statusItems.map((item: any, index: number) => {
                const { value, title } = item;
                return (
                  <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                    <input
                      className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 rounded-full border-2 border-solid border-neutral-400 cursor-pointer"
                      type="radio"
                      name={`contact-radio-${index}`}
                      checked={status === value}
                      onChange={() => {
                        setStatus(value);
                      }}
                    />
                    <label className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer">
                      {title}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
          <button
            className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded h-10 float-right w-20 ${
              validator() &&
              "disabled:opacity-50 cursor-not-allowed pointer-events-none"
            }`}
            onClick={savePayload}
            disabled={validator()}
          >
            Save
          </button>
        </div>
      </div>
    </div>,
    portalDiv
  );
};

export default ContactForm;
