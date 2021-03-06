import React from "react"
import styled from "styled-components"
// import VaraMuseum from "../Assets/work/Vara Museum Repository V03.png"
// import NationalMuseum from "../Assets/work/NMV_Gallery.png"
// import BiharMuseum from "../Assets/work/BM_Homepage.png"
// import VRExperience from "../Assets/work/VR_Experiences.png"
// import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { StaticQuery, useStaticQuery, graphql, Link } from "gatsby"
const OurWork = () => {
  // const data = useStaticQuery(graphql`
  //   {
  //     work: allContentfulWork(sort: { fields: order }) {
  //       nodes {
  //         workfront {
  //           gatsbyImageData(
  //             placeholder: BLURRED
  //             layout: FULL_WIDTH
  //             formats: WEBP
  //           )
  //         }
  //         title
  //       }
  //     }
  //   }
  // `)


  return (
    <WorkContainer>
      <h1>Our Work</h1>
      <h4>Solutions powered by Varaha</h4>
      <StaticQuery query={graphql`
    {
      work: allContentfulWork(sort: { fields: order }) {
        nodes {
          workfront {
            gatsbyImageData(
              placeholder: BLURRED
              layout: FULL_WIDTH
              formats: WEBP
            )
          }
          title
        }
      }
    }
  `}
    render={data => (
      <div className="work-center">
        {/* <Link to="/work">
          {" "}
          <div className="work">
            <img src={`../work/varamuseum.png`} alt="varaMuseum" />
            <h3>Vara Museum Repository</h3>
          </div>
        </Link>
        <Link to="/work">
          {" "}
          <div className="work">
            <img src={`../work/NMV_Gallery.png`} alt="National Museum" />
            <h3>National Museum Virtual Exhibitions</h3>
          </div>
        </Link>
        <Link to="/work">
          {" "}
          <div className="work">
            <img src={`../work/BM_Homepage.png`} alt="Bihar Museum" />
            <h3>Bihar Museum Virtual Gallery</h3>
          </div>
        </Link>
        <Link to="/work">
          {" "}
          <div className="work">
            <img src={`../work/VR_Experiences.png`} alt="VR Experience" />
            <h3>VR Experiences of Cultural spaces</h3>
          </div>
        </Link> */}
        {data.work.nodes.map((item, index) => {
          const image = getImage(item.workfront)
          console.log(item)
          return (
            <Link to="/work" key={index}>
              <div className="work">
                <GatsbyImage image={image} alt={item.title} />
                {/* <img src={VaraMuseum} alt="varaMuseum" /> */}
                <h3>{item.title}</h3>
              </div>
            </Link>
          )
        })}
      </div>
    )}
    />
    </WorkContainer>
  )
}



export default OurWork

const WorkContainer = styled.div`
  background: #212121;
  margin-top: -1rem;
  padding: 4rem 0;

  h1 {
    text-align: center;
    font-weight: 500;
    color: #ffffff;
    font-size: 42px;
  }

  h4 {
    color: #ffffff;
    text-align: center;
    margin-bottom: 2rem;
    font-weight: 300;
    font-size: 22px;
  }

  .work-center {
    width: 90vw;
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    gap: 2rem;

    .work {
      position: relative;
      overflow: hidden;

      h3 {
        position: absolute;
        bottom: 10%;
        left: -200%;
        color: white;
        transition: all 0.6s linear;
        font-size: 20px;
      }

      &:hover img {
        opacity: 0.5;
      }

      &:hover h3 {
        left: 10%;
      }
    }

    img {
      width: 100%;
      transition: all 0.3s linear;
    }

    @media screen and (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`
