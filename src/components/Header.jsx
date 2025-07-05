import styles from "./Header.module.css";

const handleShare = () => {
    const tweet = encodeURIComponent(`A local's guide to the best spots in Ahmedabad. \n\nCheck out: https://ahmedabad.wiki`);
    const twitterIntentUrl = `https://twitter.com/intent/tweet?text=${tweet}`;
    window.open(twitterIntentUrl, '_blank');
};

export default function Header() {
    const headerStyle = {
        // backgroundImage: `url('/Riverfront_Ahmedabad_Wikimedia.jpg')`,
                backgroundImage: `url('/test.png')`,

        backgroundSize: 'cover',
        backgroundPosition: 'center 60%',
        backgroundRepeat: 'no-repeat',
    };

    return (
        <div className={styles.maindiv} style={headerStyle}>
            <h1>
                Want to romanticise Ahmedabad on Instagram? This list should help.
            </h1>
            <p>
                Stop getting lost on Google.
            </p>
            <button onClick={handleShare}>
                Share on 𝕏
            </button>
        </div>
    );
}
