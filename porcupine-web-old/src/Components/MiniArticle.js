import './MiniArticle.css';
function MiniArticle(props) {
    return (
        <article>
            <a href="#" class="image"><img src={props.imgSrc} alt="" /></a>
            <h3>Mini Article!</h3>
            <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
            <ul class="actions">
                <li><a href="#" class="button">More</a></li>
            </ul>
        </article>
    );
}

export default MiniArticle;