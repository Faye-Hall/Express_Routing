const express = require('express');
const {
    AppError
} = require('./errors');
const {
    getMode,
    getMedian,
    getMean,
    convertNumsToArray
} = require('./functions');


const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.get('/mean', function (req, res, next) {

    try {
        if (!req.query.nums) {
            throw new AppError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
        }

        let arrNums = convertNumsToArray(req.query.nums)
        let result = {
            operation: "mean",
            result: getMean(arrNums)
        }
        return res.send(result);
    } catch (error) {
        next(error);
    }
});

app.get('/median', function (req, res, next) {
    try {
        if (!req.query.nums) {
            throw new AppError('You must pass a query key of nums with a comma-sperated list of numbers.', 400)
        }
        let arrNums = convertNumsToArray(req.query.nums)
        let result = {
            operation: "median",
            result: getMedian(arrNums)
        }
        return res.send(result);
    } catch (error) {
        next(error);
    }

});

app.get('/mode', function (req, res, next) {
    try {
        if (!req.query.nums) {
            throw new AppError('You must pass a query key of nums with a comma-sperated list of numbers.', 400)
        }
        let arrNums = convertNumsToArray(req.query.nums)
        let result = {
            operation: "mode",
            result: getMode(arrNums)
        }
        return res.send(result);
    } catch (error) {
        next(error);
    }

});

app.use((req, res, next) => {
    const e = new AppError("Page Not Found", 404);
    next(e);
})

app.use((error, req, res, next) => {
    let status = error.status || 500;
    let message = error.message;
    return res.status(status).json({
        error: {
            message,
            status
        }
    });
});

app.listen(3000, function () {
    console.log("This is the contents of the port");
});