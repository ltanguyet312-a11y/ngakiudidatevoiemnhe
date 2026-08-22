'use client'

export default function Yay() {
  return (
    <div className='box'>
      {/* GIF từ Giphy bạn gửi */}
      <img 
        alt='Happy Birthday' 
        className='gif' 
        src='https://media.giphy.com/media/g5FxC58T8Q7e0/giphy.gif' 
      />

      <h2>Yayyy~ Chốt ngày đặc biệt với người đặc biệt nhé! 🥳💖</h2>

      <div className="schedule">
        <div className="schedule-item">
          <span>📸</span>
          <div><b>18:00 - 18:45:</b> Đi chụp photobooth xinh xẻo</div>
        </div>
        <div className="schedule-item">
          <span>🍕</span>
          <div><b>18:45 - 20:00:</b> Đi ăn tối món chị thích</div>
        </div>
      </div>

      <p className="note">
        Mặc váy xinh vào đi, tới giờ em đón đi choiii! iuuu &lt;3
      </p>
    </div>
  );
}
