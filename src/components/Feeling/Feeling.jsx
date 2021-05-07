import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';
function Feeling () {
    const dispatch = useDispatch();
    const [feeling, setFeeling] = useState(0);
    const history = useHistory();
    const onSubmit = (event) => {
        dispatch({type: 'ADD_FEELING', payload: {feeling: feeling}})
        history.push('/understanding');
    }

    return(
        <>
        <h1>How are you feeling today?</h1>
        <form onSubmit={onSubmit}>
            <input type="number" value={feeling} placeholder="0" onChange={(event) => setFeeling(event.target.value)} />
            <button>Next</button>
        </form>
        </>
    );
}

export default Feeling;