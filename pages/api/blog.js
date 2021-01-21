// this is the api for getting blog posts and posting blogposts to the db.
// will likely use mongoDB to store the blogs
import { fakeBlog } from './fakeBlog';

export default (req, res) => {
	if (req.method === "GET") {
	res.statusCode = 200;
	res.json(fakeBlog);
	} else if (req.method === "POST") {
		fakeBlog.push(req.body);
		res.statusCode = 201;
		res.json({msg: "Success", body: fakeBlog})
	}
};
