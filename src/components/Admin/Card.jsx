import React, { useContext, useState } from "react";
import ReactModal from "react-modal";
import { FiChevronLeft } from "react-icons/fi";

import { BankLists } from "./CardData/ListsOfBanks";
import { GlobalConText } from "../useContext";

function Card() {
  const { click } = useContext(GlobalConText);
  const [clicked, setClicked] = click;
  const [cardnumber, setCardNumber] = useState("");
  const limit = 16;
  const cardLimit = e => {
    setCardNumber(e.target.value);
  };

  const handleCardDisplay = () => {
    const rawText = [...cardnumber.split(" ").join("")]; // Remove old space
    const creditCard = []; // Create card as array
    rawText.forEach((t, i) => {
      if (i % 4 === 0 && i !== 0) creditCard.push(" "); // Add space
      creditCard.push(t);
    });
    return creditCard.join(""); // Transform card array to string
  };
  const addCard = () => {};
  const openModal = () => {
    setClicked(true);
  };
  const closeModal = () => {
    setClicked(false);
  };


  return (
    <div className="px-10">
      <button
        className="p-3 w-full bg-transparent border-dash text-blue font-bold"
        onClick={openModal}
      >
        Add New Card
      </button>
      <ReactModal isOpen={clicked}
      style={{
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.9)'
    },
    content: {
      position: 'absolute',
      top: '40px',
      left: '40px',
      right: '40px',
      bottom: '40px',
      border: 'none',
      background: 'rgba(255, 255, 255, 0.8)',
      justifyContent: "center",
      display:  'flex',
      alignItems: 'center',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '4px',
      outline: 'none',
      padding: '20px'
    }
  }}
      >
        <div className="w-[400px] h-[auto]  shadow-2xl py-6 px-6 space-y-4 overflow-x-hidden overflow-y-auto inset-0 z-50">
          <div className="flex flex-row items-center space-x-6">
            <i className="text-[20px] cursor-pointer" onClick={closeModal}>
              <FiChevronLeft />
            </i>
            <h3 className="text-[20px]">Card details</h3>
          </div>
          <div className="flex flex-col w-100 space-y-3">
            <h3 className="text-[15px]">Please fill in the card information</h3>
            <div className="space-y-6">
              <div className="flex flex-col">
                <label className="text-[12px]">Card number</label>
                <input
                  value={handleCardDisplay()}
                  onChange={cardLimit}
                  placeholder="Enter card number (16-19 digits)"
                  className="card-input p-0 py-2"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-[12px]">Bank</label>
                <select className="card-input p-0 py-2" id="">
                  {BankLists.map(banks => (
                    <>
                      <option style={{backgroundImage: `url(${banks.logo})`, height: "30px"}}>{banks.name}</option>
                    </>
                  ))}
                </select>
              </div>
              <div className="flex flex-col">
                <label className="text-[12px]">Valid thru</label>
                <input
                  type="month"
                  placeholder="Select date"
                  className="card-input p-0 py-2"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-[12px]">CVV</label>
                <input
                  maxLength={3}
                  placeholder="Enter CVV"
                  className="card-input p-0 py-2"
                />
              </div>
            </div>
            <div className="w-100 flex flex-col">
              <button
                onClick={addCard}
                className="bg-purple-100 py-4 rounded-[10px] text-white"
              >
                Add card
              </button>
            </div>
          </div>
        </div>
      </ReactModal>
    </div>
  );
}

export default Card;
