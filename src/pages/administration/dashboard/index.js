import DashboardPageTitle from "../components/DashboardPageTitle"
import SideNavBar from "../components/SideNavBar"
import UserInfo from "../components/UserInfo"
import HelloAdmin from "./components/HelloAdmin"
import PostsPreview from "./components/PostsPreview"
import UsersPreview from "./components/UsersPreview"
import CategoriesPreview from "./components/CategoriesPreview"
import TagsPreview from "./components/TagsPreview"

import './style.scss'

function Dashboard() {
    return (
        <div className="dashboard-page">
            <SideNavBar />
            <div className="dash-board-header">
                <div className="container">
                    <DashboardPageTitle title="Administración" />
                    <UserInfo />
                </div>
            </div>
            <div className="dash-board-body">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <HelloAdmin />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-3">
                            <PostsPreview />
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <UsersPreview />
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <CategoriesPreview />
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <TagsPreview />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard