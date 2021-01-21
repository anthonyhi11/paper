import { useState } from "react";
import { addBlog } from "../../../actions/blog-actions";


export default function AddModal({ close, change }) {
  const [blogInfo, setBlogInfo] = useState({title: "", artist: "", subtitle: "", author: "", body: ""})

  function handleAdd() {
    addBlog(blogInfo);
    change(prev => prev += 1);
    close(false);
  }


	return (
		<div>
			<div>
				<h2>Form</h2>
        <form>
          <input type="text" placeholder="Title" onChange={(e) => setBlogInfo({...blogInfo, title: e.target.value})} />
          <input type="text" placeholder="Subtitle" onChange={(e) => setBlogInfo({...blogInfo, subtitle: e.target.value})} />
          <input type="text" placeholder="Artist" onChange={(e) => setBlogInfo({...blogInfo, artist: e.target.value})} />
          <input type="text" placeholder="Author" onChange={(e) => setBlogInfo({...blogInfo, author: e.target.value})} />
          <textarea placeholder="Blog Body" onChange={(e) => setBlogInfo({...blogInfo, body: e.target.value})} />
        </form>
        <button onClick={() => handleAdd()}>Submit</button>
        <button onClick={() => close(false)}>close</button>
			</div>
		</div>
	);
}
