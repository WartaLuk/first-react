import PageTitle from "../PageTitle/PageTitle";
const today = new Date();
const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
const Favorite = () => {
    return (
        <div>
            <PageTitle>
                Favorite
            </PageTitle>
            {time}
        </div>
    );
};
export default Favorite;