import moment from 'moment'
import 'moment/min/locales.min'
import { IMonths } from '../../store/ducks/dates/contracts/state'
import axios from 'axios'
import { ITodo } from '../../store/ducks/todos/contracts/state'

export const calendarApi = {
    fetchMonth(): Promise<IMonths> {
        return axios.get('/months').then(({ data }) => data)
    },
    fetchTodo(): Promise<ITodo> {
        return axios.get('/todos').then(({ data }) => data)
    },
    addTodo(payload: ITodo): Promise<ITodo> {
        return axios.post('/todos', payload).then(({ data }) => data)
    },
    removeTodo(payload: ITodo['id']): Promise<ITodo> {
        return axios.delete('/todos/' + payload).then(({ data }) => data)
    },
    toggleTodo(payload: ITodo['id'], completed: ITodo['completed']): Promise<ITodo> {
        return axios.patch('/todos/' + payload, { completed }).then(({ data }) => data)
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
