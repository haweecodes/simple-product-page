'use client'
import React, { useState } from "react";
import { AddToCartProps } from "@/app/types/Product";

const AddToCartComponent: React.FC<AddToCartProps> = ({ product, params }) => {
  const [count, setCount] = useState<number>(0);

  const isAddToCartDisabled = !product || product.amount < 1;

  const handleIncrement = () => {
    if (count < product.amount) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = Number(e.target.value);
    setCount(inputValue >= 0 ? Math.min(inputValue, product.amount) : 0);
  };

  const handleCartAdd = () => {
    if (count < product.amount) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <div className="flex">
      <div id="counter" className="flex border text-md mr-5 my-2">
        <button
          className="text-black font-bold py-2 px-4 rounded"
          onClick={handleDecrement}
        >
          -
        </button>

        <input
          type="number"
          data-testid="count-input"
          onChange={handleInputChange}
          value={count}
          className="w-10 text-sm text-center bg-transparent focus:outline-none border-none"
        />

        <button
          className="text-black font-bold py-2 px-4 rounded mr-2"
          onClick={handleIncrement}
        >
          +
        </button>
      </div>
      <button
        disabled={isAddToCartDisabled}
        onClick={handleCartAdd}
        className={`my-2 w-full bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 active:bg-blue-700 text-white font-bold rounded px-4 py-2 ${
          isAddToCartDisabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {params.button.addToCart} ({count})
      </button>
    </div>
  );
};

export default AddToCartComponent;
