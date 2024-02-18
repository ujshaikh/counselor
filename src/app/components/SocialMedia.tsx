export default function SocialMedia() {
    return (
        <div className="social-media">
            <p className="mb-0 d-flex">
                <a href={process.env.NEXT_PUBLIC_FACEBOOK_PROFILE} className="d-flex align-items-center justify-content-center"><span
                    className="fa-brands fa-facebook-f"><i className="sr-only">Facebook</i></span></a>
                <a href={process.env.NEXT_PUBLIC_TWITTER_PROFILE} className="d-flex align-items-center justify-content-center"><span
                    className="fa-brands fa-twitter"><i className="sr-only">Twitter</i></span></a>
                <a href={process.env.NEXT_PUBLIC_INSTAGRAM_PROFILE} className="d-flex align-items-center justify-content-center"><span
                    className="fa-brands fa-instagram"><i className="sr-only">Instagram</i></span></a>
                <a href={process.env.NEXT_PUBLIC_DRIBBLE_PROFILE} className="d-flex align-items-center justify-content-center"><span
                    className="fa-brands fa-dribbble"><i className="sr-only">Dribble</i></span></a>
            </p>
        </div>
    )
}