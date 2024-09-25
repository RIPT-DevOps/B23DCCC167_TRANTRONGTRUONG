const bodymusic = [
    { id: '7', heading: 'Em Cứ Bước Đi Đi-Ân Tình Sang Trang', span: 'Hot Music-TikTok', imageSrc: 'Ảnh chụp màn hình 2024-06-16 170825.png', audioSrc: 'Em Cứ Bước Đi Đi Remix - Ân Tình Sang Trang (Remix) - Tú Na Cover X Ciray Remix.mp3' },
    { id: '1', heading: 'Tình Phủ Remix', span: 'DuongTocTai, Quang Thắng🤦, Hữu Vũ Chiến, Hoa56', imageSrc: 'Ảnh chụp màn hình 2024-06-16 171955.png', audioSrc: 'Tình Phủ Remix.mp3' },
    { id: '11', heading: 'Em Ngốc Quá AIR Remix  Gia Huy  Em Thật Là Ngốc Quá Người Như Thế Cũng Gửi Gắm Hot Tik', span: 'Hu Ni 3', imageSrc: 'Ảnh chụp màn hình 2024-06-16 172236.png', audioSrc: 'y2mate.com - Em Ngốc Quá AIR Remix  Gia Huy  Em Thật Là Ngốc Quá Người Như Thế Cũng Gửi Gắm Hot Tik.mp3' },
    { id: '9', heading: 'Nến Và Hoa Remix - Rhymastic「 Dinh Bao Ft Hoang Khiem Remix 」Ver 2 : Nhạc Hot TikTok 2023', span: 'Nguyen Viet Nhan, Ruris, Tiktok remix, Nguyễn Kim Phú', imageSrc: 'Ảnh chụp màn hình 2024-06-16 172449.png', audioSrc: 'Nến Và Hoa Remix - Rhymastic「 Dinh Bao Ft Hoang Khiem Remix 」Ver 2 _ Nhạc Hot TikTok 2023.mp3' },
    { id: '13', heading: 'Khóc Ở Trong Club - (Remix) - Đêm nay em khóc ở trong club __ Nhạc Hot TikTok', span: 'Ƭ&ᑕ', imageSrc: 'Ảnh chụp màn hình 2024-06-16 173634.png', audioSrc: '𝘒𝘩𝘰́𝘤 Ở 𝘛𝘳𝘰𝘯𝘨 𝘊𝘭𝘶𝘣 𝘙𝘦𝘮𝘪𝘹 (1).mp3' },
    { id: '14', heading: 'MONOGEM - Wild (Official Audio)', span: 'MONOGEM', imageSrc: 'Ảnh chụp màn hình 2024-06-16 173204.png', audioSrc: 'Wild.mp3' },
    { id: '6', heading: 'Cơn Mưa Ngang Qua (Remix 2022)', span: 'Sơn Tùng M-TP Official', imageSrc: 'Ảnh chụp màn hình 2024-06-16 174128.png', audioSrc: 'CƠN MƯA NGANG QUA - SƠN TÙNG M-TP - AUDIO (REMIX 2022).mp3' },
    { id: '4', heading: 'french montana - unforgettable (sped up)', span: 'queze', imageSrc: 'Ảnh chụp màn hình 2024-06-16 174418.png', audioSrc: 'French Montana - Unforgettable (feat. Swae Lee) (Official Audio) [HQ].mp3' },
    { id: '8', heading: 'Where Is Your Love (Music Video Out Now)', span: 'J Lisk', imageSrc: 'Ảnh chụp màn hình 2024-06-16 200546.png', audioSrc: 'Where Is Your Love (Music Video Out Now).mp3' },
    { id: '5', heading: '[MisterT] ASTRONOMY X ASTRONOMIA ♫ MOVE UP ♫| FULL SET NHẠC REMIX HOT TIK TOK CHÁY NHƯ FAI FAI', span: '𝐿𝑒 𝐿𝑢𝑜𝑛𝑔 𝑇𝑟𝑢𝑛𝑔 𝑇ℎ𝑎𝑛ℎ', imageSrc: 'Ảnh chụp màn hình 2024-06-16 200753.png', audioSrc: '[MisterT] ASTRONOMY X ASTRONOMIA ♫ MOVE UP ♫_ FULL SET NHẠC REMIX HOT TIK TOK CHÁY NHƯ FAI FAI.mp3' },
    { id: '10', heading: 'ĐỪNG LÀM TRÁI TIM ANH ĐAU | SƠN TÙNG M-TP', span: 'Sơn Tùng M-TP Official', imageSrc: 'channels4_profile.jpg', audioSrc: 'SƠN TÙNG M-TP  ĐỪNG LÀM TRÁI TIM ANH ĐAU  OFFICIAL MUSIC VIDEO.mp3' },
    { id: '2', heading: 'Scars To Your Beautiful (HYPERTECHNO) - BOVSKI, PET3RPUNX, LUCKY DEMON', span: 'PET3RPUNX', imageSrc: 'artworks-v8s2B6VW0pPNyZLq-LEiG5g-t500x500.jpg', audioSrc: 'KHÁT VỌNG TUỔI TRẺ - TÙNG DƯƠNG COVER  X JAPANDEE REMIX.mp3' },
    { id: '12', heading: 'KHÁT VỌNG TUỔI TRẺ - TÙNG DƯƠNG COVER  X JAPANDEE REMIX', span: 'KazueVN', imageSrc: 'artworks-oQty6H6XzFgkmAcr-aa8IeA-t500x500.jpg', audioSrc: 'Scars To Your Beautiful (HYPERTECHNO) - BOVSKI, PET3RPUNX, LUCKY DEMON.mp3' },
    { id: '0', heading: '[TIKTOK] Anh Chỉ Là Người Thay Thế - Hui (XV Remix)', span: '𝑛𝑒𝑝ℎ𝑟𝑖𝑡𝑒 𝑗𝑎𝑑𝑒', imageSrc: 'artworks-ICx8z2D80AeH8cjz-Qp3ddQ-t500x500.jpg', audioSrc: '[TIKTOK] Anh Chỉ Là Người Thay Thế - Hui (XV Remix).mp3' },

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