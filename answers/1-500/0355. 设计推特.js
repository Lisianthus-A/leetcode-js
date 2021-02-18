/**
 * Initialize your data structure here.
 */
var Twitter = function () {
    this.tweets = [];
    this.users = {};
};

/**
 * Compose a new tweet. 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function (userId, tweetId) {
    this.tweets.push([userId, tweetId]);
    if (!this.users[userId]) {
        this.users[userId] = {
            follow: new Set()
        };
    }
};

/**
 * Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent. 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function (id) {
    const posts = [];
    const follow = this.users[id]?.follow || new Set();
    for (let i = this.tweets.length - 1; i >= 0; i--) {
        const [userId, tweetId] = this.tweets[i];
        if (follow.has(userId) || userId === id) {
            posts.push(tweetId);
            if (posts.length === 10) {
                break;
            }
        }
    }

    return posts;
};

/**
 * Follower follows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function (followerId, followeeId) {
    if (this.users[followerId]) {
        this.users[followerId].follow.add(followeeId);
    } else {
        this.users[followerId] = {
            follow: new Set(),
        };
        this.users[followerId].follow.add(followeeId);
    }
};

/**
 * Follower unfollows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function (followerId, followeeId) {
    try {
        this.users[followerId].follow.delete(followeeId);
    } catch (e) {
        console.log(e);
    }
};

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */