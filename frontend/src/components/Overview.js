import React, { useEffect, useState } from 'react'
import axios from "axios"



const Overview = () => {

    const [bankData, setBankData] = useState([])
    const [name, setName] = useState("Ryan")
    const [bellTotal, setBellTotal] = useState()

// API Get
    useEffect(() => {
        axios.get('/api/bankdata-api/')
        .then((response) => {
            setBankData(response.data)
        })
    }, [])

    console.log(bankData)
    const totalIncomeBell = function(bankData) {
        const total = bankData
            .filter(t => t.sub_category === 'Ryan Bell Media')
            .reduce((acc, t) => acc + parseFloat(t.amount_can),0).toFixed(2)
            setBellTotal = total
    }
    // const incomeBell = bankData.filter(function(transaction) {
    //     return transaction.sub_category === 'Ryan Bell Media'
    // }.reduce((acc, value) =>
    // acc + parseFloat(value.amount_can),0).toFixed(2))

    console.log(totalIncomeBell)
    // const incomeKKBrad = bankData.filter(function(transaction) {
    //     return transaction.sub_category === 'KK - Brad & Lindsay'
    // })
    // const incomeKKJenn = bankData.filter(function(transaction) {
    //     return transaction.sub_category === 'KK - Jenn & Matt'
    // })
    // const incomeKKErinne = bankData.filter(function(transaction) {
    //     return transaction.sub_category === 'KK - Erinne'
    // })
    // const incomePP = bankData.filter(function(transaction) {
    //     return transaction.sub_category === 'Pebbles & Pine'
    // })
    // const incomeGov = bankData.filter(function(transaction) {
    //     return transaction.sub_category === 'Government'
    // })
    // const incomeRyFree = bankData.filter(function(transaction) {
    //     return transaction.sub_category === 'Ryan Freelance'
    // })

    return (
        <>
            <p>{totalIncomeBell}</p>    
        
        </>

    )
}

export default Overview 