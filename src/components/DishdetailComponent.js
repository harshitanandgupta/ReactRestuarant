import React,{Component} from 'react'
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetail extends Component{
    renderDish(dish){
        if(dish!=null){
          return (
            <Card>
              <CardImg src={dish.image} alt={dish.name}/> 
              <CardBody>
              <CardTitle>{dish.name}</CardTitle>
               <CardText>{dish.description}</CardText>
              </CardBody>
            </Card>
          );
        }
        else{
          return (
            <div></div>
          );
        }
    }

    renderComments(comments){
        if(comments!=null)
        {
            const comm=comments.map((comment)=>{
                const date=new Intl.DateTimeFormat('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: '2-digit'
                }).format(new Date(comment.date))
                return (
                    <li key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>--{comment.author},{date}</p>
                    </li>
                );
            })
            return (
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                    {comm}
                    </ul>
                </div>
            );
        }
        else{
            return (
                <div></div>
            );
        }
    }

    render(){
        if(this.props.dish!==null)
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                    {this.renderComments(this.props.dish.comments)}
                    </div>
                </div>
            );
        else
            return (
                <div></div>
            );
    }
}

export default DishDetail