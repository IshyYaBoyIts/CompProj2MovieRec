import { Badge } from "@mui/material";
import { img_300, unavailable } from "../Config/config";
import ContentModal from "../ContentModal/ContentModal";
import './SingleContent.css'

const SingleContent = ({id, poster, title, date, media_type, vote_average,}) => {
    return (
        <ContentModal media_type={media_type} id={id}>
            <Badge badgeContent={vote_average} color={vote_average>6?"primary" : "secondary"} className='badge'/>
            <img className="poster" src={ poster? `${img_300}/${poster}` : unavailable } alt={title}/>
            <b className="title">{title}</b>
            <span className="subTitle">
                {media_type === "tv" ? "tv series" : "movie"}
                <span className="subTitle">{date}</span>
            </span> 
        </ContentModal>
        
    )
}
export default SingleContent;