const $ = (selector) => document.querySelector(selector);
const msg = $('#message');
let timer = null, index = 0, words = [], stream = null, recognition = null;

// Add matching, legally obtained MP4 files to videos/.
const clips = { hello:'videos/hello.mp4', thanks:'videos/thanks.mp4', yes:'videos/yes.mp4', no:'videos/no.mp4',
  مرحبا:'videos/hello.mp4', شكرا:'videos/thanks.mp4', نعم:'videos/yes.mp4', لا:'videos/no.mp4' };
const clean = () => msg.value.trim().replace(/[،,؟!?]/g,'').split(/\s+/).filter(Boolean);
function showNext(){
  if(index >= words.length){ $('#progress').textContent='اكتمل العرض'; clearInterval(timer); return; }
  const word=words[index++], src=clips[word.toLowerCase()];
  $('#stage').innerHTML=src ? `<video class="clip" src="${src}" controls autoplay muted></video><strong>${word}</strong>` : `<div class="word">${word}</div><small>أضف ملف هذا المقطع إلى videos/ لإظهار الفيديو</small>`;
  $('#progress').textContent=`${index} / ${words.length}`;
}
$('#play').onclick=()=>{words=clean();if(!words.length){$('#progress').textContent='اكتب رسالة أولاً';return}clearInterval(timer);index=0;showNext();timer=setInterval(showNext,2600)};
$('#clear').onclick=()=>{msg.value='';$('#stage').textContent='ستظهر كلمة الإشارة أو مقطع الفيديو هنا';$('#progress').textContent='جاهز';updateLinks()};
$('#speak').onclick=()=>{if(msg.value.trim()){speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(msg.value);u.lang=$('#lang').value;speechSynthesis.speak(u)}};

const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
if(SR){recognition=new SR();recognition.continuous=true;recognition.interimResults=true;recognition.onstart=()=>$('#recognition').textContent='جاري الاستماع... تحدث الآن';recognition.onend=()=>$('#recognition').textContent='توقف الاستماع';recognition.onerror=()=>$('#recognition').textContent='تعذر استخدام الميكروفون';recognition.onresult=e=>{let text='';for(let i=e.resultIndex;i<e.results.length;i++)text+=e.results[i][0].transcript;msg.value=text;updateLinks()};$('#listen').onclick=()=>{recognition.lang=$('#lang').value;recognition.start()}}else $('#listen').disabled=true;

$('#cameraOn').onclick=async()=>{try{stream=await navigator.mediaDevices.getUserMedia({video:{facingMode:'user'},audio:false});$('#camera').srcObject=stream;$('#cameraText').textContent='الكاميرا تعمل — حرّك يدك أمامها';}catch(e){$('#cameraText').textContent='تعذر الوصول إلى الكاميرا. استخدم HTTPS واسمح بالصلاحية.'}};
$('#cameraOff').onclick=()=>{stream?.getTracks().forEach(t=>t.stop());$('#camera').srcObject=null;$('#cameraText').textContent='الكاميرا متوقفة'};
function updateLinks(){const text=encodeURIComponent(msg.value.trim()),url=encodeURIComponent(location.href);$('#wa').href='https://wa.me/?text='+text;$('#messenger').href='https://www.facebook.com/dialog/send?link='+url+'&app_id=966242223397117';$('#instagram').href='https://www.instagram.com/';}
msg.addEventListener('input',updateLinks);$('#share').onclick=async()=>{if(navigator.share)await navigator.share({title:'Ahmed-Deaf-11',text:msg.value,url:location.href});else alert('المشاركة غير مدعومة في هذا المتصفح')};updateLinks();
