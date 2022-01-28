import Post from "./Post";

const Feed = ({ posts }) => {
    return (
        <>
            {posts.map((post) =>
                (<Post key={post.id} post={post} />)    // element tags must be wrraped aroound using () and not {}.
            )}
        </>
    );
};

export default Feed;
