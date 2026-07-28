// الملف ده لازم يفضل بنفس الاسم ده بالظبط "firebase-messaging-sw.js"
// وفي نفس مكان index.html بالظبط (مش جوه أي مجلد فرعي)
// هو اللي بيسمح للإشعار يوصل حتى لو الموقع مقفول خالص أو التاب متسكر

importScripts('https://www.gstatic.com/firebasejs/11.9.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/11.9.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDi7Woehrsh9pga2R4_aEcVG_NO7yTkUaY",
  authDomain: "girls-mall1.firebaseapp.com",
  projectId: "girls-mall1",
  storageBucket: "girls-mall1.firebasestorage.app",
  messagingSenderId: "800440589736",
  appId: "1:800440589736:web:14a61ede69dc7ca53d119d"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const title = (payload.notification && payload.notification.title) || 'Girls Mall 🌸';
  const body = (payload.notification && payload.notification.body) || 'في تحديث جديد في طلبك';
  self.registration.showNotification(title, {
    body,
    icon: 'https://em-content.zobj.net/source/apple/391/cherry-blossom_1f338.png'
  });
});
