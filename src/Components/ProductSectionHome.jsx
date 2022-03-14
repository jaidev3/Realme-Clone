import React from "react";
import { Link } from "react-router-dom";
import data from "../ProductData/db.json";
import styled from "styled-components";
import Carousel from "react-elastic-carousel";
import "../Styles/Elastic.css";

export default function Products() {
  return (
    <Div>
      <h2 className="gone">Gone In Flash</h2>
      <Container>
        <Content>
          <div>
            <Carousel
              style={{
                height: "370px",
                width: "100%",
                padding: "8px",
              }}
              breakPoints={breakPoints}
            >
              {data.goneInFlash.map((el, i) => {
                return (
                  <div key={i}>
                    <Link to={`/search/${el.id}`}>
                      <Item>
                        <Img src={el.imgOne} alt="img" />
                        <H3>{el.title}</H3>
                        <P>₹ {el.price}</P>
                      </Item>
                    </Link>
                  </div>
                );
              })}
            </Carousel>

            <h2 className="gone">ONLY HERE</h2>
            <Carousel
              style={{
                height: "370px",
                width: "100%",
                padding: "5px",
                marginBottom: "30px",
              }}
              breakPoints={breakPoints}
            >
              {data.goneInFlash.map((el, i) => {
                return (
                  <div key={i}>
                    <Link to={`/search/${el.id}`}>
                      <Item>
                        <Img src={el.imgOne} alt="img" />
                        <H3>{el.title}</H3>
                        <P>₹ {el.price}</P>
                      </Item>
                    </Link>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </Content>
      </Container>
    </Div>
  );
}

//////////Styled Components////////////////
const Div = styled.div`
  width: 80%;
  margin: auto;
`;
const Container = styled.div`
  height: 503px;
  width: 100%;
  padding: 5px;
`;

const Img = styled.img`
  width: 60%;
  margin: 1.5rem;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
`;
const Item = styled.div`
  background: white;
  text-align: center;
  justify-content: center;
  margin: 5%;
  height: 400px;
  width: 300px;
  border-radius: 4px;
  :hover {
    padding: 3px;
  }
`;
const H3 = styled.h3`
  margin: 1rem;
  font-size: 15px;
  font-weight: 300;
`;
const P = styled.p`
  color: red;
  margin: 1rem;
`;
const breakPoints = [
  { width: 1, itemsToShow: 4 },
  { width: 550, itemsToShow: 3 },
  { width: 500, itemsToShow: 2 },
  { width: 700, itemsToShow: 4 },
];
