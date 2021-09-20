const express = require("express");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use("/static", express.static(__dirname + "/static"));

app.get("/:name?", (req, res) => {

    var name = req.params.name;
    if (name) {
        res.send(name)
    }
    else {
        res.send("empty")
    }
})
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
    console.log('started at port', PORT));

    // app.get("/", (req, res) =>
//     res.sendFile(__dirname + "/index.html")

// )
// app.get("/contact", (req, res) =>
//     res.send("hello chai pelo")
// )
// app.get("/submit", (req, res) =>
//     res.send("submitted")
// )



// app.get("/", (req, res) =>
//    res.sendFile(__dirname + "/index.html"));


// app.get("/contact", (req, res) => 
//     res.send("hello chai pelo")
// )

// app.post("/submit",(req,res)=>{

//     const {data,email} = req.body;
//     console.log(data);
//     console.log(email);

//     if(data){
//         console.log("data is avaiable");
//     }

//    else{
//         console.log("data is not avaiable");
//     }
//     res.send("sub,itted");

// })