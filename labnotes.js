var applesObj = {
    Adam: 3,
    Beth: 5,
    Cal: 3,
    Dan: 5,
    Eve: 4
}

let eveAppleCount = applesObj["Eve"]
console.log(eveAppleCount)

applesObj["Adam"] = 4
console.log(applesObj["Adam"])

let calAndDanAppleCount = applesObj["Cal"] + applesObj["Dan"]                                                            
console.log(calAndDanAppleCount)

for (let key in applesObj) {
    applesObj[key] = 0
}
console.log(applesObj)


var citiesObj = {
    Afghanistan: "Kabul",
    Russia: "Moscow",
    Iceland: "Reykjavik"
}
// let russiaCapital = citiesObj["Russia"];
// console.log(russiaCapital)

citiesObj["Jamaica"] = "Kingston"
console.log(citiesObj)

// c. Add a new key value pair "Indonesia" and its capital "Jakarta"
citiesObj.Inodonesia = "Jakarta"
console.log(citiesObj)