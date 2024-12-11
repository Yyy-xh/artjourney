import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addComment } from '../redux/slices/commentsSlice';
import '../styles/components/Community.scss';

const Community = () => {
    const comments = useSelector(state => state.comments.commentsList);
    const dispatch = useDispatch();
    const [comment, setComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (comment.trim() === '') return;
        dispatch(addComment({ text: comment, date: new Date().toLocaleString() }));
        setComment('');
    };

    return (
        <section className="community">
            <h2>社区互动</h2>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="发表您的见解..."
                ></textarea>
                <button type="submit">提交</button>
            </form>
            <div className="comments">
                {comments.map((c, index) => (
                    <div key={index} className="comment">
                        <p>{c.text}</p>
                        <span>{c.date}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Community;
