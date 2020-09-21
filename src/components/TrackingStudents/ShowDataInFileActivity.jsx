import React from "react"
import { useParams } from "@reach/router"
import ArrowBackSharpIcon from "@material-ui/icons/ArrowBackSharp"
import Fab from "@material-ui/core/Fab"
import { makeStyles } from "@material-ui/core/styles"

export default function ShowDataInFileActivity() {
  const { id } = useParams()

  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  }))

  return (
    <div className="backbutton">
      <div className={useStyles.root}>
        {/* hello
            {id} */}
        <Fab aria-label="ย้อนกลับ">
          <ArrowBackSharpIcon />
        </Fab>
      </div>
    </div>
  )
}
