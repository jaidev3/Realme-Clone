import React from "react";
import styled from "styled-components";

const Center = styled.div`
  width: 80%;
  margin: auto;
  
  // border: 1px solid red;
`;

const Top = styled.div`
  text-align: center;
  display: block;
`;

const Flex = styled.div`
  display: flex;
`;
const TopContainer = styled.div`
  // background: blue;
  width: 80%;
  margin: auto;
`;
const TopItem = styled.p`
  text-align: center;
  margin: 0.5rem 3.5rem;
  padding: 1rem;
  // border: 1px solid red;
`;

const P = styled.p`
  text-align: left;
  margin: 0.5rem 2rem;
  padding: 1rem;
`;
const FlexItem = styled.div`
  display: flex;
  margin: 0.2rem 3.5rem;
  border: 1px solid black;
  width: 140px;
  height: 34px;
  text-center: center;
  &:hover {
    background: black;
    color: white;
  }
`;

const CenterBox = styled.div`
  text-align: center;
`;

const M = styled.div`
  margin: 0 0.5rem;
  padding: 0 0.2rem 0 0;
  font-size: 22px;
`;
const CenterP = styled.div`
  margin: 0.2rem 0;
`;
const SocialMediaIcon = styled.div`
  display: flex;
  margin: 1rem 3rem;
`;

const I = styled.div`
  text-align: center;
  background: black;
  margin: 0.2rem;
  color: white;
  width: 30px;
  height: 30px;
  // padding: 0.4rem;
  border: 1px solid black;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1rem;
`;

const Hr = styled.hr`
  background: black;
  width: 93%;
`;
const Bottom = styled.p`
  float: left;
  margin: 0 3rem;
`;
const Left = styled.p`
  margin: 0px 2.8rem;
  float: left;
`;
const Right = styled.p`
  margin: 0px 2.8rem;
  justify-content: right;
  float: right;
`;

const SizeOfIcon = styled.div`
  font-size: 40px;
`;

export default function Footer() {
  return (
    <div>
      <Center>
        <Top>
          <TopContainer>
            <Flex>
              <TopItem>
                <SizeOfIcon>
                  <i class="bi bi-bag-check"></i>{" "}
                </SizeOfIcon>
                <p>Free Shipping</p>
              </TopItem>

              <TopItem>
                <SizeOfIcon>
                  <i class="bi bi-shield-check"></i>{" "}
                </SizeOfIcon>
                <p>Secure payment</p>
              </TopItem>
              <TopItem>
                <SizeOfIcon>
                  <i class="bi bi-coin"></i>{" "}
                </SizeOfIcon>
                <p>Cash on Delivery</p>
              </TopItem>
              <TopItem>
                <SizeOfIcon>
                  <i class="bi bi-display"></i>{" "}
                </SizeOfIcon>
                <p>Warranty Policy</p>
              </TopItem>
            </Flex>
          </TopContainer>
        </Top>
        <Top>
          <Flex>
            <P>
              <h4>Recommended</h4>
              <p>realme narzo 50A</p>
              <p>realme narzo 50i</p>
              <p>realme 8s 5G</p>
              <p>realme 8i</p>
              <p>realme GT 5G</p>
              <p>realme GT Master Edition</p>
              <p>realme C25Y</p>
              <p>realme X7 Max 5G</p>
            </P>

            <P>
              <h4>Support</h4>
              <p>FAQ</p>
              <p>Troubleshooting</p>
              <p>User Guide</p>
              <p>Service Centers</p>
              <p>E-waste Management</p>
              <p>realme Coins</p>
            </P>
            <P>
              <h4>About realme</h4>
              <p>Our Brand</p>
              <p>Newsroom</p>
              <p>Retail Store</p>
              <p>Bulk Order</p>
              <p>Declaration</p>
            </P>
            <P>
              <h4>Contact realme</h4>
              <p>service@realme.com</p>
              <p>orders.in@realme.com</p>
            </P>
            <P>
              <CenterBox>
                <h3>1800 102 2777</h3>
                <p>9:00-18:00, MON-SUN</p>
                <p>Including Holidays</p>
                <FlexItem>
                  <M>
                    <i class="bi bi-headset"></i>
                  </M>
                  <CenterP>
                    <CenterP>Chat Support</CenterP>
                  </CenterP>
                </FlexItem>
                <p>9:00-18:00, MON-SUN</p>
                <p>Including Holidays</p>

                <SocialMediaIcon>
                  <I>
                    {" "}
                    <i className="bi bi-facebook"></i>
                  </I>
                  <I>
                    <i className="bi bi-twitter"></i>
                  </I>
                  <I>
                    <i className="bi bi-youtube"></i>
                  </I>
                  <I>
                    <i className="bi bi-instagram"></i>
                  </I>
                </SocialMediaIcon>
              </CenterBox>
            </P>
          </Flex>
        </Top>
        <Bottom>India ( English / INR )</Bottom>
        <br />
        <Hr></Hr>
        <Left>© 2018-2022 realme. All Rights Reserved.</Left>
        <Right>
          User Agreement | Privacy Policy | Terms of Sales | Warranty Terms
        </Right>
        <br />
        <br />
        <br />
      </Center>
    </div>
  );
}
