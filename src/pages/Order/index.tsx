import { Route, Routes } from "react-router-dom";
import { getItem } from "../../utils/storageUtil";
import { STORAGE_KEYS } from "../../constants/storageKeys";
import { Container, Row, Col } from "react-bootstrap";
import OrderNavbar from "../../components/OrderNavbar";
import NotFound from '../../pages/NotFound';
import OrderHeader from "../../components/OrderHeader";
import OrderView from "../OrderView";
import OrderSummary from "../../components/OrderSummary";
import TopFiveTable from "../../components/TopFiveTable";
import AddOrder from "../../containers/AddOrder";
import { Fragment, useEffect, useState } from "react";
import { OrderBase } from "./style";
import {
    getTopFive,
    getTotalOrderedAmount,
    getLast10DaysOrder
} from "../../services/orderService";
import moment from "moment-timezone";

interface IOrder { 
}

/**
 * @params isNavBarEnabled boolean - to display the navbar 
 * @returns {ReactElements}
 */
const Order: React.FC<IOrder> = () => {
    const [toggle, setToggle] = useState<boolean>(false);
    const [totalAmount, setTotalAmount] = useState<number>(0);
    const [last10DaysOrder, setLast10DaysOrder] = useState<{
        srno: number,
        dateOfOrder: string,
        productName: string,
        quantity: number,
        total: number
    }[]>([]);
    const [topFive, setTopFive] = useState<{ srno: number; product: string; }[]>([]);
    const isUserLoggedIn = () => {
		let accessToken = getItem(STORAGE_KEYS.ACCESS_TOKEN);
		return accessToken ? true : false;	
	}

  useEffect(() => {
      setToggle((prevState) => !prevState);
      let topFiveOrders = getTopFive();
      let totalAmount = getTotalOrderedAmount();
      let getLastOrder = getLast10DaysOrder();
     
      let topFiveOrdersView = topFiveOrders.map((data, idx) => {
          return {
              srno: idx + 1,
              product: data
          }
      })
      setTopFive(topFiveOrdersView);
      setTotalAmount(totalAmount);
      setLast10DaysOrder(getLastOrder);
    }, [])


    return (
        <Fragment>
            <OrderBase>
                <Container fluid>
                    <Row>
                        { isUserLoggedIn() && <Col md={3} className="mx-0 px-0">
                            <OrderNavbar toggle={toggle} />
                        </Col>} 
                        <Col md={isUserLoggedIn() ? 9 : 12 }>
                            <Row>
                                <OrderHeader login={isUserLoggedIn()} />
                            </Row>
                            <Routes>
                                <Route
                                    path="/status"
                                    element={
                                        <OrderSummary OrderSummary={[{
                                            'srno': 1,
                                            'totalAmountOfOrderPlaced': totalAmount
                                            }]}
                                            last10DaysOrder={last10DaysOrder}
                                        />
                                    }
                                />
                                <Route
                                    path="/place"
                                    element={
                                        <AddOrder />
                                    }
                                />
                                <Route
                                    path="/top-5"
                                    element={
                                        <TopFiveTable topFiveTable={topFive} />
                                    }
                                />
                                <Route
					            	path="*"
						            element={<NotFound />}
					            />
                            </Routes>
                        </Col>
                    </Row>
                </Container>
            </OrderBase>
        </Fragment>
    )
}

export default Order;
