const roleButtons = document.querySelectorAll('[data-role]');
const roleCard = document.getElementById('roleCard');
const languageSelect = document.getElementById('languageSelect');

const translations = {
  en: {
    navHome: 'Home',
    navFarmers: 'Farmers',
    navAnimals: 'Animals',
    navMilk: 'Milk',
    navBilling: 'Billing',
    navInventory: 'Inventory',
    navCTA: 'Request Demo',
    heroTitle: 'Smart Dairy is your digital command center for every litre collected.',
    heroDesc: 'Modernize farmer records, track animal productivity, automate milk runs, and generate transparent billing—built for small and medium dairies.',
    heroPrimary: 'Log Milk Collection',
    heroSecondary: 'See Features',
    featuresHeading: 'Everything you need to run a precise dairy operation',
    featuresSub: 'Modular pages keep data tidy—farmer, animal, milk, billing, and inventory.',
    villageTitle: 'Made for village dairy farms',
    villageDesc: 'Simple workflows, low bandwidth friendly pages, and clear language to guide staff.',
    villagePoint1: 'Step-by-step guidance for daily milk entries',
    villagePoint2: 'Offline-first layouts ready to pair with PHP/MySQL',
    villagePoint3: 'Cartoon cow visuals to make training easier',
    ctaHeadline: 'Ready to digitize your dairy?',
    ctaSub: 'Connect this frontend to PHP/MySQL and start capturing real data. The UI is modular, responsive, and production-ready.',
    ctaButton: 'Start with farmer records'
  },
  hi: {
    navHome: 'होम',
    navFarmers: 'किसान',
    navAnimals: 'पशु',
    navMilk: 'दूध',
    navBilling: 'बिलिंग',
    navInventory: 'इन्वेंट्री',
    navCTA: 'डेमो माँगें',
    heroTitle: 'स्मार्ट डेयरी हर लीटर के लिए आपका डिजिटल कमांड सेंटर है।',
    heroDesc: 'किसान रिकॉर्ड, पशु उत्पादकता, दूध संग्रह और पारदर्शी बिलिंग को आधुनिक बनाएँ—छोटे व मध्यम डेयरियों के लिए।',
    heroPrimary: 'दूध संग्रह दर्ज करें',
    heroSecondary: 'विशेषताएँ देखें',
    featuresHeading: 'सटीक डेयरी संचालन के लिए सब कुछ',
    featuresSub: 'मॉड्यूलर पेज farmer, animal, milk, billing और inventory को सुव्यवस्थित रखते हैं।',
    villageTitle: 'गाँव की डेयरियों के लिए',
    villageDesc: 'सरल कार्यप्रवाह, कम बैंडविड्थ वाले पेज, और स्पष्ट भाषा जिससे स्टाफ सीख सके।',
    villagePoint1: 'दैनिक दूध एंट्री के लिए कदम-दर-कदम मदद',
    villagePoint2: 'PHP/MySQL के लिए तैयार ऑफ़लाइन-फ्रेंडली लेआउट',
    villagePoint3: 'ट्रेनिंग आसान बनाने हेतु कार्टून गायें',
    ctaHeadline: 'क्या आप डेयरी डिजिटाइज करने के लिए तैयार हैं?',
    ctaSub: 'इस फ्रंटएंड को PHP/MySQL से जोड़ें और डेटा कैप्चर शुरू करें। UI मॉड्यूलर, रेस्पॉन्सिव और तैयार है।',
    ctaButton: 'किसान रिकॉर्ड से शुरू करें'
  },
  mr: {
    navHome: 'मुख्यपृष्ठ',
    navFarmers: 'शेतकरी',
    navAnimals: 'पशुधन',
    navMilk: 'दूध',
    navBilling: 'बिलिंग',
    navInventory: 'साठा',
    navCTA: 'डेमो मागा',
    heroTitle: 'स्मार्ट डेअरी प्रत्येक लिटर साठी तुमचे डिजिटल कमांड सेंटर आहे.',
    heroDesc: 'शेतकरी नोंदी, पशू उत्पादकता, दूध संकलन आणि पारदर्शक बिलिंग आधुनिक करा—लहान आणि मध्यम डेअरीसाठी.',
    heroPrimary: 'दूध संकलन नोंदवा',
    heroSecondary: 'वैशिष्ट्ये पहा',
    featuresHeading: 'अचूक डेअरी ऑपरेशनसाठी आवश्यक सर्व काही',
    featuresSub: 'मॉड्यूलर पेज farmer, animal, milk, billing आणि inventory नीटनेटके ठेवतात.',
    villageTitle: 'गावातील डेअरींसाठी',
    villageDesc: 'सोपे वर्कफ्लो, कमी बँडविड्थ पेजेस, आणि स्पष्ट भाषा स्टाफला मदत करते.',
    villagePoint1: 'दैनंदिन दूध एंट्रीसाठी क्रमवार मदत',
    villagePoint2: 'PHP/MySQL साठी सज्ज ऑफलाइन-फ्रेंडली लेआउट',
    villagePoint3: 'प्रशिक्षण सोपे करण्यासाठी कार्टून गाई',
    ctaHeadline: 'आपली डेअरी डिजिटाईज करायला तयार आहात?',
    ctaSub: 'हा फ्रंटएंड PHP/MySQL शी जोडा आणि डेटा कॅप्चर सुरू करा. UI मॉड्यूलर आणि रेस्पॉन्सिव्ह आहे.',
    ctaButton: 'शेतकरी नोंदीपासून सुरू करा'
  }
};

