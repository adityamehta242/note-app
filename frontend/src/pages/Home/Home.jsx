import Navbar from "../../components/Navbar/Navbar";
import NoteCard from "../../components/cards/NoteCard";
import { MdAdd } from "react-icons/md";
import AddEditNotes from "./AddEditNotes";
import { useState } from "react";
import Modal from "react-modal";

const Home = () => {
  const [openAddEditModal, setOpenAddEditModal] = useState({
    isShown: false,
    type: "add",
    data: null,
  });

  const handleCloseModal = () => {
    setOpenAddEditModal({
      isShown: false,
      type: "add",
      data: null,
    });
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4 mt-8 mx-10">
          <NoteCard
            title="hello first"
            date ="24th march 2024"
            content="hello man do have"
            tags="#hello"
            isPinned={true}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />
        </div>
      </div>

      <button
        className="w-16 h-16 flex items-center justify-center rounded-2xl bg-primary hover:bg-blue-600 absolute right-10 bottom-10"
        onClick={() => {
            setOpenAddEditModal({
                isShown : true,
                type : "add",
                data : null
            })
        }}
      >
        <MdAdd className="text-[32px] text-white" />
      </button>

      <Modal
        isOpen={openAddEditModal.isShown}
        onRequestClose={ ()=>{}}
        style={{
          overlay: { backgroundColor: "rgba(0,0,0,0.2)" },
        }}
        contentLabel=""
        className=" w-[30%] max-h-2/4 bg-white rounded-md mx-auto mt-20 p-4 overflow-auto"
      >
        <AddEditNotes 
        type ={ openAddEditModal.type }
        noteData = { openAddEditModal.data }
        onClose={()=>{
            setOpenAddEditModal({
                isShown : false,
                type : "add",
                data : null
            })
        }} />
      </Modal>
    </>
  );
};

export default Home;
