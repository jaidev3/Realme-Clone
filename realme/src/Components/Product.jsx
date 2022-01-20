
import React from "react";
import data from "../db.json";
import styled from "styled-components";
import Carousel from "react-elastic-carousel";
import "../styles/elastic.css"
const Div = styled.div`
  width: 80%;
  margin: auto;
`;
const Container = styled.div`height: 503px;
width: 1121px;
padding: 5px;
`;


const Img = styled.img`
  width: 60%;
  margin: 1.5rem;
`;
const Content = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
`;
const Item = styled.div`
  background: white;
  text-align: center;
  justify-content: center;
  margin: 1rem;
  height: 400px;

  &:hover {
    width: 90%;
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

const H4 = styled.h4` 
  text-decoration: line-through;
  text-align: center;color: #777;
  font-size: 14px;
  `;
const div = styled.div`

height: 503px;
  width: 1121px;
  padding: 5px;`;

  

 
 
  const breakPoints = [
    { width: 1, itemsToShow: 4 },
    { width: 550, itemsToShow: 3 },
    { width: 500, itemsToShow: 2 },
    { width: 700, itemsToShow: 4 },
  ];

  
export default function Products() {
  return (
    <Div>
      <h2 className="gone">Gone In Flash</h2>
      <Container>
        <Content>
        <div>
        <Carousel style={{height : "352px",
          width: "1121px",
        
          padding:"5px", backgroundColor: "white"}} breakPoints={breakPoints} >

          {data.goneInFlash.map((el, i) => {
            return (
              <div key={i}>
                <Item>
                  <Img src={el.imgOne} alt="img" />
                  <H3>{el.title}</H3>
                  <P>₹ {el.price}</P>
                  <H4>₹ {el.delprice}</H4>
                </Item>
              </div>
            );
          })}
          </Carousel>


    
          <h2 className="gone">ONLY HERE</h2>
          <Carousel style={{height : "503px",
          width: "1121px",
          padding:"5px", backgroundColor: "white"}} breakPoints={breakPoints} >

          {data.onlyhere.map((el, i) => {
            return (
              <div key={i}>
                <Item>
                  <Img src={el.imgOne} alt="img" />
                  <H3>{el.title}</H3>
                  <P>₹ {el.price}</P>
                  <H4>₹ {el.delprice}</H4>
                </Item>
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



