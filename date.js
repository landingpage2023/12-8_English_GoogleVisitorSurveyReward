var names = ["Tammy Levi", "Chuck Pole", "Martin Crux", "Mary Gainey", "Jennifer Lewis",
    "Jones White", "Harry Craney"
];

function dateOffset(f, j) {
    var l = new Date(Date.now() - f * 24 * 60 * 60 * 1000),
        e = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        k = ["January", "February", "March", "April", "May", "June", "July", "August", "September",
            "October", "November", "December"
        ],
        a = new Boolean(f == null || f == 0 || f == undefined || f == "");
    if (a == true) {
        f = 0
    }
    if (!j == null || !j == 0 || !j == undefined) {
        if (j == "day_name_only" && a) {
            return e[l.getDay()]
        } else {
            if (j == "top_date" && a) {
                return e[l.getDay()] + ", " + k[l.getMonth()] + " " + l.getDate() + ", " + l
                    .getFullYear()
            }
        }
    } else {
        return l.getDate() + " " + k[l.getMonth()]
    }
}