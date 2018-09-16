import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './GraphQL.css';
import galleryInfo from '../../../../assets/gallery';

class graphQL extends Component {

    componentDidMount() {
        window.scrollTo(0,0);
    }
    
    render() {
        return (
                <div>
                    <span className="container">
                        <div className="row">
                            <h1>
                                {galleryInfo.graphQL.title}
                            </h1>
                        </div>
                        <span className="container">
                            <p>
                                {galleryInfo.graphQL.date}
                            </p>
                        </span>
                        <div styleName="content">
                        </div>
                    </span>
                </div>
        )
    }
} 

export default CSSModules(graphQL, styles);