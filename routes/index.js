const express = require("express");
const router = express.Router();

const Bank = require("../models/Bank");

router.get("/branches/autocomplete", (req, res) => {
    try {

        var qry="";

        if (req.query.q) {
            qry = req.query.q;

            var l, oset;
            if (req.query.limit) {
                l = parseInt(req.query.limit);
            }
            else {
                l = 5;
            }
            if (req.query.offset) {
                oset = parseInt(req.query.offset);
            }
            else {
                oset = 0;
            }



            Bank.find({ 'branch': { $regex: qry } })
                .sort({ ifsc: 1 })
                .limit(l)
                .skip(oset)
                .then((response) => {
                    res.status(200).json(response);
                })
                .catch((error) => {
                    res.status(422).json(error);
                })
        }
        else {
            res.status(400).send("Query Parameter Missing!");
        }

    }
    catch (error) {
        res.status(500).json(error);
    }

});

router.get("/branches", (req, res) => {
    try {

        var qry="";

        if (req.query.q) {
            qry = req.query.q;

            var l, oset;
            if (req.query.limit) {
                l = parseInt(req.query.limit);
            }
            else {
                l = 5;
            }
            if (req.query.offset) {
                oset = parseInt(req.query.offset);
            }
            else {
                oset = 0;
            }

            Bank.find({ $text: { $search: qry } })
                .sort({ ifsc: 1 })
                .limit(l)
                .skip(oset)
                .then((response) => {
                    res.status(200).json(response);
                })
                .catch((error) => {
                    res.status(422).json(error);
                })
        }
        else {
            res.status(400).send("Query Parameter Missing!");
        }

    }
    catch (error) {
        res.status(500).json(error);
    }

});


module.exports = router;