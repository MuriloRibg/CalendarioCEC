export function ConvertDay(day: Date){
    return day.toLocaleDateString().split('/').reverse().join('-')
}

export function ConvertHour(day: Date){

    let hh = day.getHours();
    let mm = day.getMinutes();
    let ss = day.getSeconds()

    let hhFormatado = hh < 10 ? "0" + hh : hh;
    let mmFormatado = mm < 10 ? "0" + mm : mm;
    let ssFormatado = ss < 10 ? "0" + ss : ss;
    
    return `${hhFormatado}:${mmFormatado}:${ssFormatado}`
}