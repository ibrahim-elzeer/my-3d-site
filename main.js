const correctAnswers = {
    q1: 'ب',
    q2: 'ب',
    q3: 'ج',
    q4: 'ج',
    q5: 'ب'
  };
  
  document.getElementById("quizForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    let score = 0;
    let total = Object.keys(correctAnswers).length;
  
    // قفل التعديلات على الراديو
    const radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach(radio => radio.disabled = true);
  
    // التأكد إن كل الأسئلة متجاوب عليها
    let allAnswered = true;
    for (let key in correctAnswers) {
      const selected = document.querySelector(`input[name="${key}"]:checked`);
      if (!selected) {
        allAnswered = false;
        break;
      }
    }
  
    if (!allAnswered) {
      alert("يرجى الإجابة على جميع الأسئلة قبل الإرسال");
      // فك قفل الراديو علشان الطالب يقدر يكمّل
      radios.forEach(radio => radio.disabled = false);
      return;
    }
  
    // حساب الدرجة فقط، بدون عرض الإجابات الصح أو الغلط
    for (let key in correctAnswers) {
      const selected = document.querySelector(`input[name="${key}"]:checked`);
      if (selected && selected.value === correctAnswers[key]) {
        score++;
      }
    }
  
    // عرض النتيجة
    let msg = "";
    if (score === total) {
      msg = "ممتاز! معلوماتك قوية جدًا 👏";
    } else if (score >= 3) {
      msg = "مستواك جيد، بس لسه في حاجات ممكن تتعلمها 💪";
    } else {
      msg = "واضح إنك محتاج تبدأ من الأساس، وإحنا معاك خطوة بخطوة 👨‍🏫";
    }
  
    document.getElementById("result").textContent = `عدد الإجابات الصحيحة: ${score} من ${total} - ${msg}`;
  
    // إخفاء زر الإرسال
    e.target.querySelector("button").disabled = true;
  
    // عرض زر "التقدّم الآن" بعد 3 ثواني
    setTimeout(() => {
      document.getElementById("nextBtnContainer").innerHTML = `
        <button id="goBtn">التقدّم الآن</button>
        <div id="loader" style="display:none; margin-top: 10px;"></div>
        <div id="loaderr" style="display:none; font-weight:bold;">جاري التحميل...</div>
      `;
  
      document.getElementById("goBtn").addEventListener("click", function () {
        this.style.display = "none";
        document.getElementById("loader").style.display = "block";
        document.getElementById("loaderr").style.display = "block";
  
        setTimeout(() => {
          window.location.href = "../webInter/index.html";
        }, 2000);
      });
    }, );
  });
  