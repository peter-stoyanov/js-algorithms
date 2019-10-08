function logExecutionTime(fn, args) {

    const hrstart = process.hrtime();

    fn.call(this, ...args);

    const hrend = process.hrtime(hrstart);

    console.info('Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000);

}

module.exports = {
    logExecutionTime
}
