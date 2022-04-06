import moment from "moment-timezone";
import products from "../model/products.json";
import orders from "../model/orders.json";
import {
    groupBy,
    countBy,
    sumBy
} from "lodash";

export const placeOrder = ({
    productId,
    quantity,
    total
}: {
    productId: string,
    quantity: number,
    total: number
    }) => {
    
    // LOGIC To WRITE INTO FILE 
}


export const getProducts = async () => {
    return products.map((data) => data.productName);
}

export const getTopFive = () => {
    let orderedDataCount = countBy(orders, 'productName');
    let sorted = Object.keys(orderedDataCount).sort((a, b) => orderedDataCount[b] - orderedDataCount[a]);
    let topFive = sorted.slice(0, 5);
    return topFive;
}

export const getTotalOrderedAmount = () => {
    let totalOrderedAmount = sumBy(orders, 'total');
    return totalOrderedAmount;
}

export const getLast10DaysOrder = (): {
        srno: number,
        dateOfOrder: string,
        productName: string,
        quantity: number,
        total: number
}[] => {
    let currentDate = moment();
    let last10DaysOrder = orders.filter((data) => {
        let dateOfOrder = moment(data.dateOfOrder);
        if (currentDate.diff(dateOfOrder, 'days')) return data;
    });

    let last10DaysOrderNew = last10DaysOrder.map((data, idx) => {
        return {
            ...data,
            srno: idx + 1,
            dateOfOrder: moment(data.dateOfOrder).format('DD/MM/YYYY HH:mm A')
        }
    }) || [
        {
            srno: 1,
            dateOfOrder: '',
            productName: 'string',
            quantity: 0,
            total: 0
        }
    ];

    return last10DaysOrderNew;
}