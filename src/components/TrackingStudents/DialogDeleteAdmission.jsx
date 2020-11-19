// import React from "react"
// import Button from "@material-ui/core/Button"
// import Dialog from "@material-ui/core/Dialog"
// import DialogActions from "@material-ui/core/DialogActions"
// import DialogContent from "@material-ui/core/DialogContent"
// import DialogContentText from "@material-ui/core/DialogContentText"
// import DialogTitle from "@material-ui/core/DialogTitle"
// import DeleteIcon from "@material-ui/icons/Delete"
// import HighlightOffIcon from "@material-ui/icons/HighlightOff"
// import Risk from "../../picture/risk.png"
// import IconButton from "@material-ui/core/IconButton"
// import CloseIcon from "@material-ui/icons/Close"
// import { withStyles } from "@material-ui/core/styles"
// import MuiDialogTitle from "@material-ui/core/DialogTitle"
// import Typography from "@material-ui/core/Typography"
// import Tooltip from '@material-ui/core/Tooltip';

// export default function DeleteDialog(props) {
//   const [open, setOpen] = React.useState(false)

//   const handleClickOpen = () => {
//     setOpen(true)
//   }

//   const handleClose = async () => {
//     setOpen(false)
//   }

//   const styles = (theme) => ({
//     root: {
//       margin: 0,
//       padding: theme.spacing(2),
//       minWidth: "400px",
//     },
//     closeButton: {
//       position: "absolute",
//       right: theme.spacing(1),
//       top: theme.spacing(1),
//       color: theme.palette.grey[500],
//       align:"right",
//     },
//   })

//   const DialogTitle = withStyles(styles)((props) => {
//     const { children, classes, onClose, ...other } = props
//     return (
//       <MuiDialogTitle disableTypography className={classes.root} {...other}>
//         <Typography variant="h6">{children}</Typography>
//         {onClose ? (
//           <IconButton
//             aria-label="close"
//             className={classes.closeButton}
//             onClick={onClose}
//           >
//             <CloseIcon />
//           </IconButton>
//         ) : null}
//       </MuiDialogTitle>
//     )
//   })

//   return (
//     <div>
//       <Tooltip>
//       <IconButton onClick={handleClickOpen}>
//         <DeleteIcon />
//       </IconButton>
//       </Tooltip>
//       <Dialog
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="alert-dialog-title"
//         aria-describedby="alert-dialog-description"
//       >
//         <DialogTitle id="alert-dialog-title" onClose={handleClose}>
//          {""}
//         </DialogTitle>
//         <DialogContent>
//           <DialogContentText id="dialogDeleteActivity">
//             <table>
//               <tr>
//                 <td>
//                   <img src={Risk} height="60" width="60" />
//                 </td>
//                 <td>
//                   <div>
//                     <p className="topicDelete">
//                       คุณแน่ใจหรือไม่ว่าต้องการลบรายการที่ถูกเลือก ?
//                     </p>
//                     <p>รายการดังกล่าวจะถูกถาวรทันที่แล้วไม่สามารถนำกลับมาได้</p>
//                   </div>
//                 </td>
//               </tr>
//             </table>
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} color="primary">
//             ยกเลิก
//           </Button>
//           <Button
//             color="primary"
//             autoFocus
//             onClick={() => {
//               props.handleDeleteAdmission() 
//               handleClose()}}
//           >
//             ยืนยัน
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   )
// }
