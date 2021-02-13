import React, {ReactElement} from 'react'
import "./App.css"

interface Hello {
    name: string,
}

const App = (): ReactElement => <div className="some-class">{ ({ name: "Hi!3" } as Hello).name }</div>;

export default App;
