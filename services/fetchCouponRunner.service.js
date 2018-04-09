const path = require('path');
const childProcess = require('child_process');
const Nightmare = require('nightmare');
const nightmare = Nightmare({ show: true });

// const Iterate_Containers = url => {
//     const split1 = url.split('https://www.vipon.com/product/');
//     const split2 = split1[1].split('-', 1);
//
//     // if (count < total - 1) {
//         nightmare
//             .goto(`${url}`)
//             .wait('.st-animated')
//             .evaluate(() => {
//                 const text = document.querySelector('.request-btn').textContent;
//                 return text;
//             })
//             .then(result => {
//                 results.push(result);
//             });
//         console.log('results0--->>', results);
//         // return Iterate_Containers(count + 1);
//     // }
// };

const couponService = (runConfig, cb) => {
    nightmare
        .goto('https://www.vipon.com/login')
        .type('#loginform-email', 'sahil.dua@tothenew.com')
        .type('#loginform-password', 'fernandotorres')
        .click('#signup-button')
        .wait('.show_user_email')
        // .then(cookies => {
        //      console.log('cookies--->', cookies);
        //      // do something with the cookies
        // })
        .click('a[href="/promotion/index?type=instant"]')
        .wait('.box')

        // --- scroll to bottom code --------------------
        // let previousHeight, currentHeight = 0;
        // console.log('prev curr-->', previousHeight, currentHeight);
        // while(previousHeight !== currentHeight) {
        //     console.log('prev current-->', previousHeight, currentHeight);
        //     previousHeight = currentHeight;
        //     currentHeight =  nightmare.evaluate(() => document.body.scrollHeight);
        //      nightmare.scrollTo(currentHeight, 0)
        //         .wait(3000);
        // }

        // ---- specific product screen for coupon retrieval -----------
        .evaluate(() => {
            const dataId = [];
            const count = document.querySelector('#product-box-container').childElementCount;
            for(let i=0; i < count; i++) {
                const url = document.querySelectorAll('div.img-container')[i].firstElementChild.href;
                // const requiredUrl = url.split('https://www.vipon.com');
                dataId.push(url);
            }
            return dataId;
        })

        .then(async urls => {
            for(const url of urls) {
                await nightmare
                    .goto(`${url}`)
                    .wait('.st-animated')
                    .evaluate(() =>  document.querySelector('.request-btn').textContent)
                    .then(async result => {
                        if (result === 'Instant Deal' || result === 'Show Code')
                            await nightmare
                                .click('#product-request-btn')
                                .wait(() => {
                                    let text = document.querySelector('#voucherContent').textContent;
                                    return text.length !== 1;
                                })
                                .evaluate(() => document.querySelector('#voucherContent').textContent)
                                .then(code => {
                                    console.log('code is --->> ', code);
                                })
                    })
            }
        });
        nightmare.catch(error => {
            console.error('Search failed:', error)
        });
};


module.exports = {
    couponService,
};