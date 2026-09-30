import {fontCss} from './font-style.mjs';
export const sample={source:'https://www.cmcseoul.or.kr/page/board/news/549665',logo:'',cards:[
 {layout:'cover',title:'Chronic Kidney Disease\nPublic Lecture',body:'Seoul St. Mary’s Hospital\nOctober 6, 2026',ko:'만성콩팥병 공개강좌 개최',image:'',position:'center'},
 {layout:'photo',title:'Understanding\nKidney Health',body:'Learn about blood and protein in urine, and practical nutrition management for chronic kidney disease.',ko:'혈뇨·단백뇨와 만성콩팥병 영양 관리에 관한 강좌',image:'',position:'center'},
 {layout:'text',title:'Join the Lecture',body:'October 6, 2026 · 2:00 PM\nMain Building, B1 Auditorium\n\nFree admission. No advance registration required.\nOpen to patients, caregivers and the public.',ko:'10월 6일 오후 2시, 본관 지하 1층 대강당. 사전 신청 없이 무료 참석 가능.',image:'',position:'center'},
 {layout:'closing',title:'Want to read\nour full story?',body:'Click the\nSSMH NEWS link\nin our profile\nto learn more.',ko:'프로필의 SSMH NEWS 링크를 통해 홈페이지의 전체 기사로 안내합니다.',image:'',position:'center'}]};
export function validateStudio(d){
 if(!d||!Array.isArray(d.cards)||d.cards.length<1||d.cards.length>5)throw new Error('카드는 1~5장이어야 합니다.');
 for(const c of d.cards){if(!['cover','photo','text','closing'].includes(c.layout))throw new Error('알 수 없는 레이아웃입니다.');for(const [k,n]of [['title',150],['body',450],['ko',600]])if(typeof c[k]!=='string'||c[k].length>n)throw new Error(`${k} 글자 제한을 확인하세요.`);if(!c.title.trim())throw new Error('제목을 입력하세요.');validateImage(c.image);if(!['center','top','bottom'].includes(c.position))c.position='center';}
 if(d.theme === undefined)d.theme='beige';if(!['beige','navy'].includes(d.theme))throw new Error('테마를 확인하세요.');
 for(const c of d.cards){for(const k of ['titleSize','bodySize'])if(c[k]!==undefined&&(!Number.isFinite(c[k])||c[k]<20||c[k]>120))throw new Error('글자 크기는 20~120px로 설정하세요.');if(c.align!==undefined&&!['left','center','right'].includes(c.align))throw new Error('정렬 값을 확인하세요.');}
 validateImage(d.logo);if(typeof d.source!=='string'||d.source.length>2000)throw new Error('출처 URL을 확인하세요.');return d;
}
function validateImage(v){if(v!==undefined&&v!==''&&(typeof v!=='string'||!(/^https?:\/\//.test(v)||/^data:image\/(png|jpeg|webp);base64,/.test(v))))throw new Error('사진은 http(s) URL 또는 PNG/JPEG/WebP 파일이어야 합니다.');}
const e=v=>String(v||'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function render(d){validateStudio(d);return `<!doctype html><html lang="en"><meta charset="utf-8"><style>${fontCss}
*{box-sizing:border-box}body{margin:0;background:#ddd7cc;color:#073463;font-family:Pretendard,sans-serif}.card{width:1080px;height:1350px;background:#e0d8cd;position:relative;display:flex;flex-direction:column;overflow:hidden;padding:68px 70px 150px;margin-bottom:24px}.photo{padding:55px 0 150px}.photo .picture{height:610px;flex-shrink:0}.picture{width:100%;height:620px;object-fit:cover;display:block}.placeholder{height:540px;background:#c6c5be;display:flex;align-items:center;justify-content:center;font:26px Pretendard,sans-serif;color:#53616f;letter-spacing:2px}.copy{padding:40px 65px;text-align:center;display:flex;flex-direction:column;justify-content:center;flex:1;min-height:0}h1{font-size:64px;line-height:1.12;margin:0 0 28px;font-weight:bold;white-space:pre-wrap;overflow-wrap:anywhere}p{font-size:46px;line-height:1.25;margin:0;white-space:pre-wrap;overflow-wrap:anywhere}.cover{padding:0 0 150px}.cover .picture,.cover .placeholder{height:870px}.cover .picture{width:calc(100% - 80px);margin:0 40px;object-fit:cover!important}.cover .copy{position:relative;margin:-95px 80px 0;padding:35px 38px;background:#f6eee3;border-top:50px solid #3d6091;border-radius:34px;box-shadow:0 24px 28px #0003;flex:none;min-height:300px}.cover h1{font-size:64px;margin-bottom:20px}.cover p{font-size:40px}.text .copy,.closing .copy{padding:70px 30px}.text h1{font-size:72px}.text p{font-size:46px;line-height:1.45}.closing h1{font-size:86px;line-height:1.15}.closing p{margin-top:65px;color:inherit;font-size:58px}.closing .news-link{color:#b78809;font-weight:700}.brand{position:absolute;bottom:30px;left:70px;right:70px;height:72px;display:flex;align-items:center;justify-content:center;gap:16px;font:20px Pretendard,sans-serif;color:#6c6864}.brand img{max-width:750px;max-height:72px;object-fit:contain}.brand small{display:block;font-size:15px;margin-bottom:4px}.number{position:absolute;bottom:115px;right:45px;font:18px Pretendard,sans-serif;color:#657385}
.navy .card{background:#073463;color:#f6eee3}.navy .cover .copy{background:#f6eee3;color:#073463;border-top-color:#3d6091}.navy .placeholder{background:#163b66;color:#d2dfef}.navy .brand,.navy .number{color:#d2dfef}.navy .card p{color:#f6eee3}.navy .cover p{color:#073463}.navy .closing p{color:#f6eee3}.navy .closing .news-link{color:#edc967}</style><body class="${d.theme}">${d.cards.map((c,i)=>`<article class="card ${e(c.layout)}">${['cover','photo'].includes(c.layout)?(c.image?`<img class="picture" style="object-position:${e(c.position)};object-fit:${c.fit === 'contain' ? 'contain' : 'cover'}" src="${e(c.image)}" alt="">`:`<div class="placeholder">ADD ARTICLE PHOTO</div>`):''}<div class="copy" style="text-align:${c.align || 'center'}"><h1 style="${c.titleSize ? `font-size:${c.titleSize}px` : ''}">${e(c.title)}</h1><p style="${c.bodySize ? `font-size:${c.bodySize}px` : ''}">${c.layout === 'closing' ? e(c.body).replace(/SSMH NEWS/g, '<span class="news-link">SSMH NEWS</span>') : e(c.body)}</p></div><div class="number">${i+1} / ${d.cards.length}</div><div class="brand">${d.logo?`<img src="${e(d.logo)}" alt="Seoul St. Mary's Hospital">`:`<div><small>THE CATHOLIC UNIVERSITY OF KOREA</small>SEOUL ST. MARY’S HOSPITAL</div>`}</div></article>`).join('')}</html>`;}











