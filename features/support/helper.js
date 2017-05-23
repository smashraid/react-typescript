const { By, until } = require('selenium-webdriver');

function removeDoubleQuotes(w) {
    return w.replace(/['"]+/g, '');
}

function setSelect(driver, select, value) {
    let name = "select[name='" + removeDoubleQuotes(select) + "'] option[value='" + removeDoubleQuotes(value) + "']";
    return driver.wait(until.elementLocated(By.css(name))).click();
}

function setInput(driver, input, value) {
    let name = "input[name='" + removeDoubleQuotes(input) + "']";
    return driver.findElement(By.css(name)).sendKeys(value);
    //return driver.wait(until.elementLocated(By.css(name))).sendKeys(value);
}

function submitForm(driver) {
   return driver.findElement(By.css("button[type='submit']")).click();
}

function readTable(driver, table) {
   return table.rawTable.forEach(function (element) {
        if (element[2] === "select") {
            setSelect(driver, element[0], element[1]);
        } else {
            setInput(driver, element[0], element[1]);
        }
    }, this);
}

module.exports = {
    removeDoubleQuotes,
    setSelect,
    setInput,
    readTable,
    submitForm
};