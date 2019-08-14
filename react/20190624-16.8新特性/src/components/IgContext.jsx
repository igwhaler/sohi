import React, {Component} from 'react';
import ClassNames from 'classnames';
import styles from './styles/igContext.module.scss';

const ThemeContext = React.createContext('');
const InfoContext = React.createContext({
    info: {
        name: ''
    },
    updateInfo: () => {}
});

const Button = function(props) {
    let {theme, children} = props;
    let className = ClassNames([
        styles.button,
        styles[`theme-${theme}_button`]
    ]);

    return <div className={className} onClick={props.onClick}>{children}</div>
};

class ThemedButton extends Component {
    static contextType = ThemeContext;

    render() {
        return <Button theme={this.context}>点击</Button>;
    }
}

const ToolBar = function() {
    return <ThemedButton />;
};

const ToolContent = function() {
    const handleClick = function (info) {
        console.log(info);
    };

    return (
        <ThemeContext.Consumer>
            {theme => {
                return (
                    <InfoContext.Consumer>
                        {({info, updateInfo}) => {
                            return <Button
                                        theme={theme}
                                        onClick={() => {handleClick(info)}}
                                    >
                                    点击
                                    </Button>;
                        }}
                    </InfoContext.Consumer>
                );
            }}
        </ThemeContext.Consumer>
    );
}

class IgContext extends Component {
    constructor(props) {
        super(props);

        this.state = {
            theme: '',
            info: {
                name: ''
            }
        };
    }

    componentDidMount() {
        let {info} = this.state;

        info.name = '123';
        this.setState({
            info
        });
    }

    handleChangeTheme = (theme) => {
        this.setState({
            theme
        });
    }

    updateInfo = (name) => {
        let {info} = this.state;

        info.name = name;
        this.setState({
            info
        });
    }

    render() {
        let {theme, info} = this.state;

        return (
            <div>
                <div className={styles['wrap-theme']}>
                    主题：
                    <span onClick={() => this.handleChangeTheme('tan')} className={ClassNames([styles['theme'], styles['theme-tan']])}></span>
                    <span onClick={() => this.handleChangeTheme('gold')} className={ClassNames([styles['theme'], styles['theme-gold']])}></span>
                </div>

                <ThemeContext.Provider value={theme}>
                    <ToolBar />

                    <br />

                    <InfoContext.Provider value={{
                        info,
                        updateInfo: this.updateInfo
                    }}>
                        <ToolContent />
                    </InfoContext.Provider>

                    {/* <ToolContent /> */}

                </ThemeContext.Provider>
            </div>
        );
    }
}

export default IgContext;
