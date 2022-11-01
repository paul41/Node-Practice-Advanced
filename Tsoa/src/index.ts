import express, {json,urlencoded} from "express";
import {RegisterRoutes} from "../build/routes";

const port = process.env.PORT || 3003;
const app = express ();
app.use(
    urlencoded({
        extended: true
    })
);

app.use(json());
RegisterRoutes(app)

app.listen(port, ()=>
    console.log(`Examples app listening at ${port}`)
)