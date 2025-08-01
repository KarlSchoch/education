export function parseRedditComments(redditJson) {
    if (!redditJson[0].data) return {}

    // Pull out the id of the post of the first element in the array
    const post = redditJson[0].data?.children?.find((el) => el.kind === "t3");

    // Pull out the comments and add to response
    const res = {};
    res[post.data.id] = redditJson[1].data?.children
        ?.filter(el => el.kind === 't1')
        .map((el) => {
            return {
                'timestamp': el.data.created,
                'user': el.data.author,
                'text': el.data.body,
            }
        })

    return res;
}