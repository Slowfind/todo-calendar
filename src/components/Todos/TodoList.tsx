import Box from '@material-ui/core/Box'
import Checkbox from '@material-ui/core/Checkbox'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import makeStyles from '@material-ui/styles/makeStyles'
import React from 'react'
import { TTodo } from '../../interfaces'
import { ITodo } from '../../store/ducks/todos/contracts/state'

const useStyles = makeStyles(() => ({
    icon: {
        '&:not(:last-of-type)': {
            marginRight: 5,
        },
    },
}))

export const TodoList: React.FC<TTodo> = ({ todos, onRemove, onToggle }) => {
    const classes = useStyles()

    const removeHandler = (id: ITodo['id']) => {
        onRemove(id)
    }
    const toggleHandler = (id: ITodo['id'], completed: ITodo['completed']) => {
        onToggle(id, completed)
    }
    if (todos === undefined) {
        return (
            <Box textAlign="center" mt={2}>
                <Typography variant="body1" className="center">
                    Задач нет!
                </Typography>
            </Box>
        )
    }
    return (
        <List>
            {todos.map((todo) => {
                return (
                    <ListItem key={todo.id} dense button onClick={() => toggleHandler(todo.id, todo.completed)}>
                        <ListItemIcon>
                            <Checkbox edge="start" checked={todo.completed} tabIndex={-1} disableRipple />
                        </ListItemIcon>
                        <ListItemText primary={todo.text} />
                        <ListItemSecondaryAction>
                            <IconButton className={classes.icon} color="primary" edge="end" aria-label="comments">
                                <EditIcon />
                            </IconButton>
                            <IconButton onClick={() => removeHandler(todo.id)} color="secondary" edge="end" aria-label="comments">
                                <DeleteIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                )
            })}
        </List>
    )
}
