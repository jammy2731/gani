import React, { useRef, useEffect } from "react";
import SequentialLottie from "./Lottie";
import AnimatedComponent from "./Test";
import { motion } from "framer-motion";

function App() {
    const audioRef = useRef(null);

    useEffect(() => {
        const playAudio = () => {
            if (audioRef.current) {
                audioRef.current.volume = 0.5; // 볼륨 조절 (0.0 ~ 1.0)
                audioRef.current.play().catch((error) => {
                    console.log("자동 재생이 차단됨:", error);
                });
            }
        };

        playAudio();
    }, []);

    return (
        <div className="w-full h-screen flex items-center justify-center bg-gray-100 p-4 overflow-hidden">
            {/* 배경을 위한 div */}
            <div className="fixed-bg"></div>

            {/* 배경 음악 (숨김) */}
            <audio ref={audioRef} src="/music.mp3" loop />

            {/* 스크롤 가능한 컨텐츠 박스 */}
            <div
                className="rounded-2xl shadow-md w-full max-w-sm p-6 flex flex-col items-center relative h-96 overflow-y-auto">
                <h1
                    style={{
                        display: "block",
                        margin: "10px auto",
                        whiteSpace: "nowrap", // 🔥 줄바꿈 방지
                        textAlign: "center",  // 🔥 텍스트 가운데 정렬
                        fontSize: "30px",      // 🔥 글씨 크기 조절
                        fontWeight: "bold",    // 🔥 글씨 볼드
                    }}
                >
                    ❤️가니의 생일을 축하합니다 ❤️
                </h1>

                <SequentialLottie/>
            </div>
        </div>
    );
}

export default App;
