import "./Checkout.css";

export const Checkout = () => {
  return (
    <>
      <div className="main">
        <div className="p-1"></div>
        <div className="p-2"></div>
        <div className="p-3">
          <h3>Commodity List</h3>
        </div>

        <div className="p-4">
          <div>
            <h3>Coupons</h3>
          </div>
          <div>
            <p>Add Coupons Code -</p>
          </div>
        </div>

        <div className="p-5">
          <div>
            <p>Total Quantity</p>
            <p>Items Subtotal</p>
            <p>Estimated GST</p>
            <p>Discount</p>
            <p>Shipping</p>
            <hr />
            <p>Total :</p>
            <button>Place Order</button>
          </div>
        </div>
      </div>
    </>
  );
};
