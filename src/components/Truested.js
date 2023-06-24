import styled from "styled-components";
import { BsApple, BsMicrosoft } from "react-icons/bs";
import { SiDell, SiFlipkart } from "react-icons/si";
import { AiOutlineAmazon } from "react-icons/ai";

const Trusted = () => {
  return (
    <Wrapper className="brand-section">
      <div className="container">
        <h3>Trusted By 1000+ Companies</h3>
        <div className="brand-section-slider">
          {/* my 1st img  */}
          <div className="slide">
            <BsApple/>
          </div>
          <div className="slide">
            <BsMicrosoft/>
          </div>
          <div className="slide">
            <SiDell/>
          </div>
          <div className="slide">
            <SiFlipkart/>
          </div>
          <div className="slide">
            <AiOutlineAmazon/>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .brand-section {
    padding: 12rem 0 0 0;
  }
  h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
    font-weight: bold;
  }

  .slide {
    font-size: 5rem;
    
  }



  .brand-section-slider {
    margin-top: 3.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .brand-section-slider {
      margin-top: 3.2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      /* background-color: red; */
      text-align: center;
    }

    .container {
      max-width: 60rem;
      margin: 0 auto;
    }

    .slide {
      font-size: 6rem;
      
    }
  }
`;


export default Trusted;