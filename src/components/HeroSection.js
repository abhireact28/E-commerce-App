import React from 'react'

import styled from "styled-components";
import { Button } from "../styles/Button";
import { NavLink } from 'react-router-dom';

const HeroSection = ({ myData }) => {
  const { name } = myData

  return (
    <Wrapper>
      <div className="container-hero">
        <div className="hero">
          <div className="hero-section-data">
            <p className="intro-data">Welcome to</p>
            <h1>{name}</h1>
            <h3>Trade-In-Offer</h3>
            <h2>Super value deal</h2>
            <h2>On all products</h2>
            {/* <p>Save more with coupons & up to <span>70% off</span></p> */}
            <NavLink to="/products">

              <Button>Shop Now</Button>
            </NavLink>

          </div>
          {/* <div className="hero-section-image">
            <figure>
              <img
                // src="images/hero.jpg"
                alt="hero-section-photo"
                className="img-style"
              />
            </figure>
          </div> */}
        </div>
      </div>
    </Wrapper>
  )
};

const Wrapper = styled.section`
  padding: 0 0 7rem 0;
.hero{
  background-image: url("images/back.jpg");
    width: 100%;
    height: 70vh;
    background-size: cover;
    background-position: center;
    padding: 0 30rem ;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
}

  .hero-section-data {
    p {
      margin: 2rem 0;
    }

    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }
    h2 {
      margin: 0 0 0.3rem;
    }

    .intro-data {
      margin-bottom: 0;
    }
  }

  Button{
    margin-top: 2rem;
  }

  @media (max-width:520px) {

    .hero{
      height: 30vh;
        padding: 0 70px;
        background-position: top 30% right 44%;
        padding: 5rem;
    }
    .hero-section-data{
      p{
        font-size: 1.3rem;
      }
      h1{
        font-size: 3rem;
      }
      h3{
        font-size: 1.5rem;
      }
      h2{
        font-size: 2rem;
      }
      span{
        font-size: 1rem;
      }
      
    }
    Button{
      font-size: 1rem;
      margin-top: 1rem
    }
    
  }

  @media (min-width:520px) and (max-width:950px){
   .hero {
    height: 30vh;
    padding: 0 70px;
    background-position: top 30% right 45%;
    padding: 10rem;
}

.hero-section-data{
  p{
    font-size: 1.3rem;
  }
  h1{
    font-size: 3rem;
  }
  h3{
    font-size: 1.5rem;
  }
  h2{
    font-size: 2rem;
  }
  span{
    font-size: 1rem;
  }
  
}
Button{
  font-size: 1rem;
  margin-top: 1rem
}
}

  @media (min-width:950px) and (max-width:1300px){
   .hero {
    height: 30vh;
    padding: 0 70px;
    background-position: top 30% right 74%;
    padding: 23rem;
}

.hero-section-data{
  p{
    font-size: 1.8rem;
  }
  h1{
    font-size: 4rem;
  }
  h3{
    font-size: 2rem;
  }
  h2{
    font-size: 3rem;
  }
  span{
    font-size: 1.5rem;
  }
  
}

Button{
  font-size: 1.3rem;
  margin-top: 1rem
}

}


  
`;

export default HeroSection;



