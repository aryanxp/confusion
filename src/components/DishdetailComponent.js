import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
  function RenderDish({dish}) {
    return (
      <div className="col-sm col-md-5 mt-1">
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
  function RenderComments({comments}) {
    return (
      <div className="col">
        <h2>Comments</h2>
        {comments.map((comment) => {
          return (
            <ul className="list-unstyled">
              <li>
                (<img src={require("../logo.svg")}/>
                {comment.rating}){comment.comment}
              </li>
              <li>
                -- {comment.author} ,{" "}
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                }).format(new Date(Date.parse(comment.date)))}
              </li>
            </ul>
          );
        })}
      </div>
    );
  }
  const DishDetail = (props) => {
    if (props.dish != null) {
      return (
        <div className="container">
          <div className="row">
            <RenderDish dish={props.dish}/>
            <RenderComments comments={props.dish.comments}/>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}
export default DishDetail;
