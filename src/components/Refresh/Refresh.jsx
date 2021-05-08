import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
function Refresh () {
    const dispatch = useDispatch();
    const feedback = useSelector(store => store.feedback);
    const history = useHistory();
    const onSubmit = () => {
        dispatch({type: 'CLEAR', payload: 0});
        console.log('clicked', feedback);
        history.push('/');
    }

    return (
        <div>
            <h1>Thank you!</h1>
            <form onSubmit={onSubmit}>
                <button>Leave New Feedback.</button>
            </form>
        </div>
    );
}

export default Refresh;