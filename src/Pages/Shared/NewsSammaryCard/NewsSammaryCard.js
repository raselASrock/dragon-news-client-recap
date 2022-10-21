import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Image from 'react-bootstrap/Image'
import { FaRegBookmark, FaShareAlt } from "react-icons/fa";

const NewsSammaryCard = ({ news }) => {
    const {_id, title, total_view, author, details, image_url} = news;
    console.log(news);
  return (
      <Card className="mb-3">
        <Card.Header className="d-flex justify-content-between align-items-center">
            <div className="d-flex">
                <Image
                roundedCircle
                className="me-2"
                    src={author.img}
                    style={{height:"60px"}}
                ></Image>
                <div>
                    <p className="fw-bold">{author.name}</p>
                    <p><small>{author.published_date}</small></p>
                </div>
            </div>
            <div>
                <FaRegBookmark></FaRegBookmark>
                <FaShareAlt></FaShareAlt>
            </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
            {details.length > 250 ?
            <p>{details.slice(0,250) + "..."} <Link to={`/news/${_id}`}>Read More</Link></p>
            :
            <p>{details}</p>
            }
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
  );
};

export default NewsSammaryCard;
