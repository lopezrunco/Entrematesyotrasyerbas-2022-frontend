import { magazineList } from '../../config/magazine-data'

import PageTitle from '../../components/PageTitle'
import MagazineItem from './components/MagazineItem'

function Magazine() {
    return (
        <>
            <PageTitle
                title='Revista'
                text='Todos temas que le interesan, notas y la buena información de siempre, ahora en papel'
                imgClassName='magazine'
            />
            <main className="magazine-page">
                <section className="container">
                    <article className="row">
                        {magazineList.map((({ imageSource, imageTitle, id }) => {
                            return (
                                // <h1>{imageSource}</h1>
                                <MagazineItem
                                    key={id}
                                    imageSource={imageSource}
                                    imageTitle={imageTitle}
                                />
                            )
                        }))}
                    </article>
                </section>
            </main>
        </>
    )
}

export default Magazine