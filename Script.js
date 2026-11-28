// 1. Thu gọn / mở rộng sổ ảnh & video từng năm học
function toggleGallery(galleryId, btn) {
    const gallery = document.getElementById(galleryId);
    if (!gallery) return;

    gallery.classList.toggle('collapsed');

    if (btn) {
        if (gallery.classList.contains('collapsed')) {
            btn.textContent = 'Mở sổ ảnh & video';
        } else {
            btn.textContent = 'Thu gọn / Mở sổ ảnh & video';
        }
    }
}

// 2. Mở cửa sổ xem phóng to ảnh kèm tiêu đề & chú thích
function openLightbox(title, imgSrc, caption) {
    const modal = document.getElementById('lightboxModal');
    const titleEl = document.getElementById('lightboxTitle');
    const imgEl = document.getElementById('lightboxImg');
    const captionEl = document.getElementById('lightboxCaption');

    if (titleEl) {
        titleEl.innerText = title || '';
    }

    if (imgEl) {
        imgEl.src = imgSrc || '';
        imgEl.alt = title || 'Ảnh phóng to';
    }

    if (captionEl) {
        captionEl.innerText = caption || '';
    }

    if (modal) {
        modal.style.display = 'flex';
    }
}

// 3. Đóng cửa sổ xem phóng to ảnh
function closeLightbox() {
    const modal = document.getElementById('lightboxModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// 4. Đóng khung phóng to khi bấm phím Esc
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeLightbox();
    }
});
