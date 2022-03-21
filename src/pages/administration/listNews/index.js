import DashboardPageTitle from "../dashboard/components/DashboardPageTitle"
import SideNavBar from "../dashboard/components/SideNavBar"
import UserInfo from "../dashboard/components/UserInfo"
import CategoriesList from "./components/CategoriesList"
import PostsList from "./components/PostsList"
import TagsList from "./components/TagsList"

function ListNews() {
    return (
        <div className="dashboard-page">
            <SideNavBar />
            <div className="dash-board-header">
                <div className="container">
                    <DashboardPageTitle title="Novedades" />
                    <UserInfo />
                </div>
            </div>
            <div className="dash-board-body">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <PostsList />
                        </div>
                        <div className="col-md-6">
                            <CategoriesList />
                        </div>
                        <div className="col-md-6">
                            <TagsList />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListNews