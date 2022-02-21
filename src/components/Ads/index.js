import { partnersList } from '../../config/partners-data'
import AdItem from './components/AdItem'
import './style.scss'

function Ads() {
    return (
        <section className="ads">
            <article className='container'>
                <div className='row'>
                    {partnersList.map(({ imageSource, imageTitle, web, id }) => {
                        return (
                            <AdItem
                                imageSource={imageSource}
                                imageTitle={imageTitle}
                                web={web}
                                key={id}
                            />
                        )
                    })}
                </div>
            </article>
        </section>
    )
}

export default Ads