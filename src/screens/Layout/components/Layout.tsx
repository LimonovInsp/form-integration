import React from 'react';
import LayoutStyles from '../styles';
import Form from '../../Form/components/Form';
import Template from "../../../components/Template";
import CheckResolution from "../../../styles/media/checkResolution";
import queries from "../../../styles/media/breakPoints";
import LayoutMediaStyle from "../mediaStyles";
import Tabs from '../../../components/Tabs';

const Layout: React.FC<any> = ({ match }) => {
    const { path } = match;
    const classes = LayoutStyles;
    const mediaClasses = LayoutMediaStyle;
    const mediaPoints = CheckResolution(queries) || {
        xs: false,
        sm: false,
    }

    return (
        <div style={ { ...classes.layout, ...mediaPoints.sm && mediaClasses.layoutMedia } }>
            <Tabs path={ path } tabsChildren={ [<Template headline="Hi! Swipe next"/>,
                <Template headline="Clothes do not make the man"/>, <Form/>] } routes={ [
                { name : 'Greeting', path : '' },
                { name : 'Proverb', path : '/proverb' },
                { name : 'Complete', path : '/complete' }
            ] }/>
        </div>
    )
}

export default Layout;
