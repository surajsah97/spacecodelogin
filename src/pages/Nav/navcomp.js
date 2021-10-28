import { Box, Button, IconButton, Menu, MenuItem, Typography } from "@material-ui/core"
import {Notifications,Refresh,ExitToApp,KeyboardArrowDown,AccountCircle} from "@material-ui/icons"
import { useState } from "react"
export const Navcomp = () => {
    const [open, setopen] = useState(null)
    return (
        <Box color="black" p={2}>
             <IconButton>
             <Notifications/>
        </IconButton>
            <IconButton>
        <Refresh/></IconButton>
    
      <Button color="inherit" endIcon={<KeyboardArrowDown/>} onClick={(e)=>{setopen(e.currentTarget)}} >Lily sophy</Button>
      <Menu open={Boolean(open)} anchorEl={open} onClose={()=>setopen(false)}>
                <MenuItem>
                <AccountCircle/>My Account
                </MenuItem>
                
                <MenuItem >
                <ExitToApp  /> Logout
            </MenuItem>
                
            </Menu>

      </Box>
      
    )
}