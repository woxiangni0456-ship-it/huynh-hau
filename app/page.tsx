"use client";
import {useEffect,useRef,useState} from "react";
import {Music2,VolumeX,MapPin,Copy,CalendarDays,X,Heart} from "lucide-react";
const photos=["https://lh3.googleusercontent.com/d/19LcK506feVhbMWCNC0ygk8QaA4FcqK-6","https://lh3.googleusercontent.com/d/18kYaR2SN04aYwIvPBe8xWyuaab7yZvJl","https://lh3.googleusercontent.com/d/1DI8BSXJufJfd3xspFq95cE7FdGg4x1Dj","https://lh3.googleusercontent.com/d/1I0rtL_l_ob0E0ORiFkWW02cOj7ivAZzK","https://lh3.googleusercontent.com/d/12d0PfmQyKub3J2yAagYHytczGEJFKFO6","https://lh3.googleusercontent.com/d/1TmNclwswru36ZDSWCTTJM9W9o1BcKStL","https://lh3.googleusercontent.com/d/1w20CoHfka_pNk5z9Gvr2Mopa__Lsg2RU","https://lh3.googleusercontent.com/d/1j2d9xxgW6QW7mFA9-rIa1nidQ4eMJf4A"];
const audio="https://files.catbox.moe/mqbr5o.mp3";

function FallingFlowers() {
  return (
    <div className="falling-flowers" aria-hidden="true">
      {Array.from({ length: 18 }, (_, i) => (
        <span
          key={i}
          className={`falling-petal petal-${(i % 9) + 1}`}
        />
      ))}
    </div>
  );
}


function Gift({
  title,
  name,
  bank,
  account,
  qr,
}: {
  title: string;
  name: string;
  bank: string;
  account: string;
  qr: string;
}) {
  const [copied, setCopied] = useState(false);

  const copyAccount = async () => {
    try {
      await navigator.clipboard.writeText(account);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      alert("Không thể sao chép số tài khoản!");
    }
  };

  return (
    <div className="card text-center">
      <p className="kicker">{title}</p>
      <h3 className="serif text-3xl mt-2">{name}</h3>

      <div className="my-5 flex justify-center">
        <div className="bg-white p-3 rounded-xl border border-stone-200">
          <img
            src={qr}
            alt={`QR ${title}`}
            className="w-52 h-52 object-contain"
          />
        </div>
      </div>

      <p className="text-sm text-stone-500">{bank}</p>

      <div className="flex items-center justify-center gap-2 mt-3">
        <button
          onClick={copyAccount}
          className="inline-flex items-center gap-2 text-sm font-medium tracking-wider hover:text-rose-400 transition"
          title="Sao chép số tài khoản"
        >
          {account}
          {copied ? (
            <span className="text-green-600 text-xs">✓</span>
          ) : (
            <Copy size={15} className="text-stone-400" />
          )}
        </button>
      </div>

      <p className="text-xs text-stone-400 mt-2">
        {copied ? "Đã sao chép số tài khoản!" : "Copy"}
      </p>
    </div>
  );
}

