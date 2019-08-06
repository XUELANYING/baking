export default {
    date:function (time) {
        // 获取开始时间
        let dateBegin = new Date(time.replace(/-/g,'/'));
        // 获取当前时间
        let dateEnd = new Date();
        // 获取时间差的毫秒数
        let dateDiff = dateEnd.getTime() - dateBegin.getTime();
        // 计算出相差天数
        let dayDiff = Math.floor(dateDiff / (24*3600*1000));
        // 计算天数后剩余的毫秒数
        let leave1 = dateDiff % (24*3600*1000);
        // 计算出小时数
        let hours = Math.floor(leave1/(3600*1000));
        // 计算相差分钟数
        //计算小时数后剩余的毫秒数
        let leave2 = leave1%(3600*1000);
        //计算相差分钟数
        let minutes = Math.floor(leave2/(60*1000));
        // 计算相差秒数
        // 计算分钟数后剩余的毫秒数
        let leave3 = leave2%(60*1000);
        let seconds = Math.round(leave3/1000)
        return minutes+" 分钟"+seconds+" 秒"

    }

}