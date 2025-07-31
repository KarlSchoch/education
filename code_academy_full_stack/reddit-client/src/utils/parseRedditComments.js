export function parseRedditComments(redditJson) {
    if (!redditJson?.data?.children) return []

    return redditJson.data.children.map((child) => {
        const post = child.data;
        const timePostedFormat = new Date(post.created * 1000)
        return {
            id: post.id,
            title: post.title,
            text: post.selftext,
            subreddit: post.subreddit_name_prefixed,
            img: null,
            timePosted: timePostedFormat.toLocaleString(),
            metadata: {
                user: post.author,
                comments: [],
                upVoteCt: post.ups,
                downVoteCt: post.downs,
                commentCt: post.num_comments
            }
        }
    })
}