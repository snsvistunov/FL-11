function formatTime(time){
    let result='';
    const minutesInDay=1440;
    const minutesInHour=60;
    let days=Math.floor(time/minutesInDay);
    let hours=Math.floor((time-days*minutesInDay)/minutesInHour);
    let minutes=time-days*minutesInDay-hours*minutesInHour;
    result=days+' day(s) '+hours+' hour(s) '+minutes+' minutes(s) ';
    return arguments.length<1 ? false :result;
}
//Tests
console.log(formatTime(3120));
console.log(formatTime(5059));
console.log(formatTime(1439));