const roleLayouts = {
  admin: {
    title: 'Admin dashboard',
    badges: ['Approve bill run', 'Sync milk meters', 'Reorder ghee', 'Download report'],
    stats: [
      { label: 'Milk collected', value: '2,470 L', hint: '+4.2% week', tone: 'success' },
      { label: 'Pending payouts', value: '₹84,300', hint: '12 farmers', tone: 'warning' },
      { label: 'Animals flagged', value: '3', hint: 'Check health IDs', tone: 'danger' },
      { label: 'Inventory cover', value: '9 days', hint: 'Butter low', tone: 'secondary' }
    ]
  },
  staff: {
    title: 'Staff workspace',
    badges: ['Log milk shift', 'Update health', 'Move stock', 'Call farmer'],
    stats: [
      { label: 'Today\'s entries', value: '48', hint: '24 morning · 24 evening', tone: 'success' },
      { label: 'Animals checked', value: '18', hint: '2 need follow-up', tone: 'warning' },
      { label: 'Stock moved', value: '124 kg', hint: 'Paneer + butter', tone: 'secondary' },
      { label: 'Tickets open', value: '4', hint: 'Waiting admin', tone: 'danger' }
    ]
  },
  farmer: {
    title: 'Farmer portal',
    badges: ['View statement', 'Raise query', 'Update bank', 'Collection history'],
    stats: [
      { label: 'This month', value: '1,120 L', hint: '+3.4% vs last', tone: 'success' },
      { label: 'Pending payout', value: '₹18,500', hint: 'Releases Friday', tone: 'warning' },
      { label: 'Avg fat %', value: '4.1', hint: 'Target 4.0-4.5', tone: 'secondary' },
      { label: 'Health alerts', value: '0', hint: 'All clear', tone: 'success' }
    ]
  }
};

function renderRole(role) {
  if (!roleCard) return;
  const config = roleLayouts[role];
  if (!config) return;

  roleButtons.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.role === role);
  });

  roleCard.querySelector('h5').textContent = config.title;

  const tiles = roleCard.querySelectorAll('.mini-tile');
  tiles.forEach((tile, idx) => {
    const stat = config.stats[idx];
    if (!stat) return;
    tile.querySelector('p').textContent = stat.label;
    tile.querySelector('h4').textContent = stat.value;
    tile.querySelector('small').textContent = stat.hint;
    tile.querySelector('small').className = `text-${stat.tone}`;
  });

  const badgeWrap = roleCard.querySelector('.d-flex.flex-wrap');
  badgeWrap.innerHTML = config.badges
    .map(b => `<span class="badge text-bg-primary">${b}</span>`)
    .join('');
}

roleButtons.forEach(btn => btn.addEventListener('click', () => renderRole(btn.dataset.role)));
renderRole('admin');

function applyTranslations(lang) {
  const strings = translations[lang] || translations.en;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const text = strings[key] || translations.en[key];
    if (!text) return;
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = text;
    } else {
      el.textContent = text;
    }
  });
}

