/**
 * Created by jansrud on 29.05.2017.
 */

/*

    Worker --
    Makes all the calculations for a single bot session

 */

module.exports = function (inp, callback) {
    callback(null, inp + ' BAR (' + process.pid + ')')
}