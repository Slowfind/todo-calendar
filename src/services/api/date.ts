// import { IDateState } from '../../store/ducks/dates/contracts/state'
import moment from 'moment'
import 'moment/min/locales.min'
import { IDate } from '../../store/ducks/dates/contracts/state'

const locale = (str: string) => {
    return Array.apply(0, Array(12)).map((_, i) => moment().locale(str).month(i).format('MMMM'))
}
const date: IDate = {
    monthRu: locale('ru'),
    monthEu: locale('en'),
    yearNumber: moment().year(),
    monthNumber: +moment().month('november').format('MM'),

    month(): string {
        return moment(`${this.yearNumber}-${this.monthNumber}`).format('YYYY-MM')
    },
}

export const DateApi = {
    fetchDate(): any {
        return date
    },
}
