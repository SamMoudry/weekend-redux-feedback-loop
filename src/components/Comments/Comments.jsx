import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';
function Comments () {
    const dispatch = useDispatch();
    const [comments, setComments] = useState('');
    const history = useHistory();
    const onSubmit = (event) => {
        console.log('clicked', comments);
        dispatch({type: 'ADD_COMMENTS', payload: comments})
        history.push('/review');
    }

    return(
        <>
        <h1>Any comments you want to leave?</h1>
        <form onSubmit={onSubmit}>
            <input type="text" value={comments} placeholder="comments" onChange={(event) => setComments(event.target.value)} />
            <button>Next</button>
        </form>
        </>
    );
}

export default Comments;