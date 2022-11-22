import React, { useState ,useEffect} from "react";
import Header from "./components/header";
import { Link } from "react-router-dom";
import api from "./axios";
function Dashboard() {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        getOrders()
      }, [])
      const getOrders = () => {
        api.get('/order').then(res => {
            setOrders(res.data.data);
            console.log(res.data.data)
        }).catch((err)=>console.error(err))
      }
    return (
        <div className="App">
            <Header />
         <div className="container mt-5">
            <div className="d-flex">
            <Link to="/new-order">
            <button className="btn btn-outline-success my-2 my-sm-0">Add new Order</button>
            </Link>
            </div>
            <div className="row">
                <div className="col-md-12 mx-auto">
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">Customer name</th>
                        <th scope="col">Customer Email</th>
                        <th scope="col">Customer Phone</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Invoice ID</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {orders.map((data,index) => (
                        <tr key={index}>
                             <td>{data.customer_name}</td>
                             <td>{data.customer_email}</td>
                             <td>{data.customer_phone}</td>
                             <td>{data.amount}</td>
                             <td>{data.invoice_id}</td>
                             <td>{data.status}</td>
                             <td>
                             <Link to={"/order/"+data.invoice_id}>
                                <button className="btn btn-outline-success my-2 my-sm-0">Refund</button>
                                </Link>
                                
                            </td>
                        </tr>
                    ))}
                        
                    </tbody>
                    </table>
                </div>
            </div>
         </div>
        </div>
    )
}
export default Dashboard;