import { useEffect, useRef } from "react";

function BackgroundMusic() {
    const audioRef = useRef(null);

    useEffect(() => {
        const playAudio = () => {
            if (audioRef.current) {
                audioRef.current.volume = 0.5; // 볼륨 조절 (0.0 ~ 1.0)
                audioRef.current.play().catch(error => {
                    console.log("자동 재생이 차단됨:", error);
                });
            }
        };

        playAudio();
    }, []);

    return (
        <audio ref={audioRef} src="/music.mp3" loop />
    );
}

export default BackgroundMusic;
