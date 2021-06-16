const { events } = require("./data.json")

export default (req, res) => {
    res.status(200).json(events)

//   if(req.method === "get")
//   res.status(200).json(events)
//   else{
//     res.setHeader("allow", ['GET'])
//     res.status(405).json({message:`method ${req.method} is invalid`})
//   }
}
 