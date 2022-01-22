import "./Checkout.css";

export const Checkout = () => {
  return (
    <>
      <div className="main">
        <div className="p-1">
          <div>
            <h3>Address</h3>
          </div>
          <div className="address">
            <div>
              <input type="text" placeholder="Full Name" />
              <input type="text" placeholder="Mobile Number" />
            </div>
            <div>
              <input type="text" placeholder="Pincode" />
            </div>
            <div>
              <input type="text" placeholder="City/Town" />
              <input type="text" placeholder="State/province/district" />
            </div>
            <div>
              <input type="text" placeholder="Address" />
            </div>
            <div>
              <input
                type="email"
                placeholder="Please enter your email address"
              />
              <input type="text" placeholder="Landmark" />
            </div>
            <div>
              <button>Cancel</button>
              <button>Save</button>
            </div>
          </div>
        </div>

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
