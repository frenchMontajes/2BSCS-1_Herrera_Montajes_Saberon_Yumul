import { useState } from 'react'; 

const AddToCartPage = () => {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);


  const handleItemSelect = (itemId: number) => {

    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter((item) => item !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
  };

  const handleCheckout = () => {
    console.log("Selected items:", selectedItems);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Shopping Cart</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="book1.jpg"
            alt="Book Title 1"
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h2 className="text-gray-800 text-xl font-semibold mb-2">Book Title 1</h2>
            <p className="text-gray-600">Description for Book 1.</p>
            <div className="flex items-center justify-between mt-4">
              <span className="text-gray-800 font-bold">$</span>
              <input
                type="checkbox"
                onChange={() => handleItemSelect(1)}
                checked={selectedItems.includes(1)}
              />
            </div>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="book2.jpg"
            alt="Book Title 2"
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h2 className="text-gray-800 text-xl font-semibold mb-2">Book Title 2</h2>
            <p className="text-gray-600">Description for Book 2.</p>
            <div className="flex items-center justify-between mt-4">
              <span className="text-gray-800 font-bold">$</span>
              <input
                type="checkbox"
                onChange={() => handleItemSelect(2)}
                checked={selectedItems.includes(2)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <button
          onClick={handleCheckout}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default AddToCartPage;