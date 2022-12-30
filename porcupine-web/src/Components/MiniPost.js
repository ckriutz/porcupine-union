import './MiniPost.css';
function MiniPost(props) {
    return (
        <article>
            <a href="#" class="image"><img src={props.imgSrc} alt="" /></a>
            <p>This is a fucking mini-post, yo!</p>
        </article>
    );
}

export default MiniPost;