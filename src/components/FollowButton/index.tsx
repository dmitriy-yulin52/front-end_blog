import React, {useCallback} from 'react';
import {Button} from '@material-ui/core';
import CheckIcon from '@material-ui/icons/CheckOutlined';
import AddIcon from '@material-ui/icons/AddOutlined';

import styles from './FollowButton.module.scss';

export const FollowButton: React.FC = () => {
    const [followed, setFollowed] = React.useState(false);


    const onClickHandler = useCallback(() => {
        setFollowed(!followed)
    }, [setFollowed, followed])

    return (
        <Button
            onClick={onClickHandler}
            variant="contained"
            className={styles.button}>
            {!followed ? <AddIcon/> : <CheckIcon className={styles.checkIcon}/>}
        </Button>
    );
};
