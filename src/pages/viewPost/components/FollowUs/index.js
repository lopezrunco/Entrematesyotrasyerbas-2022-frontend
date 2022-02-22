import { Facebook, Youtube } from "react-bootstrap-icons"

import './style.scss'

function FollowUs() {
    return (
        <div className="follow-us">
            <h4>Síganos en</h4>
            <a href="https://es-la.facebook.com/Entrematesyotrasyerbas/" target="_blank" rel="noreferrer" className="item">
                <Facebook />
                <h6>Facebook</h6>
            </a>
            <a href="https://www.youtube.com/channel/UCn8eMAereXltvTtj-OLKEkQ" target="_blank" rel="noreferrer" className="item">
                <Youtube />
                <h6>YouTube</h6>
            </a>
        </div>
    )
}

export default FollowUs