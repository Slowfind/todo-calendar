import moment from 'moment'
import 'moment/min/locales.min'
import { IDate } from '../../store/ducks/dates/contracts/state'

const locale = (str: string) => {
    return Array.apply(0, Array(12)).map((_, i) => moment().locale(str).month(i).format('MMMM'))
}
export const date = (currentMonth: string) => {
    let monthNumber = moment().month(currentMonth).format('MM')
    let yearNumber = moment().year()
    let month = moment(`${yearNumber}-${monthNumber}`).format('YYYY-MM')
    // console.log(month, 'm,,')
    const daysInMonth = moment(month).daysInMonth()
    return Array.from({ length: daysInMonth }, (_, i) => i + 1)
}

// console.log(moment(['2021', '0']).locale('ru').format('YYYY-MM'))
// console.log(moment([2021, 'июль', '2']).locale('ru').format('D MMMM'), '[4242424')
const months: IDate = {
    monthRu: locale('ru'),
    monthEu: locale('en'),
}

export const DateApi = {
    fetchDate() {
        return months
    },
}
export class MyDate {
    currentMonth: string
    constructor(currentMonth: string) {
        this.currentMonth = currentMonth
    }
    monthNumber() {
        return moment().month(this.currentMonth).format('MM')
    }
    yearNumber() {
        return moment().year()
    }
    month() {
        return moment([`${this.yearNumber()}`, `${+this.monthNumber() - 1}`]).format('YYYY-MM')
    }
    daysInMonth() {
        return moment(this.month()).daysInMonth()
    }
    get fullDaysInMonth() {
        return Array.from({ length: this.daysInMonth() }, (_, i) => i + 1)
    }
}
export class Pluralize extends MyDate {
    day: number
    constructor(currentMonth: string, day: number) {
        super(currentMonth)
        this.day = day
    }
    get pluralizeMonths() {
        return moment([`${this.yearNumber()}`, `${+this.monthNumber() - 1}`, `${this.day}`])
            .locale('ru')
            .format('D MMMM')
    }
}
