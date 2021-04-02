import * as React from "react";
import Graphic from '../components/Graphic';
import '../style/main.scss';

// styles
const pageStyles = {
  color: "#232129",
  margin: '0 auto',
  with: '100vw',
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  position: 'relative'
}

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Anna - Web Developer</title>
      <h1>
        Hej där! Vi ses snart.
      </h1>
      <Graphic />
    </main>
  )
}

export default IndexPage
