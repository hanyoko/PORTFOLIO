import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

const ProjectCard = (props) => {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title style={{ color: "#fdf902" }}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "center" }}>
          {props.description6}
        </Card.Text>
        <Card.Text style={{ textAlign: "center", fontSize: "14px" }}>
          {props.description}
        </Card.Text>
        <Card.Text style={{ textAlign: "center" }}>
          {props.description2}
        </Card.Text>
        <Card.Text style={{ textAlign: "center", fontSize: "14px" }}>
          {props.description3}
        </Card.Text>
        <Card.Text style={{ textAlign: "center" }}>
          {props.description4}
        </Card.Text>
        <Card.Text style={{ textAlign: "center" }}>
          {props.description5}
        </Card.Text>
        
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}

        {/* component에 Demo 링크가 포함되어 있고 Blog가 아닌 경우 아래 구성 요소를 렌더링합니다  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCard;
