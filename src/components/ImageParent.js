import React,{useState} from "react";
import { Form, Image } from "react-bootstrap";

const ImageParent = () => {
const [uploadImg,setUploadImg] = useState('')

const changeHandler =(e)=> {
    console.log(e.target.files[0])
    setUploadImg(URL.createObjectURL(e.target.files[0]))
}

    return(
        <Form>
            <Form.Control type="file" width="50%" onChange={changeHandler}></Form.Control>
            <br/>
            <Image src={uploadImg} width="20%" height="130px"/>            
        </Form>
    )

}

export default ImageParent