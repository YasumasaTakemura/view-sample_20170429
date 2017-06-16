/**
 * Created by YasumasaTakemura on 2017/06/13.
 */
import React, {Component} from 'react';
import {ConsoleContainer as Console}  from '../../componets/chat_like_console/console'
import {GetAppData} from '../../utils/app_data'
import {Title, Buy, SS, Details, UserReview, PaymentModal} from '../index';
import './app_details.css'
import {w, h} from '../../componets/shared_components/shared_components'

const appData = new GetAppData();

export default class AppDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            app_id: this.props.match.params.app_id,
            consoleWidth: 300,
            payment: false,
            app: {
                app_id: 0,
                title: 'teste test test',
                developer: 'test man.inc',
                description: `「 たとえ、どんな結末を迎えようとも…… 」

スクウェア・エニックス と ポケラボが贈る最新作！
　　SINoALICE ーそれは最悪の「物語」ー

------------------------------------------------------------------------------------------------------
ー少女達が紡ぎ出すは「最悪の物語」ー
------------------------------------------------------------------------------------------------------
上も、下も、右も、左も、ない。
あらゆる場所は本で埋め尽くされている。
この世界の名は「ライブラリ」
物語と言葉が支配する空間。

悲鳴が聞こえる。
嗚咽が聞こえる。
嘲笑が聞こえる。
咆哮が聞こえる。

全ては物語の登場人物の声。
人ならざるモノ達の呪いの言葉。

彼等の願いはただ一つ。
「作者を復活させる」
その為には、他のキャラクター達を
全て滅ぼさなくてはならない。

たとえ、どんな結末を迎えようとも……

------------------------------------------------------------------------------------------------------
豪華声優陣が演じる個性的なキャラクター
------------------------------------------------------------------------------------------------------
【束縛】アリス：M・A・O
【正義】スノウホワイト：上田麗奈
【虚妄】ヘンゼル・グレーテル：内田真礼
【依存】ピノキオ：三瓶由布子
【被虐】かぐや姫：伊藤静
【睡眠】いばら姫：本渡楓
【暴力】赤ずきん：今村彩夏
【卑劣】シンデレラ：喜多村英梨

------------------------------------------------------------------------------------------------------
重厚なストーリー×スマホゲームでは異例の音楽が生み出す世界観
------------------------------------------------------------------------------------------------------
ヨコオタロウ原作のストーリー×岡部啓一・MONACAが手掛ける音楽が、
シノアリスの独創的で濃密な世界観を生み出す。
※ヘッドホン、イヤホン装着でのプレイを推奨。

▼交錯するストーリー
クエストは好きなキャラクターの物語をプレイできるオムニバス形式。
ゲームを進めるとそれぞれのキャラクターの物語が交わり、徐々に物語の全貌が明らかに。

▼ウェポンストーリー
ゲームに登場する150種類以上の武器にも、それぞれにまつわる物語を収録。
手に入れた武器を育成することで物語は解放される。

▼ジョブストーリー
ゲームに登場するキャラクターは様々なジョブに姿を変える。
ジョブストーリーでは、キャラクターたちの内面が語られる。
解放したジョブを育成することで物語は解放される。

------------------------------------------------------------------------------------------------------
リアルタイムバトル/オートモード
------------------------------------------------------------------------------------------------------
▼リアルタイムバトル
戦闘はリアルタイムで進行。
物語の途中で出会うキャラクター達と共に、
助け合い、連携して、立ち塞がる敵を倒していく。

出会った仲間と一緒に共闘し、マルチプレイで強敵に挑め。

▼オートモード搭載
自動で敵を攻撃する、オートモードも搭載。
ゲームが苦手な方でも簡単手軽にプレイが可能。`,
                category: 'excel',
                target: 'who need to short cut excel typing ',
                kw: ['test', 'demo'],
                ss: [
                    'https://lh3.googleusercontent.com/Y_JH-MtXjLkdEjUW9Z-maQZVKvJlRCJ6FKGphKpRqrl89VjHcC_O7twj8-m6TdDfP0vphL7_uA=s1280-h800-e365-rw',
                    'https://lh5.googleusercontent.com/innjn-SFJ1ZI9LOA-oefEdE3FjM6T8jwipRRnJxaTJQL2VbNLeFyKUFl51gcf9y9ZuA-20y204c=s1280-h800-e365-rw',
                    'https://lh3.googleusercontent.com/Y_JH-MtXjLkdEjUW9Z-maQZVKvJlRCJ6FKGphKpRqrl89VjHcC_O7twj8-m6TdDfP0vphL7_uA=s1280-h800-e365-rw',
                    'https://lh6.googleusercontent.com/hkus8xpByYppC3Pgz4JYfDmmpxuWbP4deE8jJj1EAjSKf3XKpIR96rpMgiCubMHM53GNl-jx=s1280-h800-e365-rw',
                    'https://lh3.googleusercontent.com/Y_JH-MtXjLkdEjUW9Z-maQZVKvJlRCJ6FKGphKpRqrl89VjHcC_O7twj8-m6TdDfP0vphL7_uA=s1280-h800-e365-rw'
                ],
                reviews: [
                    {
                        user_id: 2,
                        username: 'test_man',
                        title: 'this is a good app but something is not working',
                        stars: 4.0,
                        review: 'this app is sooo good!',
                        timestamp: '2017/06/12'
                    }, {
                        user_id: 3,
                        title: 'rev title',
                        username: 'takemura',
                        stars: 4.0,
                        review: 'この世界の名は「ライブラリ」 物語と言葉が支配する空間。 悲鳴が聞こえる。 嗚咽が聞こえる。 嘲笑が聞こえる。 咆哮が聞こえる。!',
                        timestamp: '2017/06/13'
                    }, {
                        user_id: 4,
                        title: 'rev title',
                        username: 'michele',
                        stars: 4.0,
                        review: 'this app is sooo good!',
                        timestamp: '2017/06/14'
                    }, {
                        user_id: 5,
                        title: 'rev title',
                        username: '$$$$',
                        stars: 2.0,
                        review: 'this app is sooo good!',
                        timestamp: '2017/06/13'
                    }, {
                        user_id: 6,
                        title: 'rev title',
                        username: 'mr.CC',
                        stars: 3.0,
                        review: 'この世界の名は「ライブラリ」 物語と言葉が支配する空間。 悲鳴が聞こえる。 嗚咽が聞こえる。 嘲笑が聞こえる。 咆哮が聞こえる。!',
                        timestamp: '2017/06/14'
                    }, {
                        user_id: 3,
                        title: 'rev title',
                        username: 'takemura',
                        stars: 4.0,
                        review: 'this app is sooo good!',
                        timestamp: '2017/06/13'
                    }, {
                        user_id: 4,
                        title: 'rev title',
                        username: 'michele',
                        stars: 4.0,
                        review: 'この世界の名は「ライブラリ」 物語と言葉が支配する空間。 悲鳴が聞こえる。 嗚咽が聞こえる。 嘲笑が聞こえる。 咆哮が聞こえる。!',
                        timestamp: '2017/06/14'
                    }, {
                        user_id: 5,
                        title: 'rev title',
                        username: '$$$$',
                        stars: 2.0,
                        review: 'この世界の名は「ライブラリ」 物語と言葉が支配する空間。 悲鳴が聞こえる。 嗚咽が聞こえる。 嘲笑が聞こえる。 咆哮が聞こえる。!',
                        timestamp: '2017/06/13'
                    }, {
                        user_id: 6,
                        title: 'rev title',
                        username: 'mr.CC',
                        stars: 3.0,
                        review: 'this app is sooo good!',
                        timestamp: '2017/06/14'
                    }, {
                        user_id: 3,
                        title: 'rev title',
                        username: 'takemura',
                        stars: 4.0,
                        review: 'this app is sooo good!',
                        timestamp: '2017/06/13'
                    }, {
                        user_id: 4,
                        title: 'rev title',
                        username: 'michele',
                        stars: 4.0,
                        review: 'this app is sooo good!',
                        timestamp: '2017/06/14'
                    }, {
                        user_id: 5,
                        title: 'rev title',
                        username: '$$$$',
                        stars: 2.0,
                        review: 'this app is sooo good!',
                        timestamp: '2017/06/13'
                    }, {
                        user_id: 6,
                        title: 'rev title',
                        username: 'mr.CC',
                        stars: 3.0,
                        review: 'this app is sooo good!',
                        timestamp: '2017/06/14'
                    },
                ],
                price: {
                    currency: 'usd',
                    transferFee: true,
                    spot: 10.0,
                    subscription: true,
                    monthly: 5,
                    discount: 0.1,
                    refund: false,
                    onSale: true,
                    trial: true,
                    campaign: {
                        condition: 'for now',
                        from: '2017/06/10',
                        to: '2017/06/30',
                        spot: 10.0,
                        subscription: true,
                        monthly: 0,
                        discount: 0.2,
                        refund: false,
                    },
                },
                additional: '',
                users: 1543,
                updated: '2017/06/12',
                timestamp: '2017/06/12'
            }
        }
    }

    componentWillMount() {
        appData.getAppData(this.state.app_id)
    }



    countStars(app) {
        let sum = 0;
        for (let review of app.reviews) {
            sum += review.stars
        }
        return sum / app.reviews.length;
    }

    goPayment() {
        this.setState({
            payment: !this.state.payment
        })
    }


    render() {
        const {app, consoleWidth, payment} = this.state;

        const size = {
            width: `${w * 0.7}`
        }

        const styles = {
            rootContainer: {
                overflowX: 'hidden',
                overflowY: 'hidden',
            },
            buy: {
                display: 'flex',
                borderRadius: 10,
                height: 50,
                width: 100,
                alignItems: 'center',
                justifyContent: 'center',
                position: 'fixed',
                right: 50,
                top: 15,
                zIndex: 90,

            },
            details: {
                display: 'flex',
            },
            space: {
                marginBottom: 70
            },
            payment: {

                backgroundColor: 'white',
                width: 700,
                height: 500,
                borderRadius: 10,
                zIndex: 120,
                margin: '0 auto',

            }
        };

        return <div style={styles.rootContainer}>


            <Console/>

            <PaymentModal app={app} payment={payment} styles={styles.payment}/>

            <div onClick={()=>this.goPayment()} style={styles.buy}>
                <Buy/>
            </div>

            <Title app={app} getAppIcon={appData.getAppIcon.bind(this)} stars={this.countStars(app)}/>

            <div style={styles.details}>
                <SS app={app} width={size.width} height={`${h * 0.6}`}/>
                <Details app={app} height={`${h * 0.6}`}/>
            </div>

            <div style={styles.space}/>

            <UserReview app={app} width={size.width} height={`${h * 0.5}`}/>

        </div>
    }

}