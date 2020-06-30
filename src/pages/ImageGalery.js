import React from 'react';
import { graphql } from 'gatsby';
import Img from "gatsby-image/withIEPolyfill"
import { StaticQuery } from "gatsby";
import Imagestyle from './ImageStyle.css'
import 'tachyons'

class ImageGalery extends React.Component {

  render() {
    return (

      <div>
      <StaticQuery
        query={graphql`
          query {
            imgOne: file(
              relativePath: { eq: "pic11.jpg" }
            ) {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            imageTwo: file(
              relativePath: { eq: "pic29.jpg" }
            ) {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            imageThree: file(
              relativePath: { eq: "pic5.jpg" }
            ) {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            imageFour: file(
              relativePath: { eq: "pic4.jpg" }
            ) {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            imageFive: file(
              relativePath: { eq: "pic6.jpg" }
            ) {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            imageSix: file(
              relativePath: { eq: "pic10.jpg" }
            ) {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            imageSeven: file(
              relativePath: { eq: "pic30.jpg" }
            ) {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            imageEight: file(
              relativePath: { eq: "pic14.jpg" }
            ) {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            imageNine: file(
              relativePath: { eq: "pic12.jpg" }
            ) {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            imageTen: file(
              relativePath: { eq: "pic15.jpg" }
            ) {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            imageEleven: file(
              relativePath: { eq: "pic16.jpg" }
            ) {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            imageEleven: file(
              relativePath: { eq: "pic16.jpg" }
            ) {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            imageTwelve: file(
              relativePath: { eq: "pic18.jpg" }
            ) {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            imageThirteen: file(
              relativePath: { eq: "pic19.jpg" }
            ) {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            imageFourteen: file(
              relativePath: { eq: "pic20.jpg" }
            ) {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            imageFifteen: file(
              relativePath: { eq: "pic21.jpg" }
            ) {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            imageSixteen: file(
              relativePath: { eq: "pic24.jpg" }
            ) {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            imageSeventeen: file(
              relativePath: { eq: "pic26.jpg" }
            ) {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            imageEighteen: file(
              relativePath: { eq: "pic27.jpg" }
            ) {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={data => (
          <div className="img-grid">
          <Img
            fluid={data.imgOne.childImageSharp.fluid}
            style={{ height: "300px" }}
            className="align-center link black dim"
            alt="Chefs Choice Logo"
          />
          <Img
            fluid={data.imageTwo.childImageSharp.fluid}
            style={{ height: "300px" }}
            className="align-center link black dim"
            alt="Chefs Choice Logo"
          />
          <Img
            fluid={data.imageThree.childImageSharp.fluid}
            style={{ height: "300px" }}
            className="align-center link black dim"
            alt="Chefs Choice Logo"
          />
          <Img
            fluid={data.imageFour.childImageSharp.fluid}
            style={{ height: "300px" }}
            className="align-center link black dim"
            alt="Chefs Choice Logo"
          />
          <Img
            fluid={data.imageFive.childImageSharp.fluid}
            style={{ height: "300px" }}
            className="align-center link black dim"
            alt="Chefs Choice Logo"
          />
          <Img
            fluid={data.imageSix.childImageSharp.fluid}
            style={{ height: "300px" }}
            className="align-center link black dim"
            alt="Chefs Choice Logo"
          />
          <Img
            fluid={data.imageSeven.childImageSharp.fluid}
            style={{ height: "300px" }}
            className="align-center link black dim"
            alt="Chefs Choice Logo"
          />
          <Img
            fluid={data.imageEight.childImageSharp.fluid}
            style={{ height: "300px" }}
            className="align-center link black dim"
            alt="Chefs Choice Logo"
          />
          <Img
            fluid={data.imageNine.childImageSharp.fluid}
            style={{ height: "300px" }}
            className="align-center link black dim"
            alt="Chefs Choice Logo"
          />
          <Img
            fluid={data.imageTen.childImageSharp.fluid}
            style={{ height: "300px" }}
            className="align-center link black dim"
            alt="Chefs Choice Logo"
          />
          <Img
            fluid={data.imageEleven.childImageSharp.fluid}
            style={{ height: "300px" }}
            className="align-center link black dim"
            alt="Chefs Choice Logo"
          />
          <Img
            fluid={data.imageTwelve.childImageSharp.fluid}
            style={{ height: "300px" }}
            className="align-center link black dim"
            alt="Chefs Choice Logo"
          />
          <Img
            fluid={data.imageThirteen.childImageSharp.fluid}
            style={{ height: "300px" }}
            className="align-center link black dim"
            alt="Chefs Choice Logo"
          />
          <Img
            fluid={data.imageFourteen.childImageSharp.fluid}
            style={{ height: "300px" }}
            className="align-center link black dim"
            alt="Chefs Choice Logo"
          />
          <Img
            fluid={data.imageFifteen.childImageSharp.fluid}
            style={{ height: "300px" }}
            className="align-center link black dim"
            alt="Chefs Choice Logo"
          />
          <Img
            fluid={data.imageSixteen.childImageSharp.fluid}
            style={{ height: "300px" }}
            className="align-center link black dim"
            alt="Chefs Choice Logo"
          />
          <Img
            fluid={data.imageSeventeen.childImageSharp.fluid}
            style={{ height: "300px" }}
            className="align-center link black dim"
            alt="Chefs Choice Logo"
          />
          <Img
            fluid={data.imageEighteen.childImageSharp.fluid}
            style={{ height: "300px" }}
            className="align-center link black dim"
            alt="Chefs Choice Logo"
          />
          </div>
        )}
      />


      </div>
    );
  }
}

export default ImageGalery
