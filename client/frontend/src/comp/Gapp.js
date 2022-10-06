import React, { useState, useEffect } from 'react'
import axios from "axios"
import Pendingg from "./Pendingg"
import Completedg from "./Completedg"

const Gapp = () => {
    const [date, setdate] = useState("march")
    const [gdata, setgdata] = useState([])
    const [flag, setflag] = useState()
    const [input, setinput] = useState("")

    useEffect(() => {
        axios.get("http://localhost:3000/grocery/getall").then((res) => {
            const monthNames = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
            ];
            const d = new Date()
            const curmonth = monthNames[d.getMonth()];

            setflag(false)
            setgdata(res.data)
            setdate(curmonth)
        }).catch((error) => console.log(error))
    }, [flag])

    const completedcomponant = () => {
        const result = gdata.filter((item) => item.isPurchased === true)
        return result

    }
    const pendingcomponant = () => {
        const result = gdata.filter((item) => item.isPurchased === false)
        return result
    }
    const handleinput = (e) => {
        setinput(e.target.value)
    }
    const handleenter = (e) => {
        if (e.key === "Enter") {

            e.preventDefault()
            axios.post("http://localhost:3000/grocery/add", {
                groceryItem: input,
                isPurchased: false
            }).then((res) => {
                setflag(true)
            }).catch((error) => console.log("fail"))
        }
    }
    const updatation = (e, _id) => {
        e.preventDefault()
        axios.put(`http://localhost:3000/grocery/updategrocery/${_id}`).then((res) => setflag(true)).catch((error) => console.log(error))
    }

    const deletion = (e, _id) => {
        e.preventDefault()
        axios.delete(`http://localhost:3000/grocery/deletegroceryitem/${_id}`).then((res) => setflag(true)).catch((error) => console.log(error))
    }
    return (
        <>
            <div className="month">
                <h1>Plan for the month {date}</h1>
            </div>
            <form>
                <div className="input">
                    <input onKeyDown={(e) => handleenter(e)} type="text" placeholder='Add Shopping Items Here' onChange={(e) => handleinput(e)} />
                </div>
            </form>
            <Pendingg pdata={pendingcomponant()} cd={updatation} del={deletion}></Pendingg>
            <Completedg cdata={completedcomponant()} cd={updatation} del={deletion}></Completedg>
        </>
    )
}

export default Gapp
