import IconButton from '@material-ui/core/IconButton/IconButton'
import React from 'react'
import { useHistory } from 'react-router-dom'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { Box } from '@material-ui/core'

export const BackButton: React.FC = () => {
    const history = useHistory()
    const handelClick = () => {
        history.goBack()
    }
    return (
        <IconButton onClick={handelClick} color="inherit">
            <ArrowBackIcon />
            <Box ml={1}>Назад</Box>
        </IconButton>
    )
}
