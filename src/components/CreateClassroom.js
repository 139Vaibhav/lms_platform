import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";

import CreateClassroomForm from "./CreateClassroomForm";

const options_row_1 = ["Course", "Submission", "Meeting"];
const options_row_2 = ["Batch", "Add Student", "Task Action 1"];
const options_row_3 = ["Take Action 2", "Assignment"];

export default function CreateClassroom() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [isCreateClassOpen, setIsCreateClassOpen] = React.useState(false);

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <Grid container direction="row" alignItems="center">
      <Grid item xs={12}>
        <CreateClassroomForm
          isOpen={isCreateClassOpen}
          onCloseClick={() => setIsCreateClassOpen(false)}
        ></CreateClassroomForm>
        <ButtonGroup
          variant="contained"
          color="primary"
          ref={anchorRef}
          aria-label="split button"
        >
          <Button onClick={() => setIsCreateClassOpen(true)}>
            Quick Actions
          </Button>
          <Button
            color="primary"
            size="small"
            aria-controls={open ? "split-button-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-label="select merge strategy"
            aria-haspopup="menu"
            onClick={handleToggle}
          >
            <ArrowDropDownIcon />
          </Button>
        </ButtonGroup>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
                  opacity: 1,
                  marginRight: "9vw",
                  
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList id="split-button-menu1">
                  <div id="split-button-menu1-display1">
                    {options_row_1.map((option, index) => (
                      <div id="quick-actions-rectangle1">
                        <MenuItem
                         
                        
                        >
                          <div id="quick-actions-circle1">
                            <img src={require('../images/Mask.png')}></img>
                          </div>
                          <div id="quick-actions-text1">
                            {option}
                          </div>
                        
                        </MenuItem>
                      </div>
                    ))}
                  </div>
                  <div id="split-button-menu1-display2">
                    {options_row_2.map((option, index) => (
                      <div id="quick-actions-rectangle2">
                        <MenuItem
                          
                       
                        >
                          <div id="quick-actions-circle2">
                            <img src={require('../images/Mask.png')}></img>
                          </div>
                          
                          <div id="quick-actions-text2">
                            {option}
                          </div>
                        </MenuItem>
                      </div>
                    ))}
                  </div> 
                  <div id="split-button-menu1-display3">
                     {options_row_3.map((option, index) => (
                      <div id="quick-actions-rectangle3">
                        <MenuItem
                           
                        
                        >
                          <div id="quick-actions-circle3">
                            <img src={require('../images/Mask.png')}></img>
                          </div>
                          <div id="quick-actions-text3">
                            {option}
                          </div>
                        </MenuItem>
                      </div>
                    ))}
                  </div>  
                   
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </Grid>
    </Grid>
  );
}
