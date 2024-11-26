document.addEventListener("DOMContentLoaded", () => {
    const destinationsGrid = document.getElementById("destinationsGrid");
    const reviewsGrid = document.getElementById("reviewsGrid");
  
    // ตัวอย่างข้อมูลจุดหมายปลายทาง
    const destinations = [
      { title: "ภูเก็ต", image: "https://www.treehouse-villas.com/wp-content/uploads/2024/06/รวมที่เที่ยวภูเก็ต-30-แห่ง-จะสายธรรมชาติหรือสายเมืองก็ต้องหลงใหล.webp", info: "ทะเลที่สวยงาม" },
      { title: "เชียงใหม่", image: "https://www.ananda.co.th/blog/thegenc/wp-content/uploads/2024/02/ไม่มีชื่อ-1145-x-550-px-17-1.png", info: "เมืองแห่งวัฒนธรรม" },
    ];
  
    // ตัวอย่างข้อมูลรีวิว
    const reviews = [
      { stars: "⭐⭐⭐⭐⭐", text: "การบริการดีเยี่ยม!", author: "คุณสมชาย" },
      { stars: "⭐⭐⭐⭐", text: "ที่พักสะอาดและสะดวกสบาย", author: "คุณส้ม" },
    ];
  
    // ฟังก์ชันแสดงจุดหมายปลายทาง
    const renderDestinations = () => {
      destinationsGrid.innerHTML = destinations
        .map(
          (dest) => `
        <div class="destination-card">
          <img src="${dest.image}" alt="${dest.title}" class="destination-img">
          <div class="destination-content">
            <h3 class="destination-title">${dest.title}</h3>
            <p>${dest.info}</p>
          </div>
        </div>`
        )
        .join("");
    };
  
    // ฟังก์ชันแสดงรีวิว
    const renderReviews = () => {
      reviewsGrid.innerHTML = reviews
        .map(
          (review) => `
        <div class="review-card">
          <div class="review-stars">${review.stars}</div>
          <p>${review.text}</p>
          <div class="review-author">
            <span>${review.author}</span>
          </div>
        </div>`
        )
        .join("");
    };
  
    // เรียกใช้ฟังก์ชัน
    renderDestinations();
    renderReviews();
  });
  