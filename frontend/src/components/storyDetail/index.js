import { useSelector, useDispatch } from 'react-redux';
import { useParams, Redirect } from 'react-router-dom';
import { useEffect } from 'react';
import EditStoryModal from '../editStoryModal';
import NewCommentModal from '../newCommentModal';
import EditCommentModal from '../editCommentModal';
import DeleteCommentModal from '../deleteCommentModal';
import DeleteStoryModal from '../deleteStoryModal';
import AccessDeniedModal from '../accessDeniedModal';
import LoginForm from '../loginForm';
import { fetchComments } from '../../store/comments';
import './storyDetail.css';

const StoryDetail = () => {
    const stories = useSelector(state => state.stories.stories);
    const session = useSelector(state => state.session.user);
    const comments = useSelector(state => state.comments.comments)

    const dispatch = useDispatch();
    const { id } = useParams();
    
    useEffect(() => {
        dispatch(fetchComments());
    },[dispatch])

    return (
        <>
            {session ?
                <>
                    <div className='nav-bar-space-background'/>
                    <div className='nav-bar-space-filler'/>
                    <div className='mF-content-main'>
                        <div className='mF-content-story'>
                            {stories?.map(story => {
                                if (story.id === parseInt(id)) {
                                    return (
                                        <div className='sD-main-content' key={story.id}>
                                            <div className='mF-story-details'>
                                                <div className='mF-story-author'>
                                                    <img className='mF-author-profile' src={require('../../assets/avatars/hal9000.png')}/>
                                                    <p>{story.User.username}</p>
                                                </div>
                                                <div className='mF-story-title'>
                                                    <h2>{story.title}</h2>
                                                </div>
                                                <div className='mF-story'>
                                                    <p>{story.content}</p>
                                                </div>
                                                <div className='mF-story-info'>
                                                    <p>{story.createdAt}</p>
                                                    <p>5 min read</p>
                                                    <p className='mF-story-tag'>Category</p>
                                                </div>
                                                {(story.User.id === session.id) && 
                                                    <div className='mF-edit-delete'>
                                                        <EditStoryModal id={story.id}/>
                                                        <DeleteStoryModal storyId={story.id} />
                                                    </div>
                                                }
                                            </div>
                                            <div className='sD-comments-container'>
                                                <NewCommentModal storyId={story.id}/>
                                            {comments?.map(comment => {
                                                if (comment.storyId === story.id) 
                                                    return (
                                                        <div key={comment.id}>
                                                            <div className='sD-comments-main'>
                                                                <h3>{comment.content}</h3>
                                                            </div>
                                                            {(comment.userId === session.id) && 
                                                                <div className='mF-edit-delete'>
                                                                    <EditCommentModal commentId={comment.id}/>
                                                                    <DeleteCommentModal commentId={comment.id} />
                                                                </div>
                                                            }
                                                            {(comment.userId !== session.id && story.userId === session.id) &&
                                                                <div className='mF-edit-delete'>
                                                                    <DeleteCommentModal commentId={comment.id} />
                                                                </div>
                                                            }
                                                        </div>
                                                    )
                                                })
                                            }
                                            </div>
                                        </div>
                                    )
                                }
                            })}
                        </div>
                    </div>
                </>
            : <Redirect to='/'/>
            }
        </>
    )
};

export default StoryDetail;