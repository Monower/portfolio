'use client';
import { Player } from "@lottiefiles/react-lottie-player";

const HeroAnimation = () => { 
    return (
        <div className="w-full">
            <Player src="/animation/hero_animation.json" autoplay loop />
        </div>
    )
}

export default HeroAnimation;