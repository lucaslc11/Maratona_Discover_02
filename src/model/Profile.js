let data = {
    name: "Lucas",
    avatar: "https://github.com/lucaslc11.png",
    "monthly-budget": 3000,
    "days-per-week": 5,
    "hours-per-day": 5,
    "vacation-per-day": 4,
    "value-hour": 75
}

module.exports = {
    get() {
        return data
    },

    update(newData) {
        data = newData
    }
}