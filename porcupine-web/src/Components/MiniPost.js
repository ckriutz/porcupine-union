import './MiniPost.css';
function MiniPost(props) {
    return (
        <article>
            <a href={props.link} className="image"><img src={props.imgSrc} alt="" /></a>
            <p>{props.text}</p>
        </article>
    );
}

export default MiniPost;