function setupLanguage() {
  if (!languageSelect) return;
  const saved = localStorage.getItem('sd_lang') || 'en';
  languageSelect.value = saved;
  languageSelect.addEventListener('change', e => {
    const lang = e.target.value;
    localStorage.setItem('sd_lang', lang);
    applyTranslations(lang);
  });
  applyTranslations(saved);
}

function initChatbot() {
  const panel = document.createElement('div');
  panel.className = 'chat-panel';
  panel.innerHTML = `
    <div class="chat-header d-flex justify-content-between align-items-center">
      <span>Smart Dairy Helper</span>
      <button class="btn btn-sm btn-light" id="chatClose">&times;</button>
    </div>
    <div class="chat-body" id="chatBody">
      <div class="chat-message bot">नमस्ते! Village dairy questions? Ask me.</div>
      <div class="chat-message bot">Try: "How to log milk?", "Billing tips", "Add farmer".</div>
    </div>
    <div class="p-2">
      <span class="chat-suggestion">How to log milk?</span>
      <span class="chat-suggestion">Billing tips</span>
      <span class="chat-suggestion">Add farmer</span>
    </div>
    <div class="chat-footer d-flex gap-2">
      <input class="form-control form-control-sm" id="chatInput" placeholder="Type your question">
      <button class="btn btn-primary btn-sm" id="chatSend">Send</button>
    </div>
  `;
  document.body.appendChild(panel);

  const launcher = document.createElement('button');
  launcher.className = 'btn btn-primary chat-launcher';
  launcher.id = 'chatLauncher';
  launcher.innerHTML = '<i class="bi bi-chat-dots"></i> Help';
  document.body.appendChild(launcher);

  const chatBody = panel.querySelector('#chatBody');
  const chatInput = panel.querySelector('#chatInput');
  const responses = {
    milk: 'To log milk: open Milk page → Add entry → select farmer, shift, litres, fat%. Save.',
    billing: 'Billing tips: set date range, add deductions/bonus, then Run billing and download CSV/PDF.',
    farmer: 'Add farmer: go to Farmers → New farmer form → fill contact, village/route, bank and notes.',
    default: 'I can help with milk logging, billing, inventory, or animals. Try asking "stock low" or "role access".',
    inventory: 'Inventory: open Inventory page, record stock movement with type Inbound/Outbound and quantity.',
    role: 'Roles: Admin approves bills & sets thresholds, Staff logs milk/health, Farmers view statements.'
  };

  function addMessage(text, sender = 'user') {
    const msg = document.createElement('div');
    msg.className = `chat-message ${sender}`;
    msg.textContent = text;
    chatBody.appendChild(msg);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  function replyTo(text) {
    const lower = text.toLowerCase();
    let key = 'default';
    if (lower.includes('milk')) key = 'milk';
    if (lower.includes('bill')) key = 'billing';
    if (lower.includes('farmer')) key = 'farmer';
    if (lower.includes('stock') || lower.includes('inventory')) key = 'inventory';
    if (lower.includes('role')) key = 'role';
    addMessage(responses[key], 'bot');
  }

  launcher.addEventListener('click', () => {
    panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
  });
  panel.querySelector('#chatClose').addEventListener('click', () => {
    panel.style.display = 'none';
  });
  panel.querySelectorAll('.chat-suggestion').forEach(btn => {
    btn.addEventListener('click', () => {
      const text = btn.textContent;
      addMessage(text, 'user');
      replyTo(text);
    });
  });
  panel.querySelector('#chatSend').addEventListener('click', () => {
    const text = chatInput.value.trim();
    if (!text) return;
    addMessage(text, 'user');
    chatInput.value = '';
    replyTo(text);
  });
  chatInput.addEventListener('keypress', e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      panel.querySelector('#chatSend').click();
    }
  });
}

// Data stubs for tables on module pages
const farmerData = [
  { name: 'Ravi Kumar', village: 'Mandya', phone: '98765 43210', bank: 'SBI • 6241', total: '840 L', status: 'Active' },
  { name: 'Lakshmi Devi', village: 'Doddaballapur', phone: '99887 22110', bank: 'Canara • 9310', total: '620 L', status: 'Pending' },
  { name: 'Suraj Patil', village: 'Hassan', phone: '91234 55678', bank: 'KVB • 1189', total: '1020 L', status: 'Active' },
  { name: 'Meena Gowda', village: 'Tumkur', phone: '90909 11122', bank: 'BOB • 4321', total: '710 L', status: 'Active' }
];

