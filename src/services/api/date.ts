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
    const daysInMonth = moment(month).daysInMonth()
    return Array.from({ length: daysInMonth }, (_, i) => i + 1)
}

const months: IDate = {
    monthRu: locale('ru'),
    monthEu: locale('en'),
}

export const DateApi = {
    fetchDate() {
        return months
    },
}
