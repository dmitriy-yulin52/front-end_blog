import React, {CSSProperties} from 'react';
import {Box, IconButton} from '@material-ui/core';
import {
    ModeCommentOutlined as CommentsIcon,
    RepeatOutlined as RepostIcon,
    BookmarkBorderOutlined as FavoriteIcon,
    ShareOutlined as ShareIcon,
} from '@material-ui/icons';


export const PostActions = () => {
    return (
        <Box flex={'0 1 100%'} flexWrap={'wrap'} >
            <Box display={'flex'} justifyContent={'space-between'}>
                <Box>
                    <IconButton>
                        <CommentsIcon/>
                    </IconButton>
                </Box>
                <Box>
                    <IconButton>
                        <RepostIcon/>
                    </IconButton>
                </Box>
                <Box>
                    <IconButton>
                        <FavoriteIcon/>
                    </IconButton>
                </Box>
                <Box>
                    <IconButton>
                        <ShareIcon/>
                    </IconButton>
                </Box>
            </Box>
        </Box>
    );
};
