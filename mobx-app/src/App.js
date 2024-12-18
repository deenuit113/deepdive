import './App.css';
import { observer } from 'mobx-react';

function App(props) {
    const { myCounter } = props;
    return (
        <div style={{ textAlign: "center", padding: "16"}}>
            카운트: {myCounter.count}
            <br/>
            마이너스: {myCounter.isNegative}
            <br/>
            <button onClick={() => myCounter.increase()}>+</button>
            <button onClick={() => myCounter.decrease()}>-</button>
        </div>
    );
}

export default observer(App);
