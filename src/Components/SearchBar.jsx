import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper, IconButton } from '@mui/material'
import { Search } from '@mui/icons-material';

const SearchBar = () => {
    return (
        <Paper
            component="form"
            onSubmit={() => { }}
            sx={{
                borderRadius: 20,
                pl: 2,
                mr: { sm: 5 }
            }}
        >
            <input value="" className='search-bar' placeholder='search...' onChange={() => { }} />

            <IconButton type='submit' sx={{p:"10px", color:"red"}}>
                <Search />
            </IconButton>

        </Paper>
    )
}

export default SearchBar