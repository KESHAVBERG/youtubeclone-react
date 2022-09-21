import React from 'react'
import { Stack } from '@mui/material'
import { categories } from '../utils/constants'
const Sidebar = () => {
  return (
    <Stack
        direction="row"
        sx={{
            overflowY:"auto",
            height:{sx:"auto", md:"95%"}
        }}
        
    >Sidebar</Stack>
  )
}

export default Sidebar