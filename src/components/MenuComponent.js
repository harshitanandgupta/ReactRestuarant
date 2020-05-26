import React from 'react'
import { Card, CardImg, CardImgOverlay, CardTitle,Breadcrumb,BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom'

    

    function CardMenu(props) {
      return (
      <Card key={props.dish.id}>
        <Link to={`/menu/${props.dish.id}`}>
          <CardImg width="100%" src={props.dish.image} alt={props.dish.name} />
              <CardImgOverlay>
                <CardTitle>{props.dish.name}</CardTitle>
              </CardImgOverlay>
        </Link>
      </Card>
      );
    }


    function Menu(props){
        const menu = props.dishes.map((dish) => {
            return (
              <div  className="col-12 col-md-5 m-1">
                <CardMenu dish={dish} />
              </div>
            );
        });

        return (
          <div className="container">
            <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>                
            </div>
            <div className="row">
                {menu}
            </div>
          </div>
        );
    
    }

export default Menu