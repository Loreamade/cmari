import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


function CartWidget() {
  return (
    <Button variant="secundaty">
           <FontAwesomeIcon icon={faShoppingCart} />
       <Badge bg="primary">0</Badge>
      <span className="visually-hidden">Productos en el carrito</span>
    </Button>
  );
}

export default CartWidget;