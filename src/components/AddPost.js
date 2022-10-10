import { useEffect, useState } from "react";
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
  import {getAllCategories} from '../services/CategoryService';

const AddPost = () => {

    const[category,setCategory] = useState([]);

    useEffect(()=> {
      console.log("dfjhsdjkf");
      getAllCategories().then((data) => {
        setCategory(data);
        console.log(category);
      }).catch((error) => {
        console.log(error);
      })
    },[]);

return(
    <>
        <Container fluid="md" className="my-3">
            <Card className="shadow">
              <CardHeader>
                <h3>Add Post</h3>
              </CardHeader>
              <CardBody>
                <Form>
                  <FormGroup>
                    <Label for="postTitle">Post Title</Label>
                    <Input
                      id="postTitle"
                      name="postTitle"
                      placeholder="Enter Your Post Title"
                      type="text"
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
                    <Input
                      id="postBody"
                      name="postBody"
                      
                      type="textarea"
                    //   value={data.email}
                    //   onChange={(e) => handleInput(e, "email")}
                    //   invalid={
                    //     error.errors?.response?.data?.email ? true : false
                    //   }
                    />
                    {/* <FormFeedback>
                      {error.errors?.response?.data?.email}
                    </FormFeedback> */}
                  </FormGroup>
                  <FormGroup>
                    <Label for="multiCategory">
                    Select Category
                    </Label>
                    <Input
                    id="multiCategory"
                    name="multiCategory"
                    type="select"
                    defaultValue={0}
                    >

                    <option disabled value={0}>
                      --Select One--
                    </option>
                    {
                      category.map((c) => (
                        <option value={c.categoryId} key={c.categoryId}>
                          {c.categoryTitle}
                        </option>
                      ))
                    }
                                   
                    </Input>
                </FormGroup>

                  <Container className="text-center">
                    <Button color="success">Add Post</Button>
                    <Button color="danger" className="ms-2">
                      Reset Post
                    </Button>
                  </Container>
                </Form>
              </CardBody>
            </Card>
      </Container>
    </>
)
}

export default AddPost;