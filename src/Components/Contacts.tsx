import React, { useState } from "react";
import { ContactTable } from "../Reusable/ContactTable";
import { tableHeaders } from "../Utils/data";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../Reusable/ContactForm";
import { Contact } from "../Utils/interfaces";
import { addContact, editContact, deleteContact } from "../store/contacts";

function ContactsComponent() {
  const dispatch = useDispatch();
  //Get Store Data
  const contacts = useSelector((state: any) => state.contacts.contacts);

  const [contactModal, setContactModal] = useState({
    visible: false, //Flag to set the modal visibility
    type: "create", //Either create or edit depending on usecase.
    editId: 0, //In case of edit, edit id will be set
  });

  console.log(contacts);

  const triggerModal = (type: string) => {
    setContactModal({ ...contactModal, visible: !contactModal.visible, type });
  };

  const saveContact = (payload: any) => {
    if (contactModal.type === "create") {
      dispatch(addContact(payload)); //Adds a new contact
    } else {
      dispatch(editContact(payload)); //Edits the Contact Via ID
    }
  };

  const editModal = (id: any) => {
    setContactModal({
      editId: id,
      visible: !contactModal.visible,
      type: "edit",
    });
  };

  const deleteContactFunction = (id: any) => {
    dispatch(deleteContact(id)); //Delete Contact action
  };

  return (
    <div className="flex flex-col w-full p-10 page-container">
      <div className="flex flex-row">
        <div className="text-xl font-bold">Contacts</div>
        <button
          className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded h-10 ml-auto"
          onClick={() => {
            triggerModal("create");
          }}
        >
          Create Contact
        </button>
      </div>

      {contactModal.visible ? (
        <ContactForm
          type={contactModal.type}
          editId={contactModal.editId}
          onClose={() => {
            triggerModal("edit");
          }}
          onSave={(payload: Contact) => {
            saveContact(payload);
          }}
        ></ContactForm>
      ) : (
        ""
      )}
      {contacts.length ? (
        <ContactTable
          tableHeaders={tableHeaders}
          showButtons
          tableData={contacts}
          setEdit={(id: number) => {
            editModal(id);
          }}
          deleteContact={deleteContactFunction}
        ></ContactTable>
      ) : (
        <div className="text-base font-medium text-red-600 mt-4">
          No Contact Found Please add Contact from "Create Contact" button
        </div>
      )}
    </div>
  );
}

export default ContactsComponent;
