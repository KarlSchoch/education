export function parseRedditComments(redditJson) {
    if (!redditJson?.data?.children) return {}

    // Pull out the id of the post of the first element in the array
    // if it is not a post (aka kind == t3), return {}

    // For the second element in the array
    // if it is not a comment (kind == t1), continue
    // 

}