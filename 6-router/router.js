function router(pathname) {
    console.log(pathname+'页面');
    return new Buffer(pathname+'页面');
}

module.exports = router;