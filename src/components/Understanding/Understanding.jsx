import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';
function Understanding () {
    const dispatch = useDispatch();
    const [understanding, setUnderstanding] = useState(0);
    const history = useHistory();
    const onSubmit = (event) => {
        console.log('clicked', understanding);
        dispatch({type: 'ADD_UNDERSTANDING', payload: Number(understanding)})
        history.push('/supported');
    }

    return(
        <>
        <h1>How well are you understanding the content?</h1>
        <form onSubmit={onSubmit}>
            <input type="number" value={understanding} placeholder="0" onChange={(event) => setUnderstanding(event.target.value)} />
            <button>Next</button>
        </form>
        </>
    );
}

export default Understanding;