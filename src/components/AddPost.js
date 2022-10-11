import { useEffect, useRef, useState } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Container,
  Card,
  CardHeader,
  CardBody,
} from "reactstrap";
import { getAllCategories } from "../services/CategoryService";
import { createPost } from "./../services/PostService";
import { toast } from "react-toastify";
import JoditEditor from "jodit-react";
import { getCurrentUserDetail } from "../auth";

const AddPost = () => {
  const [category, setCategory] = useState([]);
  const [postData, setPostData] = useState({
    postTitle: "",
    postContent: "",
    categoryId: 0,
  });

  const [user, setUser] = useState(null);

  const editor = useRef(null);

  useEffect(() => {
    console.log("In UseEffect Block");

    setUser(getCurrentUserDetail());

    getAllCategories()
      .then((data) => {
        setCategory(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleInputField = (event) => {
    setPostData({ ...postData, [event.target.name]: event.target.value });
  };

  const contentFieldChanaged = (newContent) => {
    setPostData({ ...postData, postContent: newContent });
    console.log(user);
  };

  const savePost = (event) => {
    event.preventDefault();
    console.log(postData);

    postData.userId = user.id;

    createPost(postData)
      .then((response) => {
        console.log(`data: ${response.data}`);
        console.log(`data: ${response.status}`);
        toast.success("Post added successfully");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Creating Post Failed");
      });

    setPostData({
      postTitle: "",
      postContent: "",
      categoryId: 0,
    });
  };

  const resetPost = () => {
    setPostData({
      postTitle: "",
      postContent: "",
      categoryId: 0,
    });
  };

  return (
    <>
      <Container fluid="md" className="my-3">
        <Card className="shadow" style={{ width: "80%", margin: "auto" }}>
          <CardHeader>
            <h3>Add Post</h3>
          </CardHeader>
          <CardBody>
            <Form onSubmit={savePost}>
              <FormGroup>
                <Label for="postTitle">Post Title</Label>
                <Input
                  id="postTitle"
                  name="postTitle"
                  placeholder="Enter Your Post Title"
                  type="text"
                  value={postData.postTitle}
                  onChange={handleInputField}
                  //   value={data.name}
                  //   onChange={(e) => handleInput(e, "name")}
                  //   invalid={
                  //     error.errors?.response?.data?.name ? true : false
                  //   }
                />
                {/* <FormFeedback>
                      {error.errors?.response?.data?.name}
                    </FormFeedback> */}
              </FormGroup>
              <FormGroup>
                <Label for="postBody">Post Content</Label>
                {/* <Input
                  id="postBody"
                  name="postBody"
                  type="textarea"
                  style={{ height: "120px" }}
                  
                /> */}
                <JoditEditor
                  ref={editor}
                  value={postData.postContent}
                  onChange={(newContent) => contentFieldChanaged(newContent)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="multiCategory">Select Category</Label>
                <Input
                  id="multiCategory"
                  name="categoryId"
                  type="select"
                  defaultValue={0}
                  onChange={handleInputField}
                >
                  <option disabled value={0}>
                    --Select One--
                  </option>
                  {category.map((c) => (
                    <option value={c.categoryId} key={c.categoryId}>
                      {c.categoryTitle}
                    </option>
                  ))}
                </Input>
              </FormGroup>

              <Container className="text-center">
                <Button color="success">Add Post</Button>
                <Button color="danger" className="ms-2" onClick={resetPost}>
                  Reset Post
                </Button>
              </Container>
            </Form>
          </CardBody>
        </Card>
      </Container>
    </>
  );
};

export default AddPost;
