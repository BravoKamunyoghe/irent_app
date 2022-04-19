const connect = require("../db/dbConfig")
const getAllStatuses = (req, res)=>{
    connect.query("SELECT * FROM booking_status", (err, data, fields) => {
        if (err) throw err
        res.json({
            message: "booking status",
            data
        })
    })
}

const postStatus = (req, res)=>{
    let status = req.body.status
    connect.query("INSERT INTO booking_status SET ?", {status},(err)=>{
        if(err) throw err
        res.json({message:"Posted one status successfully"})
    })

}
const deleteStatus = (req, res)=>{
    
    connect.query("DELETE FROM booking_status WHERE booking_status.id= ?", [req.params.id],(err)=>{
        if(err) throw err
        res.json({message:"Deleted one status successfully"})
    })

}


const postLandlord = (req, res)=>{
    let landlord = req.body
    connect.query("INSERT INTO landlords SET ?", landlord,(err)=>{
        if(err) throw err
        res.json({message:"Post successfull"})
    })

}

const postHouse = (req, res)=>{
    let house = req.body
    connect.query("INSERT INTO houses SET ?", house,(err)=>{
        if(err) throw err
        res.json({message:"Post successfull"})
    })

}

const postPhoneNumber = (req, res)=>{
    let phone_number = req.body
    connect.query("INSERT INTO phone_numbers SET ?", phone_number,(err)=>{
        if(err) throw err
        res.json({message:"Post successfull"})
    })

}
const getLandlords = (req, res)=>{
    connect.query("SELECT * FROM landlords",(err, data, fields)=>{
        if(err) throw err
        res.json({message:"Landlords list", data})
    })

}
const getHouses = (req, res)=>{
    connect.query("SELECT * FROM houses",(err, houses, fields)=>{
        if(err) throw err
        res.json({message:"Houses list", houses})
    })

}
const getLocation= (req, res)=>{
    let location = req.params.is
    connect.query("SELECT location_name FROM location WHERE location.id= ?",[location], (err, data,fields)=>{
        if(err) throw err
        res.json({message:"Landlords list", data})
    })
}
module.exports = {
    getAllStatuses,
    postStatus,
    deleteStatus,
    postLandlord,
    getLandlords,
    getLocation,
    postHouse,
    postPhoneNumber,
    getHouses
};