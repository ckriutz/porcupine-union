import MiniArticle from './MiniArticle';

function Home() {
    return (
        <section>
            <header className="major">
                <h2>Latest Posts</h2>
            </header>
            <div class="posts">
                <MiniArticle imgSrc="images/pic01.jpg" />
                <MiniArticle imgSrc="images/pic02.jpg" />
                <MiniArticle imgSrc="images/pic03.jpg" />
                <MiniArticle imgSrc="images/pic04.jpg" />
                <MiniArticle imgSrc="images/pic05.jpg" />
                <MiniArticle imgSrc="images/pic06.jpg" />
            </div>
        </section>
    );
}


export default Home;