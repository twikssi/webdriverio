
class Commands {

    async waitUntilElemtentsAppears(selectors, amount, timeoutObject) {
        await browser.waitUntil(async () => {
            const elems = await $$(selectors)
            console.log("------------- " + elems.length)
            if (elems.length >= amount) {
                return true
            }
        }, {
            timeout: timeoutObject ? timeoutObject.timeout : 5000 ,
            timeoutMsg: timeoutObject ? timeoutObject.timeoutMsg : `${amount} elements not found.`
        })
    }

}

export default new Commands();