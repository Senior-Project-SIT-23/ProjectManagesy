import React from "react"
import { Tabs, AppBar } from "@material-ui/core"

const lightColor = "rgba(255, 255, 255, 0.7)"

export default function Tab(props) {

  const styles = (theme) => ({
    secondaryBar: {
      zIndex: 0,
    },
    menuButton: {
      marginLeft: -theme.spacing(1),
    },
    iconButtonAvatar: {
      padding: 4,
    },
    link: {
      textDecoration: "none",
      color: lightColor,
      "&:hover": {
        color: theme.palette.common.white,
      },
    },
    button: {
      borderColor: lightColor,
    },
  })
  return (
    <div>
      <AppBar
        component="div"
        className={styles.secondaryBar}
        color="primary"
        position="static"
        elevation={0}
      >
        <Tabs value={props.index} textColor="inherit">
          {props.children}
        </Tabs>
      </AppBar>
    </div>
  )
}
