import React from 'react';
import { withStyles, WithStyles, Typography, Theme, Button } from '@material-ui/core';
import clsx from 'clsx';
import Overlay from './Overlay';
import ReactMarkdown from 'react-markdown';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { getImageURL, ImageScaleMode } from '../utils/getImageURL';

const styles = (theme: Theme) => ({
    root: {
    },
    description: {
        textAlign: 'left' as 'left'
    },
    image: {
        width: '100%'
    },
    overlay: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'center'
    },
    overlayPanel: {
        background: fade(theme.palette.background.default, 0),
        padding: '20px 30px',
        textAlign: 'left' as 'left'
    }
});

interface Props extends WithStyles<typeof styles> {
    className?: string;
    style?: React.CSSProperties;

    image: string;

    header?: string;
    description?: string;

    cardLink?: string;
    cardLinkText?: string;
}

const Card: React.SFC<Props> = (props) => {
    const {
        classes,
        className,
        image,
        header,
        description,
        cardLink,
        cardLinkText,
        ...other
    } = props;

    const imageUrl = getImageURL(image, {
        width: 3000,
        upscale: false,
        scaleMode: ImageScaleMode.ASPECT_RATIO,
        aspectRatio: '1:1'
    });

    return (
        <div className={clsx(classes.root, className)} {...other}>

                <img className={classes.image} src={imageUrl} />
      
            <Typography variant="h3">{header}</Typography>
                        {/*
                        {
                            description ? <p>{description}</p> : null
                        }
                        */}
                        {
                         description ? <ReactMarkdown className={classes.description} source={description} />   : null
                        }        
                        {
                            cardLink ? (
                                <a href={cardLinkText}>
                                    <Button variant="outlined">{cardLinkText}</Button>
                                </a>
                            ) : null
                        }
        </div>
    );
};

export default withStyles(styles)(Card);