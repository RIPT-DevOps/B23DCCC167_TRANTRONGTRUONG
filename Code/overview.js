const bodymusic = [
    { id: '0', heading: 'Em Cứ Bước Đi Đi-Ân Tình Sang Trang', span: 'Hot Music-TikTok', imageSrc: 'Ảnh chụp màn hình 2024-06-16 170825.png', audioSrc: 'Em Cứ Bước Đi Đi Remix - Ân Tình Sang Trang (Remix) - Tú Na Cover X Ciray Remix.mp3' },
    { id: '1', heading: 'Tình Phủ Remix', span: 'DuongTocTai, Quang Thắng🤦, Hữu Vũ Chiến, Hoa56', imageSrc: 'Ảnh chụp màn hình 2024-06-16 171955.png', audioSrc: 'Tình Phủ Remix.mp3' },
    { id: '2', heading: 'Em Ngốc Quá AIR Remix  Gia Huy  Em Thật Là Ngốc Quá Người Như Thế Cũng Gửi Gắm Hot Tik', span: 'Hu Ni 3', imageSrc: 'Ảnh chụp màn hình 2024-06-16 172236.png', audioSrc: 'y2mate.com - Em Ngốc Quá AIR Remix  Gia Huy  Em Thật Là Ngốc Quá Người Như Thế Cũng Gửi Gắm Hot Tik.mp3' },
    { id: '3', heading: 'Nến Và Hoa Remix - Rhymastic「 Dinh Bao Ft Hoang Khiem Remix 」Ver 2 : Nhạc Hot TikTok 2023', span: 'Nguyen Viet Nhan, Ruris, Tiktok remix, Nguyễn Kim Phú', imageSrc: 'Ảnh chụp màn hình 2024-06-16 172449.png', audioSrc: 'Nến Và Hoa Remix - Rhymastic「 Dinh Bao Ft Hoang Khiem Remix 」Ver 2 _ Nhạc Hot TikTok 2023.mp3' },
    { id: '4', heading: 'Khóc Ở Trong Club - (Remix) - Đêm nay em khóc ở trong club __ Nhạc Hot TikTok', span: 'Ƭ&ᑕ', imageSrc: 'Ảnh chụp màn hình 2024-06-16 173634.png', audioSrc: '𝘒𝘩𝘰́𝘤 Ở 𝘛𝘳𝘰𝘯𝘨 𝘊𝘭𝘶𝘣 𝘙𝘦𝘮𝘪𝘹 (1).mp3' },
    { id: '5', heading: 'MONOGEM - Wild (Official Audio)', span: 'MONOGEM', imageSrc: 'Ảnh chụp màn hình 2024-06-16 173204.png', audioSrc: 'Wild.mp3' },
    { id: '6', heading: 'Cơn Mưa Ngang Qua (Remix 2022)', span: 'Sơn Tùng M-TP Official', imageSrc: 'Ảnh chụp màn hình 2024-06-16 174128.png', audioSrc: 'CƠN MƯA NGANG QUA - SƠN TÙNG M-TP - AUDIO (REMIX 2022).mp3' },
    { id: '7', heading: 'french montana - unforgettable (sped up)', span: 'queze', imageSrc: 'Ảnh chụp màn hình 2024-06-16 174418.png', audioSrc: 'French Montana - Unforgettable (feat. Swae Lee) (Official Audio) [HQ].mp3' },
    { id: '8', heading: 'Where Is Your Love (Music Video Out Now)', span: 'J Lisk', imageSrc: 'Ảnh chụp màn hình 2024-06-16 200546.png', audioSrc: 'Where Is Your Love (Music Video Out Now).mp3' },
    { id: '9', heading: '[MisterT] ASTRONOMY X ASTRONOMIA ♫ MOVE UP ♫| FULL SET NHẠC REMIX HOT TIK TOK CHÁY NHƯ FAI FAI', span: '𝐿𝑒 𝐿𝑢𝑜𝑛𝑔 𝑇𝑟𝑢𝑛𝑔 𝑇ℎ𝑎𝑛ℎ', imageSrc: 'Ảnh chụp màn hình 2024-06-16 200753.png', audioSrc: '[MisterT] ASTRONOMY X ASTRONOMIA ♫ MOVE UP ♫_ FULL SET NHẠC REMIX HOT TIK TOK CHÁY NHƯ FAI FAI.mp3' },
    { id: '10', heading: 'ĐỪNG LÀM TRÁI TIM ANH ĐAU | SƠN TÙNG M-TP', span: 'Sơn Tùng M-TP Official', imageSrc: 'channels4_profile.jpg', audioSrc: 'SƠN TÙNG M-TP  ĐỪNG LÀM TRÁI TIM ANH ĐAU  OFFICIAL MUSIC VIDEO.mp3' },
    { id: '11', heading: 'Scars To Your Beautiful (HYPERTECHNO) - BOVSKI, PET3RPUNX, LUCKY DEMON', span: 'PET3RPUNX', imageSrc: 'artworks-v8s2B6VW0pPNyZLq-LEiG5g-t500x500.jpg', audioSrc: 'KHÁT VỌNG TUỔI TRẺ - TÙNG DƯƠNG COVER  X JAPANDEE REMIX.mp3' },
    { id: '12', heading: 'KHÁT VỌNG TUỔI TRẺ - TÙNG DƯƠNG COVER  X JAPANDEE REMIX', span: 'KazueVN', imageSrc: 'artworks-oQty6H6XzFgkmAcr-aa8IeA-t500x500.jpg', audioSrc: 'Scars To Your Beautiful (HYPERTECHNO) - BOVSKI, PET3RPUNX, LUCKY DEMON.mp3' },
    { id: '13', heading: '[TIKTOK] Anh Chỉ Là Người Thay Thế - Hui (XV Remix)', span: '𝑛𝑒𝑝ℎ𝑟𝑖𝑡𝑒 𝑗𝑎𝑑𝑒', imageSrc: 'artworks-ICx8z2D80AeH8cjz-Qp3ddQ-t500x500.jpg', audioSrc: '[TIKTOK] Anh Chỉ Là Người Thay Thế - Hui (XV Remix).mp3' },

  ];
  
  Array.from(document.getElementsByClassName('tileGallery__sliderPanelSlide')).forEach((element, i) => {
    if (bodymusic[i]) { // Kiểm tra xem phần tử có tồn tại
      let img = element.getElementsByTagName('img')[0];
      let a = element.getElementsByTagName('a')[0];
      let span = element.getElementsByTagName('span')[0];
      let audio= element.getElementsByTagName('audio')[0];
      if (img && a && span) { // Kiểm tra xem các phần tử con có tồn tại
        img.src = bodymusic[i].imageSrc;
        a.innerHTML = bodymusic[i].heading;
        span.innerHTML = bodymusic[i].span;
        audio.src = bodymusic[i].audioSrc;
      
      }
    }
  });
  // Lấy danh sách các biểu tượng play/pause
