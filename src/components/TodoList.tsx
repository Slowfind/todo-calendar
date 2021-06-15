import Box from '@material-ui/core/Box'
import Checkbox from '@material-ui/core/Checkbox'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import TextField from '@material-ui/core/TextField'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import makeStyles from '@material-ui/styles/makeStyles'
import React from 'react'

const useStyles = makeStyles(() => ({
    icon: {
        '&:not(:last-of-type)': {
            marginRight: 5,
        },
    },
}))

export const TodoList: React.FC = () => {
    const classes = useStyles()

    const [checked, setChecked] = React.useState([0])
    const [inputValue, setInputValue] = React.useState<string | null>(null)
    const inputRef = React.useRef<HTMLInputElement>(null)

    const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setInputValue(inputRef.current!.value)
        inputRef.current!.value = ''
    }

    const handleToggle = (value: number) => () => {
        const currentIndex = checked.indexOf(value)
        const newChecked = [...checked]

        if (currentIndex === -1) {
            newChecked.push(value)
        } else {
            newChecked.splice(currentIndex, 1)
        }

        setChecked(newChecked)
    }
    // console.log(inputValue)
    return (
        <Grid container spacing={2} direction="row" justify="center" alignItems="center">
            <Grid item xs={8}>
                <Box>
                    <form onSubmit={onSubmitForm} noValidate autoComplete="off">
                        <TextField inputRef={inputRef} fullWidth id="todo" placeholder="Введите задачу" />
                    </form>
                </Box>
                <Box>
                    <List>
                        {[0, 1, 2, 3].map((value) => {
                            const labelId = `checkbox-list-label-${value}`

                            return (
                                <ListItem key={value} role={undefined} dense button onClick={handleToggle(value)}>
                                    <ListItemIcon>
                                        <Checkbox
                                            edge="start"
                                            checked={checked.indexOf(value) !== -1}
                                            tabIndex={-1}
                                            disableRipple
                                            inputProps={{ 'aria-labelledby': labelId }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText id={labelId} primary={`Line item ${inputValue}`} />
                                    <ListItemSecondaryAction>
                                        <IconButton className={classes.icon} color="primary" edge="end" aria-label="comments">
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton color="secondary" edge="end" aria-label="comments">
                                            <DeleteIcon />
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>
                            )
                        })}
                    </List>
                </Box>
            </Grid>
        </Grid>
    )
}
