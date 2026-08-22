'use client'

export default function Yay() {
  return (
    <div className='box'>
      {/* GIF 1: Gumball & Darwin */}
      <img alt='yayyy' className='gif' src='/gumball-and-darwing.gif' />
      
      {/* https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTczMmlqOTBxYXAyZTI4Mmp3dXJwcnV6amVpNHZ2cmdkaHJpcGZybCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/g5FxC58T8Q7e0/giphy.gif */}
      <img 
        alt='cute gif' 
        className='gif' 
        src='https://media.tenor.com/gU812X4spRAAAAAi/dance-bear.gif' 
      />

      <h2>Yayyy~ Chốt lịch ngày đặc biệt với người đặc biệt nhé! 🥳💖</h2>

      <div className="schedule">
        <div className="schedule-item">
          <span>📸</span>
          <div><b>18:00 - 18:45:</b> Đi chụp photobooth </div>
        </div>
        <div className="schedule-item">
          <span>🍕</span>
          <div><b>18:45 - 20:00:</b> Đi ăn tối món chị thích</div>
        </div>
      </div>

      <p className="note">
        Mặc váy vào đi, tới giờ em đón đi choiii! iuuu &lt;3
      </p>
    </div>
  );
}
