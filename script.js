// confetti.js
window.onload = function () {
  let explosionCount = 0;
  const maxExplosions = 10; // تحديد عدد الانفجارات

  const intervalId = setInterval(() => {
    if (explosionCount >= maxExplosions) {
      clearInterval(intervalId); // إيقاف المفرقعات بعد 10 انفجارات
    } else {
      confetti({
        particleCount: 200,  // زيادة عدد الجزيئات لكل انفجار
        spread: 60,          // الانتشار
        origin: { y: 0.6 },
        duration: 3500,      // المدة (زيادة المدة لتستمر أطول)
        scalar: 2,           // زيادة الحجم
        shapes: ['circle', 'square', 'triangle'], // أشكال متنوعة
        colors: [
          '#ff6347', // أحمر طماطم
          '#ffa07a', // برتقالي فاتح
          '#32cd32', // أخضر
          '#00bfff', // أزرق
          '#f4a300', // أصفر ذهبي
          '#d63384'  // وردي غامق
        ], // ألوان متنوعة وجميلة
        gravity: 1.2         // تسريع المفرقعات للأسفل أكثر
      });
      explosionCount++; // زيادة العدادات بعد كل انفجار
    }
  }, 1200); // تكرار التأثير بشكل مستمر حتى الوصول إلى الحد
};
