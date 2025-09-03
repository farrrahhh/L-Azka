"use client"

import { useState } from "react"
import { Heart, ArrowLeft, Sparkles } from "lucide-react"

export default function PostcardFlip() {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-amber-50 to-orange-100 p-4 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-pink-200/30 rounded-full blur-xl"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-amber-200/40 rounded-full blur-lg"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-orange-200/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-40 right-10 w-12 h-12 bg-rose-200/50 rounded-full blur-md"></div>
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-yellow-200/40 rounded-full blur-sm"></div>
        <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-pink-300/30 rounded-full blur-sm"></div>
      </div>

      <div className="absolute top-20 left-1/4 text-amber-300/60">
        <Sparkles className="w-6 h-6 animate-pulse" />
      </div>
      <div className="absolute bottom-32 right-1/4 text-rose-300/60">
        <Sparkles className="w-4 h-4 animate-pulse delay-1000" />
      </div>
      <div className="absolute top-1/2 right-20 text-orange-300/60">
        <Sparkles className="w-5 h-5 animate-pulse delay-500" />
      </div>

      <div className="w-full max-w-sm mx-auto perspective-1000 relative z-10">
        <div
          className={`relative w-full h-[600px] transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
            isFlipped ? "rotate-y-180" : ""
          }`}
          onClick={handleFlip}
        >
          {/* Front of postcard */}
          <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl shadow-2xl overflow-hidden bg-white border-4 border-white">
            <div className="relative w-full h-full">
              <img
                src="/images/azka-postcard.png"
                alt="Postcard with memories and annotations for Azka"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
                <Heart className="w-5 h-5 text-red-500 fill-current animate-pulse" />
              </div>
              <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                Tap to read letter
              </div>
            </div>
          </div>

          {/* Back of postcard - Letter content */}
          <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl shadow-2xl bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 p-6 overflow-y-auto border-4 border-white">
            <div className="h-full flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleFlip()
                  }}
                  className="flex items-center gap-2 text-amber-700 hover:text-amber-900 transition-colors font-sans"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span className="text-sm font-medium">Back to postcard</span>
                </button>
                <Heart className="w-5 h-5 text-red-500 fill-current animate-pulse" />
              </div>

              <div className="flex-1 space-y-4">
                <div className="text-center mb-6">
                  <h1 className="text-2xl font-bold text-amber-900 mb-2 font-serif">For Kak Azka</h1>
                  <p className="text-sm text-amber-600 italic font-serif">By: org yg sering kakak anggep bocil</p>
                  <div className="w-16 h-0.5 bg-amber-400 mx-auto mt-2"></div>
                </div>

                <div className="letter-content text-amber-800 font-serif text-base whitespace-pre-line">
                  <p className="font-semibold text-lg">Halo kak,</p>

                  <p>
                    Sumpah aneh banget rasanya nulis ginian wkwk.  
                    Sorry banget kalau alay.  
                    Ini kayaknya bakal panjang sih, karena aku nggak tahu kapan lagi aku bisa jujur ke kakak.
                  </p>

                  <p>
                    Pertama kali tahu kakak yang Kak Amel undang di group, aku ngerasa wahhh, gila nih orang, kuliah S1 jauh banget T_T. 
                    Dan aku sangat amazed wkwk, like what r'u doing in Indo lol and u still choose intern.  
                    Aku liat jurusan kakak juga keren gitu, mekatronik, like I never heard before.  
                    Aku liat LinkedIn kakak juga kayak, “nih orang lebih aktif dari aku T_T.”  
                    Dari situ aku tertarik buat temenan lebih jauh sama kakak.
                  </p>

                  <p>
                    Pas pertama kali ketemu offline, gila nih orang kayaknya serius banget.  
                    Terus aku pengen deket kan sama kakak, jadi aku ngajak keluar lah buat ngopi.  
                    Owh ternyata ni orang jaim banget cok wkwk.  
                    Dari situ sebenarnya lumayan ilfeel awokawok (*maaf waktu itu aku malah fokus ngerjain tugas kuliah).  
                    Cuma aku tetep tertarik gimana kakak bisa confidence dan keras kepala buat apa yang kakak mau.
                  </p>

                  <p>
                    Terus kita sempet bertengkar juga gara-gara salah paham itu  
                    (yaa walau aku tetep ngerasa u ngeselin banget sih waktu itu).  
                    Salah satu moment yang ngebuat aku jatuh cinta sama kakak pas kita call-an,just 1 night and u never do that again lol.  
                    Idk why, are you boring at me? Tapi dari situ aku ngerasa, “Owh kita nyambung ya.”  
                    Aku suka kakak terbuka sama aku, dari situ aku mulai take feeling at you.
                  </p>

                  <p>
                    Bahkan ketika aku tahu u udah ada cewek, i don’t care sih.  
                    Karena aku emang pengen giving, not taking.  
                    Walau dalam hatiku, aku pengen kamu liat aku juga sih.
                  </p>

                  <p>
                    Aku lumayan disappointed pas kita makan nasi goreng di depan tempat kakak.  
                    Aku nanya, “kok kamu jadi deket sama aku dan ngajak sahabatan?”  
                    Terus lu jawab, “kemarin Kak Rizqi nyuruh aku buat banyakin latihan dan ngobrol sama orang.”  
                    Dari situ aku ngerasa, “wkwk ni orang cuma taking benefit dari gw.”  
                    Dan randomnya, kamu ngajak aku ke tempat kakak — and we did that.  
                    Setelah itu, duniaku ngeliat kakak udah beda.
                  </p>

                    <p>
                    Rasanya jadi makin egois, aku selalu mikirin kamu, apapun itu yang aku lakuin.  
                    Di sisi lain, aku ngerasa very guilty... ngerasa kenapa aku ngelakuin itu sama kamu,  
                    bukannya aku jadi orang jahat ya?  
                    Hingga akhirnya aku kayaknya udah nggak peduli lagi deh sama itu.  
                    Aku jadi semakin egois dan nyoba nyari closure hubungan ini, tapi nggak pernah ketemu.  
                    Setelah itu aku ngerasa kakak malah ngejauhin aku.  
                    Kamu nggak sepeduli itu lagi sama aku.  
                    <b className="text-sm"> Aku selalu berharap kamu ngelihat aku, tapi nyatanya tak pernah.:)</b>
                    </p>

                  <p>
                    Jujur tiap harinya makin sakit wkwk.  
                    Aku nggak tahu apa yang aku rasain lagi, nafsu? cinta? atau cuma keegoisan?  
                    Hingga akhirnya dalam hidupku, aku ngerasain sayang sama orang yang nggak sayang sama aku,  
                    bahkan ngelihat aku pun enggak.  
                    Karena dalam hidupnya, bukan aku yang dia mau.
                  </p>

                  <p>
                    Kadang aku mikir, mungkin emang aku yang terlalu maksa.  
                    Aku selalu pengen deket sama kamu, selalu nyari perhatian kamu,  
                    padahal jelas-jelas kamu nggak pernah ngasih tanda kalau aku punya tempat spesial di hidupmu.  
                    Jujur capek wkwk, tapi anehnya aku masih di sini.
                  </p>

                  <p>
                    When I said, “owh keknya aku bakal bisa move on kalo intern aku di Oppo udah berakhir.” Aku bohong wkwk
                  </p>

                  <p>
                    Seenggaknya, aku pengen kamu tetep terbuka sih sama aku. Dan aku berharap kita bakal tetep temenan sampe kapan pun.
                    I love u.
                  </p>
                  <br />

                  <p className="font-bold text-amber-900 racking-wide text-xs">
                    Makasih ya, kak, udah hadir, even if it’s not the way I wanted.<br />
                    You’ll always be my <span className="italic text-amber-700">“what if.”</span>
                  </p>
                  <br />
                  <br />
                </div>

              </div>
            </div>
          </div>
        </div>

        <p className="text-center mt-6 text-amber-700 text-sm font-medium font-sans">
          Tap the postcard to flip between front and letter
        </p>
      </div>
    </div>
  )
}
