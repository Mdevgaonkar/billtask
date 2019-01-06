const db = require('./DB');

exports.save_bill_entry = (bill_entry, DBdone) => {



    const query = {
        // text: `INSERT INTO "srtracker"."timesheet_entry"("effort_dt","task","effortHrs", "assignee_name","assignee_sso") VALUES ${ts_entries}`,
        text: `INSERT INTO srtracker.bills ("bill_fl_nm", "vendor_name", "brand_name", "bill_amt", "bill_date") VALUES ($1,$2,$3,$4,$5);`,
        values: [bill_entry.bill_fl_nm, bill_entry.vendor_name, bill_entry.brand_name, bill_entry.bill_amt, bill_entry.bill_date]
    }
    //   

    db.query(query, (err, res) => {
        if (err) {
            console.log(err);

            return DBdone(err, null);
        } else {
            return DBdone(null, res);
        }
    });
};