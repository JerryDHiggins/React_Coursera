import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, CardBlock } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        let comments;
        if (this.props.dish != null) {
            comments = this.props.dish.comments.map((comment) => {
                return(
                    <ListGroupItem  key={comment.id}>
                        {comment.comment}<br/>
                        -- {comment.author}, {comment.date}
                    </ListGroupItem>
                );
            });

            const dish = (
                <div  className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
                        <CardBody>
                            <CardTitle>{this.props.dish.name}</CardTitle>
                            <CardText>{this.props.dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
 
            return (
                <div className="container">
                    <div className="row">
                        {dish}
                        <div className="col-12 col-md-5 m-1">
                        <h3>Comments</h3>
                            <ListGroup>
                                {comments}
                            </ListGroup>
                        </div>
                    </div>
                 </div>
            );
       } else {
           return(<div></div>);
       }

    }
}

export default DishDetail;