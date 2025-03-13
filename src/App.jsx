import { useDispatch, useSelector } from 'react-redux'
import './App.css'

function App() {
  const dispatch = useDispatch()
  const cash = useSelector((state) => state.cash.cash)
  const customer = useSelector((state) => state.customer.customer)

  const addCash = (amount) => {
    return dispatch({ type: 'ADD_CASH', payload: amount })
  }
  const getCash = (amount) => {
    return dispatch({ type: 'GET_CASH', payload: amount })
  }
  const addCustomer = (name) => {
    return dispatch({ type: 'ADD_CUSTOMER', payload: name })
  }
  const removeCustomer = (id) => {
    return dispatch({ type: 'REMOVE_CUSTOMER', payload: id })
  }
  const getCardType = () =>{
    if (cash <= 0) return 'Basic'
    if (cash < 1000) return 'Bronze'
    if (cash >= 1000 && cash < 5000) return 'Silver'
    if (cash >= 5000) return 'Gold' 
  }
  return (
    <>
      <h1>{cash}$</h1>
      <h2>card type:{ getCardType()}</h2>
      <button onClick={()=> {addCash(Number(prompt("Write number")))}} >add  </button>
      <button onClick={()=> {getCash(Number(prompt("write number")))}} >get  </button>
      <button onClick={()=>{addCustomer(prompt("Name client"))}}>Add Student</button>
      {customer.length > 0?  (
        customer.map((customer) => ( <div 
        key={customer.id}
        onClick={()=>{removeCustomer(customer.id)}}
        style={{cursor:'pointer' , color:'black'}}
        >{customer.id} </div>) )
      ) :(    
      <div>no students</div>)}
      
    </>
  )
}

export default App
