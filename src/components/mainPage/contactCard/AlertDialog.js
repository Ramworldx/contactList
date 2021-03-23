import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../../store/actions/Actions';
import deleteIcon from '../../../assets/delete-icon.png';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  alertBackground: {
    backgroundColor: 'rgb(216, 216, 216)',
  },
  deleteIcon: {
    padding: '7px 1px 1px 1px',
    height: '2.1em',
    width: '2.2em',
    fontSize: '0.7em',
  },
  alertTitle: {
    textAlign: 'center',
    color: 'rgb(150, 91, 91)',
    backgroundColor: 'rgb(216, 216, 216)',
    fontWeight: 600,
  },
  contactName: {
    color: 'rgb(2, 173, 2)',
    fontSize: '1.3em',
  },
  cancel: {
    color: 'rgb(255, 255, 255)',
    backgroundColor: 'rgb(6, 198, 104)',
    border: '1px solid rgb(6, 198, 104)',
  },
  delete: {
    color: 'rgb(255, 86, 86)',
    backgroundColor: 'rgb(255, 255, 255)',
    border: '1px solid rgb(255, 85, 85)',
  },
});

export default function AlertDialog(props) {
  const style = useStyles();
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onDelete = () => {
    dispatch(deleteContact(props.contact.id));
  };

  return (
    <div>
      <img
        src={deleteIcon}
        alt='delete'
        onClick={handleClickOpen}
        className={style.deleteIcon}
      />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle className={style.alertTitle} id='alert-dialog-title'>
          Delete Contact
        </DialogTitle>
        <DialogContent className={style.alertBackground}>
          <DialogContentText id='alert-dialog-description'>
            Сonfirm deleting contact
            <span className={style.contactName}> {props.contact.name} </span>
          </DialogContentText>
        </DialogContent>
        <DialogActions className={style.alertBackground}>
          <Button className={style.cancel} onClick={handleClose}>
            Cancel
          </Button>
          <Button className={style.delete} onClick={onDelete} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
