import Sticky from "./StickyHeader";

function Navbar() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "600px",
            alignItems: "center",
            alignContent: "center",
            padding: "10px",
            wordSpacing: "8px",
          }}
        >
          realmeow | Brand | Support | Community | App | Bulk Order | UI 3.0
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "250px",
            padding: "10px",
            wordSpacing: "8px",
          }}
        >
          Login | My-Order | Cart
        </div>
      </div>
      <hr/>
      <Sticky />
    </>
  );
}

export default Navbar;
