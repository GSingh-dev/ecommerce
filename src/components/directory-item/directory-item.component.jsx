import { useNavigate } from "react-router-dom";

import { BackgroundImage, Body, DirectoryItemContainer } from "./directory-item.styles";
// import { use } from "react";

const DirectoryItem = ({category})=>{
    const { title, img, route } = category;
    const navigate = useNavigate();
    const onNavigateHandler = ()=>navigate(route);
    return (
        <DirectoryItemContainer onClick={onNavigateHandler}>

            <BackgroundImage img={img} />
            <Body>

                <h2>{title}</h2>
                <p>Shop Now</p>

            </Body>

        </DirectoryItemContainer>
    );
}

export default DirectoryItem;
