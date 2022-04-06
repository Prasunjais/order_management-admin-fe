import { Fragment, useState, useEffect, forwardRef } from "react";
import { AddOrderWrap } from "./style";
import { Container, Row, Col } from 'react-bootstrap';
import { useForm, Resolver } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { placeOrder, getProducts } from '../../services/orderService';

export interface IProducts {
    products: string[]
}
export interface FormValues {
    productId: string,
    quantity: number,
    total: number
}

const resolver: Resolver<FormValues> = async (values) => {
    let errors = {};
    if (!values.productId) {
        errors = {
            ...errors,
            productId: {
                type: "required",
                message: 'Product is required !'
            }
        }
    } 

    if (!values.quantity) {
        errors = {
            ...errors,
            quantity: {
                type: "required",
                message: 'Quantity is required !'
            }
        }
    } 

    if (!values.total) {
        errors = {
            ...errors,
            total: {
                type: "required",
                message: 'Total is required !'
            }
        }
    } 
    
    return {
        values: values,
        errors: errors
    };
};

/**
 * 
 * @returns {ReactElement}
 */
const AddOrder = () => {
    const [products, setProducts] = useState<IProducts["products"]>([''])
    const { projectId } = useParams();
    const navigate = useNavigate();
    const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormValues>({
        resolver: resolver
    });
    
    useEffect(() => {
        const getProductsAsync = async() => {
            let productList = await getProducts();
            setProducts(productList);
        }
        getProductsAsync();
    }, [])

    type Option = string;

    type SelectProps = React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>,  HTMLSelectElement> & { options: Option[] };

    const Select = forwardRef<HTMLSelectElement, SelectProps>(
      ({ options, ...props }, ref) => (
        <select ref={ref} {...props}>
          {options.map((prod) => (
            <option value={prod}>{prod.toUpperCase()}</option>
          ))}
        </select>
      )
    );

    const onSubmit = handleSubmit(async (data) => {
        await placeOrder(data);
    });

    return (
        <Fragment>
            <AddOrderWrap>
                <Container fluid>
                    <Row className="ms-4">
                        <Col  md={{span: 12}}>
                            <label className="input-label display-6 mb-5"><b>Place Order</b></label>
                            <div className="add-budget-card">
                                <div className="mt-0 pt-0 mx-0 w-100 card-header">
                                    <AddCircleIcon fontSize="large" className="addIcon" />
                                    <span className="add-budget-card-header">Add Order</span>
                                </div>
                                <form onSubmit={onSubmit}> 
                                    <label className="input-label ms-4 blockquote"><strong><i>Fill the below details</i></strong></label>
                                    <hr className="ms-4 input-label-underline" />

                                    <span className="float-start ms-4 mt-2 blockquote required">Select Product: </span>
                                    <Select
                                        className="input-text add-equipment-input-text"
                                        {...register("productId")}
                                        options={products}
                                        required
                                    />
                                    {errors?.productId && <p className="error-tag-form">{errors.productId.message}</p>}

                                    <span className="float-start ms-4 mt-2 blockquote required">Enter Quantity: </span>
                                    <input type="number" {...register("quantity")} className="input-text add-equipment-input-text" placeholder="Enter Quantity" />
                                    {errors?.quantity && <p className="error-tag-form">{errors.quantity.message}</p>}

                                    {/* <span className="float-start ms-4 mt-2 blockquote">Equipment Description: </span>
                                    <textarea className="input-text add-equipment-input-text add-equipment-text-area" {...register("equipmentDescription", {required: true, max: 250, min: 10, maxLength: 1})} placeholder="Enter Equipment Description" />
                                    {errors?.equipmentDescription && <p className="error-tag-form">{errors.equipmentDescription.message}</p>} */}

                                    <span className="float-start ms-4 mt-2 blockquote required">Enter Total Amount: </span>
                                    <input type="number" {...register("total")} className="input-text add-equipment-input-text" placeholder="Enter Total Amount" />
                                    {errors?.total && <p className="error-tag-form">{errors.total.message}</p>}

                                    <input className="submit-btn prj-budget-btn btn-sm ms-4" type="submit" value={"Submit Details !"} /> 
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>                
            </AddOrderWrap>
        </Fragment>
    )
}

export default AddOrder;
