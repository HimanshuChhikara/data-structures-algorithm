const puppeteer = require("puppeteer")
const mongo = require("mongodb").MongoClient
const delay = require('delay')
const { extendWith } = require("lodash")

const url ="mongodb://alljobs_root:T254L2cOP79m@54.161.254.222:27017/admin"


let db, jobs


let date_ob = new Date();

let date = ("0" + date_ob.getDate()).slice(-2);


let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);


let year = date_ob.getFullYear();
let finaldate = year + "-" + month + "-" + date
let dateshere = []
dateshere.push(finaldate)

mongo.connect(
    url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
},
    (err, client) => {
        if (err) {
            console.error(err)
            return
        }
        db = client.db("revenue_dashboards")
        jobs = db.collection("appcast_cookies");
        (async () => {
            const browser = await puppeteer.launch({
                headless: true,
                args: ["--no-sandbox", "--disable-setuid-sandbox", '--single-process', '--no-zygote'],
                ignoreDefaultArgs: ['--disable-extensions']
            })
            const page = await browser.newPage()
            console.log("Opening url https://partner.appcast.io/")
            await page.goto("https://partner.appcast.io/", {
                waitUntil: 'networkidle2', timeout: 1000000
            })
            await page.waitForSelector('input[id="user_session_email"]');
            await page.$eval('input[id="user_session_email"]', el => el.value = 'krishna.poosarla@jobiak.ai');
            await page.waitForSelector('input[id="user_session_password"]');
            await page.$eval('input[id="user_session_password"]', el => el.value = 'Appcast@666');
            await delay(3000)
            await page.click('button[class="btn-login"]')
            await delay(10000)
            // console.log("Opening url https://partner.appcast.io/cc/job_boards")
            // await page.goto("https://partner.appcast.io/cc/job_boards", {
            //     waitUntil: 'networkidle2'
            // })
            // let cookiesStored = await page.cookies()
            // let finalCookie = ""
            // cookiesStored.forEach(element => {
            //     finalCookie += `${element["name"]}=${element["value"]}; `
            // });
            // console.log(finalCookie)

            let publisherNames = ["Appcast Exchanges|||Jobiak CPA", "Appcast Exchanges|||Jobiak B CPC", "Bayard Advertising|||Alljobs - Bing", "SonicJobs|||Jobiak_Bing CPC - US", "CareerBuilder LLC|||bing-cpc programmatic", "Grubhub|||bing-cpc", "Dice|||jobiak-bing-cpc", "One Red Cent|||bing-cpc", "Efinancial Careers|||jobiak-bing-cpc_usd", "Efinancial Careers|||jobiak-bing-cpc_gbp", "Appcast CPC Exchange|||Jobiak CPC", "CareerBuilder LLC|||jobiak-alljobs - programmatic", "Bayard Advertising|||Alljobs", "Appcast Exchanges|||Jobiak CPA - healthcare", "Grubhub|||alljobs-cpa", "One Red Cent|||jobiak-alljobs-cpc", "Change State|||Jobiak CPC", "Appcast Premium|||Google for Jobs - Organic", "Efinancial Careers|||jobiak-alljobs_usd", "Efinancial Careers|||jobiak-bing-cpc_sgd", "SonicJobs|||Jobiak CPA - US", "One Red Cent|||alljobs-cpa", "Dice|||jobiak-alljobs-cpc","One Red Cent|||jobiak-cpc","CareerBuilder LLC|||jobiak-alljobslisting-cpc - programmatic",
        "CareerBuilder LLC|||jobiak-thejobshop.io-cpc - programmatic","CareerBuilder LLC|||jobiak-jobsforall.io-cpc - programmatic","CareerBuilder LLC|||jobiak-medichire.ai-cpc - programmatic","CareerBuilder LLC|||jobiak-healthcarejobs.ai-cpc - programmatic","CareerBuilder LLC|||jobiak-healthcarehire.us-cpc - programmatic","CareerBuilder LLC|||jobiak-carecrew.ai-cpc - programmatic","Dice|||jobiak-thejobshop.io-cpc","Dice|||jobiak-jobsforall.io-cpc","One Red Cent|||jobiak-alljobslisting-cpc","One Red Cent|||jobiak-thejobshop.io-cpc","One Red Cent|||jobiak-jobsforall.io-cpc","One Red Cent|||jobiak-medichire.ai-cpa","One Red Cent|||jobiak-healthcarejobs.ai-cpa","One Red Cent|||jobiak-healthcarehire.us-cpa","One Red Cent|||jobiak-carecrew.ai-cpa","One Red Cent|||jobiak-alljobslisting-cpa","One Red Cent|||jobiak-thejobshop.io-cpa","One Red Cent|||jobiak-jobsforall.io-cpa","Efinancial Careers|||jobiak-alljobslisting-cpc","Efinancial Careers|||jobiak-thejobshop.io-cpc",
        "Efinancial Careers|||jobiak-jobsforall.io-cpc"]
            let domains = ["exchanges", "exchanges", "bayard", "sonicjobs", "cb", "grubhub", "dhi", "orc", "efin", "efin", "appcast-cpc-exchange", "cb", "bayard", "exchanges", "grubhub", "orc", "changestate", "premium", "efin", "efin", "sonicjobs", "orc", "dhi","orc","cb","cb","cb","cb","cb","cb","cb","dhi","dhi","orc","orc","orc","orc","orc","orc","orc","orc","orc","orc","efin","efin","efin"]
            let employerIds = [25658, 27148, 28668, 29029, 29168, 29169, 29170, 29167, 29171, 29233, 29120, 28111, 21196, 27872, 28281, 26924, 28212, 26275, 27889, 29238, 28898, 28654, 26926,29431,30101,30105,30106,30110,30113,30115,30117,30102,30109,30100,30104,30107,30111,30112,30114,30116,30181,30183,30182,30099,30103,30108]
            let feedType = ["CPA", "CPC", "CPC", "CPC", "CPC", "CPC", "CPC", "CPC", "CPC", "CPC", "CPC", "CPC", "CPC", "CPC", "CPA", "CPC", "CPC", "CPC", "CPC", "CPC", "CPA", "CPA", "CPC","CPC","CPC","CPC","CPC","CPC","CPC","CPC","CPC","CPC","CPC","CPC","CPC","CPC","CPA","CPA","CPA","CPA","CPA","CPA","CPA","CPC","CPC","CPC"]
            let cookieCheckFields = ["appcast", "appcast1", "bayardad", "sonicjobs", "careerbuilder-orc", "grubhub-orc", "dice-orc", "oneredcent", "efinancial-usd-orc", "efinancial-gbp-orc", "appcast-international", "career-builder", "bayard2", "appcast2", "grubhub", "oneredcent1", "change state", "appcast premium", "efinancial1", "efinanacial2", "sonic-jobs2", "oneredcent2", "dice-alljobs","orc-jobiak-cpc","careerbuilder-alljobslisting-cpc-programmatic","careerbuilder-thejobshop-cpc-programmatic","careerbuilder-jobsforall-cpc-programmatic","careerbuilder-medichire-cpc-programmatic","careerbuilder-healthcare-cpc-programmaticjobs","careerbuilder-healthcarehire-cpc-programmatic","careerbuilder-carecrew-cpc-programmatic","dice-thejobshop","dice-jobsforall","oneredcent-jobiak-alljobslisting-cpc","oneredcent-jobiak-thejobshop-cpc","oneredcent-jobiak-jobsforall-cpc","oneredcent-jobak-medichire-cpa","oneredcent-jobiak-healthcarejobs.ai-cpa","oneredcent-jobiak-healthcarehire.us-cpa",
        "oneredcent-jobiak-carecrew.ai-cpa","oneredcent-jobiak-alljobslisting-cpa","oneredcent-jobiak-thejobshop-cpa","oneredcent-jobiak-jobsforall-cpa","efin-alljobslising-cpc","efin-thejobshop-cpc","efin-jobsforall-cpc"]
            await page.goto("https://partner.appcast.io/job_boards/users.json", {
                waitUntil: 'networkidle2'
            })
            await page.content();
            let innerText = await page.evaluate(() => {
                return JSON.parse(document.querySelector("body").innerText);
            });
            console.log("innertext=", innerText)
            // let datesList = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15","16","17","18","19","20","21","22","23","24","25"]
            // let dateshereFixed = "2022-11-"
            // for (let j = 0; j < datesList.length ; j++)   {
            //     dateshere[0] = `${dateshereFixed}${datesList[j]}`
            //     console.log(dateshere)
            for (let i = 0; i < innerText["rows"].length; i++) {
                console.log(innerText["rows"][i]["publisher_name"])
                console.log(innerText["rows"][i]["url"])
                let formatSearcher = `${innerText["rows"][i]["enterprise_name"]}|||${innerText["rows"][i]["publisher_name"]}`
                if (publisherNames.includes(formatSearcher)) {
                    await page.goto(innerText["rows"][i]["url"], {
                        waitUntil: 'networkidle2', timeout: 1000000
                    })
                    // delay(15000)
                    await page.content();
                    // // let cookiesStored = await page.cookies()
                    // // let finalCookie = ""
                    // // cookiesStored.forEach(element => {
                    // //     finalCookie += `${element["name"]}=${element["value"]}; `
                    // // });
                    // // console.log(finalCookie)

                    async function getDataAppcast(start_date, end_date, domain, employerId, cookiefield, feedtype) {
                        console.log(arguments)
                        let visitUrl_daily = `https://${domain}.appcast.io/api/reports/job_board/${employerId}/by_day?start_date=${start_date}&end_date=${end_date}`
                        let visitUrl_employer = `https://${domain}.appcast.io/api/reports/job_board/${employerId}/by_employer?start_date=${start_date}&end_date=${end_date}`
                        console.log(visitUrl_daily)
                        console.log(visitUrl_employer)
                        await page.goto(visitUrl_daily, {
                            waitUntil: 'networkidle2', timeout: 1000000
                        })
                        //  delay(2000)
                        let innerText1 = await page.evaluate(() => {
                            return JSON.parse(document.querySelector("body").innerText);

                        });
                        console.log("innerText1",innerText1)
                        // delay(2000)
                        await page.goto(visitUrl_employer, {
                            waitUntil: 'networkidle2', timeout: 1000000
                        })
                        await page.content();
                        let innerText2 = await page.evaluate(() => {
                            return JSON.parse(document.querySelector("body").innerText);
                        });
                        //console.log("innerText2",innerText2)
                        // delay(2000)
                        console.log("innerText now contains the JSON");
                        // console.log(innerText);
                        // console.log(innerText1);
                        // console.log(innerText2);

                        let upsertObject = {}
                        upsertObject[`appcast_json_day1`] = innerText1
                        upsertObject[`appcast_json_employer_day1`] = innerText2
                        await jobs.updateOne({
                            "emp": cookiefield, "type": feedtype
                        }, {
                            $set: upsertObject
                        }, {
                            upsert: true
                        })
                        console.log("Updated One Iteration data")
                        return "Done"
                    }
                    // let date_ob = new Date();
                    // let date = ("0" + date_ob.getDate()).slice(-2);
                    // let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
                    // let year = date_ob.getFullYear();
                    
                    // let formated_date = year + "-" + month + "-" + date
                    var date=new Date();
                    var date=new Date(date.setDate(date.getDate()-1));
                    console.log(date);
                    let date1 = ("0" + date.getDate()).slice(-2);
                    let month = ("0" + (date.getMonth() + 1)).slice(-2);
                    let year = date.getFullYear();
                    let formated_date = year + "-" + month + "-" + date1
                    console.log(formated_date)
                    // dateRange = datetime.now()

                    // // dateRange = datetime.now() - timedelta(1)
                    // dateRange_formatted = datetime(
                    //     dateRange.year, dateRange.month, dateRange.day, 0, 0, 0, 0)
                    // dateRange_string = str(dateRange_formatted).split(" ")[0]
                    // print("start_dateRange_string", dateRange_string)
                    //process.exit()
                    //await getDataAppcast(dateshere[0], dateshere[dateshere.length - 1], domains[publisherNames.indexOf(formatSearcher)], employerIds[publisherNames.indexOf(formatSearcher)], cookieCheckFields[publisherNames.indexOf(formatSearcher)], feedType[publisherNames.indexOf(formatSearcher)])
                    await getDataAppcast(formated_date, formated_date, domains[publisherNames.indexOf(formatSearcher)], employerIds[publisherNames.indexOf(formatSearcher)], cookieCheckFields[publisherNames.indexOf(formatSearcher)], feedType[publisherNames.indexOf(formatSearcher)])
                }
            }
            // i = i+1
            await delay(40000)
            // }



            // what jobs cookies scraping
            console.log("Opening url https://partner.whatjobs.com/partner/index")
            await page.goto("https://partner.whatjobs.com/partner/index", {
                waitUntil: 'networkidle2'
            })
            await page.waitForSelector('input[id="username"]');
            await page.$eval('input[id="username"]', el => el.value = 'JobiakB');
            await page.waitForSelector('input[id="password"]');
            await page.$eval('input[id="password"]', el => el.value = 'Jobiak1234!');
            await delay(3000)
            await page.click('button[class="send btn green btnLogin  btn-primary"]')
            await delay(10000)
            let cookiesStored = await page.cookies()
            let finalCookie = ""
            cookiesStored.forEach(element => {
                finalCookie += `${element["name"]}=${element["value"]}; `
            });
            console.log(finalCookie)
            upsertObject = {
                "cookie": finalCookie,
                "Updated_on": new Date(),
            }
            await jobs.updateOne({
                "emp": "whatjobs-bing", "type": "CPC"
            }, {
                $set: upsertObject
            }, {
                upsert: true
            })
            browser.close()

        })();

        
    

    })