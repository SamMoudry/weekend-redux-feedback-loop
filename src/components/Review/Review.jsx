import axios from 'axios';
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
function Review () {
    const review = useSelector(store => store.feedback);
    const history = useHistory();
    const onSubmit = () => {
        axios({
            method: 'POST',
            url: '/feedback',
            data: {feeling: review.feeling,
                   understanding: review.understanding,
                   support: review.supported,
                   comments: review.comments,
            }
        }).then((response) => {
            console.log(response);
            history.push('/');
        }).catch((err) => {
            console.log(err);
        })
    }
    return (
        <div>
            <h2>Feelings: {review.feeling}</h2>
            <h2>Understanding: {review.understanding}</h2>
            <h2>Support: {review.supported}</h2>
            <h2>Comments: {review.comments}</h2>
            <form onSubmit={onSubmit}>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default Review;