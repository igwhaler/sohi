import React, {useState, useContext} from 'react';

const themes = {
    light: {
        foreground: "#000000",
        background: "#eeeeee"
    },
    dark: {
        foreground: "#ffffff",
        background: "#222222"
    }
};

const ThemeContext = React.createContext({
    theme: themes.dark,
    changeTheme: () => {}
});

function SelfButton(props) {
    console.log(props.theme);

    return (
        <div onClick={() => {
            props.changeTheme(themes.light)
        }}>self button</div>
    );
}

function ToolBar() {
    return (
        <div>
            <ThemeContext.Consumer>
                {
                    value => {
                        return (
                            <SelfButton
                                {...value}
                            />
                        );
                    }
                }
            </ThemeContext.Consumer>
        </div>
    );
}


function Container() {
    const [theme, setTheme] = useState(themes.dark);

    return (
        <>
            <ThemeContext.Provider
                value={{
                    theme,
                    changeTheme: setTheme
                }}
            >
                <ToolBar></ToolBar>
            </ThemeContext.Provider>

            <button onClick={() => {
                setTheme(themes.light);
            }}>点击</button>
        </>
    )
}



function TabItem() {
    const { theme, changeTheme } = useContext(ThemeContext);

    console.log(theme);

    return (
        <div onClick={() => {
            changeTheme(themes.light)
        }}>tab item</div>
    );
}

function TabBar() {
    return (
        <div>
            <TabItem></TabItem>
        </div>
    );
}

export function ContextHook() {
    const [theme, setTheme] = useState(themes.dark);

    return (
        <>
            <ThemeContext.Provider
                value={{
                    theme,
                    changeTheme: setTheme
                }}
            >
                <TabBar></TabBar>
            </ThemeContext.Provider>

            <button onClick={() => {
                setTheme(themes.dark);
            }}>点击</button>
        </>
    )
}

export default Container;
