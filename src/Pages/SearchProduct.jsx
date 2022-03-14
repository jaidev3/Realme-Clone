import React, { useState } from "react";
import data from "../ProductData/db.json";
import styled from "styled-components";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

function Products() {
  ////////////pagination////////////////
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 12;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(data.goneInFlash.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  ////////////////////////////////////////////

  return (
    <div>
      <Div>
        <div className="search">
          <Input>
            <input></input>
            <div>
              <BsSearch />
            </div>
          </Input>
        </div>

        <Container>
          <FlexItem>
            <H4>All</H4>
            <H4>Latest</H4>
            <H4>Sales</H4>
            <H4>
              <Select>
                <select default="Price">
                  <option>Price</option>
                  <option>Low</option>
                  <option>High</option>
                </select>
              </Select>
            </H4>
          </FlexItem>

          <H2>Seach Result</H2>

          <Content>
            {data.goneInFlash
              .slice(pagesVisited, pagesVisited + usersPerPage)
              .map((el, i) => {
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
          </Content>

          {/* Pagination buttons and container */}
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
          />
        </Container>
      </Div>
    </div>
  );
}

export default Products;

//////////Styled Components////////////
const Div = styled.div`
  background: #f4f4f5;
  .search {
    background-color: white;
    height: 100px;
    padding-top: 20px;
  }
`;
const Container = styled.div`
  width: 80%;
  margin: auto;
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
const H2 = styled.h2`
  margin: 1rem 2rem;
  font-size: 25px;
`;
const P = styled.p`
  color: red;
  margin: 0.5rem 1rem;
`;
const FlexItem = styled.div`
  display: flex;
  margin: 0.5rem 2rem;
`;
const H4 = styled.p`
  width: 80px;
  text-align: center;
  background: white;
  padding: 0.2rem 0.1rem;
  border-radius: 10px;
  margin: 0.5rem;
  cursor: pointer;
  font-size: 14px;
`;
const Select = styled.div`
  height: 20px;
  width: 80px;
  outline: none;
`;
const Input = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  border: 2px solid #ffc915;
  width: 25%;
  margin: auto;
  border-radius: 25px;
  input {
    border: none;
    border-radius: 25px;
    width: 85%;
    padding: 4px;
    outline: none;
    background: none;
  }
`;