const animalData = [
  { id: 'A-104', type: 'Cow', breed: 'HF Cross', yield: '12.4 L', health: 'Healthy' },
  { id: 'A-221', type: 'Buffalo', breed: 'Murrah', yield: '9.8 L', health: 'Monitor' },
  { id: 'A-187', type: 'Cow', breed: 'Jersey', yield: '11.2 L', health: 'Healthy' },
  { id: 'A-143', type: 'Cow', breed: 'Gir', yield: '8.9 L', health: 'Attention' }
];

const milkData = [
  { shift: 'Morning', farmer: 'Ravi Kumar', litres: 320, fat: 4.1, snf: 8.5 },
  { shift: 'Evening', farmer: 'Lakshmi Devi', litres: 280, fat: 3.9, snf: 8.3 },
  { shift: 'Morning', farmer: 'Suraj Patil', litres: 360, fat: 4.2, snf: 8.6 },
  { shift: 'Evening', farmer: 'Meena Gowda', litres: 280, fat: 3.8, snf: 8.2 }
];

const billingData = [
  { farmer: 'Ravi Kumar', period: '1-15 Dec', amount: '₹28,600', status: 'Queued' },
  { farmer: 'Lakshmi Devi', period: '1-15 Dec', amount: '₹21,420', status: 'Paid' },
  { farmer: 'Suraj Patil', period: '1-15 Dec', amount: '₹34,110', status: 'Queued' },
  { farmer: 'Meena Gowda', period: '1-15 Dec', amount: '₹24,830', status: 'Pending' }
];

const inventoryData = [
  { item: 'Ghee', stock: 42, unit: 'kg', status: 'Low' },
  { item: 'Paneer', stock: 78, unit: 'kg', status: 'Healthy' },
  { item: 'Butter', stock: 25, unit: 'kg', status: 'Critical' },
  { item: 'Curd', stock: 320, unit: 'cups', status: 'Healthy' }
];

function mountTable(id, rows, template) {
  const el = document.getElementById(id);
  if (!el) return;
  el.innerHTML = rows.map(template).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  setupLanguage();
  initChatbot();
  mountTable('farmerTable', farmerData, row => `
    <tr>
      <td><div class="d-flex align-items-center gap-2"><span class="status-dot bg-success"></span>${row.name}</div></td>
      <td>${row.village}</td>
      <td>${row.phone}</td>
      <td>${row.bank}</td>
      <td>${row.total}</td>
      <td><span class="badge text-bg-${row.status === 'Active' ? 'success' : 'warning'}">${row.status}</span></td>
    </tr>
  `);

  mountTable('animalTable', animalData, row => `
    <tr>
      <td>${row.id}</td>
      <td>${row.type}</td>
      <td>${row.breed}</td>
      <td>${row.yield}</td>
      <td><span class="badge text-bg-${row.health === 'Healthy' ? 'success' : row.health === 'Monitor' ? 'warning' : 'danger'}">${row.health}</span></td>
    </tr>
  `);

  mountTable('milkTable', milkData, row => `
    <tr>
      <td>${row.shift}</td>
      <td>${row.farmer}</td>
      <td>${row.litres} L</td>
      <td>${row.fat}%</td>
      <td>${row.snf}</td>
    </tr>
  `);

  mountTable('billingTable', billingData, row => `
    <tr>
      <td>${row.farmer}</td>
      <td>${row.period}</td>
      <td>${row.amount}</td>
      <td><span class="badge text-bg-${row.status === 'Paid' ? 'success' : row.status === 'Queued' ? 'primary' : 'warning'}">${row.status}</span></td>
    </tr>
  `);

  mountTable('inventoryTable', inventoryData, row => `
    <tr>
      <td>${row.item}</td>
      <td>${row.stock} ${row.unit}</td>
      <td><span class="badge inventory-badge text-bg-${row.status === 'Healthy' ? 'success' : row.status === 'Low' ? 'warning' : 'danger'}">${row.status}</span></td>
    </tr>
  `);
});

