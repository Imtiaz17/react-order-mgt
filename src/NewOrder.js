import React, { useState, useEffect } from "react";
import Header from "./components/header";
import api from "./axios";
import Error from "./components/Error";
function NewOrder() {
    const [customer_name, setCustomerName] = useState("");
    const [customer_email, setCustomerEmail] = useState("");
    const [customer_phone, setCustomerPhone] = useState("");
    const [customer_address, setAddress] = useState("");
    const [amount, setAmount] = useState("");
    const [product_name, setProductName] = useState("");
    const [product_details, setProductDetails] = useState("");
    const [form_errors, setFormErrors] = useState([]);
    const orderSubmit = (e) => {
        e.preventDefault();
        const data = { customer_name, customer_email, customer_phone, customer_address, amount, product_name, product_details };
        api.post("/order", data)
            .then((res) => {
                console.log(res.data);
            }).catch(err => {
                setFormErrors(err.response.data)
            })
    };
    return (
        <div className="App">
            <Header />
            <div className="container">
                <div className="row mt-3">
                    <div className="col-md-6 mx-auto">
                        <ul>
                            {Object.keys(form_errors).map((error, index) => (
                                <Error
                                    message={form_errors[error][0]}
                                    key={index}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-6 mx-auto">
                        <h2>New Order Form</h2>
                        <form id="orderForm" onSubmit={orderSubmit} >
                            <div className="form-group mt-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Customer Name"
                                    onChange={(event) => setCustomerName(event.target.value)}
                                />
                                <small id="emailHelp" className="text-danger form-text">
                                    {/* {nameError} */}
                                </small>
                            </div>
                            <div className="form-group mt-3">

                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Customer Email"
                                    onChange={(event) => setCustomerEmail(event.target.value)}
                                />
                            </div>
                            <div className="form-group mt-3">

                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Customer Phone"
                                    onChange={(event) => setCustomerPhone(event.target.value)}
                                />
                            </div>
                            <div className="form-group mt-3">

                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Customer Address"
                                    onChange={(event) => setAddress(event.target.value)}
                                />
                            </div>
                            <div className="form-group mt-3">

                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Amount"
                                    onChange={(event) => setAmount(event.target.value)}
                                />
                            </div>
                            <div className="form-group mt-3">

                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Product Name"
                                    onChange={(event) => setProductName(event.target.value)}
                                />
                            </div>
                            <div className="form-group mt-3">

                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Product Details"
                                    onChange={(event) => setProductDetails(event.target.value)}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary mt-2">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default NewOrder;