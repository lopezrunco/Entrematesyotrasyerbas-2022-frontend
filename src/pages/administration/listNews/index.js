import DashboardPageTitle from "../dashboard/components/DashboardPageTitle"
import SideNavBar from "../dashboard/components/SideNavBar"
import UserInfo from "../dashboard/components/UserInfo"
import PostsList from "./components/PostsList"

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
                            <p>Categories</p>
                        </div>
                        <div className="col-md-6">
                            <p>Tags</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListNews