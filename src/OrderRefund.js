import React, { useState, useEffect } from "react";
import { Routes, Route, useParams,redirect  } from 'react-router-dom';
import Header from "./components/header";
import api from "./axios";
import Error from "./components/Error";
function OrderRefund() {
    const { invoiceid } = useParams();
    const [amount, setAmount] = useState("");
    const [invoice_id, setInvoiceID] = useState("");
    const [amountError, setAmountError] = useState("");
    const [form_errors, setFormErrors] = useState('');
    useEffect(() => {
        setInvoiceID(invoiceid)
    }, [])
    const handleValidation = (event) => {
        let formIsValid = true;

        if (amount == '' || amount == null) {
            formIsValid = false;
            setAmountError("Amount is required");
            return false;
        } else {
            setAmountError("");
            formIsValid = true;
        }

        return formIsValid;
    };

    const refundSubmit = (e) => {
        e.preventDefault();
        if (handleValidation()) {
            const data = { amount, invoice_id };
            api.post("/orderRefund", data)
                .then((res) => {
                    return redirect("/dashboard");
                }).catch(err => {
                 if(err.response.status==400){
                    setAmountError(err.response.data.msg)
                  }else{
                    setFormErrors(err.response.data)
                  }
                   
                })
        }


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
                        <h2>Order Refund Form</h2>
                        <form id="orderForm" onSubmit={refundSubmit} >
                            <div className="form-group mt-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Amount to refund"
                                    onChange={(event) => setAmount(event.target.value)}
                                />
                                <small id="emailHelp" className="text-danger form-text">
                                    {amountError}
                                </small>
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
export default OrderRefund;