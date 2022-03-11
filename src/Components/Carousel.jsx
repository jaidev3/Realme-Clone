import { Carousel } from "antd";
const contentStyle = {
  height: "700px",
  width: "100%",
};

export function Carouse() {
  return (
    <>
      <Carousel autoplay>
        <div>
          <img
            style={contentStyle}
            src="https://image01.realme.net/general/20220210/1644495134907.jpg"
            alt="img"
          />
        </div>
        <div>
          <img
            style={contentStyle}
            src="https://image01.realme.net/general/20220210/1644494733927.jpg"
            alt="img"
          />
        </div>
        <div>
          <img
            style={contentStyle}
            src="https://image01.realme.net/general/20220112/1642005800476.jpg"
            alt="img"
          />
        </div>
        <div>
          <img
            style={contentStyle}
            src="https://image01.realme.net/general/20220210/1644465813284.jpg"
            alt="img"
          />
        </div>
        <div>
          <img
            style={contentStyle}
            src="https://image01.realme.net/general/20220210/1644495061637.jpg"
            alt="img"
          />
        </div>
        <div>
          <img
            style={contentStyle}
            src="https://image01.realme.net/general/20211223/1640247177385.jpg"
            alt="img"
          />
        </div>
      </Carousel>
    </>
  );
}
