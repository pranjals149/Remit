import React from 'react'
import './Mail.css';

import { IconButton } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox'
import ErrorIcon from '@material-ui/icons/Error';
import DeleteIcon from '@material-ui/icons/Delete'
import EmailIcon from '@material-ui/icons/Email';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore'
import PrintIcon from '@material-ui/icons/Print'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import LabelImportantIcon from '@material-ui/icons/LabelImportant'

import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectOpenMail } from '../../features/mailSlice';

const Mail = () => {
    const history = useHistory();
    const selectedMail = useSelector(selectOpenMail);

    return (
        <div className="mail">
            <div class='mail__tools'>

                <div class='mail__toolsLeft'>
                    <IconButton onClick={() => history.push('/')}>
                        <ArrowBackIcon />
                    </IconButton>

                    <IconButton>
                        <MoveToInboxIcon />
                    </IconButton>

                    <IconButton>
                        <ErrorIcon />
                    </IconButton>

                    <IconButton>
                        <DeleteIcon />
                    </IconButton>

                    <IconButton>
                        <EmailIcon />
                    </IconButton>

                    <IconButton>
                        <WatchLaterIcon />
                    </IconButton>

                    <IconButton>
                        <CheckCircleIcon />
                    </IconButton>
                </div>

                <div class='mail__toolsRight'>
                    <IconButton>
                        <UnfoldMoreIcon />
                    </IconButton>

                    <IconButton>
                        <PrintIcon />
                    </IconButton>

                    <IconButton>
                        <ExitToAppIcon />
                    </IconButton>
                </div>

            </div>

            <div class='mail__body'>
                <div class='mail__bodyHeader'>
                    <h2>{selectedMail?.subject}</h2>
                    <LabelImportantIcon className='mail__important' />
                    <p>{selectedMail?.title}</p>
                    <p className='mail__time'>{selectedMail?.time}</p>
                </div>

                <div class='mail__message'>
                    <p>{selectedMail?.description}</p>
                </div>
            </div>

        </div>
    )
}

export default Mail