const playButtons = document.querySelectorAll('.playListPlay');

// Biến để lưu trữ chỉ số hiện tại và trạng thái phát nhạc
let currentIndex = 0;
let isPlaying = false; // Biến để kiểm tra trạng thái phát nhạc

// Hàm để đặt tất cả các biểu tượng về trạng thái play
const makeAllPlay = () => {
  playButtons.forEach(button => {
    button.classList.remove('bi-pause-fill');
    button.classList.add('bi-play-fill');
  });
};

// Thêm sự kiện click cho từng biểu tượng play/pause
playButtons.forEach((button, index) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();

    // Nếu người dùng bấm vào cùng một bài hát
    if (currentIndex === index && isPlaying) {
      music.pause(); // Tạm dừng phát nhạc
      button.classList.remove('bi-play-fill');
      button.classList.add('bi-pause-fill');
      isPlaying = false;
    } else {
      // Ngược lại, bắt đầu phát bài hát mới
      makeAllPlay(); // Đặt tất cả các biểu tượng về trạng thái play
      button.classList.remove('bi-play-fill');
      button.classList.add('bi-pause-fill');
      currentIndex = index;
      isPlaying = true;

      // Tạo đối tượng âm thanh mới và phát nó
      
    }
  });
});


function createUpdatedNextList(id) {
  // Tạo mảng mới bằng cách sao chép từ newNextList
  const updatedNextList = [...newNextList];

  // Tìm phần tử trong newNextList có id tương ứng và cập nhật nó
  const foundIndex = updatedNextList.findIndex(item => item.id === id);
  if (foundIndex !== -1) {
      // Cập nhật phần tử có id tương ứng từ bodymusic vào mảng mới
      updatedNextList[foundIndex] = bodymusic.find(item => item.id === id);
  }

  // Cập nhật các phần tử còn lại trong mảng mới với các phần tử ngẫu nhiên từ bodymusic
  for (let i = 0; i < updatedNextList.length; i++) {
      if (i !== foundIndex) {
          const randomIndex = Math.floor(Math.random() * bodymusic.length);
          updatedNextList[i] = bodymusic[randomIndex];
      }
  }

  return updatedNextList;
}

function renderUpdatedNextList(id) {
  // Tạo mảng mới
  const updatedNextList = createUpdatedNextList(id);

  // Cập nhật giao diện
  const songItems = document.getElementsByClassName('song_Item');
  Array.from(songItems).forEach((element, i) => {
      const img = element.querySelector('img');
      const a = element.querySelector('a');
      const span = element.querySelector('span');
      const audio = element.querySelector('audio');

      if (img && a && span && audio && updatedNextList[i]) {
          img.src = updatedNextList[i].imageSrc;
          a.textContent = updatedNextList[i].heading;
          span.textContent = updatedNextList[i].span;
          audio.src = updatedNextList[i].audioSrc;
      }
  });
}
// Lặp qua từng phần tử tileGallery__sliderPanelSlide
const slides = document.querySelectorAll('.tileGallery__sliderPanelSlide');
slides.forEach(slide => {
    slide.addEventListener('click', function() {
        const id = this.dataset.id;
        renderUpdatedNextList(id);
    });
});

window.addEventListener('message', function(event) {
  // Chỉ xử lý khi tin nhắn đến từ cửa sổ con
  if (event.source !== window) {
    return;
  }

  // Xử lý tin nhắn
  if (event.data === "Bài hát kết thúc") {
    function getRandomId() {
      const randomIndex = Math.floor(Math.random() * bodymusic.length);
      return bodymusic[randomIndex].id;
    }
    
    // Lấy một id ngẫu nhiên từ mảng newNextList
    const randomId = getRandomId();
    const song=bodymusic.find(item => item.id === id);
    if(song){

       // Gửi dữ liệu bài hát sang trang chính
        window.parent.postMessage({
          imgSrc: imgSrc,
          heading: heading,
          spanText: spanText,
          audioSrc: audioSrc,
          id: randomId // Thêm id vào dữ liệu gửi đi
        }, '*');
    
    }
    
  }
})