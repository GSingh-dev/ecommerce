import "./category-item.styles.scss"


function CategoryItem(props) {
    const { title, img } = props.category;
    return (
        <div className="category-container">

            <div
                className="background-image"
                style={
                    {
                        backgroundImage: `url(${img})`
                    }
                }
            >

            </div>

            <div className="category-body-container">

                <h2>{title}</h2>
                <p>Shop Now</p>

            </div>
        </div>
    );
}

export default CategoryItem;
