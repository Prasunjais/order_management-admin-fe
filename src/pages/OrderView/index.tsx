import { OrderDepartmentBase, OrderDetailsBase, Department } from "./style"
import { Container, Row, Col } from "react-bootstrap";
import { Link, useParams } from 'react-router-dom';

interface IOrderView {
    login?: boolean
}

/**
 *  
 * @returns {ReactElement}
 */
const OrderView: React.FC<IOrderView> = ({
    login
}) => {
    return (
        <div>
            <OrderDetailsBase>
                <Container fluid className="ms-4">
                    <Row className="w-100 mx-auto my-0">
                        <OrderDepartmentBase>
                        </OrderDepartmentBase>
                    </Row>   
                </Container>
            </OrderDetailsBase>
        </div>
    )
}

export default OrderView
