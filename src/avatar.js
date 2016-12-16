var avatar = function(channel) {
    var avatarsURL = 'https://avatars.io';
    var noImage = '';

    if (channel.twitter_id) {
        return avatarsURL + '/twitter/' + channel.twitter_id;
    } else if (channel.instagram_id) {
        return avatarsURL + '/instagram/' + channel.instagram_id;
    } else if (channel.facebook_id) {
        return avatarsURL + '/facebook/' + channel.facebook_id;
    } else {
        return './src/assets/images/no-image.jpg';
    }
}