const path = require('path');
const childProcess = require('child_process');
const Nightmare = require('nightmare');
const nightmare = Nightmare({ show: true });

// const Iterate_Containers = (count, total, url) => {
//     // const split1 = url.split('https://www.vipon.com/product/');
//     // const split2 = split1[1].split('-', 1);
//     if (count < total - 1) {
//         console.log(url);
//         nightmare
//             .click('a[href="/product/4930058-Baby-Shower-Advice-Prediction-Cards-Keepsake-Game-for?ref=ss_4930058_18_image"]');
//         // .then((gotoResult) => {
//         //     nightmare.wait('.st-animated');
//         //     nightmare.evaluate(() => {
//         //         const text = document.querySelector('.request-btn').textContent;
//         //         return text;
//         //     })
//         //     .then((data) => {
//         //         console.log('data--->', data);
//         //     });
//         // });
//         return Iterate_Containers(count + 1);
//     }
// };

const couponService = (runConfig, cb) => {
     nightmare
        .goto('https://www.vipon.com/login')
        .type('#loginform-email', 'sahil.dua@tothenew.com')
        .type('#loginform-password', 'fernandotorres')
        .click('#signup-button')
        .wait('.show_user_email')
         .then(cookies => {
             console.log('cookies--->', cookies);
             // do something with the cookies
         })
        // .click('a[href="/promotion/index?type=instant"]')
        // .wait('.box')

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

        // ---- specific pproduct screen for coupon retrieval -----------
        // .evaluate(() => {
        //     const dataId = [];
        //     const count = document.querySelector('#product-box-container').childElementCount;
        //     for(let i=0; i < count; i++) {
        //         const url = document.querySelectorAll('div.img-container')[i].firstElementChild.href;
        //         const requiredUrl = url.split('https://www.vipon.com');
        //         dataId.push(requiredUrl[1]);
        //     }
        //     return dataId;
        // })
        // .then(urls => {
        //     urls.forEach((url, i) => Iterate_Containers(i, urls.length, url));
        // })
        .catch(error => {
            console.error('Search failed:', error)
        });
};


module.exports = {
    couponService,
};