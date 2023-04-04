import{useState} from "react"
import {Content,Title,PublishButton,Counter} from "./index"

const Article = (props) =>{
    const [isPublished,setIsPublished] = useState(false);
    const publishArticle = () =>{
        setIsPublished(true);
    }

    return(
        <div>
            <Title title={props.title}/>
            <Content content={props.content}/>
            <PublishButton isPublished ={isPublished} onClick={publishArticle}/>
            <Counter/>
        </div>
    );
};

export default Article;