export default function Home(){const [open,setOpen]=useState(false),[playing,setPlaying]=useState(false),[photo,setPhoto]=useState<number|null>(null),[left,setLeft]=useState("");const audioRef=useRef<HTMLAudioElement>(null);useEffect(()=>{const tick=()=>{const d=new Date("2026-11-29T07:30:00+07:00").getTime()-Date.now();setLeft(d<=0?"Chúc mừng ngày vui!":`${Math.floor(d/86400000)} ngày · ${Math.floor(d/3600000)%24} giờ · ${Math.floor(d/60000)%60} phút · ${Math.floor(d/1000)%60} giây`)};tick();const t=setInterval(tick,1000);return()=>clearInterval(t)},[]);async function start(){setOpen(true);setTimeout(async()=>{try{await audioRef.current?.play();setPlaying(true)}catch{}},1000)}async function music(){if(!audioRef.current)return;if(playing){audioRef.current.pause();setPlaying(false)}else{try{await audioRef.current.play();setPlaying(true)}catch{}}}
return <>
  <FallingFlowers />
  <audio ref={audioRef} src={audio} loop preload="none"/>{!open?
  <main className="opening-screen">
    <p className="opening-label">THE WEDDING OF</p>

    <div className="opening-photo">
      <img
        src="https://lh3.googleusercontent.com/d/1I0rtL_l_ob0E0ORiFkWW02cOj7ivAZzK"
        alt="Ảnh cưới Huỳnh và Hậu"
      />
    </div>

    <div className="opening-names">
      Huỳnh <span>&</span> Hậu
    </div>

    <p className="opening-date">29 · 11 · 2026</p>

    <button className="opening-button" onClick={start}>
      MỞ THIỆP <span>♡</span>
    </button>

    <p className="opening-footer">
      A day to remember, a love forever
    </p>

    <span className="opening-flower flower-one">❀</span>
    <span className="opening-flower flower-two">❀</span>
  </main>:<main>
<section id="hero" className="wedding-hero">
  <img
    src="https://lh3.googleusercontent.com/d/1I0rtL_l_ob0E0ORiFkWW02cOj7ivAZzK"
    alt="Vũ Huỳnh và Thanh Hậu"
    className="wedding-hero-image"
  />

  <div className="wedding-hero-overlay" />

  <div className="wedding-hero-content">
    <p className="hero-subtitle">
      WE ARE GETTING MARRIED
    </p>

    <h1 className="hero-names">
      Huỳnh <span>&</span> Hậu
    </h1>

    <p className="hero-date">
      29 NOVEMBER 2026
    </p>

    <a href="#invitation" className="hero-scroll">
      SCROLL TO OUR STORY
      <span>↓</span>
    </a>
  </div>

  <div className="hero-side-text">
    HUỲNH & HẬU · 2026
  </div>
</section>

<section className="section text-center max-w-3xl mx-auto"><p className="kicker">Save the date</p><div className="rule"/><h2 className="heading">Một ngày thật đặc biệt</h2><p className="text-sm leading-8 text-stone-600 mt-7">Sau hành trình yêu thương, chúng mình rất vui khi được cùng nhau bước sang một chặng đường mới. Trân trọng kính mời bạn đến chung vui và lưu giữ những khoảnh khắc đáng nhớ cùng gia đình chúng mình.</p><p className="serif text-4xl mt-8">29 . 11 . 2026</p></section>
<section className="section bg-[#f1ece6] text-center"><p className="kicker">The big day</p><div className="rule"/><h2 className="heading">Đếm ngược ngày vui</h2><p className="serif text-2xl mt-8">{left}</p><a className="inline-flex items-center gap-2 border rounded-full px-5 py-3 text-xs mt-7" target="_blank" href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Vu%20Huynh%20%26%20Thanh%20Hau&dates=20261129T003000Z/20261129T033000Z"><CalendarDays size={15}/> LƯU NGÀY CƯỚI</a></section>
<section className="section text-center max-w-4xl mx-auto"><p className="kicker">Our celebration</p><div className="rule"/><h2 className="heading">Trân trọng kính mời</h2><div className="grid md:grid-cols-2 gap-5 mt-9"><div className="card"><p className="kicker">Thứ Bảy · 28/11</p><h3 className="serif text-3xl mt-3">Đón khách</h3><p className="text-sm text-stone-500 mt-3">Từ 13:00</p></div><div className="card"><p className="kicker">Chủ Nhật · 29/11</p><h3 className="serif text-3xl mt-3">Tiệc cưới</h3><p className="text-sm text-stone-500 mt-3">07:30 sáng</p></div></div></section>
<section className="section bg-[#f1ece6] text-center"><p className="kicker">Where to meet</p><div className="rule"/><h2 className="heading">Địa điểm</h2><div className="card max-w-xl mx-auto mt-8"><MapPin className="mx-auto"/><h3 className="serif text-3xl mt-3">Tư gia nhà gái</h3><p className="text-sm text-stone-600 mt-3">TDP Chi Ngãi 1, phường Trần Hưng Đạo, TP. Hải Phòng</p><a className="inline-block border rounded-full px-5 py-3 text-xs mt-6" target="_blank" href="https://maps.app.goo.gl/aUrCMQTNPdwL1ciu8?g_st=ic">CHỈ ĐƯỜNG ↗</a></div></section>
<section className="section max-w-6xl mx-auto text-center"><p className="kicker">Our moments</p><div className="rule"/><h2 className="heading mb-9">Một chút yêu thương</h2><div className="gridphotos">{photos.map((p,i)=><button key={p} onClick={()=>setPhoto(i)}><img src={p} alt={`Ảnh cưới ${i+1}`} loading="lazy"/></button>)}</div></section>
<section className="section bg-[#f1ece6] text-center"><p className="kicker">With love</p><div className="rule"/><h2 className="heading">Mừng cưới</h2><p className="text-sm text-stone-500 mt-4">Tình cảm của bạn là món quà quý giá với chúng mình.</p><div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto mt-8">
  <Gift
    title="Mừng cưới cô dâu"
    name="Thanh Hậu"
    bank="Vietcombank (VCB)"
    account="1051552251"
    qr="/images/vk.jpg"
  />

  <Gift
    title="Mừng cưới chú rể"
    name="Vũ Huỳnh"
    bank="MB Bank"
    account="0392104506"
    qr="/images/ck.jpg"
  />
</div></section>
<footer className="py-20 text-center"><Heart className="mx-auto text-rose-300"/><h2 className="serif text-4xl mt-4">Thank you</h2><p className="text-xs text-stone-500 mt-3">Cảm ơn bạn đã dành tình cảm cho ngày vui của chúng mình.</p><p className="serif text-2xl mt-7">Vũ Huỳnh & Thanh Hậu</p></footer></main>}{open && (
  <button
    className={`music ${playing ? "music-playing" : ""}`}
    onClick={music}
    aria-label={playing ? "Tắt nhạc" : "Bật nhạc"}
  >
    {playing ? <Music2 size={21} /> : <VolumeX size={21} />}
  </button>
)}{photo!==null&&<div className="modal" onClick={()=>setPhoto(null)}><button className="absolute top-5 right-5 text-white" onClick={()=>setPhoto(null)}><X/></button><img src={photos[photo]} alt="Ảnh phóng to"/></div>}</>}
