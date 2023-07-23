import { useEffect, useState } from 'react'
import axios from "axios"


let bankData = []

const AllData = () => {

    // const [bankData, setBankData] = useState([])
    



    // API Get
    useEffect(() => {
        axios.get('/api/bankdata-api/')
        .then((response) => {
            bankData = response.data
        })
    }, [])

console.log(bankData)



}




export const carInsuranceJan = 
bankData.filter(item => item.transaction_date >= '2023-01-01' && item.transaction_date <= '2023-01-31')
        .filter(item => item.sub_category === 'Car Insurance')
        .reduce((acc, value) => acc + parseFloat(value.amount),0).toFixed(0) * -1

// console.log(carInsuranceJan)