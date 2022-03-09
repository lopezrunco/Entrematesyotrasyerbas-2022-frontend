import DashboardPageTitle from "./components/DashboardPageTitle"
import SideNavBar from "./components/SideNavBar"
import UserInfo from "./components/UserInfo"

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
                        <h4>content</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard