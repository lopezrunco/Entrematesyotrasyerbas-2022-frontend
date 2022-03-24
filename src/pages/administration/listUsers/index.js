import DashboardPageTitle from "../components/DashboardPageTitle"
import SideNavBar from "../components/SideNavBar"
import UserInfo from "../components/UserInfo"
import UsersList from "./components/UsersList"

function listUsers() {
    return (
        <div className="dashboard-page">
            <SideNavBar />
            <div className="dash-board-header">
                <div className="container">
                    <DashboardPageTitle title='Usuarios' />
                    <UserInfo />
                </div>
            </div>
            <div className="dash-board-body">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <UsersList />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default listUsers