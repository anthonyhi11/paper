// this is the api for getting blog posts and posting blogposts to the db.
// will likely use mongoDB to store the blogs
import { fakeBlog } from './fakeBlog';

export default (req, res) => {
	res.statusCode = 200;
	res.json(fakeBlog);
};
