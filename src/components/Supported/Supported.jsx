import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';
function Supported () {
    const dispatch = useDispatch();
    const [supported, setSupported] = useState(0);
    const history = useHistory();
    const onSubmit = (event) => {
        console.log('clicked', supported);
        dispatch({type: 'ADD_SUPPORTED', payload: Number(supported)})
        history.push('/comments');
    }

    return(
        <>
        <h1>How well are you being supported?</h1>
        <form onSubmit={onSubmit}>
            <input type="number" value={supported} placeholder="0" onChange={(event) => setSupported(event.target.value)} />
            <button>Next</button>
        </form>
        </>
    );
}

export default Supported;