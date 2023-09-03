import { useState } from 'react';
function DynamicRender(): JSX.Element {
    const [colors, setColors] = useState<string[]>(['red', 'green', 'blue']);
    const [color, setColor] = useState<string>('white');
    const [input, setInput] = useState<string>('')
    const myStyle = {
        backgroundColor: color
    }
    return (
        <div>
            <h1></h1>
            <img style={myStyle}/>
            <p></p>
            <form onSubmit={event => event.preventDefault()}>
                <select onChange={(event => setColor(event.target.value))}>
                    {colors.map(color => <option value={color}>{color}</option>)}
                </select>
                <input onChange={(event) => setInput(event.target.value)}/>
                <button type={'submit'} onClick={() => setColors(colors => [...colors ,input])}>Add color</button>
            </form>
        </div>
    );
}

export default DynamicRender;