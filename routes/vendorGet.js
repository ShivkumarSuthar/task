const express = require('express');
const vendorModel = require("../models/vendor")
const vendorGet = express();

vendorGet.get("/viewVendor/:vendorId", async (req, res) => {
    try {
        const vendorData = await vendorModel.findOne({ _id: req.params.vendorId });
        res.send(vendorData);
    } catch (e) {
        res.status(500).send("Internal server Error!");
    }
});
module.exports=vendorGet;                   