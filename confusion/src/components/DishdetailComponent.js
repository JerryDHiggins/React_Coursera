import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, CardBlock } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';


function RenderDish({dish}) {
    if(dish) {
        return (
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );

    } else {
        return(<div></div>);
    }

}

function RenderComments({comments}) {
    if (comments) {
        const commentsR = comments.map((comment) => {
            return (
                            <ListGroupItem  key={comment.id}>
                            {comment.comment}<br/>
                            -- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                            </ListGroupItem>
            );
        });
        return <div>{commentsR}</div>;
    } else {
        return (<div></div>);
    }
}

const DishDetail = (props) =>  {
    if(props.dish) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish}/>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.dish.comments} />
                    </div>
                </div>
            </div>
        );
    } else {
        return (<div></div>);
    }
}

export default DishDetail;