
var express = require('express');
var router = express.Router();
const fs = require('fs')

const months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]

router.get('/', handleRoot);
router.get('/:year([0-9]{4})', handleYear);
router.get('/:year([0-9]{4})\/:month(*)', handleMonth);


function handleRoot(req, res) {
    res.status(200).send(sendErrorMessage("Please specify a month and year.", res));
}


function handleYear(req, res) {
    const year = loadYear(req.params.year);
    if (year == null) { sendErrorMessage("No data for the given year.", res); return; }
    res.status(200).send(year);
}


function handleMonth(req, res) {
    const year = loadYear(req.params.year);
    if (year == null) { sendErrorMessage("No data for the given year.", res); return; }
    const month = normalizeMonth(req.params.month);
    if (month == null) {sendErrorMessage("No data for the given month.", res); return; }
    var payload = year[month];
    res.status(200).send(payload);
}

function loadYear(year) {
    var path = `data/${year}.json`
    try {
        if (fs.existsSync(path)) {
            return JSON.parse(fs.readFileSync(path));

        }
    } catch (err) {
        console.error(err)
    }
    return null;
}

function normalizeMonth(month) {
    const lowerCaseMonth = month.toLowerCase()
    if (months.includes(lowerCaseMonth)) { return lowerCaseMonth; }

}

function sendErrorMessage(body, res) {
    res.status(404).send({ title: "Error", message: body });
}
module.exports = router;

