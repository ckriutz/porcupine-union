import { useParams } from "react-router-dom";

function Post(props) {
    const { slug } = useParams();
    console.log(slug);
    return (
        <section>
            <header class="main"><h1>Generic</h1></header>
            <span class="image main"><img src="images/pic11.jpg" alt="" /></span>
            <div>body</div>
        </section>
    );
}

export default Post;