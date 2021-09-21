import { Box, List, ListItem, ListItemText } from '@material-ui/core'
import React from 'react'
import { TTodo } from '../../interfaces'
interface It {
    day: number
    monthEu: string
    todos: TTodo['todos']
}
export const TodosItem: React.FC<It> = ({ day, monthEu, todos }) => {
    return (
        <Box>
            <List dense>
                {todos?.map((todo) => {
                    if (todo?.months.day === day && todo?.months.monthEu === monthEu) {
                        return (
                            <ListItem key={todo.id}>
                                <ListItemText primary={todo.text} />
                            </ListItem>
                        )
                    }
                    return null
                })}
            </List>
        </Box>
    )
}
