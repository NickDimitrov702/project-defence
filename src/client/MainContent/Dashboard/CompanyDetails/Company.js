import style from './Company.style.css'



function Company({
    id,
    name,
    game1,
    game1des,
    game2,
    game2des,
    game3,
    game3des,
    game4,
    game4des,
    imageURL
}) {

    // let gameName = games.map(x => {
    //     return x.gamename;
    // });
    // let gameDescription = games.description;

    return (
        <section className="comapny-wrapper">
            <section className="comapnies">
                <div className="company-logo">
                    <p className="company-logo-wrapper">
                        <a href="/Company-details">{name}</a>
                    </p>
                </div>
                <section className="company-games-portfolio">
                    <ul className='games-list-items'>
                        <li className="games">
                            <h3 className="game-header">{game1}</h3>
                            <p className="description">{game1des}</p>
                        </li>
                    </ul>
                </section>
            </section>
            <section className="comapnies">
                <div className="company-logo">
                    <p className="company-logo-wrapper">
                        <a href="/Company-details">{name}</a>
                    </p>
                </div>
                <section className="company-games-portfolio">
                    <ul className='games-list-items'>
                        <li className="games">
                            <h3 className="game-header">{game2}</h3>
                            <p className="description">{game2des}</p>
                        </li>
                    </ul>
                </section>
            </section>
            <section className="comapnies">
                <div className="company-logo">
                    <p className="company-logo-wrapper">
                        <a href="/Company-details">{name}</a>
                    </p>
                </div>
                <section className="company-games-portfolio">
                    <ul className='games-list-items'>
                        <li className="games">
                            <h3 className="game-header">{game3}</h3>
                            <p className="description">{game3des}</p>
                        </li>
                    </ul>
                </section>
            </section>
            <section className="comapnies">
                <div className="company-logo">
                    <p className="company-logo-wrapper">
                        <a href="/Company-details">{name}</a>
                    </p>
                </div>
                <section className="company-games-portfolio">
                    <ul className='games-list-items'>
                        <li className="games">
                            <h3 className="game-header">{game4}</h3>
                            <p className="description">{game4des}</p>
                        </li>
                    </ul>
                </section>
            </section>
            {/* <section className="comapnies">
                <div className="company-logo">
                    <p className="company-logo-wrapper">
                        <a href="/Company-details">Company Logo</a>
                    </p>
                </div>
                <section className="company-games-portfolio">
                    <ul className='games-list-items'>
                        <li className="games">
                            <h3 className="game-header">The game</h3>
                            <p className="description">This is the game decription. Please use short
                    one, and consistant</p>
                        </li>
                    </ul>
                </section>
            </section>
             <section className="comapnies">
                <div className="company-logo">
                    <p className="company-logo-wrapper">
                        <a href="/Company-details">Company Logo</a>
                    </p>
                </div>
                <section className="company-games-portfolio">
                    <ul className='games-list-items'>
                        <li className="games">
                            <h3 className="game-header">The game</h3>
                            <p className="description">This is the game decription. Please use short
                    one, and consistant</p>
                        </li>
                    </ul>
                </section>
                <section className="company-games-portfolio">
                    <ul className='games-list-items'>
                        <li className="games">
                            <h3 className="game-header">The game</h3>
                            <p className="description">This is the game decription. Please use short
                    one, and consistant</p>
                        </li>
                    </ul>
                </section>
            </section>
            <section className="comapnies">
                <div className="company-logo">
                    <p className="company-logo-wrapper">
                        <a href="/Company-details">Company Logo</a>
                    </p>
                </div>
                <section className="company-games-portfolio">
                    <ul className='games-list-items'>
                        <li className="games">
                            <h3 className="game-header">The game</h3>
                            <p className="description">This is the game decription. Please use short
                    one, and consistant</p>
                        </li>
                    </ul>
                </section>
                <section className="company-games-portfolio">
                    <ul className='games-list-items'>
                        <li className="games">
                            <h3 className="game-header">The game</h3>
                            <p className="description">This is the game decription. Please use short
                    one, and consistant</p>
                        </li>
                    </ul>
                </section>
            </section>
            <section className="comapnies">
                <div className="company-logo">
                    <p className="company-logo-wrapper">
                        <a href="/Company-details">Company Logo</a>
                    </p>
                </div>
                <section className="company-games-portfolio">
                    <ul className='games-list-items'>
                        <li className="games">
                            <h3 className="game-header">The game</h3>
                            <p className="description">This is the game decription. Please use short
                    one, and consistant</p>
                        </li>
                    </ul>
                </section>
                <section className="company-games-portfolio">
                    <ul className='games-list-items'>
                        <li className="games">
                            <h3 className="game-header">The game</h3>
                            <p className="description">This is the game decription. Please use short
                    one, and consistant</p>
                        </li>
                    </ul>
                </section>
            </section>
            <section className="comapnies">
                <div className="company-logo">
                    <p className="company-logo-wrapper">
                        <a href="/Company-details">Company Logo</a>
                    </p>
                </div>
                <section className="company-games-portfolio">
                    <ul className='games-list-items'>
                        <li className="games">
                            <h3 className="game-header">The game</h3>
                            <p className="description">This is the game decription. Please use short
                    one, and consistant</p>
                        </li>
                    </ul>
                </section>
                <section className="company-games-portfolio">
                    <ul className='games-list-items'>
                        <li className="games">
                            <h3 className="game-header">The game</h3>
                            <p className="description">This is the game decription. Please use short
                    one, and consistant</p>
                        </li>
                    </ul>
                </section>
            </section>
            <section className="comapnies">
                <div className="company-logo">
                    <p className="company-logo-wrapper">
                        <a href="/Company-details">Company Logo</a>
                    </p>
                </div>
                <section className="company-games-portfolio">
                    <ul className='games-list-items'>
                        <li className="games">
                            <h3 className="game-header">The game</h3>
                            <p className="description">This is the game decription. Please use short
                    one, and consistant</p>
                        </li>
                    </ul>
                </section>
                <section className="company-games-portfolio">
                    <ul className='games-list-items'>
                        <li className="games">
                            <h3 className="game-header">The game</h3>
                            <p className="description">This is the game decription. Please use short
                    one, and consistant</p>
                        </li>
                    </ul>
                </section>
            </section> */}
        </section>

    );
}

export default Company;