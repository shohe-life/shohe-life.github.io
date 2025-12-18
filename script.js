// ==================== ハンバーガーメニュー ====================
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('nav');

  if (hamburger && nav) {
    hamburger.addEventListener('click', function() {
      nav.classList.toggle('active');

      // アニメーション用のクラス切り替え
      const spans = hamburger.querySelectorAll('span');
      if (nav.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translateY(8px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
      } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
      }
    });

    // メニュー項目をクリックしたらメニューを閉じる
    const navLinks = nav.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
          nav.classList.remove('active');
          const spans = hamburger.querySelectorAll('span');
          spans[0].style.transform = '';
          spans[1].style.opacity = '';
          spans[2].style.transform = '';
        }
      });
    });
  }
});

// ==================== アクティブページのハイライト ====================
document.addEventListener('DOMContentLoaded', function() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
      link.classList.add('active');
    }
  });
});

// ==================== スムーススクロール ====================
document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href').substring(1);

      if (targetId) {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
});

// ==================== フォーム送信処理（contact.htmlで使用） ====================
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      // フォームデータを取得
      const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        content: document.getElementById('content').value,
        budget: document.getElementById('budget').value,
        deadline: document.getElementById('deadline').value
      };

      // 必須項目のバリデーション
      if (!formData.email || !formData.content) {
        showMessage('メールアドレスと依頼内容は必須です。', 'error');
        return;
      }

      // メールアドレスの簡易バリデーション
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(formData.email)) {
        showMessage('有効なメールアドレスを入力してください。', 'error');
        return;
      }

      // Formspreeを使う場合（actionにFormspreeのURLを設定してください）
      // この実装ではmailtoにフォールバック

      // mailtoリンクを生成
      const subject = encodeURIComponent('お問い合わせ: ' + (formData.name || 'お名前未記入'));
      const body = encodeURIComponent(
        `お名前: ${formData.name || '未記入'}\n` +
        `メールアドレス: ${formData.email}\n` +
        `依頼内容:\n${formData.content}\n\n` +
        `予算感: ${formData.budget || '未記入'}\n` +
        `希望納期: ${formData.deadline || '未記入'}`
      );

      // メールクライアントを起動
      // 実際のメールアドレスに変更してください
      window.location.href = `mailto:your-email@example.com?subject=${subject}&body=${body}`;

      // 成功メッセージを表示
      showMessage('メールクライアントを起動しました。送信をお願いします。', 'success');

      // フォームをリセット
      setTimeout(() => {
        contactForm.reset();
      }, 1000);
    });
  }
});

// メッセージ表示関数
function showMessage(text, type) {
  const messageDiv = document.getElementById('formMessage');

  if (messageDiv) {
    messageDiv.textContent = text;
    messageDiv.className = 'message show message-' + type;

    // 5秒後に非表示
    setTimeout(() => {
      messageDiv.classList.remove('show');
    }, 5000);
  }
}

// ==================== ページトップへ戻るボタン（オプション） ====================
document.addEventListener('DOMContentLoaded', function() {
  // スクロール時の処理
  let lastScrollTop = 0;

  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // ここに必要な処理を追加できます
    // 例: ヘッダーの表示/非表示切り替え

    lastScrollTop = scrollTop;
  });
});
