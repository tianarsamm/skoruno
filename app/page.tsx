"use client";

import { useState } from "react";

export default function Home() {
  const [player1, setPlayer1] = useState({
    name: "Pemain 1",
    score: 0,
  });
  const [player2, setPlayer2] = useState({
    name: "Pemain 2",
    score: 0,
  });

  const increaseScore = (player: "player1" | "player2") => {
    if (player === "player1" && player1.score < 30) {
      setPlayer1({ ...player1, score: player1.score + 1 });
    } else if (player === "player2" && player2.score < 30) {
      setPlayer2({ ...player2, score: player2.score + 1 });
    }
  };

  const decreaseScore = (player: "player1" | "player2") => {
    if (player === "player1" && player1.score > 0) {
      setPlayer1({ ...player1, score: player1.score - 1 });
    } else if (player === "player2" && player2.score > 0) {
      setPlayer2({ ...player2, score: player2.score - 1 });
    }
  };

  const resetScores = () => {
    setPlayer1({ ...player1, score: 0 });
    setPlayer2({ ...player2, score: 0 });
  };

  return (
    <div 
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: 'url(/bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay Blur */}
      <div className="absolute inset-0 backdrop-blur-1xl bg-white/70"></div>
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-6xl">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-center text-[#2d3436] mb-12 tracking-tight">
            PAPAN SKOR
          </h1>

          {/* Score Board */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-stretch">
            {/* Player 1 - Left */}
            <div className="flex-1 bg-white rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.15),0_8px_20px_rgba(0,0,0,0.1)] p-8 md:p-10 border border-[#eaeaea] overflow-hidden relative">
              {/* Decorative accent bar */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-[#00b894]"></div>
              
              <div className="flex flex-col items-center gap-6">
                {/* Player Name Input */}
                <input
                  type="text"
                  value={player1.name}
                  onChange={(e) => setPlayer1({ ...player1, name: e.target.value })}
                  className="text-xl md:text-2xl font-semibold text-center bg-transparent border-b-2 border-[#dfe6e9] focus:border-[#00b894] outline-none py-2 w-full text-[#2d3436] placeholder-[#b2bec3] transition-colors"
                  placeholder="Nama Pemain"
                />

                {/* Score Display */}
                <div className="relative py-2">
                  <span className="text-8xl md:text-9xl font-bold text-[#00b894] tabular-nums tracking-tight">
                    {player1.score}
                  </span>
                </div>

                {/* Score Controls */}
                <div className="flex gap-4">
                  <button
                    onClick={() => decreaseScore("player1")}
                    disabled={player1.score === 0}
                    className="w-14 h-14 rounded-2xl bg-[#f1f2f6] text-[#00b894] text-2xl hover:bg-[#dfe6e9] disabled:opacity-40 disabled:cursor-not-allowed transition-all active:scale-95 flex items-center justify-center"
                    aria-label="Kurangi skor"
                  >
                    ▼
                  </button>
                  <button
                    onClick={() => increaseScore("player1")}
                    disabled={player1.score === 30}
                    className="w-14 h-14 rounded-2xl bg-[#00b894] text-white text-2xl hover:bg-[#00a884] disabled:opacity-40 disabled:cursor-not-allowed transition-all active:scale-95 flex items-center justify-center shadow-lg shadow-green-200"
                    aria-label="Tambah skor"
                  >
                    ▲
                  </button>
                </div>

                {/* Score Label */}
                <span className="text-xs font-semibold text-[#b2bec3] uppercase tracking-widest">
                  Skor (0-30)
                </span>
              </div>
            </div>

            {/* Divider - Center */}
            <div className="flex md:flex-col items-center justify-center gap-3 py-4">
              <div className="w-2 h-2 md:w-full md:h-2 bg-[#dfe6e9] rounded-full"></div>
              <div className="text-2xl font-bold text-[#b2bec3]">VS</div>
              <div className="w-2 h-2 md:w-full md:h-2 bg-[#dfe6e9] rounded-full"></div>
            </div>

            {/* Player 2 - Right */}
            <div className="flex-1 bg-white rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.15),0_8px_20px_rgba(0,0,0,0.1)] p-8 md:p-10 border border-[#eaeaea] overflow-hidden relative">
              {/* Decorative accent bar */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-[#e17055]"></div>
              
              <div className="flex flex-col items-center gap-6">
                {/* Player Name Input */}
                <input
                  type="text"
                  value={player2.name}
                  onChange={(e) => setPlayer2({ ...player2, name: e.target.value })}
                  className="text-xl md:text-2xl font-semibold text-center bg-transparent border-b-2 border-[#dfe6e9] focus:border-[#e17055] outline-none py-2 w-full text-[#2d3436] placeholder-[#b2bec3] transition-colors"
                  placeholder="Nama Pemain"
                />

                {/* Score Display */}
                <div className="relative py-2">
                  <span className="text-8xl md:text-9xl font-bold text-[#e17055] tabular-nums tracking-tight">
                    {player2.score}
                  </span>
                </div>

                {/* Score Controls */}
                <div className="flex gap-4">
                  <button
                    onClick={() => decreaseScore("player2")}
                    disabled={player2.score === 0}
                    className="w-14 h-14 rounded-2xl bg-[#f1f2f6] text-[#e17055] text-2xl hover:bg-[#dfe6e9] disabled:opacity-40 disabled:cursor-not-allowed transition-all active:scale-95 flex items-center justify-center"
                    aria-label="Kurangi skor"
                  >
                    ▼
                  </button>
                  <button
                    onClick={() => increaseScore("player2")}
                    disabled={player2.score === 30}
                    className="w-14 h-14 rounded-2xl bg-[#e17055] text-white text-2xl hover:bg-[#d65c40] disabled:opacity-40 disabled:cursor-not-allowed transition-all active:scale-95 flex items-center justify-center shadow-lg shadow-orange-200"
                    aria-label="Tambah skor"
                  >
                    ▲
                  </button>
                </div>

                {/* Score Label */}
                <span className="text-xs font-semibold text-[#b2bec3] uppercase tracking-widest">
                  Skor (0-30)
                </span>
              </div>
            </div>
          </div>

          {/* Reset Button */}
          <div className="flex justify-center mt-10">
            <button
              onClick={resetScores}
              className="px-10 py-3.5 rounded-full bg-white text-[#636e72] font-medium hover:text-[#2d3436] hover:bg-[#f8f9fa] transition-all active:scale-95 border border-[#e0e0e0] shadow-sm"
            >
              Reset Skor
            </button>
          </div>

          {/* Footer */}
          <p className="text-center text-[#b2bec3] mt-10 text-sm font-medium">
            Klik panah untuk menambah atau mengurangi skor
          </p>
        </div>
      </div>
    </div>
  );
}

