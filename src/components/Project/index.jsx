import Card from 'react-bootstrap/Card'
import './index.css'

function Project({ name, description, img }) {
  return (
    <>
      <Card className="myCard mb-5 mt-5">
        <Card.Img src={img} className="portfolio-img" />
        <Card.ImgOverlay>
          <Card.Title className="card-title">{name}</Card.Title>
          <Card.Text className="card-text">{description}</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </>
  )
}

export default Project
