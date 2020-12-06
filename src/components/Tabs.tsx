import React, {useEffect, useState} from 'react';
import { Switch, Route, Link } from "react-router-dom";
import { Tab } from "./types";
import StylesGeneral from "./styles";
import TabsCircle from "./TabsCircle";
import { LineIcon } from '../icons';
import typography from "../styles/typography";
import queries from "../styles/media/breakPoints";
import CheckResolution from '../styles/media/checkResolution';

const Tabs: React.FC<Tab> = ({path, tabsChildren, routes}) => {
    const classesGeneral = StylesGeneral;
    const mediaPoints = CheckResolution(queries) || {
        xs: false,
        sm: false,
    };
    const [tabActive, setTabActive] = useState<number>(1);

    const handleClick = (event: number) => {
        setTabActive(event);
    }

    return (
        <div>
            <div style={ classesGeneral.tabsContainer }>
                <h1 style={ { ...classesGeneral.headlineGeneral , ...mediaPoints.sm && { fontSize : typography.fontSizeSemiBig } } }>Your
                    first project</h1>
                <div style={ {
                    display : 'flex' ,
                    justifyContent : 'center' ,
                    alignItems : 'center' , ...mediaPoints.sm && { flexDirection : 'column' }
                } }>
                    { routes.map( ( route , index ) => {
                        const identifier = index + 1;
                        return (
                            <div style={ { display : 'flex' , justifyContent : 'center' , alignItems : 'center' } }>
                                <TabsCircle isActive={ tabActive === identifier }
                                            children={ <Link to={ `${ path }${ route.path }` }
                                                             onClick={ () => handleClick( identifier ) }
                                                             style={ classesGeneral.tabsCircleContent }>{ identifier }</Link> }/>
                                { index !== routes.length - 1 && !mediaPoints.sm ?
                                    <LineIcon style={ { padding : `0 ${ typography.marginSmall }` } }/> : '' }
                            </div>
                        );
                    } ) }
                </div>
            </div>
            <div>
                <Switch>
                    { tabsChildren.map( ( tab , index: number ) => {
                        return <Route path={ `${ path }${ routes[index].path }` } exact={ index === 0 }
                                      // @ts-ignore
                                      component={ () => tab }/>
                    } ) }
                </Switch>
            </div>
        </div>
    );
}

export default Tabs;
