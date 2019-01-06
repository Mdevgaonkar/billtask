var formidable = require('formidable');
var fs = require('fs');
var save_bill = require('./save_bill');

var appRouter = function (app) {
    app.get("/", function (req, res) {
        res.status(200).send("Welcome to our restful API");
    });

    // =====================================
    // incoming bill =======================
    // =====================================
    app.post('/incoming_bill', function (req, res) {

        // console.log(req);
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            var oldpath = files.bill_file.path;
            console.log(oldpath);
            console.log(files.bill_file.name.split('.')[0]);
            var newpath = __dirname + '/../uploads/' + files.bill_file.name.split('.')[0] + Date.now('nano') + '.' + files.bill_file.name.split('.')[1];
            console.log(newpath);

            bill_entry = {
                bill_fl_nm: newpath,
                vendor_name: fields.vendor_name,
                brand_name: fields.brand_name,
                bill_amt: fields.bill_amt,
                bill_date: fields.bill_date
            }

            console.log(bill_entry);

            fs.rename(oldpath, newpath, function (err) {
                if (err) {
                    res.status(400).send(err);
                } else {
                    // console.log(res);
                    console.log('File uploaded and moved!');
                    save_bill.save_bill_entry(bill_entry, (err, result) => {
                        if (err) {
                            res.status(400).send(err);
                        } else {
                            // console.log(res);
                            res.status(400).send(bill_entry);
                        }
                    });
                }
                
            });

            



        });
    });
}

module.exports = appRouter;