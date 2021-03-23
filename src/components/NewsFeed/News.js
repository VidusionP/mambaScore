import React, { Component } from 'react';
import "./News.scss"
import left from '../../assests/feather-icon/chevron-left.svg';
import right from '../../assests/feather-icon/chevron-right.svg';

class News extends Component {
    render() {
        return(
            <div className="news">
                <h2 className="news__title">News</h2>
                <div className="news__feed">
                <img alt="left" src={left}/>
                    <div className="news__feed--box">
                        <a className="news__feed--link" href={`https://ca.nba.com/news/lebron-james-reveals-motivation-behind-45-point-game-6-performance-boston-celtics-2012-miami-heat/rd2w0o3cm4gv1okkmdeauza2m`}><div className="news__feed--article"><img alt="article"className="news__feed--article--image" src='https://images.daznservices.com/di/library/NBA_Global_CMS_image_storage/fe/95/lebron_109vv9ziewzqa15lh37hnfyefm.jpg?t=10356017&w=180'/>Lebron Reveals Game 6 movitavtion vs. Celtics in 2012<span className="news__feed--article--date">Mar 21, 2020</span></div></a>
                        <a className="news__feed--link" href={'https://ca.nba.com/news/reliving-biggest-takeaways-from-the-toronto-raptors-bounce-back-win-against-orlando-magic-in-game-2/1iintgh0za5fs14i8jvcngtooj'}><div className="news__feed--article"><img alt="article" className="news__feed--article--image" src='https://images.daznservices.com/di/library/NBA_Global_CMS_image_storage/15/ec/gordon-leonard-magic-raptors-ftrjpg_192sja2p9lovt1fjgcdddd1guw.jpg?t=706843018&w=180'/>How Raps Bounced back in Game 2<span className="news__feed--article--date">Mar 21, 2020</span></div></a>
                        <a className="news__feed--link" href={'https://ca.nba.com/videos/legendary-moments-in-history-kobe-bryant-youngest-to-30k/jsy4xitlxvt31rb9c1drdbxal'}><div className="news__feed--article"><img alt="article" className="news__feed--article--image" src='https://images.daznservices.com/javaImages/e5/b8/0,,~18135269,00.jpeg?w=180'/>Legendary Moments in History: Kobe Bryant youngest to 30k<span className="news__feed--article--date">Mar 21, 2020</span></div></a>
                        <a className="news__feed--link" href={'https://ca.nba.com/news/15-games-from-the-2019-20-season-to-rewatch-during-nba-hiatus-free-nba-league-pass/79gb7fuavm7o177c0siw6eep2'}><div className="news__feed--article"><img alt="article" className="news__feed--article--image" src='https://images.daznservices.com/di/library/NBA_Global_CMS_image_storage/46/86/beat-league-pass-games-2019-20_1fz5gzcbddg4e1hktnbw06ywjn.jpeg?t=-191858528&w=180'/>15 must-rewatch games from 2019-2020<span className="news__feed--article--date">Mar 19, 2020</span></div></a>
                        <a className="news__feed--link" href={'https://ca.nba.com/news/a-letter-to-nba-fans-nba-commisioner-adam-silver-season-suspended-coronavirus/jbml5yzmpe9m1u3estgy0cimf'}><div className="news__feed--article"><img alt="article" className="news__feed--article--image" src='https://images.daznservices.com/di/library/NBA_Global_CMS_image_storage/1c/9e/silver_aquy70m6f0t619s1ropk77rcd.jpg?t=-777692496&w=180'/>A Letter to NBA Fans - Adam Silver<span className="news__feed--article--date">Mar 13, 2020</span></div></a>
                    </div>
                    <img alt="right"src={right}/>
                </div>
            </div>
        )
    }
}

export default News;