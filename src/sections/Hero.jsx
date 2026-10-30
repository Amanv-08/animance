
import { Link } from "react-router-dom";
import { Play } from "lucide-react";

const Hero = () => {
    return (
        <section className="relative w-full min-h-screen flex items-center overflow-hidden">

            {/* Background Image */}
            <img
            loading="eager"
                src="/images/anime.jpg"
                alt="Featured Anime"
                className="absolute inset-0 w-full h-full object-cover object-center"
            />

            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-black via-black/70 to-transparent"></div>

            {/* Bottom Gradient */}
            <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent"></div>

            {/* Content */}
            <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-32 pb-16">

                <div className="max-w-2xl">

                    <p className="text-green-400 font-semibold tracking-widest text-sm mb-4">
                        YOUR NEXT ANIME ADVENTURE
                    </p>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                        Discover Your Next
                        <span className="text-green-400"> Favourite Anime</span>
                    </h1>

                    <p className="text-gray-300 mt-5 text-base md:text-lg leading-relaxed max-w-xl">
                        Explore trending anime, discover hidden gems and find your next obsession.
                    </p>

                    <Link to="/explore" className="inline-flex items-center gap-2 mt-8 px-8 py-4 rounded-xl bg-green-400 text-black font-semibold hover:bg-green-300 transition-all active:scale-95">
                        <Play size={20} aria-hidden="true" />
                        Explore Anime
                    </Link>

                </div>
            </div>

        </section>
    );
};

export default Hero;